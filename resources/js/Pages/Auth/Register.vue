<script setup>
import Header from '@/Components/Global/Header.vue';
import Footer from '@/Components/Global/Footer.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { useReCaptcha } from "vue-recaptcha-v3";
import { onMounted, onBeforeUnmount } from 'vue'

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    captcha_token: null, // Add captcha_token to the form
});

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

const recaptchaIns = useReCaptcha().instance

onMounted(() => {
    setTimeout(() => {
        recaptchaIns.value.showBadge()
    }, 1000)
}),
onBeforeUnmount(() => {
    recaptchaIns.value.hideBadge()
}) 

const recaptcha = async () => {
    await recaptchaLoaded();
    form.captcha_token = await executeRecaptcha('login');
    submit();
};

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>

    <Header />

    <!-- Start Signup content -->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="main-form-container d-flex align-items-center justify-content-between">
              <!-- Form Area  -->
              <div class="main-form-card">
                <div class="form-header">
                  <h1 class="title">Create Your Account</h1>
                  <p class="info">We’re a team that Guides Each Other</p>
                </div>
                <form class="main-form-area" @submit.prevent="recaptcha">
                  <div class="d-flex flex-column main-form-wrap">
                    <div class="input-wrap">
                      <label for="name" class="form-label">Name<span>*</span></label>
                      <input type="text" class="form-control" id="name" placeholder="username@gmail.com" v-model="form.name">
                      <InputError class="mt-2" :message="form.errors.name" />
                    </div>
                    <div class="input-wrap">
                      <label for="email" class="form-label">Email<span>*</span></label>
                      <input type="email" class="form-control" id="email" placeholder="username@gmail.com" v-model="form.email">
                      <InputError class="mt-2" :message="form.errors.email" />
                    </div>
                    <div class="input-wrap">
                      <label for="password" class="form-label">Password<span>*</span></label>
                      <div class="password-input-wrap">
                        <input type="password" class="form-control password-field" id="password" placeholder="Enter password" v-model="form.password">
                        <div class="toggle-icons">
                          <img src="assets/img/icon/visibility-off.svg" class="password-icon" toggle=".password-field" alt="">
                          <img src="assets/img/icon/visibility-on.svg" class="password-icon d-none" toggle=".password-field" alt="">
                        </div>
                        <InputError class="mt-2" :message="form.errors.password" />
                      </div>
                    </div>
                    <div class="input-wrap">
                      <label for="password_confirmation" class="form-label">Confirm Password<span>*</span></label>
                      <div class="password-input-wrap">
                        <input type="password" class="form-control password-field" id="password_confirmation" placeholder="Enter password" v-model="form.password_confirmation">
                        <div class="toggle-icons">
                          <img src="assets/img/icon/visibility-off.svg" class="password-icon" toggle=".password-field" alt="">
                          <img src="assets/img/icon/visibility-on.svg" class="password-icon d-none" toggle=".password-field" alt="">
                        </div>
                        <InputError class="mt-2" :message="form.errors.password_confirmation" />
                      </div>
                    </div>
                  </div>
                  <a href="#" class="forget">Forget your password?</a>
                  <button type="submit" class="submit" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Register</button>
                </form>
                <div class="form-footer">
                  <p class="info">Already have an account?</p>
                  <Link :href="route('login')" class="link">Log in</Link>
                </div>
              </div>
              <!-- Text and Image -->
              <div class="form-advice-wrap">
                <!-- Layout 3 -->
                <div class="form-advertise-layout-3 form-advertise-layout d-flex align-items-center justify-content-between">
                  <div class="form-advertise-text">
                    <h1 class="title">Web's Building Blocks</h1>
                    <p class="info">Empower Your Ideas with Free HTML Building Websites, Building Dreams</p>
                    <a href="#" class="subs-btn">Try for Free</a>
                  </div>
                  <div class="form-advertise-img">
                    <img src="assets/img/signup/form-layout-3.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Signup content -->

    <Footer />
</template>
