<?php

use App\Http\Controllers\ElementsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Element Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::controller(ElementsController::class)->middleware('cors')->group(function () {
    Route::get('/elements', 'index')->name('elements');
    Route::get('/elements/pricing', 'elements_package_pricing')->name('elements_package_pricing');
    Route::get('/elements/{slug?}', 'search_element_products')->name('search_element_products');
    Route::get('/elements/{slug}/tag/{tag?}', 'search_element_products')->name('search_element_products_by_tag');
    Route::get('/elements/product/{title}', 'element_product_details')->name('element_product_details');

    Route::get('/elements/subscription-checkout/{id}', 'element_checkout')->name('element_checkout');
    Route::any('/elements/purchase-subscription/{package_id}', 'purchase_subscription')->name('purchase_subscription');
    Route::get('/elements/product-checkout/{product_id}', 'element_buy_now')->name('element_buy_now');
    Route::any('/elements/purchase-product/{product_id}', 'purchase_product')->name('purchase_product');

    Route::get('/customer/element-checkout-success', 'element_checkout_success')->middleware('auth')->name('customer.element_checkout_success');

    Route::any('/handleWishList/{course_id?}', 'handleWishList')->name('handleWishList');
    Route::any('/handleLike/{product_id?}', 'handleLike')->name('handleLike');
});