<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\{User, Setting, ElementCategory};
use Illuminate\Support\Facades\Cookie;
use Illuminate\Auth\Events\Registered;
use DB;
use Illuminate\Support\Facades\Mail;
use App\Mail\VerifyEmail;
use Laravel\Sanctum\PersonalAccessToken;

class LmsController extends Controller
{
    public function index()
    {

        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();

        return Inertia::render('Frontend/Lms/Home', [
            'element_categories' => $element_categories,
        ]);
    }

    public function features()
    {
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();

        return Inertia::render('Frontend/Lms/Features', [
            'element_categories' => $element_categories,
        ]);
    }

    public function pricing()
    {
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();

        return Inertia::render('Frontend/Lms/Pricing', [
            'element_categories' => $element_categories,
        ]);
    }

    public function solution_course_selling()
    {
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();

        return Inertia::render('Frontend/Lms/SolutionCourseSelling', [
            'element_categories' => $element_categories,
        ]);
    }

    public function solution_training()
    {
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();

        return Inertia::render('Frontend/Lms/SolutionTraining', [
            'element_categories' => $element_categories,
        ]);
    }

    public function demo() 
    {
        $url = url()->previous();
        $urlParts = explode('/', $url);
        $lastPartOfUrl = end($urlParts);
        
        return Inertia::render('Frontend/Lms/Demo', [
            'lastPartOfUrl' => $lastPartOfUrl,
        ]); 
    }

    public function register_company_lms(Request $request) 
    {
        if(!empty($request->all()))
        {
            $username = $request->name;

            $user = User::create([
                'name' => $username,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'role_id' => '6',
            ]);

            if ($user) {
                $verify2 =  DB::table('password_resets')->where([
                    ['email', $user->email]
                ]);
        
                if ($verify2->exists()) {
                    $verify2->delete();
                }
                $pin = rand(100000, 999999);
                DB::table('password_resets')
                    ->insert(
                        [
                            'email' => $user->email, 
                            'token' => $pin
                        ]
                    );

                Mail::to($user->email)->send(new VerifyEmail($pin, $user));
        
                $token = $user->createToken('myapptoken')->plainTextToken;

                session()->flash('message', 'Registration done! Please verify your email address.');

                event(new Registered($user));

                // return view('custom_auth.verify_email', ['email' => $user->email]);
                
                // Automatically log in the user
                Auth::login($user);

                return redirect()->route('lms.demo');
            }

            return redirect()->route('lms.demo');
        }
    }
}
