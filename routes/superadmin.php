<?php

use App\Http\Controllers\SuperadminController;
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
Route::controller(SuperadminController::class)->middleware('auth', 'superadmin')->group(function () {

    Route::get('superadmin/dashboard', 'dashboard')->name('superadmin.dashboard');
    Route::get('superadmin/products', 'products')->name('superadmin.products');
    Route::get('superadmin/product-type', 'product_type')->name('superadmin.product_type');
    Route::get('superadmin/tags', 'tags')->name('superadmin.tags');
    Route::post('superadmin/add-tag', 'tag_create')->name('superadmin.tag_create');
    Route::post('superadmin/tag-update/{id}', 'tag_update')->name('superadmin.tag_update');
    Route::get('superadmin/tag-delete/{id}', 'tag_delete')->name('superadmin.tag_delete');
    Route::any('superadmin/product/create', 'create_product')->name('superadmin.create_product');
    Route::any('superadmin/product/edit/{id}', 'edit_product')->name('superadmin.edit_product');
    Route::any('superadmin/products/sort', 'sort_products')->name('superadmin.sort_products');
    Route::get('superadmin/product/delete/{id}', 'product_delete')->name('superadmin.product.delete');

    Route::get('superadmin/documentation', 'documentation')->name('superadmin.documentation');
    Route::get('superadmin/topics/{slug}', 'edit_documentation')->name('superadmin.edit_documentation');
    Route::any('superadmin/topic/create/{slug}', 'create_topic')->name('superadmin.create_topic');
    Route::any('superadmin/topic/edit/{id}', 'edit_topic')->name('superadmin.edit_topic');
    Route::get('superadmin/topic/delete/{id}', 'topic_delete')->name('superadmin.topic.delete');

    Route::any('superadmin/article/create/{slug}', 'create_article')->name('superadmin.create_article');
    Route::any('superadmin/article/edit/{id}', 'edit_article')->name('superadmin.edit_article');
    Route::get('superadmin/article/delete/{id}', 'article_delete')->name('superadmin.article.delete');

    Route::get('superadmin/documentation_details/{id}', 'documentation_details')->name('superadmin.documentation_details');
    Route::any('superadmin/topic/sort/{slug}', 'sort_topics')->name('superadmin.sort_topics');
    Route::any('superadmin/article/sort/{topic_id}', 'sort_articles')->name('superadmin.sort_articles');
    Route::post('superadmin/create_documentation/{article_id}', 'create_documentation')->name('superadmin.create_documentation');

    Route::get('superadmin/blogs', 'blogs')->name('superadmin.blogs');
    Route::any('superadmin/blogs/create', 'blog_create')->name('superadmin.blog_create');
    Route::any('superadmin/blog/edit/{id}', 'edit_blog')->name('superadmin.edit_blog');
    Route::get('superadmin/blog/delete/{id}', 'blog_delete')->name('superadmin.blog.delete');

    Route::get('superadmin/services', 'services')->name('superadmin.services');
    Route::any('superadmin/service-create', 'service_create')->name('superadmin.service_create');
    Route::any('superadmin/service-update/{id}', 'service_update')->name('superadmin.service_update');
    Route::get('superadmin/service-remove/{id}', 'service_remove')->name('superadmin.service_remove');

    Route::get('superadmin/ad_network', 'ad_network')->name('superadmin.ad_network');
    Route::any('superadmin/ad_create', 'ad_create')->name('superadmin.ad_create');
    Route::any('superadmin/ad/edit/{id}', 'ad_edit')->name('superadmin.ad_edit');
    Route::get('superadmin/ad/delete/{id}', 'ad_delete')->name('superadmin.ad.delete');

    Route::get('superadmin/select_article_to_export/{slug}', 'select_article_to_export')->name('superadmin.select_article_to_export');
    Route::any('superadmin/export_documentation/{product_id}', 'export_documentation')->name('superadmin.export_documentation');

    Route::get('superadmin/projects/{param?}', 'projects')->name('superadmin.projects');
    Route::get('superadmin/project_details/{id}', 'project_details')->name('superadmin.project_details');
    Route::any('superadmin/project_create', 'project_create')->name('superadmin.project_create');
    Route::any('superadmin/project_edit/{id}', 'project_edit')->name('superadmin.project_edit');
    Route::any('superadmin/project_remove/{id}', 'project_remove')->name('superadmin.project_remove');

    Route::any('superadmin/online_meeting/add/{id}', 'create_project_meeting')->name('superadmin.create_project_meeting');
    Route::any('superadmin/online_meeting/remove/{project_id}/{meeting_id}', 'remove_meeting')->name('superadmin.remove_meeting');
    Route::any('superadmin/payment_milestone/add/{id}', 'create_payment_milestone')->name('superadmin.create_payment_milestone');
    Route::get('superadmin/milestone_invoice/{milestone_id}', 'milestone_invoice')->name('superadmin.milestone_invoice');
    Route::any('superadmin/payment_milestone/remove/{project_id}/{milestone_id}', 'remove_milestone')->name('superadmin.remove_milestone');
    Route::get('superadmin/download/attachment/{project_id}/{key}', 'download_attachment')->name('download.project_attachment');
    Route::get('superadmin/remove/attachment/{project_id}/{key}', 'remove_attachment')->name('remove.project_attachment');
    Route::any('superadmin/upload/attachment/{project_id}', 'upload_attachment')->name('upload.project_attachment');

    Route::any('superadmin/user_create', 'user_create')->name('superadmin.user_create');

    Route::get('superadmin/price-manager', 'package_list')->name('package_list');
    Route::any('superadmin/package-create', 'package_create')->name('package_create');
    Route::any('superadmin/package-update/{id}', 'package_update')->name('package_update');
    Route::get('superadmin/package-remove/{id}', 'package_remove')->name('package_remove');

    //Setting routes
    Route::any('superadmin/system-settings', 'system_settings')->name('system_settings');

    Route::any('superadmin/sitemap', 'sitemap_settings')->name('sitemap_settings');

    Route::get('superadmin/seo_settings', 'seo_settings')->name('superadmin.seo_settings');
    Route::post('superadmin/seo_settings_update/{id}', 'seo_settings_update')->name('superadmin.seo_settings.update');

    //Elements
    Route::any('elements/manage/products', 'element_products')->name('element_products');
    Route::any('superadmin/elements/categories', 'element_categories')->name('element_categories');
    Route::get('superadmin/element/product-create', 'product_create')->name('superadmin.product_create');
    Route::post('superadmin/element/upload-product', 'upload_product')->name('superadmin.upload_product');
    Route::get('superadmin/element/product/delete/{id}', 'element_product_delete')->name('superadmin.element_product_delete');
    Route::get('superadmin/element/product-edit/{product_id}', 'product_edit')->name('superadmin.product_edit');
    Route::post('superadmin/element/update-product/{product_id}', 'update_product')->name('superadmin.update_product');
    Route::get('superadmin/element/subscription-list', 'subscription_list')->name('superadmin.subscription_list');

    Route::get('element_category/{parent_id}', 'category_wise_sub_category')->name('category_wise_sub_category');
});