@if(count($articles) > 0)
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="row" id="parent-div" data-plugin="dragula" data-containers='["article-list"]'>
                        <div class="col-md-12">
                            <div class="bg-dragula p-2 p-lg-4">
                                <h4 class="d-flex justify-content-between mt-0">{{ get_phrase('List of articles') }}
                                    <button type="button" class="btn btn-outline-primary btn-sm btn-rounded alignToTitle" id="article-sort-btn" onclick="sort('{{ $topic_id }}')" name="button">{{ get_phrase('Update sorting') }}</button>
                                </h4>
                                <div id="article-list" class="py-2">
                                    <div id="sortable">
                                        @foreach($articles as $article)
                                            <div class="card mb-0 mt-2 ui-state-default draggable-item w-100" id="{{ $article->id }}" style="cursor: pointer;">
                                                <div class="card-body">
                                                    <div class="media">
                                                        <div class="media-body">
                                                            <h6 class="mb-1 mt-0">{{ $article->article }}</h6>
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
    function sort(topic_id) {
        var containerArray = ['article-list'];
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

        var url = "{{ route('superadmin.sort_articles', ['topic_id' => ":topic_id"]) }}";
        url = url.replace(":topic_id", topic_id);
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
                // toastr.success('{{ get_phrase('Articles have been sorted') }}');
                $('.custom_success').addClass('active');
                $('.custom_success p').text('Articles have been sorted');
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
        $('#article-sort-btn').show();
    });
</script>