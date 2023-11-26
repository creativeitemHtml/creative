<form method="POST" enctype="multipart/form-data" class="d-block ajaxForm" action="{{ route('superadmin.create_payment_milestone', ['id' => $project_id]) }}">
    @csrf
    <div class="formModal-body pb-20">
        <div class="input-wrap">
            <label for="status" class="eForm-label">{{ get_phrase('Payment Status') }}</label>
            <select class="custom-niceSelect niceSelect" id="status" name="status" data-placeholder="Type to search...">
                <option value="">{{ get_phrase('Select Status') }}</option>
                <option value="1">{{ get_phrase('Paid') }}</option>
                <option value="0">{{ get_phrase('Due') }}</option>
            </select>
        </div>

        <div class="input-wrap">
            <label for="amount" class="eForm-label">{{ get_phrase('Amount') }} ({{ currency() }})</label>
            <input type="number" class="form-control eForm-control" id="amount" name="amount" placeholder="Input payment amount" aria-label="Input payment amount" />
        </div>

        
    </div>
    <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-primary">{{ get_phrase('Create Milestone') }}</button>
    </div>
</form>

<script>
    $(document).ready(function () {
        $("select.niceSelect").niceSelect();
    });
</script>