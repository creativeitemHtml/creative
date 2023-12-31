<script setup>
import Header from '../../Components/Global/Header.vue'
import Footer from '../../Components/Global/Footer.vue'
import { onMounted } from 'vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';

const props = defineProps({
  element_categories: Array,
  seo: Object,
  services: Array,
});

const user = usePage().props.auth.user;

const form = useForm({
  title: '',
  description: '',
  email: user ? user.email : '',
  budget_estimation: '',
  timeline: '',
  attachment: '',
});

const handleThumbnailChange = (event) => {
    // Update the form.attachment value when a file is selected
    form.attachment = event.target.files[0];
};

const submit = () => {
  form.post(route('project_submit'));
};

onMounted(() => {
  $(document).prop('title', props.seo.meta_title);
  $("meta[name='description']").attr("content", props.seo.meta_description);
  $("meta[name='keywords']").attr("content", props.seo.meta_keywords);
  $("meta[name='robot']").attr("content", props.seo.meta_robot);
  $("link[rel='canonical']").attr("href", props.seo.canonical_url);
  $("link[rel='custom']").attr("href", props.seo.custom_url);
  $("meta[property='og:title']").attr("content", props.seo.og_title);
  $("meta[property='og:description']").attr("content", props.seo.og_description);
  $("meta[property='og:image']").attr("content", props.seo.og_image);
  
});

// $(document).ready(function () {
//   $('.service-select select').niceSelect();
// });

</script>

<template>
    <Header/>

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
              <div class="buttons d-flex align-items-center">
                <a href="#" class="bookMeeting">Book a meeting</a>
                <a href="#" class="watchvideo d-flex align-items-center">
                  Watch Video
                  <img :src=" $page.props.base.url + '/public/assets/img/icon/video-play-icon.svg'" alt="" />
                </a>
              </div>
            </div>
          </div>
          <!-- Submit project -->
          <div class="col-lg-5">
            <div class="submit-project">
              <h4 class="title">Submit Your Porject</h4>
              <!-- Form -->
              <form @submit.prevent="submit" class="project-form">
                <div class="project-form-wrap">
                  <div class="pForm-wrap">
                    <input type="text" class="form-control eForm-control" id="title" name="title" placeholder="Your Project Title" aria-label="Your Project Title" v-model="form.title" />
                  </div>
                  <div class="pForm-wrap">
                    <textarea class="form-control eForm-control" id="description" name="description" placeholder="About your project" v-model="form.description"></textarea>
                  </div>
                  <div v-if="$page.props.auth.user" class="pForm-wrap">
                    <input type="email" class="form-control eForm-control" id="email" name="email" v-model="form.email" disabled />
                  </div>
                  <div v-else class="pForm-wrap">
                    <input type="email" class="form-control eForm-control" id="email" name="email" placeholder="Your Email Address" aria-label="Your Email Address" v-model="form.email" />
                  </div>
                  <div class="pForm-wrap service-select">
                    <select class="nice-select" id="budget_estimation" name="budget_estimation" v-model="form.budget_estimation">
                      <option value="">Select Budget</option>
                      <option value="$500 - $1000">$500 - $1000</option>
                      <option value="$1000 - $3000">$1000 - $3000</option>
                      <option value="$3000 - $10000">$3000 - $10000</option>
                      <option value="over $10000">Over $10000</option>
                    </select>
                  </div>
                  <div class="pForm-wrap service-select">
                    <select class="nice-select" id="timeline" name="timeline" v-model="form.timeline">
                      <option value="">Select Title</option>
                      <option value="2 Weeks">2 Weeks</option>
                      <option value="4 Weeks">4 Weeks</option>
                      <option value="8 Weeks">8 Weeks</option>
                      <option value="12 Weeks">12 Weeks</option>
                      <option value="continuos">Continuos development</option>
                    </select>
                  </div>
                  <div class="pForm-wrap">
                    <input class="form-control eForm-control-file" type="file" name="attachment" id="attachment" @change="handleThumbnailChange">
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

    <!-- Start Service -->
    <section class="pb-110">
      <div class="container">
        <!-- Title -->
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="text-center pb-60">
              <h2 class="fz-34-sb-black pb-15">Our service</h2>
              <p class="fz-16-m-black-2">Experience excellence at your fingertips with all of the services we provide</p>
            </div>
          </div>
        </div>
        <!-- Items -->
        <div class="row">
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="hire-service-3"><p>Hotel management system</p></div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="hire-service-3"><p>Learning management system</p></div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="hire-service-3"><p>E-commerce</p></div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="hire-service-3"><p>CRM system</p></div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="hire-service-3"><p>ERP system</p></div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="hire-service-3"><p>Healthcare solution</p></div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="hire-service-3"><p>Property management</p></div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="hire-service-3"><p>Inventory management</p></div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="hire-service-3"><p>Project manager</p></div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="hire-service-3"><p>HRM system</p></div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="hire-service-3"><p>Supply chain management</p></div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="hire-service-3"><p>Financial management</p></div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Service -->

    <!-- Start Works -->
    <section class="pb-110">
      <div class="container">
        <!-- Title -->
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="text-center pb-60">
              <h2 class="fz-34-sb-black pb-15">How it works</h2>
              <p class="fz-16-m-black-2">Pathway to how we bring your projects to lifet</p>
            </div>
          </div>
        </div>
        <!-- Items -->
        <div class="row justify-content-center">
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="hire-work-3" style="--bg: #f8f5ff">
              <div class="title">
                <h4>01.</h4>
                <div class="icon"><img :src=" $page.props.base.url + '/public/assets/img/webp/contact-book.webp'" alt="" /></div>
              </div>
              <div class="content">
                <h4>Contact &amp; Quotation</h4>
                <p>Contact and receive a quotation from us with a tailored project estimate.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="hire-work-3" style="--bg: #fff2ea">
              <div class="title">
                <h4>02.</h4>
                <div class="icon"><img :src=" $page.props.base.url + '/public/assets/img/webp/time-tracking.webp'" alt="" /></div>
              </div>
              <div class="content">
                <h4>Starting project</h4>
                <p>We turn your vision into an actionable project plan with our project initiation.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="hire-work-3" style="--bg: #f6ffe9">
              <div class="title">
                <h4>03.</h4>
                <div class="icon"><img :src=" $page.props.base.url + '/public/assets/img/webp/feedback.webp'" alt="" /></div>
              </div>
              <div class="content">
                <h4>Follow up &amp; Feedback</h4>
                <p>During development, we ensure constant communication to make sure your project meets your expectations.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="hire-work-3" style="--bg: #fff9eb">
              <div class="title">
                <h4>04.</h4>
                <div class="icon"><img :src=" $page.props.base.url + '/public/assets/img/webp/delivery-done.webp'" alt="" /></div>
              </div>
              <div class="content">
                <h4>Project delivery</h4>
                <p>We assure on-time delivery of your project with unparalleled brilliance and precision.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Works -->

    <!-- Start Technology -->
    <section class="hire-section-bg">
      <div class="container">
        <!-- Title -->
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="text-center pb-60">
              <h2 class="fz-34-sb-black pb-15 text-white">Technology we use</h2>
              <p class="fz-16-m-black-2 text-white">We are harnessing the power of modern technologies to create innovative solutions for your customized projects.</p>
            </div>
          </div>
        </div>
        <!-- Image -->
        <div class="technology-img"><img :src=" $page.props.base.url + '/public/assets/img/webp/technology-img.webp'" alt="" /></div>
      </div>
    </section>
    <!-- End Technology -->

    <!-- Start Pricing -->
    <section class="pt-80 pb-110">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="pricing-n-title">
              <h1 class="text-52">Explore Our Competitive Service Pricing Model</h1>
              <p class="text-22">We provide you with clarity in pricing with our transparent cost approach</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" v-for="service in services" :key="service.id">
            <div class="single-n-pricing" :class="{ active: service.name === 'Pro' }">
              <div class="pricing-n-popular d-flex align-items-center justify-content-between">
                <h4 class="text-22">{{ service.name }}</h4>
                <a href="#" class="text-15" v-if="service.name === 'Pro'">Popular</a>
              </div>
              <div class="pricing-n-price d-flex">
                <h2 class="pricing-price-l d-flex"><span>$</span><span>{{ service.discounted_price }}</span></h2>
                <h3 class="pricing-price-r d-flex">
                  <span v-if="service.discounted_price != 0">${{ service.price }}</span>
                  <span>/ {{ service.int_val }}</span></h3>
              </div>
              <p class="text-15 pricing-n-batch">{{ service.interval_period_text }}</p>
              <div class="pricing-n-list">
                <ul>
                  <li v-for="service_feature in service.service_features" :key="service_feature.id">{{ service_feature }}</li>
                </ul>
              </div>
              <Link :href="route('service_buy_now', { id: service.id })" class="pricing-n-btn text-18">Buy Now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Pricing -->
    
    <Footer :elementCategories="element_categories"/>
</template>