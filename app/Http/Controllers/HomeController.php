<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\{Product,Topic, Article, Documentation, Blog, BlogCategory, User, Project, Setting, ElementCategory, ElementProduct, Subscription, ServicePackage, Service};
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Mail\VerifyEmailWithPassword;
use DB;
use File;


class HomeController extends Controller
{
    public function index()
    {

        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();
        
        $seo = seo();

        return Inertia::render('Frontend/Home', [
            'element_categories' => $element_categories,
            'seo' => $seo,
        ])->withViewData(['seo' => $seo]);
    }

    public function web_applications()
    {
        $products = Product::where('visibility', 1)->where('slug', '!=', 'elements')->orderBy('order', 'asc')->get();
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();
        $seo = seo();

        return Inertia::render('Frontend/WebApplication', [
            'products' => $products,
            'element_categories' => $element_categories,
            'seo' => $seo,
        ])->withViewData(['seo' => $seo]);
    }

    public function blog(Request $request, $type = "", $keyword ="")
    {
        // $filter = $request->all();
        $searched_word = '';
        $selected_blog_category = '';
        $selected_category_slug = '';
        $blog_categories = BlogCategory::all();
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();
        $seo = seo();
        
        $query = Blog::query();

        if(!empty($type)) {
            if($type == 'category')
            {
                $selected_blog_category = BlogCategory::where('slug', $keyword)->first();
                $query->where('blog_category_id', $selected_blog_category->id);

                $selected_category_slug = $keyword;
            } 
            else if($type == 'tag') 
            {
                $query->where('tags', 'LIKE', "%{$keyword}%");
                $searched_word = $keyword;
            }

            $related_blogs = $query->where('visibility', 1)->orderBy('id', 'asc')->get();

            return Inertia::render('Frontend/BlogFilter', [
                'selected_blog_category' => $selected_blog_category,
                'selected_category_slug' => $selected_category_slug,
                'searched_word' => $searched_word,
                'blog_categories' => $blog_categories,
                'related_blogs' => $related_blogs,
                'element_categories' => $element_categories,
                'seo' => $seo,
            ])->withViewData(['seo' => $seo]);
        } 
        else if(!empty($request->all()))
        {
            $query->where('title', 'LIKE', "%{$request->search}%")
                ->orWhere('tags', 'LIKE', "%{$request->search}%")
                ->orWhere('excerpt', 'LIKE', "%{$request->search}%");

            $searched_word = $request->search;

            $related_blogs = $query->where('visibility', 1)->orderBy('id', 'asc')->get();

            return Inertia::render('Frontend/BlogFilter', [
                'searched_word' => $searched_word,
                'blog_categories' => $blog_categories,
                'related_blogs' => $related_blogs,
                'element_categories' => $element_categories,
                'seo' => $seo,
            ])->withViewData(['seo' => $seo]);
        }
        
        $latest_blog =  Blog::where('visibility', 1)->latest()->first();
        $latest_three =  Blog::where('visibility', 1)->orderBy('id', 'desc')->skip(1)->take(3)->get();
        $featured_blogs =  Blog::where('visibility', 1)->where('is_featured', 1)->orderBy('id', 'desc')->get();

        return Inertia::render('Frontend/Blog', [
            'latest_blog' => $latest_blog,
            'latest_three' => $latest_three,
            'featured_blogs' => $featured_blogs,
            'blog_categories' => $blog_categories,
            'element_categories' => $element_categories,
            'seo' => $seo,
        ])->withViewData(['seo' => $seo]);
    }

    public function blog_details($slug="")
    {
        $blog_details = Blog::where('slug', $slug)->first();
        $htmlContent = $blog_details->details;
    
        // Parse HTML content to extract h2 tags
        $dom = new \DOMDocument();
        libxml_use_internal_errors(true);
        $dom->loadHTML($htmlContent);
        libxml_clear_errors();

        $h2Tags = [];
        $elements = $dom->getElementsByTagName('h2');
        foreach ($elements as $element) {
            $h2Tags[] = $element->nodeValue;
        }

        $keywords = explode(', ', $blog_details->tags);
        $related_blogs = Blog::where('blog_category_id', $blog_details->blog_category_id)->get();
        $selected_blog_category = BlogCategory::find($blog_details->blog_category_id);
        $writer_info = User::find($blog_details->blogger_id);
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();
        $seo = seo($blog_details, 'blog');
        // $page_type = 'blog_detail';

        return Inertia::render('Frontend/BlogDetails', [
            'blog_details' => $blog_details,
            'keywords' => $keywords,
            'related_blogs' => $related_blogs,
            'selected_blog_category' => $selected_blog_category,
            'writer_info' => $writer_info,
            'element_categories' => $element_categories,
            'seo' => $seo,
            'h2Tags' => $h2Tags,
        ])->withViewData(['seo' => $seo]);
    }

    public function docs()
    {
        $products = Product::where('visibility', 1)->orderBy('order', 'asc')->get();
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();
        $seo = seo();

        return Inertia::render('Frontend/Documentation', [
            'products' => $products,
            'element_categories' => $element_categories,
            'seo' => $seo,
        ])->withViewData(['seo' => $seo]);
    }

    public function documentation_details($product_slug = "", $article_slug = "")
    {
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();
        $product_details = Product::where('slug', $product_slug)->first();
        $num_of_articles = count($product_details->product_to_article); 

        if (empty($article_slug)) {
            $selected_article = get_fist_article_for_an_applicaiton($product_details, true);
            if (count($selected_article) == 0) {
                return redirect()->route('docs');
            }
            
            return redirect()->route('documentation_details', ['product_slug'=> $product_slug, 'article_slug' => $selected_article[0]->slug]);
        }

        $selected_article = Article::where('slug', $article_slug)->where('product_id', $product_details->id)->first();

        $article_details = $selected_article;
        $documentation_details = Documentation::where('article_id', $selected_article->id)->first();

        $topics = Topic::where('product_id', $product_details->id)->where('visibility', 1)->orderBy('order', 'asc')->get();

        foreach($topics as $key => $topic)
        {
            $res[$key] = $topic;
            $res[$key]['articles'] = $topic->topic_to_article;;
        }

        $topics = $res;

        // print_r(json_encode($res, JSON_PRETTY_PRINT));
        // die();

        return Inertia::render('Frontend/DocumentationDetails', [
            'product_details' => $product_details,
            'element_categories' => $element_categories,
            'article_details' => $article_details,
            'documentation_details' => $documentation_details,
            'product_slug' => $product_slug,
            'article_slug' => $article_slug,
            'topics' => $topics,
            'num_of_articles' => $num_of_articles,

        ]);
    }

    public function services()
    {
        // $service_details = ServicePackage::first();

        $seo = seo();
        $uniqueProductIds = ServicePackage::distinct()->pluck('product_id');
        $products = Product::whereIn('id', $uniqueProductIds)->get();

        // $active_package['id'] = $service_details->id;
        // $active_package['name'] = $service_details->name;
        // $active_package['product_id'] = $service_details->product_id;
        // $active_package['product_slug'] = $service_details->servicePackage_to_product->slug;
        // $active_package['price'] = $service_details->price;
        // $active_package['discounted_price'] = $service_details->discounted_price != null ? $service_details->discounted_price : 0;

        // $service_features = json_decode($service_details->services); 
        // $active_package['service_features'] = $service_features;


        // $active_package['int_val'] = 'one time';
        // $active_package['interval_period_text'] = 'You will get the following';
        // $active_package['services'] = Service::where('product_id', $service_details->product_id)->get();

        return Inertia::render('Frontend/Service', [
            'seo' => $seo,
            'products' => $products,
        ])->withViewData(['seo' => $seo]);
    }

    public function purchase_custom_service(Request $request) 
    {

        // print_r($request->selectedServices);
        // die();

        if(auth()->user()) {
            return redirect()->route('customer.service_custom_purchase', ['selected_services' => $request->selectedServices]);
        } else {
            $this->validate($request, [
                'email' => 'required|email',
            ]);

            if(!empty($request->email)) {
                $name = strstr($request->email, '@', true);

                $check_email = User::where('email', $request->email)->first();

                if(!empty($check_email)){
                    // $user = $check_email;
                    return redirect()->route('login')->with('info', 'This email already exists. Please login or provide new email address');
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

                return redirect()->route('customer.service_custom_purchase', ['selected_services' => $request->selectedServices]);

            } else {
                return redirect()->back()->with('error', 'Fill all the required field');
            }
        }
    }

    public function hire_us()
    {
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();
        $seo = seo();
        $service_packages = ServicePackage::where('visibility', 1)->get();

        foreach($service_packages as $key => $service)
        {
            $res[$key]['id'] = $service->id;
            $res[$key]['name'] = $service->name;
            $res[$key]['price'] = $service->price;
            $res[$key]['discounted_price'] = $service->discounted_price != null ? $service->discounted_price : 0;

            $service_features = json_decode($service->services); 
            $res[$key]['service_features'] = $service_features;


            $res[$key]['int_val'] = 'one time';
            $res[$key]['interval_period_text'] = 'You will get the following';
            
        }

        $service_packages = $res;

        $services = Service::all();

        return Inertia::render('Frontend/HireUs', [
            'element_categories' => $element_categories,
            'seo' => $seo,
            'service_packages' => $service_packages,
            'services' => $services,
        ])->withViewData(['seo' => $seo]);
    }

    public function service_buy_now($service_id="")
    {

        $selected_service = ServicePackage::find($service_id);

        return Inertia::render('Frontend/ServiceCheckout', [
            'selected_service' => $selected_service,
        ]);
    }

    public function purchase_service_package(Request $request, $service_id="")
    {
        if(auth()->user()) {
            return redirect()->route('customer.service_purchase', ['service_id' => $service_id]);
        } else {
            $this->validate($request, [
                'email' => 'required|email',
            ]);

            if(!empty($request->email)) {
                $name = strstr($request->email, '@', true);

                $check_email = User::where('email', $request->email)->first();

                if(!empty($check_email)){
                    // $user = $check_email;
                    return redirect()->route('login')->with('info', 'This email already exists. Please login or provide new email address');
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

                return redirect()->route('customer.service_purchase', ['service_id' => $service_id]);

            } else {
                return redirect()->back()->with('error', 'Fill all the required field');
            }
        }
    }

    public function terms_and_condition()
    {
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();
        $seo = seo();
        
        return Inertia::render('Frontend/TermsAndCondition', [
            'element_categories' => $element_categories,
            'seo' => $seo,
        ])->withViewData(['seo' => $seo]);
    }

    public function privacy_policy()
    {
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();
        $seo = seo();

        return Inertia::render('Frontend/PrivacyPolicy', [
            'element_categories' => $element_categories,
            'seo' => $seo,
        ])->withViewData(['seo' => $seo]);
    }

    public function refund_policy()
    {
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();
        $seo = seo();

        return Inertia::render('Frontend/RefundPolicy', [
            'element_categories' => $element_categories,
            'seo' => $seo,
        ])->withViewData(['seo' => $seo]);
    }

    public function support_policy()
    {
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();
        $seo = seo();

        return Inertia::render('Frontend/SupportPolicy', [
            'element_categories' => $element_categories,
            'seo' => $seo,
        ])->withViewData(['seo' => $seo]);
    }

    public function project_submit(Request $request) 
    {
        // $isDuplicate = User::where('email', $request->email)->exists();
        // print_r($isDuplicate);
        // die();

        $page_data = array();
        $attachments_name = array();
        $attachements = array();

        $name = strstr($request->email, '@', true);

        $check_email = User::where('email', $request->email)->first();

        if(Auth::check()){

            $data = $request->all();

            $page_data['title'] = $data['title'];
            $page_data['description'] = $data['description'];
            $page_data['budget_estimation'] = $data['budget_estimation'];
            $page_data['timeline'] = $data['timeline'];
            $page_data['user_id'] = auth()->user()->id;
            $page_data['status'] = 'pending';
            $page_data['completion_progress'] = 0;
            $page_data['paid_amount'] = 0;

            // print_r($data['attachment']);
            // die();

            if(!empty($data['attachment']))
            {
                array_push($attachments_name, $data['attachment']->getClientOriginalName());
                $page_data['attachment_name'] = json_encode($attachments_name);

                if (!File::exists(public_path('uploads/projects'))) {
                    File::makeDirectory(public_path('uploads/projects'));
                }

                $attachment = time().'-'.random(2).'.'.$data['attachment']->extension();
    
                $data['attachment']->move(public_path('uploads/projects/'), $attachment);
    
                array_push($attachements, $attachment);
                $page_data['attachment'] = json_encode($attachements);
            } else {
                $page_data['attachment_name'] = json_encode(array());
                $page_data['attachment'] = json_encode(array());
            }

            Project::create($page_data);

            return redirect()->route('customer.projects')->with('message', 'Project created successfully');
        } else if(!empty($check_email)){
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

            relogin_user($user->id);

            $data = $request->all();

            $page_data['title'] = $data['title'];
            $page_data['description'] = $data['description'];
            $page_data['budget_estimation'] = $data['budget_estimation'];
            $page_data['timeline'] = $data['timeline'];
            $page_data['user_id'] = auth()->user()->id;
            $page_data['status'] = 'pending';
            $page_data['completion_progress'] = 0;
            $page_data['paid_amount'] = 0;

            if(!empty($data['attachment']))
            {
                array_push($attachments_name, $data['attachment']->getClientOriginalName());
                $page_data['attachment_name'] = json_encode($attachments_name);

                if (!File::exists(public_path('uploads/projects'))) {
                    File::makeDirectory(public_path('uploads/projects'));
                }

                $attachment = time().'-'.random(2).'.'.$data['attachment']->extension();
    
                $data['attachment']->move(public_path('uploads/projects/'), $attachment);
    
                array_push($attachements, $attachment);
                $page_data['attachment'] = json_encode($attachements);
            } else {
                $page_data['attachment_name'] = json_encode(array());
                $page_data['attachment'] = json_encode(array());
            }

            Project::create($page_data);

            return redirect()->route('customer.projects')->with('message', 'Project created successfully');
        }

    }
}
