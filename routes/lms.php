<?php

use App\Http\Controllers\LmsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Lms Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::name('lms.')->prefix('creative-lms')->controller(LmsController::class)->group(function () {

    Route::get('/', 'index')->name('home');
    Route::get('/features', 'features')->name('features');
    Route::get('/pricing', 'pricing')->name('pricing');
    Route::get('/solution-for-course-selling', 'solution_course_selling')->name('solution_course_selling');
    Route::get('/solution-training', 'solution_training')->name('solution_training');
    Route::get('/demo', 'demo')->name('demo');
    Route::post('/register-company-lms', 'register_company_lms')->name('register_company_lms');
    
});