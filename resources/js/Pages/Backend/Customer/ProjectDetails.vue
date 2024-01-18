<script setup>
import Header from '../../../Components/Global/Header.vue';
import Footer from '../../../Components/Global/Footer.vue'
import Breadcrumb from '../../../Components/Backend/Breadcrumb.vue'
import MobileOffcanvas from '../../../Components/Backend/MobileOffcanvas.vue'
import Navigation from '../../../Components/Backend/Navigation.vue'
import { Link, useForm } from '@inertiajs/vue3';

const props = defineProps({
    project_details: Object,
    online_meetings: Array,
    payment_milestones: Array,
    attachments: Array,
});


const form = useForm({
  attachment: '',
});

const handleThumbnailChange = (event) => {
    // Update the form.attachment value when a file is selected
    form.attachment = event.target.files[0];
};

const submit = () => {
  form.post(route('customer.upload_attachment', { 'project_id': props.project_details.id }));
};

const formatDate = (timestamp) => {
    // Check if the date is null
    if (timestamp === null) {
        return null; // or return an empty string, depending on your requirements
    }

    const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
    const options = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};

const formatDateWithTime = (timestamp) => {
  const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

</script>

<template>
    <Header/>
    <Breadcrumb/>
    <MobileOffcanvas/>

    <section class="elements-section elements-section-2 breadcrumb-under">
        <div class="container">
            <div class="row justify-content-center">

                <!-- Left side -->
                <Navigation/>

                <!-- Right Side -->
                <div class="col-lg-9">
                    <!-- Title -->
                    <div class="user-project-title d-flex justify-content-between align-items-center flex-wrap g-10 mb-30 bd-r-5">
                        <h4 class="fz-20-sb-black">{{ project_details.title }}</h4>
                        <div class="d-flex align-items-center flex-wrap g-20">
                            <Link :href="route('customer.projects')" class="edit-project-back-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>
                                Back
                            </Link>
                        </div>
                        <button class="d-lg-none mobile-menu-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/menu-icon.svg'" alt="menu">
                        </button>
                    </div>
                    <!-- Project items -->
                    <div class="project-items row">
                        <div class="col-md-6">
                            <!-- UI Template -->
                            <div class="project-item mb-30">
                                <!-- Title -->
                                <div class="project-item-title">
                                    <h3 class="title">Description</h3>
                                </div>
                                <!-- Content -->
                                <div class="project-item-content" v-html="project_details.description"></div>
                            </div>
                            <!-- Project Price & Deadline -->
                            <div class="project-item">
                                <div class="project-price-deadline mb-10 d-flex flex-wrap g-10 align-items-center justify-content-between">
                                    <h4 class="fz-15-sb-black">Project Price:</h4>
                                    <p class="price-deadline">${{ project_details.project_price }}</p>
                                </div>
                                <div class="project-price-deadline d-flex flex-wrap g-10 align-items-center justify-content-between">
                                    <h4 class="fz-15-sb-black">Project Deadline:</h4>
                                    <p class="price-deadline">{{ formatDate(project_details.project_deadline) }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <!-- Discussion -->
                            <div v-if="online_meetings.length > 0" class="project-item mb-30">
                                <!-- Title -->
                                <div class="project-item-title">
                                    <h3 class="title">Discussion</h3>
                                </div>
                                <!-- Meeting History -->
                                <ul class="meeting-history">
                                    <li v-for="meeting in online_meetings" :key="meeting.id">
                                        <div class="mh-item active d-flex g-10 justify-content-between align-items-center">
                                            <div class="mh-date-media d-flex align-items-center g-20">
                                                <p class="fz-14-m-black">
                                                    {{ formatDateWithTime(meeting.timestamp) }}
                                                </p>
                                                <p class="media">{{ meeting.medium }}</p>
                                            </div>
                                            <a :href=" meeting.link " target="_blank" class="media-link" >
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <!-- Project File -->
                            <div class="project-item mb-30">
                                <!-- Title -->
                                <div class="project-item-title-2">
                                    <h3 class="title">Project File</h3>
                                </div>
                                <!-- File Upload -->
                                <form action="" @submit.prevent="submit">
                                    <input class="form-control enForm-control-file" type="file" name="attachment" id="attachment" @change="handleThumbnailChange">
                                    <button type="submit" class="edit-project-btn mt-20">Upload</button>
                                </form>
                                <div v-for="(attachment, index) in attachments" :key="attachment.id" class="file-name-action d-flex align-items-center justify-content-between">
                                    <p class="info">
                                        <span>{{ index+1 }}. </span>
                                        <a :href="route('customer.download_attachment', { 'project_id': project_details.id, 'key': index })">{{ attachment }}</a>
                                    </p>
                                    <!-- Dropdown -->
                                    <div class="project-item-dropdown project-item-dropdown-2">
                                        <button type="button" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path></svg>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a class="dropdown-item" href="#">Download</a>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item" :href="route('customer.remove_attachment',{ 'project_id': project_details.id, 'key': index })">
                                                    Delete
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!-- Payment Mileage -->
                            <div class="project-item">
                                <!-- Title -->
                                <div class="project-item-title">
                                    <h3 class="title">Payment Milestones</h3>
                                </div>
                                <!-- Table -->
                                <div class="table-responsive">
                                    <table class="table eTable eTable-project">
                                        <tbody>
                                            <tr v-for="milestone in payment_milestones" :key="milestone.id">
                                                <td>
                                                    <div class="min-w">
                                                    <p class="fz-15-sb-black">{{ milestone.title }}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="min-w">
                                                    <p class="fz-15-sb-black">${{ milestone.amount }}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="min-w">
                                                    <p class="status-btn" :class="milestone.status == 1 ? 'status-up' : 'status-down'">{{ milestone.status == 1 ? 'Paid' : 'Due' }}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div v-if="milestone.status == 0" class="min-w">
                                                        <div class="mh-item active d-flex g-10 justify-content-between">
                                                            <Link :href="route('customer.project_payment', { 'id': milestone.id})" class="media-link" >
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div v-else class="min-w">
                                                        <div class="d-flex g-10 justify-content-between">
                                                            <Link :href="route('customer.milestone_invoice', { 'milestone_id': milestone.id})" class="media-link" >
                                                                <img :src=" $page.props.base.url + '/public/assets/img/icon/invoice.svg'" alt="">
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!-- End Textual Inputs -->
        </div>
    </section>
    <!-- End Elements -->

    <Footer/>
</template>