<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;
use Illuminate\Support\Facades\Route;
use App\Models\ElementCategory;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'auth_token' => function() {
                    if(Auth::check()) {
                        auth()->user()->tokens->each(function ($token, $key) {
                            $token->delete();
                        });
                        $token = auth()->user()->createToken('auth-token')->plainTextToken;

                        return $token ;
                    } else {
                        return null;
                    }
                },
            ],
            'base' => [
                'url' => url('/'),
            ],
            'urlPrev' => function() {
                if (url()->previous() !== route('login') && url()->previous() !== '' && url()->previous() !== url()->current()) {
		    		return url()->previous();
		    	}else {
		    		return 'empty'; // used in javascript to disable back button behavior
		    	}
		    },
            'currentRoute' => [
                'name' => Route::currentRouteName(),
                'url' => url()->current(),
            ],
            'element' => [
                'categories' => ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get(),
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'flash' => [
                'success' => $request->session()->get('success'),
                'error' => $request->session()->get('error'),
                'info' => $request->session()->get('info'),
                'warning' => $request->session()->get('warning'),
                'message' => $request->session()->get('message'),
            ],
        ];
    }
}
