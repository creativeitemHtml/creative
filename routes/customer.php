<?php

use App\Http\Controllers\CustomerController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Home Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::controller(CustomerController::class)->middleware('auth', 'customer', 'cors')->group(function () {

    Route::get('/customer/projects/{param?}', 'projects')->name('customer.projects');

    Route::get('/customer/creative-elements/subscription', 'subscription_details')->name('customer.subscription_details');

    Route::get('/customer/purchase-history', 'purchase_history')->name('customer.purchase_history');
    Route::get('/customer/purchase_invoice/{purchase_id}', 'purchase_invoice')->name('customer.purchase_invoice');

    Route::get('/customer/creative-elements/wishlists', 'wishlists')->name('customer.wishlists');

    Route::any('/customer/creative-elements/downloads', 'downloads')->name('customer.downloads');

    Route::get('/customer/profile', 'profile')->name('customer.profile');
    Route::any('/customer/profile/update', 'profile_update')->name('customer.profile_update');
    Route::post('/customer/password-change', 'password_change')->name('customer.password_change');

    Route::get('customer/subscription-purchase/{package_id}', 'subscription_purchase')->name('customer.subscription_purchase');

    // Subcription Payment by Customer
    Route::get('/customer/subscription/payment/success/{user_data}/{response}', 'subscription_fee_success_payment')->name('subscription_fee_success_payment');
    Route::get('/customer/subscription/payment/fail/{user_data}/{response}', 'subscription_fee_fail_payment')->name('subscription_fee_fail_payment');

    //Single Payment by customer
    Route::get('/customer/creative-elements/single-purchase/{product_id}', 'single_purchase')->name('customer.single_purchase');
    Route::get('/customer/single-purchase/success/{purchase_data}/{response}', 'single_purchase_success_payment')->name('single_purchase_success_payment');
    Route::get('/customer/single-purchase/fail/{purchase_data}/{response}', 'single_purchase_fail_payment')->name('single_purchase_fail_payment');

    //Download
    Route::get('/customer/creative-elements/download-link/{product_id}', 'download_link_generate')->name('customer.download_link_generate');
    Route::get('/elements/download-file/{unique_identifier}', 'download_product')->name('customer.download_product');

});