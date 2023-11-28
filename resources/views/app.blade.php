<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        @include('seo')

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Favicon -->
        <link rel="shortcut icon" href="{{ asset('public/assets/img/favicon.png') }}" type="image/x-icon" />
        <!-- Bootstrap CSS -->
        <link href="{{ asset('public/assets/css/bootstrap.min.css') }}" rel="stylesheet" />
        <!-- Swiper -->
        <link rel="stylesheet" href="{{ asset('public/assets/vendors/swiper/swiper-bundle.min.css') }}" />
        <!-- Nice select -->
        <link rel="stylesheet" href="{{ asset('public/assets/vendors/nice-select/nice-select.css') }}" />
        <!-- Venobox img -->
        <link rel="stylesheet" href="{{ asset('public/assets/vendors/venobox/venobox.min.css') }}" type="text/css" media="screen" />
        <!-- Video Player -->
        <link rel="stylesheet" href="{{ asset('public/assets/vendors/plyr/plyr.css') }}" />
        <!-- Aos Animation -->
        <link rel="stylesheet" href="{{ asset('public/assets/vendors/aos/aos.css') }}" />
        <!-- Custom Css -->
        <link href="{{ asset('public/assets/css/global-style.css') }}" rel="stylesheet" />
        <link href="{{ asset('public/assets/css/home.css') }}" rel="stylesheet" />
        <link href="{{ asset('public/assets/css/web-application.css') }}" rel="stylesheet" />
        <link href="{{ asset('public/assets/css/blog.css') }}" rel="stylesheet" />
        <link href="{{ asset('public/assets/css/documentation.css') }}" rel="stylesheet" />
        <link href="{{ asset('public/assets/css/service.css') }}" rel="stylesheet" />
        <link href="{{ asset('public/assets/css/signup.css') }}" rel="stylesheet" />
        <link href="{{ asset('public/assets/css/privacy.css') }}" rel="stylesheet" />

        <link href="{{ asset('public/assets/css/element-header.css') }}" rel="stylesheet" />
        <link href="{{ asset('public/assets/css/element-details.css') }}" rel="stylesheet" />
        <link href="{{ asset('public/assets/css/element-home.css') }}" rel="stylesheet" />
        <link href="{{ asset('public/assets/css/element-user.css') }}" rel="stylesheet" />
        <link href="{{ asset('public/assets/css/promotion.css') }}" rel="stylesheet" />
        <link href="{{ asset('public/assets/css/element-pricing.css') }}" rel="stylesheet" />
        <link href="{{ asset('public/assets/css/lms-main.css') }}" rel="stylesheet" />
        <link href="{{ asset('public/assets/css/custom.css') }}" rel="stylesheet" />
        <!-- Recaptcha -->
        <!-- <script src="https://www.google.com/recaptcha/api.js"></script> -->
        <script src="{{ asset('assets/vendors/recaptcha/api.js') }}" async defer></script>

        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia

        @include('global.zendesk_widget')

        <script src="{{ asset('public/assets/js/jquery.min.js') }}"></script>
        <script src="{{ asset('public/assets/js/bootstrap.bundle.min.js') }}"></script>
        <script src="{{ asset('public/assets/vendors/swiper/swiper-bundle.min.js') }}"></script>
        <script src="{{ asset('public/assets/vendors/nice-select/jquery.nice-select.min.js') }}"></script>
        <script src="{{ asset('public/assets/vendors/venobox/venobox.min.js') }}"></script>
        <script src="{{ asset('public/assets/vendors/plyr/plyr.js') }}"></script>
        <script src="{{ asset('public/assets/js/promotion.js') }}"></script>
        <script src="{{ asset('public/assets/vendors/rcounterup/jquery.waypoints.js') }}"></script>
        <script src="{{ asset('public/assets/vendors/rcounterup/jquery.rcounterup.js') }}"></script>
        <script src="{{ asset('public/assets/vendors/rcounterup/rcounterup-active.js') }}"></script>
        <script src="{{ asset('public/assets/vendors/aos/aos.js') }}"></script>
        <script src="{{ asset('public/assets/vendors/aos/aos-active') }}"></script>
        <script src="{{ asset('public/assets/js/new-script.js') }}"></script>
  </body>
</html>
