<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\{User, Setting, ElementCategory};
use Illuminate\Support\Facades\Cookie;

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
        return Inertia::render('Frontend/Lms/Demo'); 
    }

    public function register_company_lms(Request $request) 
    {
        if(!empty($request->all()))
        {
            // if (Auth::user())
            // {
            //     $user = User::where('id', $auth()->user()->id)->update([
            //         'company_lms' => $request->company_lms_lower,
            //     ]);

            //     return redirect()->route('lms.demo');

            // } else {

                $username = strtok($request->email, '@');

                $user = User::create([
                    'name' => $username,
                    'email' => $request->email,
                    'password' => Hash::make($request->password),
                    'role_id' => '6',
                    'company_lms' => $request->company_lms_lower,
                ]);

                relogin_user($user->id);

                return redirect()->route('lms.demo');
            // }
        }
    }
}
