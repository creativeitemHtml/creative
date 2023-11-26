<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\{ElementProduct, ElementCategory};

class ApiController extends Controller
{
    public function category_wise_elements($slug = "")
    {
        $element_category = ElementCategory::where('slug', $slug)->first();

        $elements = ElementProduct::where('element_category_id', $element_category->id)->orderBy('id', 'desc')->take(16)->get();

        foreach($elements as $key => $element)
        {
            $res[$key]['id'] = $element->id;
            $res[$key]['product_id'] = $element->product_id;
            $res[$key]['element_category_id'] = $element->element_category_id;
            $res[$key]['title'] = $element->title;
            $res[$key]['price_type'] = $element->price_type;
            $res[$key]['price'] = $element->price;
            $res[$key]['thumbnail'] = element_server_url($element->product_id, $element->product_to_elementCategory->slug).$element->thumbnail;
            
        }

        $elements = $res;

        if (empty($elements)) {
            return response()->json(['status' => 'failed', 'message' => 'No data found'], 404);
        }

        return new JsonResponse(['status' => 'success', 'data' => $elements], 200);
    }
}