    <!-- js -->
    <script src="{{ asset('public/assets/js/jquery.min.js') }}"></script>
    <script src="{{ asset('public/assets/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('public/assets/vendors/nice-select/jquery.nice-select.min.js') }}"></script>
    <script src="{{ asset('assets/vendors/tinyeditor/tinymce.min.js') }}" referrerpolicy="origin"></script>
    <script src="{{ asset('assets/vendors/tinyeditor/active.js') }}"></script>
    <script src="{{ asset('public/assets/vendors/tagify/jQuery.tagify.min.js') }}"></script>
    <script src="{{ asset('public/assets/vendors/chosen/chosen.jquery.min.js') }}"></script>
    <script src="{{ asset('public/assets/vendors/select2/select2.min.js') }}"></script>
    <script src="{{ asset('public/assets/js/new-script.js') }}"></script>

    <!--Toaster Script-->
    <script src="{{ asset('public/assets/js/toastr.min.js') }}"></script>

    <script>

        "use strict";
        
        @if(Session::has('message'))
            toastr.options =
            {
                "closeButton" : true,
                "progressBar" : true
            }
            toastr.success("{{ session('message') }}");
		@endif

		@if(Session::has('error'))
            toastr.options =
            {
                "closeButton" : true,
                "progressBar" : true
            }
            toastr.error("{{ session('error') }}");
		@endif

		@if(Session::has('info'))
            toastr.options =
            {
                "closeButton" : true,
                "progressBar" : true
            }
            toastr.info("{{ session('info') }}");
		@endif

		@if(Session::has('warning'))
            toastr.options =
            {
                "closeButton" : true,
                "progressBar" : true
            }
            toastr.warning("{{ session('warning') }}");
		@endif
    </script>