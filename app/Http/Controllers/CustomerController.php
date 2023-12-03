<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\{Setting, Package, Subscription, ElementProduct, User, ElementProductComment, ElementProductPayment, ElementDownload, Project, OnlineMeeting, PaymentMilestone, RolesAndPermission, ElementCategory};
use Illuminate\Support\Facades\Hash;
use Stripe;
use Illuminate\Support\Facades\Mail;
use App\Mail\PurchaseInvoice;
use File;
use PDF;


class CustomerController extends Controller
{
    public function subscription_details()
    {
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();

        $current_subscription = Subscription::where('user_id', auth()->user()->id)->latest()->first();

        if(isset($current_subscription)) {

            $response = $current_subscription;
            $response['package_details'] = $current_subscription->subscription_to_package;

            $current_subscription = $response;
        } else {
            $current_subscription = null;
        }

        $subscriptions = Subscription::where('user_id', auth()->user()->id)->where('payment_method', '!=', 'none')->orderBy('id', 'asc')->get();

        if(isset($current_subscription) && count($subscriptions) > 0) {

            foreach($subscriptions as $key => $subscription)
            {
                $res[$key] = $subscription;
                $res[$key]['package_details'] = $subscription->subscription_to_package;
            }

            $subscriptions = $res;
        } else {
            $subscriptions = [];
        }

        // print_r(json_encode($subscriptions, JSON_PRETTY_PRINT));
        // die();

        return Inertia::render('Backend/Customer/SubscriptionDetails', [
            'element_categories' => $element_categories,
            'current_subscription' => $current_subscription,
            'subscriptions' => $subscriptions,
        ]);
    }

    public function purchase_history()
    {
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();

        $purchase_histories = ElementProductPayment::where('user_id', auth()->user()->id)->orderBy('id', 'asc')->get();

        if(count($purchase_histories) > 0) {

            foreach($purchase_histories as $key => $purchase)
            {
                $res[$key] = $purchase;
                $res[$key]['product_details'] = $purchase->payment_to_elementProduct;
            }

            $purchase_histories = $res;
        }

        // print_r(json_encode($purchase_histories, JSON_PRETTY_PRINT));
        // die();


        return Inertia::render('Backend/Customer/PurchaseHistory', [
            'element_categories' => $element_categories,
            'purchase_histories' => $purchase_histories,
        ]);
    }

    public function purchase_invoice($purchase_id="")
    {
        $invoice_details = ElementProductPayment::where('id', $purchase_id)->first();

        if(isset($invoice_details)) {

            $res = $invoice_details;
            $res['formattedDate'] = date('d M, Y', strtotime($invoice_details->date_added));
            $res['payment_to_user'] = $invoice_details->payment_to_user;
            $res['payment_to_elementProduct'] = $invoice_details->payment_to_elementProduct;

            $invoice_details = $res;

        }

        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();

        return Inertia::render('Backend/Customer/InvoiceElementProduct', [
            'element_categories' => $element_categories,
            'invoice_details' => $invoice_details,
        ]);
    }

    public function wishlists()
    {
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();

        $element_products = ElementProduct::all();
        $wishlisted_products = array();
        $wishlists = array();
        $wishlists = is_array(json_decode(auth()->user()->wishlists)) && count(json_decode(auth()->user()->wishlists)) > 0? json_decode(auth()->user()->wishlists) : [];

        foreach($element_products as $element_product){
            if(in_array($element_product->id, $wishlists)){
                array_push($wishlisted_products, $element_product);
            }
        }

        $wishlists = $wishlisted_products;

        if(count($wishlists) > 0) {

            foreach($wishlists as $key => $wishlist){
                $res[$key] = $wishlist;

                $selected_category = ElementCategory::find($wishlist->element_category_id);

                if($selected_category->slug == 'video') {
                    $server_url = "https://elementsfiles.creativeitem.com/files/video-template";
                } elseif($selected_category->slug == '3d') {
                    $server_url = "https://elementsfiles.creativeitem.com/files/3d";
                } elseif($selected_category->slug == 'graphics') {
                    $server_url = "https://elementsfiles.creativeitem.com/files/graphics-template";
                } elseif($selected_category->slug == 'components') {
                    $server_url = "https://elementsfiles.creativeitem.com/files/components";
                } elseif($selected_category->slug == 'ui-kits') {
                    $server_url = "https://elementsfiles.creativeitem.com/files/ui-kits";
                } elseif($selected_category->slug == 'html') {
                    $server_url = "https://elementsfiles.creativeitem.com/files/html-template";
                } else {
                    $server_url = "https://elementsfiles.creativeitem.com/files";
                }

                $res[$key]['thumbnail'] = $server_url.'/'.$wishlist->product_id.'/'.$wishlist->thumbnail;
            }

            $wishlists = $res;
        } else {
            $wishlists = [];
        }

        // print_r(json_encode($wishlists, JSON_PRETTY_PRINT));
        // die();

        return Inertia::render('Backend/Customer/Wishlists', [
            'element_categories' => $element_categories,
            'wishlists' => $wishlists,
        ]);
    }

    public function downloads()
    {
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();

        $downloads = ElementDownload::where('user_id', auth()->user()->id)->get();

        if(isset($purchase_histories)) {

            foreach($downloads as $key => $download){
                $res[$key] = $download;
                $res[$key]['title'] = $download->elementDownload_to_elementProduct->title;
                $res[$key]['price'] = $download->elementDownload_to_elementProduct->price;

                $selected_category = ElementCategory::find( $download->elementDownload_to_elementProduct->element_category_id);

                if($selected_category->slug == 'video') {
                    $server_url = "https://elementsfiles.creativeitem.com/files/video-template";
                } elseif($selected_category->slug == '3d') {
                    $server_url = "https://elementsfiles.creativeitem.com/files/3d";
                } elseif($selected_category->slug == 'graphics') {
                    $server_url = "https://elementsfiles.creativeitem.com/files/graphics-template";
                } elseif($selected_category->slug == 'components') {
                    $server_url = "https://elementsfiles.creativeitem.com/files/components";
                } elseif($selected_category->slug == 'ui-kits') {
                    $server_url = "https://elementsfiles.creativeitem.com/files/ui-kits";
                } elseif($selected_category->slug == 'html') {
                    $server_url = "https://elementsfiles.creativeitem.com/files/html-template";
                } else {
                    $server_url = "https://elementsfiles.creativeitem.com/files";
                }

                $res[$key]['thumbnail'] = $server_url.'/'.$download->elementDownload_to_elementProduct->product_id.'/'.$download->elementDownload_to_elementProduct->thumbnail;
            }

            $downloads = $res;

        }
        
        // $current_subscription = Subscription::where('user_id', auth()->user()->id)->first();
        // $page_data['download_limit'] = $current_subscription->subscription_to_package->download_limit;

        // $today_date = now()->format('Y-m-d');
        // $page_data['remaining_download_limit'] = $current_subscription->subscription_to_package->download_limit - ElementDownload::where('user_id', auth()->user()->id)->whereDate('created_at', $today_date)->count();

        return Inertia::render('Backend/Customer/DownloadHistory', [
            'element_categories' => $element_categories,
            'downloads' => $downloads,
        ]);
    }

    public function profile()
    {
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();

        return Inertia::render('Backend/Customer/Profile', [
            'element_categories' => $element_categories,
        ]);
    }

    public function profile_update(Request $request)
    {
        $page_data = array();

        if(!empty($request->all())) 
        {
            $validated = $request->validate([
                'name' => 'required',
                'email' => 'required|email',
            ]);

            $data = $request->all();
            
            $page_data['email'] = $data['email'];

            $duplicate_user_check = User::where('email', $data['email'])->where('id', '!=', auth()->user()->id)->get();

            if(count($duplicate_user_check) == 0) {

                $page_data['name'] = $data['name'];
                $page_data['phone'] = $data['phone'];
                $page_data['about'] = $data['about'];

                if ($request->hasFile('thumbnail')) {

                    $thumbnailPathName = 'public/uploads/thumbnails/users/' . auth()->user()->thumbnail;

                    if(!empty(auth()->user()->thumbnail) && file_exists($thumbnailPathName)){
                        unlink($thumbnailPathName);
                    }

                    $image = $request->file('thumbnail');
                    $imageName = time() . '.' . $image->getClientOriginalExtension();
                    $image->move(public_path('uploads/thumbnails/users/'), $imageName);
                    $page_data['thumbnail'] = $imageName;
                } else {
                    $imageName = auth()->user()->thumbnail;
                    $page_data['thumbnail'] = $imageName;
                }

                User::where('id', auth()->user()->id)->update($page_data);

                return redirect()->route('customer.profile')->with('message', 'Account information updated successfully');
            } else {
                return redirect()->route('customer.profile')->with('error', 'Email already exists');
            }


        }
    }

    public function password_change(Request $request)
    {
        if($request->new_password != $request->confirm_password) {
            return back()->with("error", "Confirm Password Doesn't match!");
        }


        if(!Hash::check($request->old_password, auth()->user()->password)){
            // $oldPassword = $request->old_password;
            // $hashedPasswordInDatabase = auth()->user()->password;
            
            // // Check if the provided old password matches the hashed password in the database
            // $passwordsMatch = Hash::check($oldPassword, $hashedPasswordInDatabase);
            
            // // Print the result
            // print_r($passwordsMatch);
            // die();
            return back()->with("error", "Current Password Doesn't match!");
        }

        $data['password'] = Hash::make($request->new_password);
        User::where('id', auth()->user()->id)->update($data);

        return redirect()->back()->with('message', get_phrase('Password changed successfully'));
    }

    public function subscription_purchase($package_id) 
    {
        // print_r('coming soon customer');
        // die();

        $selected_package = Package::find($package_id);

        if($selected_package->name == 'Free') {

            Subscription::create([
                'user_id' => auth()->user()->id,
                'package_id' => $package_id,
                'paid_amount' => '0',
                'payment_method' => 'None',
                'date_added' => time(),
            ]);

            // Mail::to(auth()->user()->email)->send(new SubscriptionMail($sub_details));

            return redirect()->route('customer.element_checkout_success')->with('message', 'Registration done. You are subscrive to free package.');
        }

        $global_system_currency = get_settings('system_currency');

        $stripe = get_settings('stripe');
        $stripe_keys = json_decode($stripe);

        $STRIPE_KEY;
        $STRIPE_SECRET;

        if ($stripe_keys->mode == "test") {
            $STRIPE_KEY = $stripe_keys->test_key;
            $STRIPE_SECRET = $stripe_keys->test_secret_key;
        } elseif ($stripe_keys->mode == "live") {
            $STRIPE_KEY = $stripe_keys->public_live_key;
            $STRIPE_SECRET = $stripe_keys->secret_live_key;
        }

        $user_data['payment_method'] = 'stripe';

        $user_data['user_id'] = auth()->user()->id;
        $user_data['package_id'] = $package_id;
        $user_data['success_url'] = 'subscription_fee_success_payment';
        $user_data['cancle_url'] = 'subscription_fee_fail_payment';

        $success_url = 'subscription_fee_success_payment';
        $cancel_url = 'subscription_fee_fail_payment';

        $selected_package = Package::find($package_id);

        $expense_type = $selected_package->interval == 'monthly' ? 'subscription' : 'payment';

        $priceId = $selected_package->stripe_package_id;

        $user_data = implode(' ', array_map(function ($key, $value) {
            return "$key:$value";
        }, array_keys($user_data), $user_data));

        if($expense_type == 'subscription') {
            try {

                Stripe\Stripe::setApiKey($STRIPE_SECRET);

                $session = \Stripe\Checkout\Session::create([
                    'line_items' => [[
                        'price' => $priceId,
                        'quantity' => 1,
                    ]],
                    'mode' => 'subscription',
                    'success_url' => route($success_url, ['user_data' => $user_data, 'response' => 'check request->all() to get the response ']) . '?session_id={CHECKOUT_SESSION_ID}',
                    'cancel_url' => route($cancel_url, ['user_data' => $user_data, 'response' => 'check request->all() to get the response ']) . '?session_id={CHECKOUT_SESSION_ID}',
                ]);

                return Inertia::location($session->url);

                // return redirect($session->url);
            } catch (\Exception$e) {

                return $e->getMessage();
            }
        } else {

            //Lifetime subscription here
            try {

                Stripe\Stripe::setApiKey($STRIPE_SECRET);

                $session = \Stripe\Checkout\Session::create([
                    'line_items' => [[
                        'price' => $priceId,
                        'quantity' => 1,
                    ]],
                    'mode' => 'payment',
                    'success_url' => route($success_url, ['user_data' => $user_data, 'response' => 'check request->all() to get the response ']) . '?session_id={CHECKOUT_SESSION_ID}',
                    'cancel_url' => route($cancel_url, ['user_data' => $user_data, 'response' => 'check request->all() to get the response ']) . '?session_id={CHECKOUT_SESSION_ID}',
                ]);

                return Inertia::location($session->url);

                // return redirect($session->url);

            } catch (\Exception$e) {

                return $e->getMessage();
            }
        }
    }

    public function subscription_fee_success_payment(Request $request, $user_data, $response)
    {
        $user_data = $this->string_to_array($user_data);

        // $last_package = Subscription::where('user_id', $user_data['user_id'])->orderBy('id', 'desc')->first();

        $package = Package::find($user_data['package_id']);
        if (strtolower($package->interval) == 'monthly') {
            $monthly = $package->interval_period * 30;
            $expire_date = strtotime('+' . $monthly . ' days', strtotime(date("Y-m-d H:i:s")));

        } elseif (strtolower($package->interval) == 'lifetime') {
            $expire_date = 'lifetime';

        }

        if ($user_data['payment_method'] == 'stripe') {
            $stripe = get_settings('stripe');
            $stripe_keys = json_decode($stripe);
            $STRIPE_KEY;
            $STRIPE_SECRET;

            if ($stripe_keys->mode == "test") {
                $STRIPE_KEY = $stripe_keys->test_key;
                $STRIPE_SECRET = $stripe_keys->test_secret_key;
            } elseif ($stripe_keys->mode == "live") {
                $STRIPE_KEY = $stripe_keys->public_live_key;
                $STRIPE_SECRET = $stripe_keys->secret_live_key;
            }

            if($expire_date == 'lifetime') {
                $stripe_api_response_session_id = $request->all();
                $stripe = new \Stripe\StripeClient($STRIPE_SECRET);
                $session_response = $stripe->checkout->sessions->retrieve($stripe_api_response_session_id['session_id'], []);
                // print_r('<pre>');
                // print_r($session_response);
                // print_r('<pre>');
                // die();
                
                $stripe_payment_intent = $session_response['payment_intent'];
                $stripe_session_id = $stripe_api_response_session_id['session_id'];

                $stripe_transaction_keys = array();
                $stripe_response['payment_intent'] = $stripe_payment_intent;
                $stripe_response['session_id'] = $stripe_session_id;
                $stripe_transaction_keys = $stripe_response;
                $stripe_payment_response = json_encode($stripe_transaction_keys);

                $sub_details = Subscription::create([
                    'user_id' => $user_data['user_id'],
                    'package_id' => $user_data['package_id'],
                    'paid_amount' => $package->discounted_price,
                    'payment_method' => $user_data['payment_method'],
                    'transaction_keys' => $stripe_payment_response,
                    'date_added' => $session_response['created'],
                ]);

                // Mail::to(auth()->user()->email)->send(new SubscriptionMail($sub_details));

                return redirect()->route('customer.element_checkout_success')->with('message', 'Subscription done Successfull');

            } else {

                $stripe_api_response_session_id = $request->all();
                $stripe = new \Stripe\StripeClient($STRIPE_SECRET);
                $session_response = $stripe->checkout->sessions->retrieve($stripe_api_response_session_id['session_id'], []);

                $subscription_response = $stripe->subscriptions->retrieve(
                    $session_response->subscription,
                    []
                );
                
                $subscription_id = $session_response->subscription;
                $latest_invoice = $subscription_response->latest_invoice;
                $stripe_session_id = $stripe_api_response_session_id['session_id'];

                // echo $subscription_response->toJson();
                // echo $latest_invoice;
                // die();

                $stripe_transaction_keys = array();
                $stripe_response['subscription_id'] = $subscription_id;
                $stripe_response['latest_invoice'] = $latest_invoice;
                $stripe_response['session_id'] = $stripe_session_id;
                $stripe_transaction_keys = $stripe_response;
                $stripe_payment_response = json_encode($stripe_transaction_keys);

                // echo $session_response->toJSON();
                // die();

                $status = Subscription::create([
                    'user_id' => $user_data['user_id'],
                    'package_id' => $user_data['package_id'],
                    'paid_amount' => (double)$package->discounted_price * (double)$package->interval_period,
                    'payment_method' => $user_data['payment_method'],
                    'transaction_keys' => $stripe_payment_response,
                    'auto_subscription' => 1,
                    'date_added' => $subscription_response->current_period_start,
                    'expire_date' => $subscription_response->current_period_end,
                ]);

                return redirect()->route('customer.element_checkout_success')->with('message', 'Subscription done Successfull');
            }
        }

    }

    public function subscription_fee_fail_payment(Request $request, $user_data, $response)
    {
        $user_data = $this->string_to_array($user_data);

        return redirect()->route('element_checkout', ['id' => $user_data['package_id']])->with('warning', 'Subscription failed.');
    }

    public function string_to_array($user_data)
    {
        $user_data = explode(' ', $user_data);
        $recover_user_data = array();
        foreach ($user_data as $key => $value) {
            $length = strlen($value);
            $position = strpos($value, ':');
            $array_key = substr($value, 0, $position);
            $array_value = substr($value, $position + 1, $length);
            $recover_user_data[$array_key] = $array_value;
        }

        return $recover_user_data;
    }

    public function single_purchase($product_id)
    {

        $global_system_currency = get_settings('system_currency');

        $stripe = get_settings('stripe');
        $stripe_keys = json_decode($stripe);

        $STRIPE_KEY;
        $STRIPE_SECRET;

        if ($stripe_keys->mode == "test") {
            $STRIPE_KEY = $stripe_keys->test_key;
            $STRIPE_SECRET = $stripe_keys->test_secret_key;
        } elseif ($stripe_keys->mode == "live") {
            $STRIPE_KEY = $stripe_keys->public_live_key;
            $STRIPE_SECRET = $stripe_keys->secret_live_key;
        }

        $product_details = ElementProduct::find($product_id);

        $purchase_data['user_id'] = auth()->user()->id;
        $purchase_data['element_product_id'] = $product_id;
        $purchase_data['price'] = $product_details->price;
        $purchase_data['payment_method'] = 'stripe';
        $purchase_data['success_url'] = 'single_purchase_success_payment';
        $purchase_data['cancel_url'] = 'single_purchase_fail_payment';

        $purchase_data = implode(' ', array_map(function ($key, $value) {
            return "$key:$value";
        }, array_keys($purchase_data), $purchase_data));

        $success_url = 'single_purchase_success_payment';
        $cancel_url = 'single_purchase_fail_payment';

        try {

            Stripe\Stripe::setApiKey($STRIPE_SECRET);

            $session = \Stripe\Checkout\Session::create([
                'line_items' => [[
                    'price_data' => [
                        'currency' => $global_system_currency,
                        'product_data' => [
                            'name' => $product_details->title,
                        ],
                        'unit_amount' => $product_details->price * 100,
                    ],
                    'quantity' => 1,
                ]],
                'mode' => 'payment',
                'success_url' => route($success_url, ['purchase_data' => $purchase_data, 'response' => 'check $product_id to get the response ']) . '?session_id={CHECKOUT_SESSION_ID}',
                'cancel_url' => route($cancel_url, ['purchase_data' => $purchase_data, 'response' => 'check $product_id to get the response ']) . '?session_id={CHECKOUT_SESSION_ID}',
            ]);

            return Inertia::location($session->url);

        } catch (\Exception$e) {

            return $e->getMessage();
        }

        // print_r($product_id);
        // die();
    }

    public function single_purchase_success_payment(Request $request, $purchase_data, $response)
    {
        $purchase_data = $this->string_to_array($purchase_data);

        if ($purchase_data['payment_method'] == 'stripe') {
            $stripe = get_settings('stripe');
            $stripe_keys = json_decode($stripe);
            $STRIPE_KEY;
            $STRIPE_SECRET;

            if ($stripe_keys->mode == "test") {
                $STRIPE_KEY = $stripe_keys->test_key;
                $STRIPE_SECRET = $stripe_keys->test_secret_key;
            } elseif ($stripe_keys->mode == "live") {
                $STRIPE_KEY = $stripe_keys->public_live_key;
                $STRIPE_SECRET = $stripe_keys->secret_live_key;
            }

            $stripe_api_response_session_id = $request->all();
            $stripe = new \Stripe\StripeClient($STRIPE_SECRET);
            $session_response = $stripe->checkout->sessions->retrieve($stripe_api_response_session_id['session_id'], []);
            
            $stripe_payment_intent = $session_response['payment_intent'];
            $stripe_session_id = $stripe_api_response_session_id['session_id'];

            $stripe_transaction_keys = array();
            $stripe_response['payment_intent'] = $stripe_payment_intent;
            $stripe_response['session_id'] = $stripe_session_id;
            $stripe_transaction_keys = $stripe_response;
            $stripe_payment_response = json_encode($stripe_transaction_keys);

            $status = ElementProductPayment::create([
                'element_product_id' => $purchase_data['element_product_id'],
                'user_id' => $purchase_data['user_id'],
                'payment_method' => $purchase_data['payment_method'],
                'paid_amount' => $purchase_data['price'],
                'status' => 'paid',
                'transaction_keys' => $stripe_payment_response,
                'date_added' => strtotime(date('d-M-Y H:i:s')),
            ]);

            Mail::to(auth()->user()->email)->send(new PurchaseInvoice($status));

            return redirect()->route('customer.purchase_history')->with('message', 'Payment successfully');
        }
    }

    public function single_purchase_fail_payment(Request $request, $purchase_data, $response)
    {
        $purchase_data = $this->string_to_array($purchase_data);

        return redirect()->route('element_buy_now', ['product_id' => $purchase_data['element_product_id']])->with('warning', 'Purchase failed.');
    }

    public function download_link_generate($product_id="")
    {
        $current_subscription = Subscription::where('user_id', auth()->user()->id)->latest()->first();
        $is_purchased = ElementProductPayment::where('user_id', auth()->user()->id)->where('element_product_id', $product_id)->latest()->first();
        $today = strtotime('now');

        if((isset($current_subscription) && ($current_subscription->subscription_to_package->interval == 'lifetime' || $current_subscription->expire_date > $today)) || (!empty($is_purchased) && $current_subscription->subscription_to_package->name == 'Free'))
        {
            $today = now()->format('Y-m-d'); // Get the current date in 'YYYY-MM-DD' format

            $downloadCount = ElementDownload::where('user_id', auth()->user()->id)
                ->whereDate('created_at', $today)
                ->count();
            if($downloadCount == $current_subscription->subscription_to_package->download_limit) {
                return redirect()->back()->with('warning', 'Maximum download limit reached for today!');
            }

            $selected_product = ElementProduct::find($product_id);
            $temp = ElementDownload::where('element_product_id', $product_id)->where('user_id', auth()->user()->id)->orderBy('id', 'DESC')->first();

            if(!empty($temp)) {
                $difference = strtotime(date('d-M-Y H:i:s')) - $temp->timestamp;
            }

            if(empty($temp)) {
                $temp = ElementDownload::create([
                    'element_product_id' => $selected_product->id,
                    'user_id' => auth()->user()->id,
                    'unique_identifier' => random(10),
                    'timestamp' => strtotime(date('d-M-Y H:i:s')),
                ]);
            } elseif($difference >  10 * 60) {
                $temp = ElementDownload::create([
                    'element_product_id' => $selected_product->id,
                    'user_id' => auth()->user()->id,
                    'unique_identifier' => random(10),
                    'timestamp' => strtotime(date('d-M-Y H:i:s')),
                ]);
            } else {
                $unique_identifier = $temp->unique_identifier;
                ElementDownload::where('unique_identifier', $unique_identifier)->update([
                    'timestamp' => strtotime(date('d-M-Y H:i:s')),
                ]);
                $temp = ElementDownload::create([
                    'element_product_id' => $selected_product->id,
                    'user_id' => auth()->user()->id,
                    'unique_identifier' => random(10),
                    'timestamp' => strtotime(date('d-M-Y H:i:s')),
                ]);
            }

            return redirect()->route('customer.download_product', ['unique_identifier' => $temp->unique_identifier]);
        } else {
            return redirect()->back()->with('warning', 'Please purchase the product or subscribe first');
        }
    }

    public function download_product($unique_identifier="")
    {
        $check = ElementDownload::where('unique_identifier', $unique_identifier)->where('user_id', auth()->user()->id)->first();

        if(!empty($check)) {
            $selected_product = ElementProduct::find($check->element_product_id);

            $title = slugify($selected_product->title).'-'.$selected_product->id;

            $difference = strtotime(date('d-M-Y H:i:s')) - $check->timestamp;
            if($difference >  10 * 60) {
                return redirect()->route('element_product_details', ['title' => $title])->with('error', 'Link is expired');
            } else {
                
                // return file_get_contents("https://elementsfiles.creativeitem.com/files/3d/".$check->product_id."/".$file_name);

                $file_url = element_server_url($selected_product->product_id, $selected_product->product_to_elementCategory->slug).$selected_product->file;
                // die();

                // $file_url = 'http://www.myremoteserver.com/file.exe';
                header('Content-Type: application/octet-stream');
                header("Content-Transfer-Encoding: Binary"); 
                header("Content-disposition: attachment; filename=\"" . basename($file_url) . "\""); 
                readfile($file_url);
            }
        } else {
            return redirect()->route('element_product_details', ['title' => $title])->with('error', 'Access denied!');
        }
    }

    public function projects($param="")
    {
        if(empty($param)){
            $param = "active";
        }

        $projects = Project::where('user_id', auth()->user()->id)->where('status', $param)->get();
        // $page_data['page_title'] = 'Projects';
        // $page_data['project'] = 'active';
        // $page_data['tab'] = $param;
        // $page_data['active'] = Project::where('user_id', auth()->user()->id)->where('status', 'active')->count();
        // $page_data['pending'] = Project::where('user_id', auth()->user()->id)->where('status', 'pending')->count();
        // $page_data['archive'] = Project::where('user_id', auth()->user()->id)->where('status', 'archive')->count();

        return Inertia::render('Backend/Customer/Projects', [
            'projects' => $projects,
        ]);
    }
}
