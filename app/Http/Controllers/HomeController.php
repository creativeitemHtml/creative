<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\{Product,Topic, Article, Documentation, Blog, BlogCategory, User, Project, Setting, ElementCategory, ElementProduct};


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
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();
        $seo = seo();

        return Inertia::render('Frontend/Service', [
            'element_categories' => $element_categories,
            'seo' => $seo,
        ])->withViewData(['seo' => $seo]);
    }

    public function terms_and_condition()
    {
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();
        return Inertia::render('Frontend/TermsAndCondition', [
            'element_categories' => $element_categories,
        ]);
    }

    public function privacy_policy()
    {
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();
        return Inertia::render('Frontend/PrivacyPolicy', [
            'element_categories' => $element_categories,
        ]);
    }

    public function refund_policy()
    {
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();
        return Inertia::render('Frontend/RefundPolicy', [
            'element_categories' => $element_categories,
        ]);
    }

    public function support_policy()
    {
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();
        return Inertia::render('Frontend/SupportPolicy', [
            'element_categories' => $element_categories,
        ]);
    }
}
