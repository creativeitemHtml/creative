<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\{User, RolesAndPermission, ElementFileType, ElementCategory, ElementProduct, Package, ElementProductComment, Subscription, Tag, Blog, ElementProductPayment};
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Mail\VerifyEmailWithPassword;
use DB;

class ElementsController extends Controller
{
    public function index()
    {

        $packages = Package::where('visibility', 1)->orderBy('order', 'asc')->get();

        foreach($packages as $key => $package)
        {
            $res[$key]['id'] = $package->id;
            $res[$key]['name'] = $package->name;
            $res[$key]['price'] = $package->price;
            $res[$key]['discounted_price'] = $package->discounted_price != null ? $package->discounted_price : 0;
            $res[$key]['interval'] = $package->interval;   
            $res[$key]['interval_period'] = $package->interval_period;

            $packages_features = json_decode($package->services); 
            $res[$key]['packages_features'] = $packages_features;


            if($package->interval == 'monthly'){
                $res[$key]['int_val'] = 'month';
      
                if($package->interval_period == 6){
                    $interval_period_text = 'Billed 1/2 yearly';
                } else if($package->interval_period == 12){
                    $interval_period_text = 'Billed yearly';
                } else {
                    $interval_period_text = 'Access for'.' '.$package->interval_period.' '.$interval;
                }

                $res[$key]['interval_period_text'] = $interval_period_text;
            } else {
                $res[$key]['int_val'] = 'one time';
                $res[$key]['interval_period_text'] = 'Lifetime access';
            }
            
        }

        $packages = $res;
        // print_r(json_encode($res, JSON_PRETTY_PRINT));
        // die();


        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();
        $latest_blogs = Blog::where('blog_category_id', 1)->orderBy('id', 'desc')->take(3)->get();

        if(count($latest_blogs) > 0){
            foreach($latest_blogs as $key => $latest_blog)
            {
                $blog[$key]['id'] = $latest_blog->id;
                $blog[$key]['title'] = $latest_blog->title;
                $blog[$key]['slug'] = $latest_blog->slug;
                $blog[$key]['thumbnail'] = $latest_blog->thumbnail;
                $blog[$key]['blog_category_id'] = $latest_blog->blog_category_id;
                $blog[$key]['blog_category_name'] = $latest_blog->blog_to_blogCategory->name;
                $blog[$key]['created_at'] = $latest_blog->created_at;
            }
        }

        $latest_blogs = $blog;

        $element_category = ElementCategory::where('slug', 'ui-kits')->first();

        $elements = ElementProduct::where('element_category_id', $element_category->id)->orderBy('id', 'desc')->take(16)->get();

        $elements['server_url'] = 'https://elementsfiles.creativeitem.com/files';

        $seo = seo();

        return Inertia::render('Frontend/Elements/Home', [
            'packages' => $packages,
            'element_categories' => $element_categories,
            'latest_blogs' => $latest_blogs,
            'elements' => $elements,
            'seo' => $seo,
        ])->withViewData(['seo' => $seo]);
    }

    public function elements_package_pricing() 
    {
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();
        $packages = Package::where('visibility', 1)->orderBy('order', 'asc')->get();
        $seo = seo();

        foreach($packages as $key => $package)
        {
            $res[$key]['id'] = $package->id;
            $res[$key]['name'] = $package->name;
            $res[$key]['price'] = $package->price;
            $res[$key]['discounted_price'] = $package->discounted_price != null ? $package->discounted_price : 0;
            $res[$key]['interval'] = $package->interval;
            $res[$key]['interval_period'] = $package->interval_period;

            $packages_features = json_decode($package->feature_list); 
            $res[$key]['packages_features'] = $packages_features;


            if($package->interval == 'monthly'){
                $res[$key]['int_val'] = 'month';
      
                if($package->interval_period == 6){
                    $interval_period_text = 'Billed 1/2 yearly';
                } else if($package->interval_period == 12){
                    $interval_period_text = 'Billed yearly';
                } else {
                    $interval_period_text = 'Access for'.' '.$package->interval_period.' '.$interval;
                }

                $res[$key]['interval_period_text'] = $interval_period_text;
            } else {
                $res[$key]['int_val'] = 'one time';
                $res[$key]['interval_period_text'] = 'Lifetime access';
            }
            
        }

        $packages = $res;

        return Inertia::render('Frontend/Elements/Pricing', [
            'packages' => $packages,
            'element_categories' => $element_categories,
            'seo' => $seo,
        ])->withViewData(['seo' => $seo]);
    }

    public function elements_special_pricing($param1 = "") 
    {
        $strArray = explode('-',$param1);
        $lastElement = end($strArray);

        if(is_numeric($lastElement)) {
            $package = Package::where('id', $lastElement)->where('visibility', 0)->first();
        }

        $seo = seo();

        $res['id'] = $package->id;
        $res['name'] = $package->name;
        $res['price'] = $package->price;
        $res['discounted_price'] = $package->discounted_price != null ? $package->discounted_price : 0;
        $res['interval'] = $package->interval;
        $res['interval_period'] = $package->interval_period;

        $package_features = json_decode($package->services); 
        $res['package_features'] = $package_features;


        if($package->interval == 'monthly'){
            $res['int_val'] = 'month';
    
            if($package->interval_period == 6){
                $interval_period_text = 'Billed 1/2 yearly';
            } else if($package->interval_period == 12){
                $interval_period_text = 'Billed yearly';
            } else {
                $interval_period_text = 'Access for'.' '.$package->interval_period.' '.$interval;
            }

            $res['interval_period_text'] = $interval_period_text;
        } else {
            $res['int_val'] = 'one time';
            $res['interval_period_text'] = 'Lifetime access';
        }

        $package = $res;

        return Inertia::render('Frontend/Elements/PricingSpecial', [
            'package' => $package,
            'seo' => $seo,
        ])->withViewData(['seo' => $seo]);
    }


    public function search_element_products(Request $request, $slug = "", $tag = "")
    {
        $searched_word = "";
        $selected_sub_category = "";
        $selected_category = "";
        $selected_license = "";
        $selected_file_type = "";
        $selected_tag = "";

        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();

        if(isset($element_categories) && count($element_categories) > 0) {

            foreach($element_categories as $key => $category)
            {
                $res[$key] = $category;
                $res[$key]['total_product'] = $category->elementCategory_to_elementProduct->count();
            }

            $element_categories = $res;
        } else {
            $element_categories = [];
        }

        $tags = Tag::orderBy('id', 'asc')->get();

        if(isset($tags) && count($tags) > 0) {

            foreach($tags as $key => $tag_details)
            {
                $res[$key] = $tag_details;
                $res[$key]['total_product'] = $tag_details->tag_to_elementProduct()->count();
            }

            $tags = $res;
        } else {
            $tags = [];
        }

        $filter = $request->all();

        $query = ElementProduct::query();

        if(!empty($slug) && $slug != 'free-items'){
            if($slug == 'figma-components') {
                $slug = 'components';
            }
            $selected_category_details = ElementCategory::where('slug', $slug)->first();

            $query->where('element_category_id', $selected_category_details->id);

            $selected_category = $slug;
        } 
        else if(!empty($slug) && $slug == 'free-items')
        {
            $selected_category_details['name'] = 'Free Items';
            $selected_category =  'free-items';
            $query->where('price_type', 'free');
            
            $selected_license = 'free';
        }

        if(isset($filter['search']))
        {
            $query->where(function($query) use ($filter){
                $query->where('title', 'LIKE', "%{$filter['search']}%")
                ->orWhere('summary', 'LIKE', "%{$filter['search']}%")
                ->orWhere('description', 'LIKE', "%{$filter['search']}%");
            });
            

            $searched_word = $filter['search'];
        }

        if(!empty($tag)) 
        {
            $selected_tag_details = Tag::where('slug', $tag)->first();
            $query->whereRaw("FIND_IN_SET(?, tag_ids)", [$selected_tag_details->id]);

            $selected_tag = $tag;
        }

        if(isset($filter['license']))
        {

            $query->where('price_type', $filter['license']);
            
            $selected_license = $filter['license'];
        }

        $element_products = $query->paginate(12);

        if(count($element_products) > 0) {

            foreach($element_products as $key => $element)
            {
                $res[$key]['id'] = $element->id;
                $res[$key]['product_id'] = $element->product_id;
                $res[$key]['element_category_id'] = $element->element_category_id;
                $res[$key]['title'] = $element->title;
                $res[$key]['price_type'] = $element->price_type;
                $res[$key]['price'] = $element->price;
                $res[$key]['like'] = $element->like;
                $res[$key]['thumbnail'] = element_server_url($element->product_id, $element->product_to_elementCategory->slug).$element->thumbnail;
            }

            $transformedData = $res;
        } else {
            $transformedData = [];
        }

        if(!empty($slug) && $slug != 'free-items'){
            if($slug == 'figma-components') {
                $slug = 'components';
            }
            $seo = seo($slug, 'slug');
        } else {
            $seo = seo();
        }

        return Inertia::render('Frontend/Elements/Filter', [
            'element_categories' => $element_categories,
            'selected_category_details' => $selected_category_details,
            'selected_category' => $selected_category,
            'selected_license' => $selected_license,
            'element_products' => $transformedData,
            'pagination' => $element_products,
            'selected_tag' => $selected_tag,
            'tags' => $tags,
            'seo' => $seo,
        ])->withViewData(['seo' => $seo]);
    }

    public function element_product_details($title="")
    {

        $strArray = explode('-',$title);
        $lastElement = end($strArray);

        if(is_numeric($lastElement)) {
            $selected_product = ElementProduct::find($lastElement);
        }

        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();

        $selected_category = ElementCategory::find($selected_product->element_category_id);
        $more_products = ElementProduct::where('element_category_id', $selected_product->element_category_id)->inRandomOrder()->limit(4)->get();
        foreach($more_products as $key => $element)
        {
            $res[$key] = $element;
            $res[$key]['server_url'] = element_server_url($element->product_id, $element->product_to_elementCategory->slug);
            
        }

        $more_products = $res;

        $product_comments = ElementProductComment::where('element_product_id', $selected_product->id)->orderBy('id', 'desc')->get();

        $preview_thumbnails = get_screenshots($selected_product->product_to_elementCategory->slug, $selected_product->product_id);

        $selected_product['server_url'] = element_server_url($selected_product->product_id, $selected_product->product_to_elementCategory->slug);

        $today = strtotime('now');

        if(Auth::check() && auth()->user()->role_id != 1) {
            $current_subscription = Subscription::where('user_id', auth()->user()->id)->latest()->first();
            $current_subscription['subscription_to_package'] = $current_subscription->subscription_to_package;
            $is_purchased = ElementProductPayment::where('user_id', auth()->user()->id)->where('element_product_id', $selected_product->id)->latest()->first();
        } else {
            $current_subscription = null;
            $current_subscription['subscription_to_package'] = null;
            $is_purchased = null;
        }

        $seo = seo($selected_product, 'element');

        $selected_product->thumbnail = element_server_url($selected_product->product_id, $selected_product->product_to_elementCategory->slug).$selected_product->thumbnail;


        return Inertia::render('Frontend/Elements/ElementProductDetails', [
            'selected_product' => $selected_product,
            'selected_category' => $selected_category,
            'selected_category_slug' => $selected_category->slug,
            'element_categories' => $element_categories,
            'more_products' => $more_products,
            'product_comments' => $product_comments,
            'preview_thumbnails' => $preview_thumbnails,
            'today' => $today,
            'current_subscription' => $current_subscription,
            'is_purchased' => $is_purchased,
            'seo' => $seo,
        ])->withViewData(['seo' => $seo]);
    }

    public function element_checkout($id="")
    {
        $today = strtotime('now');

        if(Auth::check()) {
            $current_subscription = Subscription::where('user_id', auth()->user()->id)->latest()->first();

            if(isset($current_subscription) && $current_subscription->expire_date > $today) {
                return redirect()->route('customer.subscription_details');
            }
        }

        $selected_package = Package::find($id);
        $packages = Package::where('visibility', 1)->orderBy('order', 'asc')->get();

        foreach($packages as $key => $package)
        {
            $res[$key]['id'] = $package->id;
            $res[$key]['name'] = $package->name;
            $res[$key]['price'] = $package->price;
            $res[$key]['discounted_price'] = $package->discounted_price != null ? $package->discounted_price : 0;
            $res[$key]['interval'] = $package->interval;
            $res[$key]['interval_period'] = $package->interval_period;

            $packages_features = json_decode($package->services); 
            $res[$key]['packages_features'] = $packages_features;


            if($package->interval == 'monthly'){
                $res[$key]['int_val'] = 'm';
      
                if($package->interval_period == 6){
                    $interval_period_text = 'Billed 1/2 yearly';
                } else if($package->interval_period == 12){
                    $interval_period_text = 'Billed yearly';
                } else {
                    $interval_period_text = 'Access for'.' '.$package->interval_period.' '.$interval;
                }

                $res[$key]['interval_period_text'] = $interval_period_text;
            } else {
                $res[$key]['int_val'] = 'one time';
                $res[$key]['interval_period_text'] = 'Lifetime access';
            }
            
        }

        $packages = $res;

        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();

        return Inertia::render('Frontend/Elements/ElementCheckout', [
            'element_categories' => $element_categories,
            'selected_package' => $selected_package,
            'packages' => $packages,
        ]);
    }

    public function purchase_subscription(Request $request, $package_id="")
    {
        if(auth()->user()) {
            return redirect()->route('customer.subscription_purchase', ['package_id' => $package_id]);
        } else {
            $this->validate($request, [
                'email' => 'required|email',
            ]);
            
            if(!empty($request->email)) {
                $name = strstr($request->email, '@', true);

                $check_email = User::where('email', $request->email)->first();

                if(!empty($check_email)){
                    // $user = $check_email;
                    return redirect()->back()->with('info', 'This email already exists. Please login or provide new email address');
                } else {
                    $password = random(8);

                    $user = User::create([
                        'name' => $name,
                        'email' => $request->email,
                        'role_id' => '6',
                        'password' => Hash::make($password)
                    ]);

                    Subscription::create([
                        'user_id' => $user->id,
                        'package_id' => 5,
                        'paid_amount' => 0,
                        'payment_method' => 'None',
                        'transaction_keys' => '',
                        'date_added' => strtotime(date('d-M-Y H:i:s')),
                    ]);

                    $pin = rand(100000, 999999);

                    $check_entry = DB::table('password_resets')->where('email', $request->email)->first();

                    if(empty($check_entry))
                    {
                        DB::table('password_resets')->insert([
                            'email' => $request->email, 
                            'token' => $pin
                        ]);
                    } 
                    else {
                        DB::table('password_resets')->where('email', $request->email)->update([
                            'token' => $pin
                        ]);
                    }

                    Mail::to($request->email)->send(new VerifyEmailWithPassword($pin, $user, $password));

                    $token = $user->createToken('myapptoken')->plainTextToken;

                }

                relogin_user($user->id);

                return redirect()->route('customer.subscription_purchase', ['package_id' => $package_id]);

            } else {
                return redirect()->back()->with('error', 'Fill all the required field');
            }
        }
    }

    public function element_checkout_success()
    {
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();

        return Inertia::render('Frontend/Elements/ElementCheckoutSuccess', [
            'element_categories' => $element_categories,
        ]);
    }

    public function element_buy_now($product_id="")
    {
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();

        $selected_product = ElementProduct::find($product_id);
        $selected_product->thumbnail = element_server_url($selected_product->product_id, $selected_product->product_to_elementCategory->slug).$selected_product->thumbnail;

        return Inertia::render('Frontend/Elements/ElementProductCheckout', [
            'element_categories' => $element_categories,
            'selected_product' => $selected_product,
        ]);
    }

    public function purchase_product(Request $request, $product_id="")
    {
        if(auth()->user()) {
            return redirect()->route('customer.single_purchase', ['product_id' => $product_id]);
        } else {
            $this->validate($request, [
                'email' => 'required|email',
            ]);

            if(!empty($request->email)) {
                $name = strstr($request->email, '@', true);

                $check_email = User::where('email', $request->email)->first();

                if(!empty($check_email)){
                    // $user = $check_email;
                    return redirect()->back()->with('info', 'This email already exists. Please login or provide new email address');
                } else {
                    $password = random(8);

                    $user = User::create([
                        'name' => $name,
                        'email' => $request->email,
                        'role_id' => '6',
                        'password' => Hash::make($password)
                    ]);

                    $pin = rand(100000, 999999);

                    DB::table('password_resets')
                        ->insert(
                            [
                                'email' => $request->email, 
                                'token' => $pin
                            ]
                        );

                    Mail::to($request->email)->send(new VerifyEmailWithPassword($pin, $user, $password));

                    // $token = $user->createToken('myapptoken')->plainTextToken;
                }

                relogin_user($user->id);

                return redirect()->route('customer.single_purchase', ['product_id' => $product_id]);

            } else {
                return redirect()->back()->with('error', 'Fill all the required field');
            }
        }
    }

    public function handleLike($product_id="")
    {
        if (Auth::check() && auth()->user()->role_id == 6) {
            if (isset($product_id)) {

                $product_details = ElementProduct::find($product_id); 

                $likes = array();

                if ($product_details->like == "") {
                    array_push($likes, auth()->user()->id);
                    $response['is_liked'] = 1;
                    $response['message'] = 'You liked the product';
                } else {
                    $likes = json_decode($product_details->like);
                    if (in_array(auth()->user()->id, $likes)) {
                        $container = array();
                        foreach ($likes as $key) {
                            if ($key != auth()->user()->id) {
                                array_push($container, $key);
                            }
                        }
                        $likes = $container;
                        $response['is_liked'] = 0;
                        $response['message'] = 'You unliked the product';
                    } else {
                        array_push($likes, auth()->user()->id);
                        $response['is_liked'] = 1;
                        $response['message'] = 'You liked the product';
                    }
                }

                $response['total_likes'] = count($likes); 

                $product_details->like = json_encode($likes);
                $product_details->save();

	            $response['status'] = 200;

                return $response;
            }
        } elseif(Auth::check()) {
            $response['message'] = 'You are not authorized!';
	        $response['status'] = 403;
            return $response;
        } else {
            $response['message'] = 'You are not logged in!';
	        $response['status'] = 403;
            return $response;;
        }
    }

    public function handleWishList($course_id="")
    {
        if (Auth::check() && auth()->user()->role_id == 6) {
            if (isset($course_id)) {

                $wishlists = array();

                if (auth()->user()->wishlists == "") {
                    array_push($wishlists, $course_id);
                    $response['message'] = 'Product added to wishlist';
                } else {
                    $wishlists = json_decode(auth()->user()->wishlists);
                    if (in_array($course_id, $wishlists)) {
                        $container = array();
                        foreach ($wishlists as $key) {
                            if ($key != $course_id) {
                                array_push($container, $key);
                            }
                        }
                        $wishlists = $container;
                        $response['message'] = 'Product removed from wishlist';
                    } else {
                        array_push($wishlists, $course_id);
                        $response['message'] = 'Product added to wishlist';
                    }
                }

                $user = User::find(auth()->user()->id);
                $user->wishlists = json_encode($wishlists);
                $user->save();

                $response['status'] = 200;

                return $response;
            }
        } elseif(Auth::check()) {
            $response['message'] = 'You are not authorized!';
	        $response['status'] = 403;
            return $response;
        } else {
            $response['message'] = 'You are not logged in!';
	        $response['status'] = 403;
            return $response;;
        }
    }
}
