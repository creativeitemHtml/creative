@if(count($products) > 0)
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="row" id="parent-div" data-plugin="dragula" data-containers='["product-list"]'>
                        <div class="col-md-12">
                            <div class="bg-dragula p-2 p-lg-4">
                                <h4 class="d-flex justify-content-between mt-0">{{ get_phrase('List of products') }}
                                    <button type="button" class="btn btn-outline-primary btn-sm btn-rounded alignToTitle" id="product-sort-btn" onclick="sort()" name="button">{{ get_phrase('Update sorting') }}</button>
                                </h4>
                                <div id="product-list" class="py-2">
                                    <div id="sortable">
                                        @foreach($products as $product)
                                            <div class="card mb-0 mt-2 ui-state-default draggable-item w-100" id="{{ $product->id }}" style="cursor: pointer;">
                                                <div class="card-body">
                                                    <div class="media">
                                                        <div class="media-body">
                                                            <h6 class="mb-1 mt-0">{{ $product->name }}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@else
    @include('no_data_found')
@endif


<script type="text/javascript">
    "use strict";
    $( function() {
        $( "#sortable" ).sortable();
    });
    function sort() {
        var containerArray = ['product-list'];
        var itemArray = [];
        var itemJSON;
        for (var i = 0; i < containerArray.length; i++) {
            $('#' + containerArray[i]).each(function() {
                $(this).find('.draggable-item').each(function() {
                    console.log(this.id);
                    itemArray.push(this.id);
                });
            });
        }

        itemJSON = JSON.stringify(itemArray);
        console.log(itemJSON);

        var url = "{{ route('superadmin.sort_products') }}";
        console.log(url);
        $.ajax({
            url: url,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'POST',
            data: {
                itemJSON: itemJSON
            },
            success: function(response) {
                console.log(response);
                // toastr.success('{{ get_phrase('Products have been sorted') }}');
                $('.custom_success').addClass('active');
                $('.custom_success p').text('Products have been sorted');
                setTimeout(function() {
                    $('.custom_success').removeClass('active'); 
                }, 5000);

                setTimeout(
                    function() {
                        location.reload();
                    }, 1000);

            },
            error: function (xhr) {
                var err = JSON.parse(xhr.responseText);
                alert(err.message);
            }
        });
    }
    onDomChange(function() {
        $('#product-sort-btn').show();
    });
</script>