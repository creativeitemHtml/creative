<script setup>
import Header from '../../../Components/Global/Header.vue';
import Footer from '../../../Components/Global/Footer.vue'
import Breadcrumb from '../../../Components/Backend/Breadcrumb.vue'
import MobileOffcanvas from '../../../Components/Backend/MobileOffcanvas.vue'
import Navigation from '../../../Components/Backend/Navigation.vue'
import { Link, useForm, usePage } from '@inertiajs/vue3';
import Toast from '@/Components/Global/Toast.vue';

const props = defineProps({
    element_categories: Array,
});

const user = usePage().props.auth.user;

const form = useForm({
    name: user.name,
    email: user.email,
    phone: user.phone,
    about: user.about,
    thumbnail: user.thumbnail,
});

const handleThumbnailChange = (event) => {
    // Update the form.thumbnail value when a file is selected
    form.thumbnail = event.target.files[0];
};

const submit = () => {
    form.post(route('customer.profile_update'));
};

const updatePassword = useForm({
    new_password: '',
    confirm_password: '',
    old_password: '',
});

const submitPass = () => {
    updatePassword.post(route('customer.password_change'), {
        onFinish: () => form.reset('new_password', 'confirm_password', 'old_password'),
    });
};

</script>

<template>
    <Header/>
    <Toast v-if="$page.props.flash" />
    <Breadcrumb/>
    <MobileOffcanvas/>

    <section class="elements-section elements-section-2 breadcrumb-under">
      <div class="container">
        <div class="row justify-content-center">

          <!-- Left side -->
          <Navigation/>

          <!-- Right side -->
          <div class="col-lg-9">
            <div class="subscription-main-wrap l_col_main mb-20">
              <div class="title-btn-menu-wrap d-flex justify-content-between align-items-center flex-wrap g-10 pb-30 mb-20">
                <h4 class="fz-20-sb-black">User Information</h4>
                <button class="d-lg-none mobile-menu-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                  <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/menu-icon.svg'" alt="menu">
                </button>
              </div>

              <!-- Product Upload Form Area -->
              <div class="bg-white pt-10 pb-10 ">
                <!-- Form -->
                <form @submit.prevent="submit">
                  <div class="nproject-form-wrap">
                    
                    <div class="pForm-wrap">
                        <label for="name" class="enForm-label">User Name</label>
                        <input
                            type="text"
                            class="form-control enForm-control"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            aria-label="Your name"
                            v-model="form.name"
                        />
                    </div>

                    <div class="pForm-wrap">
                        <label for="email" class="enForm-label" >Email</label>
                        <input id="email" type="email" class="form-control enForm-control" name="email" v-model="form.email" placeholder="Email" aria-label="Email" required/>
                    </div>

                    <div class="pForm-wrap">
                        <label for="phone" class="enForm-label">Phone</label>
                        <input
                            type="text"
                            class="form-control enForm-control"
                            id="phone"
                            name="phone"
                            placeholder="Your phone"
                            aria-label="Your phone"
                            v-model="form.phone"
                        />
                    </div>

                    <div class="pForm-wrap">
                        <label for="about" class="enForm-label">About</label>
                        <textarea class="form-control enForm-control" id="about" name="about" placeholder="About your project" v-model="form.about"></textarea>
                    </div>

                    <div class="pForm-wrap">
                        <label for="thumbnail" class="enForm-label">Thumbnail</label>
                        <input class="form-control enForm-control-file" type="file" name="thumbnail" id="thumbnail" @change="handleThumbnailChange">
                    </div>

                  </div>
                  <!-- Submit btn -->
                  <button type="submit" class="enproject-submit mt-5">
                    Submit
                    <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg></span>
                  </button>
                </form>
              </div>


            </div>

            <div class="subscription-main-wrap l_col_main">
              <div class="title-btn-menu-wrap d-flex justify-content-between align-items-center flex-wrap g-10 pb-30 mb-20">
                <h4 class="fz-20-sb-black">Change Password</h4>
              </div>

              <!-- Product Upload Form Area -->
              <div class="bg-white pt-10 pb-10 ">
                <!-- Form -->
                <form class="d-block ajaxForm" @submit.prevent="submitPass">
                  <div class="nproject-form-wrap">
                    
                    <div class="pForm-wrap">
                        <label for="new_password" class="enForm-label">New Password</label>
                        <input
                            type="password"
                            class="form-control enForm-control"
                            id="new_password"
                            name="new_password"
                            placeholder="New password"
                            v-model="updatePassword.new_password"
                        />
                    </div>

                    <div class="pForm-wrap">
                        <label for="confirm_password" class="enForm-label">Confirm Password</label>
                        <input
                            type="password"
                            class="form-control enForm-control"
                            id="confirm_password"
                            name="confirm_password"
                            placeholder="Confiem password"
                            v-model="updatePassword.confirm_password"
                        />
                    </div>

                    <div class="pForm-wrap">
                        <label for="old_password" class="enForm-label">Current Password</label>
                        <input
                            type="password"
                            class="form-control enForm-control"
                            id="old_password"
                            name="old_password"
                            placeholder="Current password"
                            v-model="updatePassword.old_password"
                        />
                    </div>

                  </div>
                  <!-- Submit btn -->
                  <button type="submit" class="enproject-submit mt-5">
                    Update
                    <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg></span>
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


    <Footer :elementCategories="element_categories"/>
</template>