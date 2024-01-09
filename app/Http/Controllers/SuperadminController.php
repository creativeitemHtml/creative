<?php

namespace App\Http\Controllers;

use Illuminate\Filesystem\Filesystem;
use Illuminate\Http\Request;
use App\Models\{User, Product, ProductType, Topic, Article, Documentation, Blog, BlogCategory, Ad, AdDimension, Project, OnlineMeeting, PaymentMilestone, RolesAndPermission, SeoField, Package, Tag, Setting, ElementCategory, ElementProduct, Subscription, ElementDownload, ElementFileType, ServicePackage, Service};
use Illuminate\Support\Facades\Hash;
use Validator;
use Response;
use PDF;
use File;

class SuperadminController extends Controller
{
    function dashboard()
    {
        $page_data = array();
        $page_data['user'] = User::where('role_id', '6')->get();
        $page_data['subscriptions'] = Subscription::sum('paid_amount');
        $page_data['downloads'] = ElementDownload::all();

        $monthly_amount = array(0);
        for ($i = 1; $i <= 12; $i++) {
            $total_amount = date('t', strtotime(date("Y-$i-1 00:00:00")));
            $amount = Subscription::whereDate('created_at', '>=', date("Y-$i-1 00:00:00"))->whereDate('created_at', '<=', date("Y-$i-$total_amount 23:59:59"))->get();
            if (count($amount) > 0) {
                array_push($monthly_amount, array_sum($amount->pluck('paid_amount')->toArray()));
            } else {
                array_push($monthly_amount, 0);
            }
        }
        $page_data['monthly_amount'] = $monthly_amount;

        $page_data['page_title'] = 'Dashboard';
        $page_data['dashboard']='active';
        $page_data['file_name'] = 'dashboard';
        return view('superadmin.navigation', $page_data);
    }

    function products()
    {
        $page_data = array();
        $page_data['products'] = Product::orderBy('order', 'asc')->paginate(12);
        $page_data['page_title'] = 'My Products';
        $page_data['product']='active';
        $page_data['file_name'] = 'products';
        return view('superadmin.navigation', $page_data);
    }

    function product_type()
    {
        $page_data = array();
        $page_data['product_types'] = ProductType::paginate(10);
        $page_data['page_title'] = 'Product type';
        $page_data['product_type']='active';
        $page_data['file_name'] = 'product_type';
        return view('superadmin.navigation', $page_data);
    }

    function tags()
    {
        $page_data = array();
        $page_data['tags'] = Tag::orderBy('id', 'desc')->get();
        $page_data['page_title'] = 'Tags';
        $page_data['tag']='active';
        $page_data['file_name'] = 'tags';
        return view('superadmin.navigation', $page_data);
    }

    function tag_create(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'tag' => 'required',
        ]);

        if($validate->fails()){
            return back()->withErrors($validate->errors())->withInput();
        }
        
        $tagName = $request->input('tag');

        // Tag does not exist, save it
        $tag = new Tag();
        $tag->name = $tagName;
        $tag->slug = slugify($tagName);
        $tag->save();

        return redirect()->back()->with('message','Tag created successfully.');
    }

    function tag_update(Request $request, $id)
    {
        $validate = Validator::make($request->all(), [
            'tag_' . $id => 'required',
        ]);

        if($validate->fails()){
            return back()->withErrors($validate->errors())->withInput();
        }
        
        $tagName = $request->input('tag_' . $id);

        // Check if the tag already exists
        $existingTag = Tag::where('name', $tagName)->first();

        if ($existingTag) {
            // Tag already exists, return 403 with an error message
            $errorMessage = "Tag '{$tagName}' already exists.";
            return back()->with('error', "Tag '{$tagName}' already exists.")->withErrors(['tag_' . $id => $errorMessage])->withInput();
        }

        $tag = Tag::find($id);

        $tag->name = $tagName;
        $tag->slug = slugify($tagName);
        $tag->save();

        return redirect()->back()->with('message','Tag updated successfully.');
    }

    public function tag_delete($id = "")
    {
        $tag = Tag::find($id);
        $tag->delete();
        return redirect()->back()->with('message','Tag deleted successfully.');
    }

    public function create_product(Request $request)
    {
        $page_data = array();

        if(!empty($request->all())) {

            $data = $request->all();

            $page_data['name'] = $data['name'];
            $page_data['sub_title'] = $data['sub_title'];
            $page_data['excerpt'] = $data['excerpt'];
            $page_data['price'] = $data['price'];
            $page_data['purchase_url'] = $data['purchase_url'];
            $page_data['visibility'] = $data['visibility'];
            $page_data['product_type_id'] = $data['type'];
            $page_data['slug'] = slugify($data['name']);
            $page_data['color_code'] = $data['color_code'];

            // DUPLICATION CHECK
            $duplicate_product_check = Product::get()->where('name', $data['name']);

            if(count($duplicate_product_check) != 0) {
                return redirect()->back()->with('error','Sorry this product already exist');
            }

            if(!empty($data['thumbnail'])){

                $thumbnailName = random(15).'.'.$data['thumbnail']->extension();
    
                $data['thumbnail']->move(public_path('uploads/thumbnails/products/'), $thumbnailName);
    
                $page_data['thumbnail'] = $thumbnailName;
            } else {
                $page_data['thumbnail'] = 'thumbnail.png';
            }

            if(!empty($data['favicon'])){

                $faviconName = random(15).'.'.$data['favicon']->extension();
    
                $data['favicon']->move(public_path('uploads/favicons/products/'), $faviconName);
    
                $page_data['favicon']  = $faviconName;
            } else {
                $page_data['favicon'] = 'favicon.png';
            }

            Product::create($page_data);

            return redirect()->back()->with('message','Product created successfully.');
        }

        $page_data['product_types'] = ProductType::all();

        return view('superadmin.add_product', $page_data);
    }

    public function edit_product(Request $request, $id = "")
    {
        $page_data = array();

        if(!empty($request->all())) {

            $data = $request->all();

            $page_data['name'] = $data['name'];
            $page_data['sub_title'] = $data['sub_title'];
            $page_data['excerpt'] = $data['excerpt'];
            $page_data['price'] = $data['price'];
            $page_data['purchase_url'] = $data['purchase_url'];
            $page_data['visibility'] = $data['visibility'];
            $page_data['product_type_id'] = $data['type'];
            $page_data['slug'] = slugify($data['name']);
            $page_data['color_code'] = $data['color_code'];

            $product = Product::find($id);

            if(!empty($data['thumbnail'])){

                $thumbnailPathName = 'public/uploads/thumbnails/products/' . $product->thumbnail;

                if(file_exists($thumbnailPathName)){
                    unlink($thumbnailPathName);
                }

                $thumbnailName = random(15).'.'.$data['thumbnail']->extension();
    
                $data['thumbnail']->move(public_path('uploads/thumbnails/products/'), $thumbnailName);
    
                $page_data['thumbnail'] = $thumbnailName;
            } else {
                $page_data['thumbnail'] = $product->thumbnail;
            }

            if(!empty($data['favicon'])){

                $faviconPathName = 'public/uploads/favicons/products/' . $product->favicon;

                if(file_exists($faviconPathName)){
                    unlink($faviconPathName);
                }

                $faviconName = random(15).'.'.$data['favicon']->extension();
    
                $data['favicon']->move(public_path('uploads/favicons/products/'), $faviconName);
    
                $page_data['favicon']  = $faviconName;
            } else {
                $page_data['favicon'] = $product->favicon;
            }

            Product::where('id', $id)->update($page_data);

            return redirect()->back()->with('message','Product updated successfully.');
        }

        $page_data['product'] = Product::find($id);
        $page_data['product_types'] = ProductType::all();

        return view('superadmin.edit_product', $page_data);
    }

    public function product_delete($id = "")
    {
        $product = Product::find($id);

        $thumbnailPathName = 'public/uploads/thumbnails/products/' . $product->thumbnail;

        if(file_exists($thumbnailPathName)){
            unlink($thumbnailPathName);
        }

        $faviconPathName = 'public/uploads/favicons/products/' . $product->favicon;

        if(file_exists($faviconPathName)){
            unlink($faviconPathName);
        }

        $product->delete();
        return redirect()->back()->with('message','Product deleted successfully.');
    }

    function documentation()
    {
        $page_data = array();
        $page_data['products'] = Product::orderBy('order', 'asc')->paginate(12);
        $page_data['page_title'] = 'Documentation';
        $page_data['documentation']='active';
        $page_data['file_name'] = 'documentation';
        return view('superadmin.navigation', $page_data);
    }

    public function sort_products(Request $request)
    {
        $page_data = array();

        if(!empty($request->all())) {

            $data = $request->all();

            $products = json_decode($data['itemJSON']);
            
            foreach($products as $key => $value) {
                $product = Product::find($value);
                $product['order']= $key + 1;
                $product->save();
            }

            return redirect()->back()->with('message','Product sorted successfully');
        }

        $page_data['products'] = Product::orderBy('order', 'asc')->get();
        return view('superadmin.sort_products', $page_data);
    }

    function edit_documentation($slug = "")
    {
        $page_data = array();
        $page_data['product'] = Product::where('slug', $slug)->first();
        $page_data['page_title'] = 'Topics and aricles of product : '.$page_data['product']->name;
        $page_data['documentation']='active';
        $page_data['file_name'] = 'topics';
        return view('superadmin.navigation', $page_data);
    }

    public function create_topic(Request $request, $slug = "")
    {
        $page_data = array();

        $product = Product::where('slug', $slug)->first();

        $page_data['product_id'] = $product->id;

        if(!empty($request->all())) {

            $data = $request->all();

            $page_data['topic'] = $data['topic'];
            $page_data['summary'] = $data['summary'];
            if(!empty($data['visibility'])) {
                $page_data['visibility'] = $data['visibility'];
            } else {
                $page_data['visibility'] = 0;
            }
            $page_data['slug'] = slugify($data['topic']);

            // DUPLICATION CHECK
            $duplicate_topic_check = Topic::get()->where('topic', $data['topic'])->where('product_id', $product->id);

            if(count($duplicate_topic_check) != 0) {
                return redirect()->back()->with('error','Sorry this topic already exist');
            }

            if(!empty($data['thumbnail'])){

                $thumbnailName = random(15).'.'.$data['thumbnail']->extension();
    
                $data['thumbnail']->move(public_path('uploads/thumbnails/topic_thumbnails/'), $thumbnailName);
    
                $page_data['thumbnail'] = $thumbnailName;
            } else {
                $page_data['thumbnail'] = 'thumbnail.png';
            }

            Topic::create($page_data);

            return redirect()->back()->with('message','Topic created successfully.');
        }
        $page_data['product'] = Product::where('slug', $slug)->first();
        return view('superadmin.add_topic', $page_data);
    }

    public function edit_topic(Request $request, $id = "")
    {
        $page_data = array();

        if(!empty($request->all())) {

            $data = $request->all();

            $page_data['topic'] = $data['topic'];
            $page_data['summary'] = $data['summary'];
            if(!empty($data['visibility'])) {
                $page_data['visibility'] = $data['visibility'];
            } else {
                $page_data['visibility'] = 0;
            }

            $topic = Topic::find($id);

            if(!empty($data['thumbnail'])){

                $thumbnailPathName = 'public/uploads/thumbnails/topic_thumbnails/' . $topic->thumbnail;

                if(file_exists($thumbnailPathName)){
                    unlink($thumbnailPathName);
                }

                $thumbnailName = random(15).'.'.$data['thumbnail']->extension();
    
                $data['thumbnail']->move(public_path('uploads/thumbnails/topic_thumbnails/'), $thumbnailName);
    
                $page_data['thumbnail'] = $thumbnailName;
            } else {
                $page_data['thumbnail'] = $topic->thumbnail;
            }

            Topic::where('id', $id)->update($page_data);

            return redirect()->back()->with('message','Topic updated successfully.');

        }
        $page_data['topic'] = Topic::find($id);
        return view('superadmin.edit_topic', $page_data);
    }

    public function topic_delete($id = "")
    {
        $topic = Topic::find($id);

        $thumbnailPathName = 'public/uploads/thumbnails/topic_thumbnails/' . $topic->thumbnail;

        if(file_exists($thumbnailPathName)){
            unlink($thumbnailPathName);
        }

        $topic->delete();
        return redirect()->back()->with('message','Topic deleted successfully.');
    }

    public function create_article(Request $request, $slug = "")
    {
        $page_data = array();

        if(!empty($request->all())) {

            $data = $request->all();

            $page_data['article'] = $data['article'];
            $page_data['topic_id'] = $data['topic_id'];

            $product = Product::where('slug', $slug)->first();

            $page_data['product_id'] = $product->id;

            if(!empty($data['visibility'])) {
                $page_data['visibility'] = $data['visibility'];
            } else {
                $page_data['visibility'] = 0;
            }

            $page_data['slug'] = slugify($data['article']);

            // DUPLICATION CHECK
            $duplicate_article_check = Article::get()->where('article', $data['article'])->where('product_id', $product->id);

            if(count($duplicate_article_check) != 0) {
                return redirect()->back()->with('error','Sorry this article already exist');
            }

            Article::create($page_data);

            return redirect()->back()->with('message','Article created successfully.');
        }
        $page_data['product'] = Product::where('slug', $slug)->first();
        $page_data['topics'] = Topic::where('product_id', $page_data['product']->id)->get();
        return view('superadmin.article_add', $page_data);
    }

    public function edit_article(Request $request, $id = "")
    {
        $page_data = array();

        if(!empty($request->all())) {

            $data = $request->all();

            $page_data['article'] = $data['article'];
            $page_data['topic_id'] = $data['topic_id'];
            $page_data['slug'] = slugify($data['article']);

            $article = Article::find($id);

            $page_data['product_id'] = $article->product_id;

            if(!empty($data['visibility'])) {
                $page_data['visibility'] = $data['visibility'];
            } else {
                $page_data['visibility'] = 0;
            }

            Article::where('id', $id)->update($page_data);

            return redirect()->back()->with('message','Article updated successfully.');
        }

        $page_data['article'] = Article::find($id);
        $page_data['topics'] = Topic::where('product_id', $page_data['article']->product_id)->get();
        return view('superadmin.article_edit', $page_data);
    }

    public function article_delete($id = "")
    {
        $article = Article::find($id);
        $article->delete();

        return redirect()->back()->with('message','Article deleted successfully.');
    }

    public function documentation_details($article_id = "")
    {
        $page_data = array();

        $page_data['selected_article'] = Article::find($article_id);

        $page_data['articles'] = Article::where('topic_id', $page_data['selected_article']->topic_id)->get();
        $page_data['article_details'] = Documentation::where('article_id', $article_id)->first();

        $page_data['page_title'] = 'Documentation for '.$page_data['selected_article']->article;
        $page_data['documentation']='active';
        $page_data['file_name'] = 'documentation_details';
        return view('superadmin.navigation', $page_data);
    }

    public function create_documentation(Request $request, $article_id="")
    {
        $validated = $request->validate([
            'article' => 'required',
            'documentation' => 'required'
        ]);

        $data['article_id'] = $article_id;

        if(!empty($request->visbility)) {
            $data['visibility'] = $request->visibility;
        } else {
            $data['visibility'] = '0';
        }

        $article = Article::find($article_id);

        if($article->article != $validated['article']) {
            Article::where('id', $article_id)->update([
                'article' => $validated['article'],
                'slug' => slugify($validated['article'])
            ]);
        }
        
        $documentation = str_replace("’", "'", $validated['documentation']);
        $documentation = str_replace('“', '"', $documentation);
        $documentation = str_replace('”', '"', $documentation);

        $dom = new \DomDocument();
        @$dom->loadHtml($documentation, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
        $image_file = $dom->getElementsByTagName('img');

        $product = $article->article_to_product->slug;
        $topic = $article->article_to_topic->slug;

        if (!File::exists(public_path('uploads/documentation/' . $product))) {
            File::makeDirectory(public_path('uploads/documentation/' . $product));
        }

        if (!File::exists(public_path('uploads/documentation/' . $product . '/' . $topic))) {
            File::makeDirectory(public_path('uploads/documentation/' . $product . '/' . $topic));
        }

        
        foreach($image_file as $key => $image) {
            $src_data = $image->getAttribute('src');

            if (str_contains($src_data, 'public/uploads')) {
                continue;
            }

            list($type, $src_data) = explode(';', $src_data);
            list(, $src_data) = explode(',', $src_data);

            $img_data = base64_decode($src_data);
            $image_name = 'uploads/documentation/' . $product . '/' . $topic . '/' . time().$key.'.png';
            $src = url('public/'.$image_name);
            
            $path = public_path() . '/' . $image_name;
            file_put_contents($path, $img_data);

            $image->removeAttribute('src');
            $image->setAttribute('src', $src);
        }

        $dom->saveHTML();

        $data['documentation'] = $dom->saveHTML();
        
        $documentation = Documentation::where('article_id', $article_id)->first();

        if(!empty($documentation)){

            Documentation::where('article_id', $article_id)->update($data);

            return redirect()->back()->with('message','Documentation updated successfully');

        } else {

            Documentation::create($data);

            return redirect()->back()->with('message','Documentation created successfully');
        }
    }

    public function sort_topics(Request $request, $slug = "")
    {
        $page_data = array();
        

        if(!empty($request->all())) {

            $data = $request->all();

            $topics = json_decode($data['itemJSON']);
            
            foreach($topics as $key => $value) {
                $topic = Topic::find($value);
                $topic['order']= $key + 1;
                $topic->save();
            }

            return redirect()->back()->with('message','Topic sorted successfully');
        }

        $page_data['product'] = Product::where('slug', $slug)->first();
        $page_data['topics'] = Topic::where('product_id', $page_data['product']->id)->orderBy('order', 'asc')->get();
        return view('superadmin.sort_topics', $page_data);
    }

    public function sort_articles(Request $request, $topic_id = "")
    {
        $page_data = array();

        $page_data['topic_id'] = $topic_id;

        if(!empty($request->all())) {

            $data = $request->all();

            $articles = json_decode($data['itemJSON']);
            
            foreach($articles as $key => $value) {
                $article = Article::find($value);
                $article['order']= $key + 1;
                $article->save();
            }

            return redirect()->back()->with('message','Topic sorted successfully');
        }

        $page_data['articles'] = Article::where('topic_id', $topic_id)->orderBy('order', 'asc')->get();
        return view('superadmin.sort_articles', $page_data);
    }

    public function blogs()
    {
        $page_data = array();
        $page_data['blogs'] = Blog::paginate(10);
        $page_data['page_title'] = 'Blog';
        $page_data['blog'] ='active';
        $page_data['file_name'] = 'blogs';
        return view('superadmin.navigation', $page_data);
    }

    public function blog_create(Request $request)
    {
        $page_data = array();

        if(!empty($request->all())) {

            $validated = $request->validate([
                'blog_category_id' => 'required',
                'blog_title' => 'required',
                'excerpt' => 'required',
                'blog_details' => 'required'
            ]);

            // DUPLICATION CHECK
            $duplicate_blog_check = Blog::get()->where('name', $request->blog_title);

            if(count($duplicate_blog_check) != 0) {
                return redirect()->back()->with('error','Sorry this blog already exist');
            }

            $blog = new Blog;
            $blog->title            = $request->blog_title;
            $blog->slug             = slugify($request->blog_title);

            $documentation = str_replace("’", "'", $request->blog_details);
            $documentation = str_replace('“', '"', $documentation);
            $documentation = str_replace('”', '"', $documentation);

            $dom = new \DomDocument();
            @$dom->loadHtml($documentation, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
            $image_file = $dom->getElementsByTagName('img');

            foreach($image_file as $key => $image) {
                $src_data = $image->getAttribute('src');
    
                if (str_contains($src_data, 'http')) {
                    continue;
                }
    
                list($type, $src_data) = explode(';', $src_data);
                list(, $src_data) = explode(',', $src_data);
    
                $img_data = base64_decode($src_data);
    
                // Use the original file name and extension from the uploaded file
                $original_name_with_extension = $image->getAttribute('data-filename');
                $original_name = pathinfo($original_name_with_extension, PATHINFO_FILENAME);
                $extension = pathinfo($original_name_with_extension, PATHINFO_EXTENSION);

                $image_name = 'uploads/blog/description_images/' . $original_name . '.' . $extension;
    
                $src = url('public/'.$image_name);
                
                $path = public_path() . '/' . $image_name;
                file_put_contents($path, $img_data);
    
                $image->removeAttribute('src');
                $image->setAttribute('src', $src);
                // Add alt and title attributes with the image name
                $image->setAttribute('alt', img_to_text($original_name));
                $image->setAttribute('title', img_to_text($original_name));
            }

            $blog->details              = $dom->saveHTML();

            $blog->excerpt              = $request->excerpt;
            $blog->read_time            = $request->read_time;
            $blog->visibility           = !empty($request->visibility) ? '1' : '0';
            $blog->blog_category_id     = $request->blog_category_id;
            $blog->blogger_id           = $request->blogger_id;
            $blog->ability_to_comment   = !empty($request->ability_to_comment) ? '1' : '0';
            $blog->is_featured          = !empty($request->is_featured) ? '1' : '0';
            $blog->tags                 = str_replace(',', ', ', $request->tags);
            $blog->meta_title           = $request->meta_title;
            $blog->meta_description     = $request->meta_description;
            $blog->meta_keywords        = $request->meta_keywords;
            $blog->custom_url           = $request->custom_url;
            $blog->canonical_url        = $request->canonical_url;
            $blog->og_title             = $request->og_title;
            $blog->og_description       = $request->og_description;
            $blog->json_ld              = $request->json_ld;

            // upload the og image
            $og_image = $request->file('og_image');
            if ($og_image) {
                $og_image->move('public/uploads/blog/og_image/' , $og_image->getClientOriginalName());
                $blog->og_image = $og_image->getClientOriginalName();
            }
            else $blog->og_image = '';

            // upload the thumbnail image
            $thumbnail = $request->file('thumbnail');
            if ($thumbnail) {
                $thumbnail->move('public/uploads/blog/thumbnail_image/' , $thumbnail->getClientOriginalName());
                $blog->thumbnail = $thumbnail->getClientOriginalName();
            }
            else $blog->thumbnail_image = '';

            // upload the banner image
            $banner = $request->file('banner');
            if ($banner) {
                $banner->move('public/uploads/blog/banner_image/' , $banner->getClientOriginalName());
                $blog->banner = $banner->getClientOriginalName();
            }
            else $blog->banner = '';
                

            $blog->save();

            return redirect()->route('superadmin.blogs')->with('message', 'Blog created successfully');
        }

        $page_data['blog_writers'] = User::where('role_id', 3)->get();
        $page_data['blog_categories'] = BlogCategory::all();
        $page_data['page_title'] = 'Blog Create';
        $page_data['blog'] ='active';
        $page_data['file_name'] = 'blog_create';
        return view('superadmin.navigation', $page_data);
    }

    function edit_blog(Request $request, $id = "")
    {

        $page_data = array();

        if(!empty($request->all())) {

            // upload the thumbnail image
            $thumbnail = $request->file('thumbnail');
            if ($thumbnail) {
                $thumbnail->move('public/uploads/blog/thumbnail_image/' , $thumbnail->getClientOriginalName());
                $thumbnail = $thumbnail->getClientOriginalName();
            }
            else {
                $thumbnail = Blog::firstWhere('id', $id)->thumbnail;
            }

            // upload the banner image
            $banner = $request->file('banner');
            if ($banner) {
                $banner->move('public/uploads/blog/banner_image/' , $banner->getClientOriginalName());
                $banner = $banner->getClientOriginalName();
            }
            else {
                $banner = Blog::firstWhere('id', $id)->banner;
            }

            // upload the og image
            $og_image = $request->file('og_image');
            if ($og_image) {
                $og_image->move('public/uploads/blog/og_image/' , $og_image->getClientOriginalName());
                $og_image = $og_image->getClientOriginalName();
            }
            else {
                $og_image = Blog::firstWhere('id', $id)->og_image;
            }

            $documentation = str_replace("’", "'", $request->blog_details);
            $documentation = str_replace('“', '"', $documentation);
            $documentation = str_replace('”', '"', $documentation);

            $dom = new \DomDocument();
            @$dom->loadHtml($documentation, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
            $image_file = $dom->getElementsByTagName('img');

            foreach($image_file as $key => $image) {
                $src_data = $image->getAttribute('src');

                if (str_contains($src_data, 'uploads/blog/description_images')) {
                    continue;
                }

                list($type, $src_data) = explode(';', $src_data);
                list(, $src_data) = explode(',', $src_data);

                $img_data = base64_decode($src_data);

                // Use the original file name and extension from the uploaded file
                $original_name_with_extension = $image->getAttribute('data-filename');

                if (!$original_name_with_extension) {
                    // Generate a unique filename
                    $original_name_with_extension = uniqid() . '.svg';
                }
                $original_name = pathinfo($original_name_with_extension, PATHINFO_FILENAME);
                $extension = pathinfo($original_name_with_extension, PATHINFO_EXTENSION);

                $image_name = 'uploads/blog/description_images/' . $original_name . '.' . $extension;

                $src = url('public/'.$image_name);
                
                $path = public_path() . '/' . $image_name;
                
                file_put_contents($path, $img_data);

                $image->removeAttribute('src');
                $image->setAttribute('src', $src);
                // Add alt and title attributes with the image name
                $image->setAttribute('alt', img_to_text($original_name));
                $image->setAttribute('title', img_to_text($original_name));
            }

            $blog_details = $dom->saveHTML();

            Blog::where('id', $id)->update([
                'title' => $request->blog_title,
                'slug' => slugify($request->blog_title),
                'details' => $blog_details,
                'excerpt' => $request->excerpt,
                'read_time' => $request->read_time,
                'blog_category_id' => $request->blog_category_id,
                'blogger_id' => $request->blogger_id,
                'thumbnail' => $thumbnail,
                'banner' => $banner,
                'is_featured' => !empty($request->is_featured) ? '1' : '0',
                'tags' => str_replace(',', ', ', $request->tags),
                'visibility' => !empty($request->visibility) ? '1' : '0',
                'ability_to_comment' => !empty($request->ability_to_comment) ? '1' : '0',
                'meta_title' => $request->meta_title,
                'meta_description' => $request->meta_description,
                'meta_keywords' => $request->meta_keywords,
                'custom_url' => $request->custom_url,
                'canonical_url' => $request->canonical_url,
                'og_title' => $request->og_title,
                'og_description' => $request->og_description,
                'og_image' => $og_image,
                'json_ld' => $request->json_ld,
            ]);

            return redirect()->back()->with('message','Blog updated successfully.');
        }

        $page_data['blog_details'] = Blog::find($id);

        $page_data['blog_writers'] = User::where('role_id', 3)->get();
        $page_data['blog_categories'] = BlogCategory::all();
        $page_data['page_title'] = 'Blog Update';
        $page_data['blog'] ='active';
        $page_data['file_name'] = 'blog_edit';
        return view('superadmin.navigation', $page_data);
    }

    public function blog_delete($id = "")
    {
        $blog = Blog::find($id);

        $thumbnailPathName = 'public/uploads/blog/' . $blog->slug . '/' . $blog->thumbnail;

        if(file_exists($thumbnailPathName)){
            unlink($thumbnailPathName);
        }

        $path = 'public/uploads/blog/' . $blog->slug;
        if (File::exists($path)) {
            File::deleteDirectory($path);
        }

        $blog->delete();
        return redirect()->back()->with('message','Blog deleted successfully.');
    }

    public function service_packages($param = "")
    {
        $page_data = array();

        if(empty($param)){
            $service_details = ServicePackage::first();
            $param = $service_details->servicePackage_to_product->slug;
        }

        $uniqueProductIds = ServicePackage::distinct()->pluck('product_id');
        $page_data['products'] = Product::whereIn('id', $uniqueProductIds)->get();

        $page_data['page_title'] = 'Service Manager';
        $page_data['tab'] = $param;
        $page_data['service_package'] ='active';
        $page_data['file_name'] = 'service_packages';
        return view('superadmin.navigation', $page_data);
    }

    public function service_package_create(Request $request)
    {
        $page_data = array();

        if(!empty($request->all()))
        {
            $data['product_id'] = $request->product_id;
            $data['name'] = $request->name;
            $data['price'] = $request->price;
            $data['discounted_price'] = $request->discounted_price;
            $data['visibility'] = $request->visibility;

            $data['services'] = json_encode(array_filter($request->features));

            ServicePackage::create($data);

            return redirect()->back()->with('message', 'Service created successfully.');
        }

        $page_data['products'] = Product::where('visibility', 1)->get();

        return view('superadmin.service_package_add', $page_data);
    }

    public function service_package_update(Request $request, $id) {
        $page_data = array();

        if(!empty($request->all()))
        {
            $data['product_id'] = $request->product_id;
            $data['name'] = $request->name;
            $data['price'] = $request->price;
            $data['discounted_price'] = $request->discounted_price;
            $data['visibility'] = $request->visibility;

            $data['services'] = json_encode(array_filter($request->features));

            ServicePackage::where('id', $id)->update($data);

            return redirect()->back()->with('message', 'Service updated successfully.');
        }

        $service = ServicePackage::find($id);
        $page_data['service_details'] = $service;
        $page_data['products'] = Product::where('visibility', 1)->get();
        
        // Decode the services JSON and pass it to the view
        $featureList = json_decode($service->services, true);
        $page_data['services'] = $featureList;

        return view('superadmin.service_package_edit', $page_data);
    }

    public function service_package_remove($id = "") 
    {
        $service = ServicePackage::find($id);
        $service->delete();

        return redirect()->back()->with('message','Service deleted successfully.');
    }

    public function services($param = "")
    {
        $page_data = array();

        if(empty($param)){
            $service_details = Service::first();
            $param = $service_details->service_to_product->slug;
        }

        $uniqueProductIds = Service::distinct()->pluck('product_id');
        $page_data['products'] = Product::whereIn('id', $uniqueProductIds)->get();

        $page_data['page_title'] = 'Service List';
        $page_data['tab'] = $param;
        $page_data['service'] ='active';
        $page_data['file_name'] = 'services';
        return view('superadmin.navigation', $page_data);
    }

    public function service_create(Request $request)
    {
        $page_data = array();

        if(!empty($request->all()))
        {
            $data['product_id'] = $request->product_id;
            $data['name'] = $request->name;
            $data['price'] = $request->price;
            $data['note'] = $request->note;

            Service::create($data);

            return redirect()->back()->with('message', 'Service created successfully.');
        }

        $page_data['products'] = Product::where('visibility', 1)->get();

        return view('superadmin.service_add', $page_data);
    }

    public function service_update(Request $request, $id) {
        $page_data = array();

        if(!empty($request->all()))
        {
            $data['product_id'] = $request->product_id;
            $data['name'] = $request->name;
            $data['price'] = $request->price;
            $data['note'] = $request->note;

            Service::where('id', $id)->update($data);

            return redirect()->back()->with('message', 'Service updated successfully.');
        }

        $service = Service::find($id);
        $page_data['service_details'] = $service;
        $page_data['products'] = Product::where('visibility', 1)->get();

        return view('superadmin.service_edit', $page_data);
    }

    public function service_remove($id = "") 
    {
        $service = Service::find($id);
        $service->delete();

        return redirect()->back()->with('message','Service deleted successfully.');
    }

    public function ad_network()
    {
        $page_data = array();
        $page_data['ads'] = Ad::paginate(10);
        $page_data['ad_dimensions'] = AdDimension::all();
        $page_data['products'] = Product::all();
        $page_data['page_title'] = get_phrase('Ad Network');
        $page_data['ad_network'] ='active';
        $page_data['file_name'] = 'ad_network';
        return view('superadmin.navigation', $page_data);
    }

    public function ad_create(Request $request)
    {
        $page_data = array();

        if(!empty($request->all())) {
            $data['title'] = $request->title;
            $data['product_id'] = $request->product_id;
            $data['ad_dimension_id'] = $request->ad_dimension_id;
            $data['short_description'] = $request->short_description;
            $data['ad_type'] = $request->ad_type;
            $data['link_to_click'] = $request->link_to_click;
            $data['status'] = 1;

            if(!empty($request->ad_image)){

                $thumbnailName = random(15).'.'.$request->ad_image->extension();
    
                $request->ad_image->move(public_path('uploads/thumbnails/ad/'), $thumbnailName);
    
                $data['ad_image'] = $thumbnailName;
            }

            Ad::create($data);

            return redirect()->back()->with('message','Ad created successfully');

        }
        
        $page_data['ad_dimensions'] = AdDimension::all();
        $page_data['products'] = Product::all();
        return view('superadmin.ad_create', $page_data);
    }

    public function ad_edit(Request $request, $id="")
    {
        $page_data = array();

        $page_data['ad_details'] = Ad::find($id);

        if(!empty($request->all())) {
            $data['title'] = $request->title;
            $data['product_id'] = $request->product_id;
            $data['ad_dimension_id'] = $request->ad_dimension_id;
            $data['short_description'] = $request->short_description;
            $data['ad_type'] = $request->ad_type;
            $data['link_to_click'] = $request->link_to_click;
            $data['status'] = 1;

            if(!empty($request->ad_image)){

                $thumbnailPathName = 'public/uploads/thumbnails/ad/' . $page_data['ad_details']->ad_image;

                if(file_exists($thumbnailPathName)){
                    unlink($thumbnailPathName);
                }

                $thumbnailName = random(15).'.'.$request->ad_image->extension();
    
                $request->ad_image->move(public_path('uploads/thumbnails/ad/'), $thumbnailName);
    
                $data['ad_image'] = $thumbnailName;
            } else {
                $data['ad_image'] = $page_data['ad_details']->ad_image;
            }

            Ad::where('id', $id)->update($data);

            return redirect()->back()->with('message','Ad updated successfully.');
        }

        $page_data['products'] = Product::all();
        $page_data['ad_dimensions'] = AdDimension::all();
        return view('superadmin.ad_edit', $page_data);
    }

    public function ad_delete($id="")
    {
        $ad = Ad::find($id);

        $thumbnailPathName = 'public/uploads/thumbnails/ad/' . $ad->ad_image;

        if(file_exists($thumbnailPathName)){
            unlink($thumbnailPathName);
        }

        $ad->delete();
        return redirect()->back()->with('message','Ad deleted successfully.');
    }

    /**
     * THIS FUNCTION IS RESPONSIBLE FOR SHOWING ALL THE ARTICLE\
     */
    public function select_article_to_export($product_slug = "")
    {
        $page_data = array();
        $product_details = Product::where('slug', $product_slug)->first();
        $page_data['product_id'] = $product_details->id;
        if ($product_details->count() > 0) {

            //Get topics
            $page_data['all_topics'] = Topic::where('product_id', $product_details->id)->where('visibility', 1)->orderBy('order', 'asc')->get();

            return view('superadmin.select_article_to_export', $page_data);

        } else {
            return false;
        }
    }

    /**
     * Download Documentation file as pdf
     **/
    public function export_documentation(Request $request, $product_id = "")
    {
        if(!empty($request->all())) {
            $selected_topic_ids = $request->selected_topic_id;

            $page_data['topics'] = Topic::whereIn('id', $selected_topic_ids)->where('visibility', 1)->orderBy('order', 'asc')->get();


            $page_data['product'] = Product::where('id', $product_id)->first();

            $pdf = PDF::loadView('superadmin.documentation_pdf_view', $page_data)->setPaper('a4', 'landscape');

            $date_time = $date = date('d-m-y-h-i-s');
            $path = 'public/downloads';
            $fileName =  $date_time . '.' . 'pdf' ;
            $pdf->save($path . '/' . $fileName);
            $url = $path . '/' . $fileName;

            return $fileName;
        } else {
            return redirect()->back()->with('error','Select topics to download.');
        }
        
    }

    public function projects($param="")
    {
        if(empty($param)){
            $param = "active";
        }
        $page_data = array();
        $page_data['projects'] = Project::where('status', $param)->paginate(10);
        $page_data['page_title'] = 'Projects';
        $page_data['project'] = 'active';
        $page_data['tab'] = $param;
        $page_data['active'] = Project::where('status', 'active')->count();
        $page_data['pending'] = Project::where('status', 'pending')->count();
        $page_data['archive'] = Project::where('status', 'archive')->count();

        $page_data['file_name'] = 'projects';

        return view('superadmin.navigation', $page_data);
    }

    public function project_details($id = "")
    {
        $page_data = array();
        $page_data['project_details'] = Project::find($id);
        $page_data['online_meetings'] = OnlineMeeting::where('project_id', $id)->orderBy('timestamp', 'asc')->get();
        $page_data['payment_milestones'] = PaymentMilestone::where('project_id', $id)->orderBy('id', 'desc')->get();
        $page_data['page_title'] = 'Project Details';
        $page_data['project']='active';
        $page_data['file_name'] = 'project_details';

        return view('superadmin.navigation', $page_data);
    }

    public function project_create(Request $request)
    {
        $page_data = array();
        $attachments_name = array();
        $attachements = array();

        if(!empty($request->all())) {
            $validated = $request->validate([
                'title' => 'required',
                'description' => 'required',
                'budget_estimation' => 'required',
                'timeline' => 'required'
            ]);

            $data = $request->all();

            $page_data['title'] = $data['title'];
            $page_data['description'] = $data['description'];
            $page_data['budget_estimation'] = $data['budget_estimation'];
            $page_data['timeline'] = $data['timeline'];
            $page_data['user_id'] = $data['user_id'];
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
                $page_data['attachment_name'] = json_encode(array("thumbnail.png"));
                $page_data['attachment'] = json_encode(array("thumbnail.png"));
            }

            // print_r($page_data);
            // die();

            Project::create($page_data);

            return redirect()->route('superadmin.projects')->with('message', 'Project created successfully');

        }

        $page_data['users'] = User::where('role_id', 6)->get();
        $page_data['page_title'] = 'Project Create';
        $page_data['project_create']='active';
        $page_data['file_name'] = 'project_add';
        return view('superadmin.navigation', $page_data);
    }

    public function project_edit(Request $request, $id = "")
    {
        $page_data = array();
        $project_details = Project::find($id);

        $attachments = json_decode($project_details->attachment);
        $attachments_name = json_decode($project_details->attachment_name);

        if(!empty($request->all())) {
            $validated = $request->validate([
                'title' => 'required',
                'description' => 'required',
                'budget_estimation' => 'required',
                'timeline' => 'required'
            ]);

            $data = $request->all();

            $page_data['title'] = $data['title'];
            $page_data['description'] = $data['description'];
            $page_data['budget_estimation'] = $data['budget_estimation'];
            $page_data['timeline'] = $data['timeline'];
            $page_data['project_price'] = $data['project_price'];
            if(isset($data['project_deadline'])) {
                $page_data['project_deadline'] = strtotime($data['project_deadline']);
            }
            $page_data['user_id'] = $project_details->user_id;
            $page_data['status'] = $data['status'];
            $page_data['completion_progress'] = $data['completion_progress'];
            $page_data['paid_amount'] = $project_details->paid_amount;
            
            if(!empty($data['attachment']))
            {
                array_push($attachments_name, $data['attachment']->getClientOriginalName());
                $page_data['attachment_name'] = json_encode($attachments_name);

                if (!File::exists(public_path('uploads/projects'))) {
                    File::makeDirectory(public_path('uploads/projects'));
                }

                $attachment = time().'-'.random(2).'.'.$data['attachment']->extension();
    
                $data['attachment']->move(public_path('uploads/projects/'), $attachment);

                array_push($attachments, $attachment);
                $page_data['attachment'] = json_encode($attachments);

            } else {
                $page_data['attachment_name'] = $project_details->attachment_name;
                $page_data['attachment'] = $project_details->attachment;
            }

            Project::where('id', $id)->update($page_data);

            return redirect('/superadmin/project_details/'.$id)->with('message', 'Project updated successfully');

        }

        $page_data['project_details'] = $project_details;
        $page_data['page_title'] = 'Update Project';
        $page_data['project']='active';
        $page_data['file_name'] = 'project_edit';
        return view('superadmin.navigation', $page_data);
    }

    public function project_remove($id="")
    {
        $meeting = Project::find($id);
        $meeting->delete();

        return redirect()->back()->with('message', 'Project removed successfully');
    }

    public function create_project_meeting(Request $request, $id)
    {
        $page_data = array();

        $project_details = Project::find($id);

        if(!empty($request->all())) {
            $validated = $request->validate([
                'medium' => 'required',
                'timestamp' => 'required',
                'link' => 'required',
            ]);

            $data = $request->all();

            $page_data['medium'] = $data['medium'];
            $page_data['timestamp'] = strtotime($data['timestamp']);
            $page_data['link'] = $data['link'];
            $page_data['customer_id'] = $project_details->user_id;
            $page_data['project_id'] = $id;

            OnlineMeeting::create($page_data);

            return redirect('/superadmin/project_details/'.$id)->with('message', 'Meeting created successfully');
        }

        $page_data['project_id'] = $id;

        return view('superadmin.create_project_meeting', $page_data);
    }

    public function remove_meeting($project_id = "", $meeting_id = "")
    {
        $meeting = OnlineMeeting::find($meeting_id);
        $meeting->delete();

        return redirect('/superadmin/project_details/'.$project_id)->with('message', 'Meeting removed successfully');
    }

    public function create_payment_milestone(Request $request, $id)
    {
        $page_data = array();

        $project_details = Project::find($id);

        if(!empty($request->all())) {
            $validated = $request->validate([
                'status' => 'required',
                'amount' => 'required',
            ]);

            $data = $request->all();

            $page_data['status'] = $data['status'];
            $page_data['amount'] = $data['amount'];
            $page_data['user_id'] = $project_details->user_id;
            $page_data['project_id'] = $id;

            PaymentMilestone::create($page_data);

            return redirect('/superadmin/project_details/'.$id)->with('message', 'Payment Milestone created successfully');
        }

        $page_data['project_id'] = $id;

        return view('superadmin.create_payment_milestone', $page_data);
    }

    public function milestone_invoice($milestone_id="")
    {
        $page_data = array();
        $page_data['milestone_details'] = PaymentMilestone::find($milestone_id);
        $page_data['page_title'] = 'Milestone Invoice';
        $page_data['project']='active';
        $page_data['file_name'] = 'project_milestone_invoice';

        return view('superadmin.navigation', $page_data);
    }

    public function remove_milestone($project_id = "", $milestone_id = "")
    {
        $milestone = PaymentMilestone::find($milestone_id);
        $milestone->delete();

        return redirect('/superadmin/project_details/'.$project_id)->with('message', 'Milestone removed successfully');
    }

    public function download_attachment($project_id="", $key="")
    {
        $project_details = Project::find($project_id);
        // print_r($key);
        // die();

        $attachments = json_decode($project_details->attachment);
        $attachments_name = json_decode($project_details->attachment_name);

        $filepath = public_path('uploads/projects/'.$attachments[$key]);
        return response()->download($filepath, $attachments_name[$key], array('content-description'=> 'description'));
    }

    public function remove_attachment($project_id="", $key="")
    {
        $project_details = Project::find($project_id);

        $attachments = json_decode($project_details->attachment);
        $attachments_name = json_decode($project_details->attachment_name);

        $filePath = 'public/uploads/projects/' . $attachments[$key];

        if(file_exists($filePath)){
            unlink($filePath);
        }

        unset($attachments[$key]); 
        unset($attachments_name[$key]);

        $page_data['attachment'] = json_encode($attachments);
        $page_data['attachment_name'] = json_encode($attachments_name);

        Project::where('id', $project_id)->update($page_data);

        return redirect('/superadmin/project_details/'.$project_id)->with('message', 'Attachment removed successfully');

    }

    public function upload_attachment(Request $request, $project_id="")
    {
        $page_data = array();

        $project_details = Project::find($project_id);

        $attachments = json_decode($project_details->attachment);
        $attachments_name = json_decode($project_details->attachment_name);

        if(!empty($request->all()))
        {
            $data = $request->all();

            array_push($attachments_name, $data['attachment']->getClientOriginalName());
            $page_data['attachment_name'] = json_encode($attachments_name);

            if (!File::exists(public_path('uploads/projects'))) {
                File::makeDirectory(public_path('uploads/projects'));
            }

            $attachment = time().'-'.random(2).'.'.$data['attachment']->extension();

            $data['attachment']->move(public_path('uploads/projects/'), $attachment);

            array_push($attachments, $attachment);
            $page_data['attachment'] = json_encode($attachments);
        } else {
            $page_data['attachment_name'] = $project_details->attachment_name;
            $page_data['attachment'] = $project_details->attachment;
        }

        // print_r($page_data);
        // die();

        Project::where('id', $project_id)->update($page_data);

        return redirect('/superadmin/project_details/'.$project_id)->with('message', 'Attachment updated successfully');
    }

    public function user_create(Request $request)
    {
        $page_data = array();

        if(!empty($request->all())) {
            $validated = $request->validate([
                'name' => 'required',
                'email' => 'required',
                'password' => ['required', 'string', 'min:4'],
                'role_id' => 'required'
            ]);

            $data = $request->all();

            $page_data['name'] = $data['name'];
            $page_data['email'] = $data['email'];
            $page_data['password'] = Hash::make($data['password']);
            $page_data['role_id'] = $data['role_id'];

            User::create($page_data);

            return redirect()->route('superadmin.user_create')->with('message', 'User created successfully');

        }

        $page_data['roles'] = RolesAndPermission::all();
        $page_data['page_title'] = 'User Create';
        $page_data['user_create']='active';
        $page_data['file_name'] = 'user_create';
        return view('superadmin.navigation', $page_data);
    }

    public function seo_settings()
    {
        $page_data = array();

        $routes = SeoField::distinct()->pluck('route')->toArray();
        $columnsByRoute = [];
        $dbValues = [];

        foreach ($routes as $route) {
            $skipColumns = ['id', 'route'];
            $columns = array_diff(SeoField::where('route', $route)->first()->getColumnNames(), $skipColumns);

            $columnId = SeoField::where('route', $route)->value('id');
            $columnsByRoute[$route] = ['id' => $columnId, 'columns' => $columns];

            // Fetch the data for each route and store it in the $dbValues array
            $data = SeoField::where('route', $route)->first();
            if ($data) {
                foreach ($columns as $columnName) {
                    $dbValues[$route][$columnName] = $data->$columnName; // Assuming column names match the database columns
                }
            }
        }

        $page_data['columnsByRoute'] = $columnsByRoute;
        $page_data['dbValues'] = $dbValues;

        $page_data['page_title'] = 'Seo Settings';
        $page_data['seo']='active';
        $page_data['file_name'] = 'seo_settings';

        return view('superadmin.navigation', $page_data);
    }

    public function seo_settings_update(Request $request, $id)
    {
        $data = $request->all();

        unset($data['_token']);

            // print_r($data);
            // die();

        if(isset($data[$request->route]['og_image'])) {
            $originalFileName = $data[$request->route]['og_image']->getClientOriginalName();
            $destinationPath = 'uploads/og-image/';

            
            // Move the file to the destination path
            $data[$request->route]['og_image']->move($destinationPath, $originalFileName);

            $data[$request->route]['og_image'] = $originalFileName;
        }

        // Update other data in the database
        SeoField::where('id', $id)->update($data[$request->route]);

        return redirect()->back()->with('message', 'Updated successfully.');
    }

    public function package_list() 
    {
        $page_data['page_title'] = 'Price Manager';
        $page_data['packages'] = Package::all();
        $page_data['price_manager']='active';
        $page_data['file_name'] = 'pacakage_list';

        return view('superadmin.navigation', $page_data);
    }

    public function package_create(Request $request)
    {
        $page_data = array();

        if(!empty($request->all())){

            $data['name'] = $request->name;
            $data['price'] = $request->price;
            $data['discounted_price'] = $request->discounted_price;
            $data['stripe_package_id'] = $request->stripe_package_id;
            $data['interval'] = $request->interval;
            if(!empty($request->interval_period)) {
                $data['interval_period'] = $request->interval_period;
            }
            $data['visibility'] = $request->visibility;

            $data['feature_list'] = json_encode(array_filter($request->features));

            Package::create($data);

            return redirect()->back()->with('message', 'Package created successfully.');
        }

        return view('superadmin.package_add', $page_data);
    }

    public function package_update(Request $request, $id) {
        $page_data = array();

        if(!empty($request->all())){

            $data['name'] = $request->name;
            $data['price'] = $request->price;
            $data['discounted_price'] = $request->discounted_price;
            $data['stripe_package_id'] = $request->stripe_package_id;
            $data['interval'] = $request->interval;
            if(!empty($request->interval_period)) {
                $data['interval_period'] = $request->interval_period;
            }
            $data['visibility'] = $request->visibility;

            $data['feature_list'] = json_encode(array_filter($request->features));

            Package::where('id', $id)->update($data);

            return redirect()->back()->with('message', 'Package updated successfully.');
        }

        $package = Package::find($id);
        $page_data['package_details'] = $package;
        
        // Decode the feature_list JSON and pass it to the view
        $featureList = json_decode($package->feature_list, true);
        $page_data['feature_list'] = $featureList;

        return view('superadmin.package_edit', $page_data);
    }

    public function package_remove($id = "") 
    {
        $package = Package::find($id);
        $package->delete();

        return redirect()->back()->with('message','Package deleted successfully.');
    }

    function system_settings(Request $request) 
    {
        $page_data = array();
        $page_data['page_title'] = 'System Settings';
        $page_data['system']='active';
        $page_data['file_name'] = 'system_settings';

        $data = $request->all();

        if(!empty($request->all()))
        {

            unset($data['_token']);

            foreach ($data as $key => $value) {
                // print_r($key);
                // die();
                if(Setting::where('key', $key)->get()->count() > 0) {
                    Setting::where('key', $key)->update([
                        'value' => $value,
                    ]);
                } else {
                   Setting::create([
                        'key' => $key,
                        'value' => $value,
                    ]); 
                }
            }

            $page_data['system_settings'] = Setting::all();

            return redirect()->back()->with('message', 'Updated successfully.');
        } else {
            $page_data['system_settings'] = Setting::all();

            return view('superadmin.navigation', $page_data);
        }
    }

    function sitemap_settings(Request $request) 
    {
        $page_data = array();
        $page_data['page_title'] = 'Sitemap Settings';
        $page_data['sitemap_settings']='active';
        $page_data['file_name'] = 'sitemap';

        $data = $request->all();

        if(!empty($request->all()))
        {

            unset($data['_token']);

            Setting::where('key', 'sitemap_xml')->update([
                'value' => $request->sitemap_xml,
            ]);

            $page_data['sitemap'] = Setting::where('key', 'sitemap_xml')->first();

            return redirect()->back()->with('message', 'Updated successfully.');
        } else {
            $page_data['sitemap'] = Setting::where('key', 'sitemap_xml')->first();

            return view('superadmin.navigation', $page_data);
        }
    }

    // Elements
    public function element_categories() 
    {
        $page_data = array();

        $categories = ElementCategory::where('parent_id', null)->distinct()->pluck('name')->toArray();
        $columnsByName = [];
        $dbValues = [];

        foreach ($categories as $category) {
            $skipColumns = ['id', 'parent_id', 'order', 'created_at', 'updated_at'];
            $columns = array_diff(ElementCategory::where('name', $category)->first()->getColumnNames(), $skipColumns);

            $columnId = ElementCategory::where('name', $category)->value('id');
            $columnsByName[$category] = ['id' => $columnId, 'columns' => $columns];

            // Fetch the data for each category and store it in the $dbValues array
            $data = ElementCategory::where('name', $category)->first();
            if ($data) {
                foreach ($columns as $columnName) {
                    $dbValues[$category][$columnName] = $data->$columnName; // Assuming column names match the database columns
                }
            }
        }

        $page_data['columnsByName'] = $columnsByName;
        $page_data['dbValues'] = $dbValues;
        
        $page_data['page_title'] = 'Element Categories';
        $page_data['categories']='active';
        $page_data['sub_folder'] = 'elements';
        $page_data['file_name'] = 'category_list';

        return view('superadmin.navigation', $page_data);
    }






    //Elements
    public function element_products(Request $request)
    {
        $page_data = array();


        $query = ElementProduct::query();

        $filter = $request->all();

        if(isset($filter['element_category_id']))
        {
            $query->where('element_category_id', $filter['element_category_id']);

            $page_data['element_category_id'] = $filter['element_category_id'];
        }else {
            $page_data['element_category_id'] = "all";
        }

        if(isset($filter['search']))
        {
            $query->where('title', 'LIKE', "%{$filter['search']}%")
                ->orWhere('product_id', 'LIKE', "%{$filter['search']}%");

            $page_data['searched_word'] = $filter['search'];
        }else {
            $page_data['searched_word'] = "";
        }

        if(isset($filter['price_type']))
        {
            $query->where('price_type', $filter['price_type']);

            $page_data['price_type'] = $filter['price_type'];
        }else {
            $page_data['price_type'] = "all";
        }

        $page_data['element_products'] = $query->paginate(10);
        $page_data['element_products_count'] = ElementProduct::all();
        $page_data['subscriptions'] = Subscription::all();
        $page_data['element_categories'] = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();
        $page_data['page_title'] = 'Manage Product';
        $page_data['element_product'] = 'active';
        $page_data['sub_folder'] = 'elements';
        $page_data['file_name'] = 'products';

        return view('superadmin.navigation', $page_data);
    }

    public function product_create()
    {
        $page_data = array();
        

        $page_data['element_products'] = ElementProduct::all();
        $page_data['element_products_count'] = ElementProduct::all();
        $page_data['subscriptions'] = Subscription::all();
        $page_data['file_types'] = ElementFileType::all();
        $page_data['element_categories'] = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();
        $page_data['tags'] = Tag::orderBy('id', 'asc')->get();
        $page_data['page_title'] = 'Upload Product';
        $page_data['element_product'] = 'active';
        $page_data['sub_folder'] = 'elements';
        $page_data['file_name'] = 'product_add';
        return view('superadmin.navigation', $page_data);
    }

    public function upload_product(Request $request)
    {

        if(!empty($request->all())) {

            // $postfields['auth_token'] = 'fE3cXrIoW0ZlG70GVKz@BXyUB6aSMK#7e1EYcLVZWk';

            if(!empty($request->thumbnail))
            {
                $send_data['thumbnail'] = $request->thumbnail;
            }

            if(!empty($request->preview_thumbnails))
            {
                $preview_thumbnails = explode(',', $request->preview_thumbnails);
                $send_data['preview_thumbnails'] = json_encode($preview_thumbnails,JSON_FORCE_OBJECT);
            } else {
                $send_data['preview_thumbnails'] = '{}';
            }

            if(!empty($request->product_file))
            {
                $send_data['file'] = $request->product_file;
            }

            if(!empty($request->preview_video))
            {
                $send_data['preview_video'] = $request->preview_video;
            }

            if(!empty($request->file_3d))
            {
                $send_data['file_3d'] = $request->file_3d;
            }
            

            $file_types = implode(',', $request->file_types);
            $tags = implode(',', $request->tags);

            $send_data['title'] = $request->title;
            $send_data['summary'] = $request->summary;


            $dom = new \DomDocument();
            $dom->loadHtml($request->description, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);

            $send_data['description'] = $dom->saveHTML();

            $send_data['element_category_id'] = $request->element_category_id;
            $send_data['sub_category_id'] = $request->sub_category_id;
            $send_data['price_type'] = $request->price_type;
            $send_data['price'] = $request->price;
            $send_data['file_size'] = $request->file_size;
            $send_data['file_types'] = $file_types;
            $send_data['tag_ids'] = $tags;
            $send_data['product_id'] = $request->product_id;
            
            ElementProduct::create($send_data);

            return redirect()->route('element_products')->with('message','Product created successfully.');

        }
    }

    public function product_edit($product_id)
    {
        $page_data = array();
        

        $page_data['element_products_count'] = ElementProduct::all();
        $page_data['subscriptions'] = Subscription::all();
        $page_data['file_types'] = ElementFileType::all();
        $page_data['element_categories'] = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();
        $page_data['tags'] = Tag::orderBy('id', 'asc')->get();
        $page_data['product_details'] = ElementProduct::where('product_id', $product_id)->first();
        $page_data['sub_categories'] = ElementCategory::where('parent_id', $page_data['product_details']->element_category_id)->get();
        $page_data['page_title'] = 'Update Product';
        $page_data['element_product'] = 'active';
        $page_data['sub_folder'] = 'elements';
        $page_data['file_name'] = 'product_edit';
        return view('superadmin.navigation', $page_data);

    }

    public function update_product(Request $request, $product_id="")
    {
        if(!empty($request->all())) {

            // $postfields['auth_token'] = 'fE3cXrIoW0ZlG70GVKz@BXyUB6aSMK#7e1EYcLVZWk';

            if(!empty($request->thumbnail))
            {
                $send_data['thumbnail'] = $request->thumbnail;
            }

            if(!empty($request->preview_thumbnails))
            {
                $preview_thumbnails = explode(',', $request->preview_thumbnails);
                $preview_thumbnails = array_map('trim', $preview_thumbnails);
                $send_data['preview_thumbnails'] = json_encode($preview_thumbnails,JSON_FORCE_OBJECT);
            }

            if(!empty($request->product_file))
            {
                $send_data['file'] = $request->product_file;
            }

            if(!empty($request->preview_video))
            {
                $send_data['preview_video'] = $request->preview_video;
            }

            if(!empty($request->file_3d))
            {
                $send_data['file_3d'] = $request->file_3d;
            }

            

            $file_types = implode(',', $request->file_types);
            $tags = implode(',', $request->tags);

            $send_data['title'] = $request->title;
            $send_data['summary'] = $request->summary;
            
            $dom = new \DomDocument();
            $dom->loadHtml($request->description, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);

            $send_data['description'] = $dom->saveHTML();
            
            $send_data['element_category_id'] = $request->element_category_id;
            $send_data['sub_category_id'] = $request->sub_category_id;
            $send_data['price_type'] = $request->price_type;
            $send_data['price'] = $request->price;
            $send_data['file_size'] = $request->file_size;
            $send_data['file_types'] = $file_types;
            $send_data['tag_ids'] = $tags;

            ElementProduct::where('product_id', $product_id)->update($send_data);

            return redirect()->back()->with('message','Product updated successfully.');
        }
    }

    public function element_product_delete($id="")
    {
        $product = ElementProduct::find($id);
        $product->delete();

        return redirect()->back()->with('message', 'Product removed successfully');
    }

    public function subscription_list()
    {

        $page_data['subscriptions'] = Subscription::paginate(10);
        $page_data['element_products_count'] = ElementProduct::all();
        $page_data['element_categories'] = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();
        $page_data['page_title'] = 'Subscription List';
        $page_data['subscription'] = 'active';
        $page_data['sub_folder'] = 'elements';
        $page_data['file_name'] = 'subscription_list';

        return view('superadmin.navigation', $page_data);
    }

    public function category_wise_sub_category($parent_id="")
    {
        $categories = ElementCategory::get()->where('parent_id', $parent_id);
        $options = '<option value="">' . 'Select a sub category' . '</option>';
        foreach ($categories as $category) :
            $options .= '<option value="' . $category->id . '">' . $category->name . '</option>';
        endforeach;
        echo $options;
    }
}
