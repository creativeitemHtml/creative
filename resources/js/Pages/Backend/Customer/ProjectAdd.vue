<script setup>
import Header from '../../../Components/Global/Header.vue';
import Footer from '../../../Components/Global/Footer.vue'
import Breadcrumb from '../../../Components/Backend/Breadcrumb.vue'
import MobileOffcanvas from '../../../Components/Backend/MobileOffcanvas.vue'
import Navigation from '../../../Components/Backend/Navigation.vue'
import { Link, useForm } from '@inertiajs/vue3';

const form = useForm({
  title: '',
  description: '',
  budget_estimation: '',
  timeline: '',
  attachment: '',
});

const handleThumbnailChange = (event) => {
    // Update the form.attachment value when a file is selected
    form.attachment = event.target.files[0];
};

const submit = () => {
    form.post(route('customer.project_create'));
};

// $(document).ready(function () {
//     $('.enForm-nice-select').niceSelect();
// });

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
                        <h4 class="fz-20-sb-black">Project Create</h4>
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

                    <div class="l_col_main">
                        <!-- Product Upload Form Area -->
                        <div class="bg-white pt-26 pb-30 ">
                            <form @submit.prevent="submit"  class="d-block ajaxForm">
                                <div class="nproject-form-wrap">

                                    <div class="pForm-wrap">
                                        <label for="title" class="enForm-label">Project Title</label>
                                        <input
                                            type="text"
                                            class="form-control enForm-control"
                                            id="title"
                                            name="title"
                                            placeholder="Your Project Title"
                                            aria-label="Your Project Title"
                                            v-model="form.title"
                                        />
                                    </div>

                                    <!-- Editor -->
                                    <div class="pForm-wrap">
                                        <label for="description" class="enForm-label">Description</label>
                                        <textarea class="form-control enForm-control" id="description" name="description" placeholder="About your project" v-model="form.description"></textarea>
                                    </div>

                                    <div class="pForm-wrap">
                                        <label for="budget_estimation" class="enForm-label" >Project budget($)</label>
                                        <select
                                            class="enForm-select enForm-nice-select"
                                            id="budget_estimation"
                                            name="budget_estimation"
                                            v-model="form.budget_estimation"
                                        >
                                            <option value="">Select Budget</option>
                                            <option value="$500 - $1000">$500 - $1000</option>
                                            <option value="$1000 - $3000">$1000 - $3000</option>
                                            <option value="$3000 - $10000">$3000 - $10000</option>
                                            <option value="over $10000">Over $10000</option>
                                        </select>
                                    </div>
                                
                                    <div class="pForm-wrap">
                                        <label for="timeline" class="enForm-label">Timeline</label>
                                        <select
                                            class="enForm-select enForm-nice-select"
                                            id="timeline"
                                            name="timeline"
                                            v-model="form.timeline"
                                        >
                                            <option value="">Select time</option>
                                            <option value="2 Weeks">2 Weeks</option>
                                            <option value="4 Weeks">4 Weeks</option>
                                            <option value="8 Weeks">8 Weeks</option>
                                            <option value="12 Weeks">12 Weeks</option>
                                            <option value="continuos">Continuos development</option>
                                        </select>
                                    </div>

                                    <div class="pForm-wrap">
                                        <label for="attachment" class="enForm-label">Attachment</label>
                                        <input class="form-control enForm-control-file" type="file" name="attachment" id="attachment" @change="handleThumbnailChange">
                                    </div>
                                </div>
                                <button type="submit" class="enproject-submit mt-5">
                                    Submit
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/>
                                        </svg>
                                    </span>
                                </button>
                            </form>
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