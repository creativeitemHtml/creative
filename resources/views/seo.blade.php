<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge" />

    @php

    // Setting default value
    $page_type = isset($page_type) ? $page_type : '';
    $meta_title = isset($seo['meta_title']) ? $seo['meta_title'] : '';
    $meta_description = isset($seo['meta_description']) ? $seo['meta_description'] : '';
    $meta_keywords = isset($seo['meta_keywords']) ? $seo['meta_keywords'] : '';
    $meta_robot = isset($seo['meta_robot']) ? $seo['meta_robot'] : '';
    $canonical_url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $custom_url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $og_title = isset($seo['og_title']) ? $seo['og_title'] : '';
    $og_description = isset($seo['og_description']) ? $seo['og_description'] : '';
    $og_image = isset($seo['og_image']) ? $seo['og_image'] : '';
    $json_ld = isset($seo['json_ld']) ? $seo['json_ld'] : '';
    
    @endphp


    <title>{{ $meta_title }}</title>
    <meta name="keywords" content="{{ $meta_keywords }}">
    <meta name="description" content="{{ $meta_description }}">
    <meta name="robot" content="{{ $meta_robot }}">
    <link rel="canonical" href="{{ $canonical_url }}" />
    <link rel="custom" href="{{ $custom_url }}" />
    <meta name="author" content="Creativeitem">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-title" content="Creativeitem - We provide smart solutions for your business.">

    {!! $json_ld !!}

    <meta property="og:title" content="{{ $og_title }}" />
    <meta property="og:description" content="{{ $og_description }}" />
    <meta property="og:image" content="{{ $og_image }}" />

