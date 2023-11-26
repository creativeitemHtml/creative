<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\{User, Subscription};
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use DB;
use Illuminate\Support\Facades\Mail;
use App\Mail\VerifyEmail;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role_id' => '6',
        ]);

        Subscription::create([
            'user_id' => $user->id,
            'package_id' => 5,
            'paid_amount' => 0,
            'payment_method' => 'None',
            'transaction_keys' => '',
            'date_added' => strtotime(date('d-M-Y H:i:s')),
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

            // Redirect the user to the 'customer.projects' route
            return redirect()->route('customer.subscription_details');

            event(new Registered($user));
            
        } else {
            return redirect()->route('rigistration')->with('message', 'Registration failed');
        }
    }
}
