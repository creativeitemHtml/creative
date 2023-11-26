<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\{User, Setting, ElementCategory};

class LmsController extends Controller
{
    public function index()
    {

        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();

        return Inertia::render('Frontend/Lms/Home', [
            'element_categories' => $element_categories,
        ]);
    }

    public function features()
    {
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();

        return Inertia::render('Frontend/Lms/Features', [
            'element_categories' => $element_categories,
        ]);
    }

    public function pricing()
    {
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();

        return Inertia::render('Frontend/Lms/Pricing', [
            'element_categories' => $element_categories,
        ]);
    }

    public function solution_course_selling()
    {
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();

        return Inertia::render('Frontend/Lms/SolutionCourseSelling', [
            'element_categories' => $element_categories,
        ]);
    }

    public function solution_training()
    {
        $element_categories = ElementCategory::where('parent_id', NULL)->orderBy('order', 'asc')->get();

        return Inertia::render('Frontend/Lms/SolutionTraining', [
            'element_categories' => $element_categories,
        ]);
    }
}
