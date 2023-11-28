<script setup>
import Header from '../../../Components/Global/Header.vue'
import Footer from '../../../Components/Global/Footer.vue'
import LmsHeader from '../../../Components/Global/LmsHeader.vue'
import {Link, useForm, usePage } from '@inertiajs/vue3';
import { ref } from 'vue';

const page = usePage()

const form = useForm({
    company_lms: '',
    email: '',
    password: '',
    company_lms_lower: '',// Add captcha_token to the form
});

const domain = ref('https://creativeitem.com/');

const handleCompanyInputChange = () => {
    form.company_lms_lower = form.company_lms.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase();
};

const submit = () => {
    form.post(route('lms.register_company_lms'), {
        onFinish: () => form.reset('password'),
    });
};

const setCookie = () => {
  // document.cookie = "userhash=user-abc-4500;domain=.creativeitem.com"
  // cookies.set("userhash","user-abc-4500",null, null, ".creativeitem.com");
  document.cookie = "userhash="+ page.props.auth.auth_token + ";domain=.creativeitem.com";
  console.log( document.cookie )
};

</script>

<template>
    <Header/>
    <LmsHeader/>

    <!-- Start Main Content -->
    <section class="position-relative pt-80 mb-110">
      <div class="container">
        <div class="row align-items-center">
          <!-- Link & Hire us -->
          <div class="col-lg-7">
            <!-- Content -->
            <div class="hire-us-content">
              <h1 class="title">
                <span>Hire Us</span><br />
                for your project.
              </h1>
              <p class="sub-title">Turn Your Vision Into Reality With Our Custom Projects</p>
              <p class="info">Our experience is at your service, committed to creating customized projects and designs that effortlessly blend with your vision and needs. So contact us now to get a quotation!.</p>
              <!-- Hire info -->
              <ul class="hire-info">
                <li class="item">
                  <h4>24k+</h4>
                  <p>Client Serve</p>
                </li>
                <li class="item">
                  <h4>12+</h4>
                  <p>Years Experience</p>
                </li>
                <li class="item">
                  <h4>98%</h4>
                  <p>Customer Satisfaction</p>
                </li>
              </ul>
              <!-- Buttons -->
              <div v-if="$page.props.auth.user" class="buttons d-flex align-items-center">
                <a href="https://demo.creativeitem.com/website/cookie" target="_blank" class="bookMeeting" @click="setCookie">Onbording Stage</a>
              </div>
            </div>
          </div>
          <!-- Submit project -->
          <div v-if="!($page.props.auth.user)" class="col-lg-5">
            <div class="submit-project">
              <h4 class="title">Get Started With LMS</h4>
              <!-- Form -->
              <form class="project-form" @submit.prevent="submit">
                <div class="project-form-wrap">
                  <div class="pForm-wrap">
                    <input type="text" class="form-control eForm-control" id="company_lms" name="company_lms" placeholder="Your Company Name" aria-label="Your Company Name" v-model="form.company_lms" @input="handleCompanyInputChange" />
                  </div>
                  <div class="pForm-wrap">
                    <input type="email" class="form-control  eForm-control" id="email" placeholder="username@gmail.com" v-model="form.email">
                  </div>
                  <div class="pForm-wrap">
                    <input type="password" class="form-control eForm-control" id="password" placeholder="Enter password" v-model="form.password">
                  </div>
                  <div class="pForm-wrap">
                    Domain:
                    {{ domain + form.company_lms_lower }}
                  </div>
                </div>
                <button type="submit" class="project-submit">
                  Submit
                  <img :src=" $page.props.base.url + '/public/assets/img/icon/right-white-arrow.svg'" alt="">
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Main Content -->
    
    <Footer/>
</template>