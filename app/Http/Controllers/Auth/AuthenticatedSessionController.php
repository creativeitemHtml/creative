<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $input = $request->all();
        $recaptcha_secret = "6LdAAcInAAAAALjRCRULi4EMF-0wiRFGRYqbU3x5";

        $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$recaptcha_secret."&response=".$input['captcha_token']);

        $response = json_decode($response, true);

        if($response['success'] === true){

            $request->authenticate();

            $request->session()->regenerate();

            if(auth()->user()->role_id == 1) {
                return redirect()->intended(RouteServiceProvider::HOME);
            } else {

                return redirect()->intended(RouteServiceProvider::HOME_TWO);
            }
        } else {
            return redirect('/login')->with('error', 'You have to provide captcha');
        }
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
