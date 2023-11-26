<form method="POST" enctype="multipart/form-data" class="d-block ajaxForm" action="{{ route('superadmin.create_project_meeting', ['id' => $project_id]) }}">
    @csrf
    <div class="formModal-body pb-20">
        <div class="input-wrap">
            <label for="medium" class="eForm-label">{{ get_phrase('Medium') }}</label>
            <select class="custom-niceSelect niceSelect" id="medium" name="medium" data-placeholder="Type to search...">
                <option value="">{{ get_phrase('Select Medium') }}</option>
                <option value="skype">{{ get_phrase('Skype') }}</option>
                <option value="zoom">{{ get_phrase('Zoom') }}</option>
                <option value="google_meet">{{ get_phrase('Google Meet') }}</option>
            </select>
        </div>

        <div class="input-wrap">
            <label for="timestamp" class="eForm-label">{{ get_phrase('Date & Time') }}</label>
            <input type="datetime-local" class="form-control eForm-control" id="timestamp" name="timestamp" value="12:17"/>
        </div>

        <div class="input-wrap">
            <label for="link" class="eForm-label">{{ get_phrase('Meeting Link') }}</label>
            <input type="text" class="form-control eForm-control" id="link" name="link" placeholder="https://skype.com" aria-label="https://skype.com" />
        </div>
    </div>
    <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-primary">{{ get_phrase('Create Meeting') }}</button>
    </div>
</form>

<script>
    $(document).ready(function () {
        $("select.niceSelect").niceSelect();
    });
</script>