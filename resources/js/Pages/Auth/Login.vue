<script setup>
import Header from '@/Components/Global/Header.vue';
import Footer from '@/Components/Global/Footer.vue';
import InputError from '@/Components/InputError.vue';
import Toast from '@/Components/Global/Toast.vue';
import { Link, useForm } from '@inertiajs/vue3';
import { useReCaptcha } from "vue-recaptcha-v3";
import { onMounted, onBeforeUnmount } from 'vue'


const props = defineProps({
  canResetPassword: {
    type: Boolean,
  },
  status: {
    type: String,
  },
  seo: Object,
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
    captcha_token: null, // Add captcha_token to the form
});

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

const recaptchaIns = useReCaptcha().instance

onMounted(() => {
  setTimeout(() => {
    recaptchaIns.value.showBadge()
  }, 1000)

  $(document).prop('title', props.seo.meta_title);
  $("meta[name='description']").attr("content", props.seo.meta_description);
  $("meta[name='keywords']").attr("content", props.seo.meta_keywords);
  $("meta[name='robot']").attr("content", props.seo.meta_robot);
  $("link[rel='canonical']").attr("href", props.seo.canonical_url);
  $("link[rel='custom']").attr("href", props.seo.custom_url);
  $("meta[property='og:title']").attr("content", props.seo.og_title);
  $("meta[property='og:description']").attr("content", props.seo.og_description);
  $("meta[property='og:image']").attr("content", props.seo.og_image);

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
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <Header />
    <Toast v-if="$page.props.flash" />

    <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
        {{ status }}
    </div>
    <!-- Start Login content -->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="main-form-container d-flex align-items-center justify-content-between">
              <!-- Form Area  -->
              <div class="main-form-card">
                <div class="form-header">
                  <h1 class="title">Welcome Back!</h1>
                  <p class="info">We’re a team that Guides Each Other</p>
                </div>
                <form class="main-form-area" @submit.prevent="recaptcha">
                  <div class="d-flex flex-column main-form-wrap">
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
                  </div>
                  <Link v-if="canResetPassword" href="#" class="forget">Forget your password?</Link>
                  <button type="submit" class="submit" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Log In</button>
                </form>
                <div class="form-footer">
                  <p class="info">Don’t have an account?</p>
                  <Link :href="route('register')" class="link">Create an Account</Link>
                </div>
              </div>
              <!-- Text and Image -->
              <div class="form-advice-wrap">
                <!-- Layout 2 -->
                <div class="form-advertise-layout-2 form-advertise-layout d-flex align-items-center justify-content-between">
                  <div class="form-advertise-text">
                    <h1 class="title">Access to Endless <span class="blue-text">Creative Elements</span></h1>
                    <p class="info">Unleash Your Imagination with Unlimited Access to Premium Assets via Elements Subscription.</p>
                    <a href="#" class="subs-btn">Subscription</a>
                  </div>
                  <div class="form-advertise-img">
                    <img src="assets/img/signup/form-layout-2.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
</template>
