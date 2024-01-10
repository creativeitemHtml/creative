<?php

use App\Http\Controllers\HomeController;
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
Route::controller(HomeController::class)->group(function () {

    Route::get('/', 'index')->name('home');

    Route::get('/web-applications', 'web_applications')->name('web_applications');

    Route::get('/blog/{slug}', 'blog_details')->name('blog_details');
    Route::any('/blog/{type?}/{keyword?}', 'blog')->name('blog');
    
    Route::get('/docs', 'docs')->name('docs');
    Route::get('/docs/{product_slug}/{article_slug?}', 'documentation_details')->name('documentation_details');

    Route::get('/services', 'services')->name('services');
    Route::any('/services/purchase-custom-service', 'purchase_custom_service')->name('purchase_custom_service');
    Route::post('/project-submit', 'project_submit')->name('project_submit');
    Route::get('/services/service-checkout/{service_id}', 'service_buy_now')->name('service_buy_now');
    Route::any('/services/purchase-service/{service_id}', 'purchase_service_package')->name('purchase_service_package');

    Route::get('/hire-us', 'hire_us')->name('hire_us');

    Route::get('/terms-and-condition', 'terms_and_condition')->name('terms_and_condition');
    Route::get('/privacy-policy', 'privacy_policy')->name('privacy_policy');
    Route::get('/refund-policy', 'refund_policy')->name('refund_policy');
    Route::get('/support-policy', 'support_policy')->name('support_policy');
});