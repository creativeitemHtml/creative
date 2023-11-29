<script setup>
import Header from '../../../Components/Global/Header.vue'
import Footer from '../../../Components/Global/Footer.vue'
import LmsHeader from '../../../Components/Global/LmsHeader.vue'
import {Link, useForm } from '@inertiajs/vue3';

const form = useForm({
    name: '',
    email: '',
    password: '',
});


// const submit = () => {
//     form.post(route('lms.register_company_lms'), {
//         onFinish: () => form.reset('password'),
//     });
// };

const submit = async () => {
  try {
    const response = await fetch(route('lms.register_company_lms'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    });

    if (!response.ok) {
      throw new Error('Form submission failed');
    }

    const data = await response.json();
    // Assuming the response contains authentication information
    const token = data.token;

    // You may want to update authentication state in your application
    // $store.commit('auth/setUser', user);

    // Remove the form and display the onboarding link
    $emit('successful-submission', user);
  } catch (error) {
    console.error('Form submission failed:', error);
    // Handle errors if necessary
  }
};

const setCookie = () => {
  // document.cookie = "userhash=user-abc-4500;domain=.creativeitem.com"
  // cookies.set("userhash","user-abc-4500",null, null, ".creativeitem.com");
  // document.cookie = "userhash="+ page.props.auth.auth_token + ";domain=.creativeitem.com";
  document.cookie = "userhash=user-abc-4500;domain=.creativeitem.com"
  console.log( document.cookie )
};

// function test() {
//   document.cookie = "user_token=user-abc-5500;domain=.creativeitem.com"
//   console.log( document.cookie )
// }

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
              <!-- <button type="button" @click="test">Test cookie</button> -->
              <!-- Buttons -->
              <div v-if="$page.props.auth.user" class="buttons d-flex align-items-center">
                <a :href="`https://lms.creativeitem.com?user_id=${$page.props.auth.auth_token}`" target="_blank" class="bookMeeting" @click="setCookie">Onbording Stage</a>
              </div>
            </div>
          </div>
          <!-- Submit project -->
          <div class="hire-us-content col-lg-5">
            <div class="submit-project">
              <h4 class="title">Get Started With LMS</h4>
              <!-- Form -->
              <form v-if="!($page.props.auth.user)" class="project-form" @submit.prevent="submit">
                <div class="project-form-wrap">
                  <div class="pForm-wrap">
                    <input type="text" class="form-control eForm-control" id="name" name="name" placeholder="Your Name" aria-label="Your Name" v-model="form.name" />
                  </div>
                  <div class="pForm-wrap">
                    <input type="email" class="form-control  eForm-control" id="email" placeholder="username@gmail.com" v-model="form.email">
                  </div>
                  <div class="pForm-wrap">
                    <input type="password" class="form-control eForm-control" id="password" placeholder="Enter password" v-model="form.password">
                  </div>
                </div>
                <button type="submit" class="project-submit">
                  Submit
                  <img :src=" $page.props.base.url + '/public/assets/img/icon/right-white-arrow.svg'" alt="">
                </button>
              </form>

              <div v-else class="hire-us-content">
                <p class="info">Turn Your Vision Into Reality With Our Custom Projects</p>
                <div class="buttons align-items-center">
                  <a :href="`https://lms.creativeitem.com?user_id=${$page.props.auth.auth_token}`" target="_blank" class="bookMeeting" @click="setCookie">Onbording Stage</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Main Content -->
    
    <Footer/>
</template>