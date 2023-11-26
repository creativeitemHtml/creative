<script setup>
import Header from '../../../Components/Global/Header.vue';
import LmsHeader from '../../../Components/Global/LmsHeader.vue';
import Footer from '../../../Components/Global/Footer.vue'

const props = defineProps({
    element_categories: Array,
});

</script>

<template>
    <Header/>
    <LmsHeader/>
    <!-- Start Pricing Area -->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="pricing-section-title pricing-st-top">
              <h1 class="title-58">We’ve got a plan that’s perfect for you</h1>
              <div class="pricing-tab-btn">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-monthly-tab" data-bs-toggle="pill" data-bs-target="#pills-monthly" type="button" role="tab" aria-controls="pills-monthly" aria-selected="true">Monthly billing</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-annual-tab" data-bs-toggle="pill" data-bs-target="#pills-annual" type="button" role="tab" aria-controls="pills-annual" aria-selected="false">Annual billing</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-content padding-bottom-110" id="pills-tabContent">
          <!-- Monthly billing -->
          <div class="tab-pane fade show active" id="pills-monthly" role="tabpanel" aria-labelledby="pills-monthly-tab" tabindex="0">
            <div class="row mcg-30 justify-content-center">
              <div class="col-lg-4 col-md-6">
                <!-- Single Pricing Card -->
                <div class="single-pricing-card">
                  <div class="pn-light-package d-flex justify-content-between">
                    <h4 class="pn-light">Basic Plan</h4>
                  </div>
                  <div class="pn-price-month d-flex align-items-center">
                    <h2 class="title-price">$10</h2>
                    <div class="pn-month">
                      <p>Per User</p>
                      <p>Per Month</p>
                    </div>
                  </div>
                  <p class="feature-limit">Basic features for up to 10 users.</p>
                  <a href="#" class="plan-btn">Sign up for free</a>
                  <div class="pricing-list-title">
                    <h4>FEATURES</h4>
                    <p>Everything in our free plan plus...</p>
                  </div>
                  <div class="pricing-card-list">
                    <ul>
                      <li>Access to Basic Features</li>
                      <li>Basic reporting & analytics</li>
                      <li>Up to 10 Individual users</li>
                      <li>20GB Individual data for each user</li>
                      <li>Basic Chat & email support</li>
                      <li>Access to Basic Features.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <!-- Single Pricing Card -->
                <div class="single-pricing-card active">
                  <div class="pn-light-package d-flex justify-content-between">
                    <h4 class="pn-light">Business Plan</h4>
                    <p class="pn-popular-batch">Popular</p>
                  </div>
                  <div class="pn-price-month d-flex align-items-center">
                    <h2 class="title-price">$50</h2>
                    <div class="pn-month">
                      <p>Per User</p>
                      <p>Per Month</p>
                    </div>
                  </div>
                  <p class="feature-limit">Basic features for up to 10 users.</p>
                  <a href="#" class="plan-btn">Get Started</a>
                  <div class="pricing-list-title">
                    <h4>FEATURES</h4>
                    <p>Everything in our free plan plus...</p>
                  </div>
                  <div class="pricing-card-list">
                    <ul>
                      <li>Access to Basic Features</li>
                      <li>Basic reporting & analytics</li>
                      <li>Up to 10 Individual users</li>
                      <li>20GB Individual data for each user</li>
                      <li>Basic Chat & email support</li>
                      <li>Access to Basic Features.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <!-- Single Pricing Card -->
                <div class="single-pricing-card">
                  <div class="pn-light-package d-flex justify-content-between">
                    <h4 class="pn-light">Enterprise Plan</h4>
                  </div>
                  <div class="pn-price-month d-flex align-items-center">
                    <h2 class="title-price">$99</h2>
                    <div class="pn-month">
                      <p>Per User</p>
                      <p>Per Month</p>
                    </div>
                  </div>
                  <p class="feature-limit">Basic features for up to 10 users.</p>
                  <a href="#" class="plan-btn">Get Started</a>
                  <div class="pricing-list-title">
                    <h4>FEATURES</h4>
                    <p>Everything in our free plan plus...</p>
                  </div>
                  <div class="pricing-card-list">
                    <ul>
                      <li>Access to Basic Features</li>
                      <li>Basic reporting & analytics</li>
                      <li>Up to 10 Individual users</li>
                      <li>20GB Individual data for each user</li>
                      <li>Basic Chat & email support</li>
                      <li>Access to Basic Features.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Annual billing -->
          <div class="tab-pane fade" id="pills-annual" role="tabpanel" aria-labelledby="pills-annual-tab" tabindex="0">
            <div class="row mcg-30 justify-content-center">
              <div class="col-lg-4 col-md-6">
                <!-- Single Pricing Card -->
                <div class="single-pricing-card">
                  <div class="pn-light-package d-flex justify-content-between">
                    <h4 class="pn-light">Basic Plan</h4>
                  </div>
                  <div class="pn-price-month d-flex align-items-center">
                    <h2 class="title-price">$10</h2>
                    <div class="pn-month">
                      <p>Per User</p>
                      <p>Per Month</p>
                    </div>
                  </div>
                  <p class="feature-limit">Basic features for up to 10 users.</p>
                  <a href="#" class="plan-btn">Sign up for free</a>
                  <div class="pricing-list-title">
                    <h4>FEATURES</h4>
                    <p>Everything in our free plan plus...</p>
                  </div>
                  <div class="pricing-card-list">
                    <ul>
                      <li>Access to Basic Features</li>
                      <li>Basic reporting & analytics</li>
                      <li>Up to 10 Individual users</li>
                      <li>20GB Individual data for each user</li>
                      <li>Basic Chat & email support</li>
                      <li>Access to Basic Features.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <!-- Single Pricing Card -->
                <div class="single-pricing-card active">
                  <div class="pn-light-package d-flex justify-content-between">
                    <h4 class="pn-light">Business Plan</h4>
                    <p class="pn-popular-batch">Popular</p>
                  </div>
                  <div class="pn-price-month d-flex align-items-center">
                    <h2 class="title-price">$50</h2>
                    <div class="pn-month">
                      <p>Per User</p>
                      <p>Per Month</p>
                    </div>
                  </div>
                  <p class="feature-limit">Basic features for up to 10 users.</p>
                  <a href="#" class="plan-btn">Get Started</a>
                  <div class="pricing-list-title">
                    <h4>FEATURES</h4>
                    <p>Everything in our free plan plus...</p>
                  </div>
                  <div class="pricing-card-list">
                    <ul>
                      <li>Access to Basic Features</li>
                      <li>Basic reporting & analytics</li>
                      <li>Up to 10 Individual users</li>
                      <li>20GB Individual data for each user</li>
                      <li>Basic Chat & email support</li>
                      <li>Access to Basic Features.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <!-- Single Pricing Card -->
                <div class="single-pricing-card">
                  <div class="pn-light-package d-flex justify-content-between">
                    <h4 class="pn-light">Enterprise Plan</h4>
                  </div>
                  <div class="pn-price-month d-flex align-items-center">
                    <h2 class="title-price">$99</h2>
                    <div class="pn-month">
                      <p>Per User</p>
                      <p>Per Month</p>
                    </div>
                  </div>
                  <p class="feature-limit">Basic features for up to 10 users.</p>
                  <a href="#" class="plan-btn">Get Started</a>
                  <div class="pricing-list-title">
                    <h4>FEATURES</h4>
                    <p>Everything in our free plan plus...</p>
                  </div>
                  <div class="pricing-card-list">
                    <ul>
                      <li>Access to Basic Features</li>
                      <li>Basic reporting & analytics</li>
                      <li>Up to 10 Individual users</li>
                      <li>20GB Individual data for each user</li>
                      <li>Basic Chat & email support</li>
                      <li>Access to Basic Features.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Pricing Area -->


    <!-- Start Frequently asked questions Area -->
    <section class="frequently-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="frequently-title">
              <h2 class="title-58">Frequently asked questions</h2>
            </div>
            <div class="frequently-accordion">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      What is membership management software?
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      What are the benefit of a  membership site?
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      What is membership management software?
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      What is membership management software?
                    </button>
                  </h2>
                  <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      What is membership management software?
                    </button>
                  </h2>
                  <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingSix">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                      What is membership management software?
                    </button>
                  </h2>
                  <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Frequently asked questions Area -->


    <!-- Start LMS Testimonials Area -->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="lms-testimonial-title">
              <h1 class="title-58">What they’re saying</h1>
              <p class="info">We’ve made it easier than ever to create, manage, and grow a profitable coaching business that achieves transformational client results. </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Testimonials -->
      <div class="swiper lmsSwiper">
        <div class="lms-testimonials-wrap swiper-wrapper">
          <div class="single-lms-testimonial swiper-slide">
            <div class="lms-testimonial-rating d-flex align-items-center">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_197_259)">
                <path d="M19.0002 27.3442L25.571 31.3184C26.7743 32.0467 28.2468 30.97 27.9302 29.6084L26.1885 22.135L31.9993 17.1C33.0602 16.1817 32.4902 14.44 31.0968 14.3292L23.4493 13.68L20.4568 6.61837C19.9185 5.33587 18.0818 5.33587 17.5435 6.61837L14.551 13.6642L6.90351 14.3134C5.51018 14.4242 4.94018 16.1659 6.00101 17.0842L11.8118 22.1192L10.0702 29.5925C9.75351 30.9542 11.226 32.0309 12.4293 31.3025L19.0002 27.3442Z" fill="#FACA21"/>
                </g>
                <defs>
                <clipPath id="clip0_197_259">
                <rect width="38" height="38" fill="white"/>
                </clipPath>
                </defs>
              </svg>                    
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_197_259)">
                <path d="M19.0002 27.3442L25.571 31.3184C26.7743 32.0467 28.2468 30.97 27.9302 29.6084L26.1885 22.135L31.9993 17.1C33.0602 16.1817 32.4902 14.44 31.0968 14.3292L23.4493 13.68L20.4568 6.61837C19.9185 5.33587 18.0818 5.33587 17.5435 6.61837L14.551 13.6642L6.90351 14.3134C5.51018 14.4242 4.94018 16.1659 6.00101 17.0842L11.8118 22.1192L10.0702 29.5925C9.75351 30.9542 11.226 32.0309 12.4293 31.3025L19.0002 27.3442Z" fill="#FACA21"/>
                </g>
                <defs>
                <clipPath id="clip0_197_259">
                <rect width="38" height="38" fill="white"/>
                </clipPath>
                </defs>
              </svg>                    
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_197_259)">
                <path d="M19.0002 27.3442L25.571 31.3184C26.7743 32.0467 28.2468 30.97 27.9302 29.6084L26.1885 22.135L31.9993 17.1C33.0602 16.1817 32.4902 14.44 31.0968 14.3292L23.4493 13.68L20.4568 6.61837C19.9185 5.33587 18.0818 5.33587 17.5435 6.61837L14.551 13.6642L6.90351 14.3134C5.51018 14.4242 4.94018 16.1659 6.00101 17.0842L11.8118 22.1192L10.0702 29.5925C9.75351 30.9542 11.226 32.0309 12.4293 31.3025L19.0002 27.3442Z" fill="#FACA21"/>
                </g>
                <defs>
                <clipPath id="clip0_197_259">
                <rect width="38" height="38" fill="white"/>
                </clipPath>
                </defs>
              </svg>                    
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_197_259)">
                <path d="M19.0002 27.3442L25.571 31.3184C26.7743 32.0467 28.2468 30.97 27.9302 29.6084L26.1885 22.135L31.9993 17.1C33.0602 16.1817 32.4902 14.44 31.0968 14.3292L23.4493 13.68L20.4568 6.61837C19.9185 5.33587 18.0818 5.33587 17.5435 6.61837L14.551 13.6642L6.90351 14.3134C5.51018 14.4242 4.94018 16.1659 6.00101 17.0842L11.8118 22.1192L10.0702 29.5925C9.75351 30.9542 11.226 32.0309 12.4293 31.3025L19.0002 27.3442Z" fill="#FACA21"/>
                </g>
                <defs>
                <clipPath id="clip0_197_259">
                <rect width="38" height="38" fill="white"/>
                </clipPath>
                </defs>
              </svg>                    
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_197_259)">
                <path d="M19.0002 27.3442L25.571 31.3184C26.7743 32.0467 28.2468 30.97 27.9302 29.6084L26.1885 22.135L31.9993 17.1C33.0602 16.1817 32.4902 14.44 31.0968 14.3292L23.4493 13.68L20.4568 6.61837C19.9185 5.33587 18.0818 5.33587 17.5435 6.61837L14.551 13.6642L6.90351 14.3134C5.51018 14.4242 4.94018 16.1659 6.00101 17.0842L11.8118 22.1192L10.0702 29.5925C9.75351 30.9542 11.226 32.0309 12.4293 31.3025L19.0002 27.3442Z" fill="#FACA21"/>
                </g>
                <defs>
                <clipPath id="clip0_197_259">
                <rect width="38" height="38" fill="white"/>
                </clipPath>
                </defs>
              </svg>                    
            </div>
            <p class="info">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less which normal distribution of letters look like readable English.</p>
            <div class="lmst-user-brand d-flex align-items-center justify-content-between">
              <div class="lmst-user-wrap d-flex align-items-center">
                <div class="lmst-user">
                  <img :src=" $page.props.base.url + '/public/assets/img/lms/testimonial-user-2.webp'" alt="">
                </div>
                <div class="lmst-user-details">
                  <h4 class="name">Lana Ross</h4>
                  <p class="role">CEO, Devzone</p>
                </div>
              </div>
              <div class="lmst-brand-img">
                <img :src=" $page.props.base.url + '/public/assets/img/lms/lms-testimonial-brand-2.svg'" alt="">
              </div>
            </div>
          </div>
          <div class="single-lms-testimonial swiper-slide">
            <div class="lms-testimonial-rating d-flex align-items-center">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_197_259)">
                <path d="M19.0002 27.3442L25.571 31.3184C26.7743 32.0467 28.2468 30.97 27.9302 29.6084L26.1885 22.135L31.9993 17.1C33.0602 16.1817 32.4902 14.44 31.0968 14.3292L23.4493 13.68L20.4568 6.61837C19.9185 5.33587 18.0818 5.33587 17.5435 6.61837L14.551 13.6642L6.90351 14.3134C5.51018 14.4242 4.94018 16.1659 6.00101 17.0842L11.8118 22.1192L10.0702 29.5925C9.75351 30.9542 11.226 32.0309 12.4293 31.3025L19.0002 27.3442Z" fill="#FACA21"/>
                </g>
                <defs>
                <clipPath id="clip0_197_259">
                <rect width="38" height="38" fill="white"/>
                </clipPath>
                </defs>
              </svg>                    
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_197_259)">
                <path d="M19.0002 27.3442L25.571 31.3184C26.7743 32.0467 28.2468 30.97 27.9302 29.6084L26.1885 22.135L31.9993 17.1C33.0602 16.1817 32.4902 14.44 31.0968 14.3292L23.4493 13.68L20.4568 6.61837C19.9185 5.33587 18.0818 5.33587 17.5435 6.61837L14.551 13.6642L6.90351 14.3134C5.51018 14.4242 4.94018 16.1659 6.00101 17.0842L11.8118 22.1192L10.0702 29.5925C9.75351 30.9542 11.226 32.0309 12.4293 31.3025L19.0002 27.3442Z" fill="#FACA21"/>
                </g>
                <defs>
                <clipPath id="clip0_197_259">
                <rect width="38" height="38" fill="white"/>
                </clipPath>
                </defs>
              </svg>                    
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_197_259)">
                <path d="M19.0002 27.3442L25.571 31.3184C26.7743 32.0467 28.2468 30.97 27.9302 29.6084L26.1885 22.135L31.9993 17.1C33.0602 16.1817 32.4902 14.44 31.0968 14.3292L23.4493 13.68L20.4568 6.61837C19.9185 5.33587 18.0818 5.33587 17.5435 6.61837L14.551 13.6642L6.90351 14.3134C5.51018 14.4242 4.94018 16.1659 6.00101 17.0842L11.8118 22.1192L10.0702 29.5925C9.75351 30.9542 11.226 32.0309 12.4293 31.3025L19.0002 27.3442Z" fill="#FACA21"/>
                </g>
                <defs>
                <clipPath id="clip0_197_259">
                <rect width="38" height="38" fill="white"/>
                </clipPath>
                </defs>
              </svg>                    
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_197_259)">
                <path d="M19.0002 27.3442L25.571 31.3184C26.7743 32.0467 28.2468 30.97 27.9302 29.6084L26.1885 22.135L31.9993 17.1C33.0602 16.1817 32.4902 14.44 31.0968 14.3292L23.4493 13.68L20.4568 6.61837C19.9185 5.33587 18.0818 5.33587 17.5435 6.61837L14.551 13.6642L6.90351 14.3134C5.51018 14.4242 4.94018 16.1659 6.00101 17.0842L11.8118 22.1192L10.0702 29.5925C9.75351 30.9542 11.226 32.0309 12.4293 31.3025L19.0002 27.3442Z" fill="#FACA21"/>
                </g>
                <defs>
                <clipPath id="clip0_197_259">
                <rect width="38" height="38" fill="white"/>
                </clipPath>
                </defs>
              </svg>                    
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_197_259)">
                <path d="M19.0002 27.3442L25.571 31.3184C26.7743 32.0467 28.2468 30.97 27.9302 29.6084L26.1885 22.135L31.9993 17.1C33.0602 16.1817 32.4902 14.44 31.0968 14.3292L23.4493 13.68L20.4568 6.61837C19.9185 5.33587 18.0818 5.33587 17.5435 6.61837L14.551 13.6642L6.90351 14.3134C5.51018 14.4242 4.94018 16.1659 6.00101 17.0842L11.8118 22.1192L10.0702 29.5925C9.75351 30.9542 11.226 32.0309 12.4293 31.3025L19.0002 27.3442Z" fill="#FACA21"/>
                </g>
                <defs>
                <clipPath id="clip0_197_259">
                <rect width="38" height="38" fill="white"/>
                </clipPath>
                </defs>
              </svg>                    
            </div>
            <p class="info">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less which normal distribution of letters look like readable English.</p>
            <div class="lmst-user-brand d-flex align-items-center justify-content-between">
              <div class="lmst-user-wrap d-flex align-items-center">
                <div class="lmst-user">
                  <img :src=" $page.props.base.url + '/public/assets/img/lms/testimonial-user-1.webp'" alt="">
                </div>
                <div class="lmst-user-details">
                  <h4 class="name">Michael Johnson</h4>
                  <p class="role">Web Developer</p>
                </div>
              </div>
              <div class="lmst-brand-img">
                <img :src=" $page.props.base.url + '/public/assets/img/lms/lms-testimonial-brand-1.svg'" alt="">
              </div>
            </div>
          </div>
          <div class="single-lms-testimonial swiper-slide">
            <div class="lms-testimonial-rating d-flex align-items-center">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_197_259)">
                <path d="M19.0002 27.3442L25.571 31.3184C26.7743 32.0467 28.2468 30.97 27.9302 29.6084L26.1885 22.135L31.9993 17.1C33.0602 16.1817 32.4902 14.44 31.0968 14.3292L23.4493 13.68L20.4568 6.61837C19.9185 5.33587 18.0818 5.33587 17.5435 6.61837L14.551 13.6642L6.90351 14.3134C5.51018 14.4242 4.94018 16.1659 6.00101 17.0842L11.8118 22.1192L10.0702 29.5925C9.75351 30.9542 11.226 32.0309 12.4293 31.3025L19.0002 27.3442Z" fill="#FACA21"/>
                </g>
                <defs>
                <clipPath id="clip0_197_259">
                <rect width="38" height="38" fill="white"/>
                </clipPath>
                </defs>
              </svg>                    
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_197_259)">
                <path d="M19.0002 27.3442L25.571 31.3184C26.7743 32.0467 28.2468 30.97 27.9302 29.6084L26.1885 22.135L31.9993 17.1C33.0602 16.1817 32.4902 14.44 31.0968 14.3292L23.4493 13.68L20.4568 6.61837C19.9185 5.33587 18.0818 5.33587 17.5435 6.61837L14.551 13.6642L6.90351 14.3134C5.51018 14.4242 4.94018 16.1659 6.00101 17.0842L11.8118 22.1192L10.0702 29.5925C9.75351 30.9542 11.226 32.0309 12.4293 31.3025L19.0002 27.3442Z" fill="#FACA21"/>
                </g>
                <defs>
                <clipPath id="clip0_197_259">
                <rect width="38" height="38" fill="white"/>
                </clipPath>
                </defs>
              </svg>                    
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_197_259)">
                <path d="M19.0002 27.3442L25.571 31.3184C26.7743 32.0467 28.2468 30.97 27.9302 29.6084L26.1885 22.135L31.9993 17.1C33.0602 16.1817 32.4902 14.44 31.0968 14.3292L23.4493 13.68L20.4568 6.61837C19.9185 5.33587 18.0818 5.33587 17.5435 6.61837L14.551 13.6642L6.90351 14.3134C5.51018 14.4242 4.94018 16.1659 6.00101 17.0842L11.8118 22.1192L10.0702 29.5925C9.75351 30.9542 11.226 32.0309 12.4293 31.3025L19.0002 27.3442Z" fill="#FACA21"/>
                </g>
                <defs>
                <clipPath id="clip0_197_259">
                <rect width="38" height="38" fill="white"/>
                </clipPath>
                </defs>
              </svg>                    
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_197_259)">
                <path d="M19.0002 27.3442L25.571 31.3184C26.7743 32.0467 28.2468 30.97 27.9302 29.6084L26.1885 22.135L31.9993 17.1C33.0602 16.1817 32.4902 14.44 31.0968 14.3292L23.4493 13.68L20.4568 6.61837C19.9185 5.33587 18.0818 5.33587 17.5435 6.61837L14.551 13.6642L6.90351 14.3134C5.51018 14.4242 4.94018 16.1659 6.00101 17.0842L11.8118 22.1192L10.0702 29.5925C9.75351 30.9542 11.226 32.0309 12.4293 31.3025L19.0002 27.3442Z" fill="#FACA21"/>
                </g>
                <defs>
                <clipPath id="clip0_197_259">
                <rect width="38" height="38" fill="white"/>
                </clipPath>
                </defs>
              </svg>                    
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_197_259)">
                <path d="M19.0002 27.3442L25.571 31.3184C26.7743 32.0467 28.2468 30.97 27.9302 29.6084L26.1885 22.135L31.9993 17.1C33.0602 16.1817 32.4902 14.44 31.0968 14.3292L23.4493 13.68L20.4568 6.61837C19.9185 5.33587 18.0818 5.33587 17.5435 6.61837L14.551 13.6642L6.90351 14.3134C5.51018 14.4242 4.94018 16.1659 6.00101 17.0842L11.8118 22.1192L10.0702 29.5925C9.75351 30.9542 11.226 32.0309 12.4293 31.3025L19.0002 27.3442Z" fill="#FACA21"/>
                </g>
                <defs>
                <clipPath id="clip0_197_259">
                <rect width="38" height="38" fill="white"/>
                </clipPath>
                </defs>
              </svg>                    
            </div>
            <p class="info">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less which normal distribution of letters look like readable English.</p>
            <div class="lmst-user-brand d-flex align-items-center justify-content-between">
              <div class="lmst-user-wrap d-flex align-items-center">
                <div class="lmst-user">
                  <img :src=" $page.props.base.url + '/public/assets/img/lms/testimonial-user-2.webp'" alt="">
                </div>
                <div class="lmst-user-details">
                  <h4 class="name">Lana Ross</h4>
                  <p class="role">CEO, Devzone</p>
                </div>
              </div>
              <div class="lmst-brand-img">
                <img :src=" $page.props.base.url + '/public/assets/img/lms/lms-testimonial-brand-2.svg'" alt="">
              </div>
            </div>
          </div>
          <div class="single-lms-testimonial swiper-slide">
            <div class="lms-testimonial-rating d-flex align-items-center">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_197_259)">
                <path d="M19.0002 27.3442L25.571 31.3184C26.7743 32.0467 28.2468 30.97 27.9302 29.6084L26.1885 22.135L31.9993 17.1C33.0602 16.1817 32.4902 14.44 31.0968 14.3292L23.4493 13.68L20.4568 6.61837C19.9185 5.33587 18.0818 5.33587 17.5435 6.61837L14.551 13.6642L6.90351 14.3134C5.51018 14.4242 4.94018 16.1659 6.00101 17.0842L11.8118 22.1192L10.0702 29.5925C9.75351 30.9542 11.226 32.0309 12.4293 31.3025L19.0002 27.3442Z" fill="#FACA21"/>
                </g>
                <defs>
                <clipPath id="clip0_197_259">
                <rect width="38" height="38" fill="white"/>
                </clipPath>
                </defs>
              </svg>                    
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_197_259)">
                <path d="M19.0002 27.3442L25.571 31.3184C26.7743 32.0467 28.2468 30.97 27.9302 29.6084L26.1885 22.135L31.9993 17.1C33.0602 16.1817 32.4902 14.44 31.0968 14.3292L23.4493 13.68L20.4568 6.61837C19.9185 5.33587 18.0818 5.33587 17.5435 6.61837L14.551 13.6642L6.90351 14.3134C5.51018 14.4242 4.94018 16.1659 6.00101 17.0842L11.8118 22.1192L10.0702 29.5925C9.75351 30.9542 11.226 32.0309 12.4293 31.3025L19.0002 27.3442Z" fill="#FACA21"/>
                </g>
                <defs>
                <clipPath id="clip0_197_259">
                <rect width="38" height="38" fill="white"/>
                </clipPath>
                </defs>
              </svg>                    
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_197_259)">
                <path d="M19.0002 27.3442L25.571 31.3184C26.7743 32.0467 28.2468 30.97 27.9302 29.6084L26.1885 22.135L31.9993 17.1C33.0602 16.1817 32.4902 14.44 31.0968 14.3292L23.4493 13.68L20.4568 6.61837C19.9185 5.33587 18.0818 5.33587 17.5435 6.61837L14.551 13.6642L6.90351 14.3134C5.51018 14.4242 4.94018 16.1659 6.00101 17.0842L11.8118 22.1192L10.0702 29.5925C9.75351 30.9542 11.226 32.0309 12.4293 31.3025L19.0002 27.3442Z" fill="#FACA21"/>
                </g>
                <defs>
                <clipPath id="clip0_197_259">
                <rect width="38" height="38" fill="white"/>
                </clipPath>
                </defs>
              </svg>                    
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_197_259)">
                <path d="M19.0002 27.3442L25.571 31.3184C26.7743 32.0467 28.2468 30.97 27.9302 29.6084L26.1885 22.135L31.9993 17.1C33.0602 16.1817 32.4902 14.44 31.0968 14.3292L23.4493 13.68L20.4568 6.61837C19.9185 5.33587 18.0818 5.33587 17.5435 6.61837L14.551 13.6642L6.90351 14.3134C5.51018 14.4242 4.94018 16.1659 6.00101 17.0842L11.8118 22.1192L10.0702 29.5925C9.75351 30.9542 11.226 32.0309 12.4293 31.3025L19.0002 27.3442Z" fill="#FACA21"/>
                </g>
                <defs>
                <clipPath id="clip0_197_259">
                <rect width="38" height="38" fill="white"/>
                </clipPath>
                </defs>
              </svg>                    
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_197_259)">
                <path d="M19.0002 27.3442L25.571 31.3184C26.7743 32.0467 28.2468 30.97 27.9302 29.6084L26.1885 22.135L31.9993 17.1C33.0602 16.1817 32.4902 14.44 31.0968 14.3292L23.4493 13.68L20.4568 6.61837C19.9185 5.33587 18.0818 5.33587 17.5435 6.61837L14.551 13.6642L6.90351 14.3134C5.51018 14.4242 4.94018 16.1659 6.00101 17.0842L11.8118 22.1192L10.0702 29.5925C9.75351 30.9542 11.226 32.0309 12.4293 31.3025L19.0002 27.3442Z" fill="#FACA21"/>
                </g>
                <defs>
                <clipPath id="clip0_197_259">
                <rect width="38" height="38" fill="white"/>
                </clipPath>
                </defs>
              </svg>                    
            </div>
            <p class="info">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less which normal distribution of letters look like readable English.</p>
            <div class="lmst-user-brand d-flex align-items-center justify-content-between">
              <div class="lmst-user-wrap d-flex align-items-center">
                <div class="lmst-user">
                  <img :src=" $page.props.base.url + '/public/assets/img/lms/testimonial-user-1.webp'" alt="">
                </div>
                <div class="lmst-user-details">
                  <h4 class="name">Michael Johnson</h4>
                  <p class="role">Web Developer</p>
                </div>
              </div>
              <div class="lmst-brand-img">
                <img :src=" $page.props.base.url + '/public/assets/img/lms/lms-testimonial-brand-1.svg'" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-next-prev">
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </section>
    <!-- End LMS Testimonials Area -->

    <Footer :elementCategories="element_categories"/>
</template>