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

    <!-- Section Title and Service Area -->
    <section data-aos="fade-up">
      <div class="container">
        <div class="row">
          <!-- Section Title -->
          <div class="col-md-12">
            <div class="section-title-lms section-title-lms-top">
              <h1 class="title-h">Turn your expertise into <span class="bold-h">revenue with</span> <span class="green-h">Creative LMS</span></h1>
              <p>We’ve made it easier than ever to create, manage, and grow a profitable coaching business that achieves transformational client results. </p>
              <div class="title-btn-lms">
                <a href="#" class="signup-btn-1">Start a free Trail</a>
                <a href="#" class="white-btn-lms">Watch demo</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mcg-30" data-aos="fade-up">
          <!-- Single Service -->
          <div class="col-lg-4 col-sm-6">
            <a href="#online-course" class="lms-service-link lms-service-course">
              <div class="lms-service-card">
                <div class="lms-service-img">
                  <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/lms-service-1.svg'" alt="">
                </div>
                <div class="lms-service-details">
                  <h3 class="text-24">Online Course</h3>
                  <p>We’ve made it easier than ever to create manage and grow a profitable coaching business.</p>
                </div>
              </div>
            </a>
          </div>
          <!-- Single Service -->
          <div class="col-lg-4 col-sm-6">
            <a href="#digital-content" class="lms-service-link lms-service-content">
              <div class="lms-service-card">
                <div class="lms-service-img">
                  <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/lms-service-2.svg'" alt="">
                </div>
                <div class="lms-service-details">
                  <h3 class="text-24">Digital Content</h3>
                  <p>We’ve made it easier than ever to create manage and grow a profitable coaching business.</p>
                </div>
              </div>
            </a>
          </div>
          <!-- Single Service -->
          <div class="col-lg-4 col-sm-6">
            <a href="#online-coaching" class="lms-service-link lms-service-coaching">
              <div class="lms-service-card">
                <div class="lms-service-img">
                  <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/lms-service-3.svg'" alt="">
                </div>
                <div class="lms-service-details">
                  <h3 class="text-24">Online Coaching</h3>
                  <p>We’ve made it easier than ever to create manage and grow a profitable coaching business.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Title and Service Area -->


    <!-- Create Course Video Area -->
    <section id="online-course" data-aos="fade-up">
      <div class="container">
        <div class="row">
          <!-- Section Title -->
          <div class="col-md-12">
            <div class="section-title-lms">
              <h1 class="title-h">Sell your <span class="green-h">Online Course</span></h1>
            </div>
          </div>
        </div>
        <div class="create-course-wrap" data-aos="zoom-in-up">
          <div class="row align-items-center justify-content-center mcg-30">
            <div class="col-lg-7 col-md-9">
              <!-- Left -->
              <div class="create-cousre-video">
                <div class="plyr__video-embed my-video-player" id="player-2">
                  <iframe src="https://www.youtube.com/embed/5YHAVhEJ9TM?si=GrmhAZyUahBciHUm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-md-9">
              <!-- Right -->
              <div class="create-course-details">
                <h4 class="title-light">Video Tutorial</h4>
                <h3 class="title-32">Watch David Create a LMS Course in under 5 minutes</h3>
                <ul class="create-course-list">
                  <li>
                    <div class="course-list-img">
                      <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/course-list-1.svg'" alt="">
                    </div>
                    <span>Attach the Unlimited lesson materials</span>
                  </li>
                  <li>
                    <div class="course-list-img">
                      <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/course-list-2.svg'" alt="">
                    </div>
                    <span>Display the video content in a player</span>
                  </li>
                  <li>
                    <div class="course-list-img">
                      <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/course-list-3.svg'" alt="">
                    </div>
                    <span>Run lessons step-by-step on the regular basis</span>
                  </li>
                  <li>
                    <div class="course-list-img">
                      <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/course-list-4.svg'" alt="">
                    </div>
                    <span>Select a certain lesson and fill in with content</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Create Course Video Area -->


    <!-- Online Course Details Area -->
    <section class="online-course-section"  data-aos="fade-up">
      <div class="container">
        <div class="row">
          <!-- Left -->
          <div class="col-md-6">
            <div class="online-course-content">
              <h4 class="title-light">Online Course</h4>
              <h3 class="title-32">Unleash Your Self Learning</h3>
              <!-- Accordion -->
              <div class="course-accordion">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button" data-img-:src=" $page.props.base.url + '/public/assets/img/new-icons-images/accordion-banner-1.svg'" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Course Website
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <p>We’ve made it easier than ever to create, manage, and grow a profitable coaching business that achieves transformational client results. Lorem Ipsum available, but the majority have suffered.</p>
                        <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/accordion-banner-1.svg'" alt="">
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" data-img-:src=" $page.props.base.url + '/public/assets/img/new-icons-images/accordion-banner-2.svg'" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Course Player
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <p>We’ve made it easier than ever to create, manage, and grow a profitable coaching business that achieves transformational client results. Lorem Ipsum available, but the majority have suffered.</p>
                        <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/accordion-banner-2.svg'" alt="">
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" data-img-:src=" $page.props.base.url + '/public/assets/img/new-icons-images/accordion-banner-1.svg'" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Course Wishlist, Compare
                      </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <p>We’ve made it easier than ever to create, manage, and grow a profitable coaching business that achieves transformational client results. Lorem Ipsum available, but the majority have suffered.</p>
                        <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/accordion-banner-1.svg'" alt="">
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" data-img-:src=" $page.props.base.url + '/public/assets/img/new-icons-images/accordion-banner-2.svg'" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Personalized self placed learning
                      </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <p>We’ve made it easier than ever to create, manage, and grow a profitable coaching business that achieves transformational client results. Lorem Ipsum available, but the majority have suffered.</p>
                        <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/accordion-banner-2.svg'" alt="">
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" data-img-:src=" $page.props.base.url + '/public/assets/img/new-icons-images/accordion-banner-1.svg'" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Access from anywhere, anytime
                      </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <p>We’ve made it easier than ever to create, manage, and grow a profitable coaching business that achieves transformational client results. Lorem Ipsum available, but the majority have suffered.</p>
                        <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/accordion-banner-1.svg'" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Right -->
          <div class="col-md-6 d-none d-md-block">
            <div class="accordion-right-banner d-flex">
              <div class="online-course-banner">
                <img id="course-banner" :src=" $page.props.base.url + '/public/assets/img/new-icons-images/accordion-banner-1.svg'" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Online Course Details Area -->


    <!-- Course Organizer Area -->
    <section class="course-organizer-section overflow-x-hidden">
      <div class="container">
        <div class="row">
          <!-- Left -->
          <div class="col-md-6" data-aos="fade-right">
            <div class="organizer-banner-title">
              <h4 class="title-light">Course Organizer</h4>
              <h3 class="title-32">Streamline Your Learning Journey</h3>
            </div>
            <!-- Accordion Img -->
            <div class="accordion-left-banner d-flex">
              <div class="online-course-banner d-none d-md-block">
                <img id="organizer-banner" :src=" $page.props.base.url + '/public/assets/img/new-icons-images/accordion-banner-2.svg'" alt="">
              </div>
            </div>
            <!-- Accordion Img -->
          </div>
          <!-- Right -->
          <div class="col-md-6" data-aos="fade-left">
            <div class="organizer-accordion">
              <div class="accordion" id="accordionExample2">
                <div class="accordion-item accordion-item-shadow">
                  <button class="accordion-button" data-img-:src=" $page.props.base.url + '/public/assets/img/new-icons-images/accordion-banner-2.svg'" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">
                    Friendly Course Builder
                  </button>
                  <div id="collapseOne2" class="accordion-collapse collapse show" data-bs-parent="#accordionExample2">
                    <div class="accordion-body">
                      <p>We’ve made it easier than ever to create, manage, and grow a profit coaching business that achieves transformational client results. Lorem Ipsum available.</p>
                      <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/accordion-banner-2.svg'" alt="">
                    </div>
                  </div>
                </div>
                <div class="accordion-item accordion-item-shadow">
                  <button class="accordion-button collapsed" data-img-:src=" $page.props.base.url + '/public/assets/img/new-icons-images/accordion-banner-1.svg'" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                    Easy Lesson Uploader
                  </button>
                  <div id="collapseTwo2" class="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                    <div class="accordion-body">
                      <p>We’ve made it easier than ever to create, manage, and grow a profit coaching business that achieves transformational client results. Lorem Ipsum available.</p>
                      <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/accordion-banner-1.svg'" alt="">
                    </div>
                  </div>
                </div>
                <div class="accordion-item accordion-item-shadow">
                  <button class="accordion-button collapsed" data-img-:src=" $page.props.base.url + '/public/assets/img/new-icons-images/accordion-banner-2.svg'" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree2">
                    Variety of Lesson Types
                  </button>
                  <div id="collapseThree2" class="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                    <div class="accordion-body">
                      <p>We’ve made it easier than ever to create, manage, and grow a profit coaching business that achieves transformational client results. Lorem Ipsum available.</p>
                      <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/accordion-banner-2.svg'" alt="">
                    </div>
                  </div>
                </div>
                <div class="accordion-item accordion-item-shadow">
                  <button class="accordion-button collapsed" data-img-:src=" $page.props.base.url + '/public/assets/img/new-icons-images/accordion-banner-1.svg'" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour2" aria-expanded="false" aria-controls="collapseFour2">
                    Prepare Draft or Publish Anytime
                  </button>
                  <div id="collapseFour2" class="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                    <div class="accordion-body">
                      <p>We’ve made it easier than ever to create, manage, and grow a profit coaching business that achieves transformational client results. Lorem Ipsum available.</p>
                      <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/accordion-banner-1.svg'" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Course Organizer Area -->


    <!-- Multiple Leasons Area -->
    <section data-aos="fade-up">
      <div class="container">
        <div class="row">
          <!-- Section Title -->
          <div class="col-md-12">
            <div class="section-title-lms">
              <h1 class="title-h">We make your skill better through <span class="green-h">Multiple Lessons</span></h1>
              <p>We’ve made it easier than ever to create, manage, and grow a profitable coaching business that achieves transformational client results. </p>
            </div>
          </div>
        </div>
        <div class="row mcg-30 mrg-30 justify-content-center leason-card-wrap" data-aos="fade-up">
          <!-- Single Leason Card -->
          <div class="col-lg-4 col-md-6">
            <a href="#" class="leason-card-link">
              <div class="single-leason-card">
                <h3 class="text-24">Video Upload</h3>
                <p>We’ve made it easier than ever to create, manage, and grow a profitable coaching business. </p>
                <h4 class="explore d-flex align-items-center">      
                  Explore
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_78_238" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <rect width="20" height="20" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_78_238)">
                    <path d="M13.8558 10.6255H4.375C4.19765 10.6255 4.04915 10.5657 3.9295 10.446C3.80983 10.3264 3.75 10.1779 3.75 10.0005C3.75 9.82319 3.80983 9.67469 3.9295 9.55503C4.04915 9.43538 4.19765 9.37555 4.375 9.37555H13.8558L9.54806 5.06785C9.42413 4.94392 9.36297 4.79889 9.36458 4.63276C9.36618 4.46662 9.43162 4.31892 9.5609 4.18966C9.69016 4.06894 9.83652 4.00644 9.99998 4.00216C10.1634 3.99788 10.3098 4.06038 10.4391 4.18966L15.7227 9.4733C15.8007 9.55129 15.8557 9.63355 15.8878 9.7201C15.9198 9.80662 15.9359 9.9001 15.9359 10.0005C15.9359 10.101 15.9198 10.1944 15.8878 10.281C15.8557 10.3675 15.8007 10.4498 15.7227 10.5278L10.4391 15.8114C10.3237 15.9268 10.1808 15.9858 10.0104 15.9885C9.83999 15.9912 9.69016 15.9321 9.5609 15.8114C9.43162 15.6821 9.36698 15.5336 9.36698 15.3659C9.36698 15.1982 9.43162 15.0497 9.5609 14.9204L13.8558 10.6255Z" fill="#212534"/>
                    </g>
                  </svg>
                </h4>
              </div>
            </a>
          </div>
          <!-- Single Leason Card -->
          <div class="col-lg-4 col-md-6">
            <a href="#" class="leason-card-link">
              <div class="single-leason-card">
                <h3 class="text-24">Youtube</h3>
                <p>We’ve made it easier than ever to create, manage, and grow a profitable coaching business. </p>
                <h4 class="explore d-flex align-items-center">      
                  Explore
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_78_238" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <rect width="20" height="20" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_78_238)">
                    <path d="M13.8558 10.6255H4.375C4.19765 10.6255 4.04915 10.5657 3.9295 10.446C3.80983 10.3264 3.75 10.1779 3.75 10.0005C3.75 9.82319 3.80983 9.67469 3.9295 9.55503C4.04915 9.43538 4.19765 9.37555 4.375 9.37555H13.8558L9.54806 5.06785C9.42413 4.94392 9.36297 4.79889 9.36458 4.63276C9.36618 4.46662 9.43162 4.31892 9.5609 4.18966C9.69016 4.06894 9.83652 4.00644 9.99998 4.00216C10.1634 3.99788 10.3098 4.06038 10.4391 4.18966L15.7227 9.4733C15.8007 9.55129 15.8557 9.63355 15.8878 9.7201C15.9198 9.80662 15.9359 9.9001 15.9359 10.0005C15.9359 10.101 15.9198 10.1944 15.8878 10.281C15.8557 10.3675 15.8007 10.4498 15.7227 10.5278L10.4391 15.8114C10.3237 15.9268 10.1808 15.9858 10.0104 15.9885C9.83999 15.9912 9.69016 15.9321 9.5609 15.8114C9.43162 15.6821 9.36698 15.5336 9.36698 15.3659C9.36698 15.1982 9.43162 15.0497 9.5609 14.9204L13.8558 10.6255Z" fill="#212534"/>
                    </g>
                  </svg>
                </h4>
              </div>
            </a>
          </div>
          <!-- Single Leason Card -->
          <div class="col-lg-4 col-md-6">
            <a href="#" class="leason-card-link">
              <div class="single-leason-card">
                <h3 class="text-24">Vimeo</h3>
                <p>We’ve made it easier than ever to create, manage, and grow a profitable coaching business. </p>
                <h4 class="explore d-flex align-items-center">      
                  Explore
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_78_238" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <rect width="20" height="20" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_78_238)">
                    <path d="M13.8558 10.6255H4.375C4.19765 10.6255 4.04915 10.5657 3.9295 10.446C3.80983 10.3264 3.75 10.1779 3.75 10.0005C3.75 9.82319 3.80983 9.67469 3.9295 9.55503C4.04915 9.43538 4.19765 9.37555 4.375 9.37555H13.8558L9.54806 5.06785C9.42413 4.94392 9.36297 4.79889 9.36458 4.63276C9.36618 4.46662 9.43162 4.31892 9.5609 4.18966C9.69016 4.06894 9.83652 4.00644 9.99998 4.00216C10.1634 3.99788 10.3098 4.06038 10.4391 4.18966L15.7227 9.4733C15.8007 9.55129 15.8557 9.63355 15.8878 9.7201C15.9198 9.80662 15.9359 9.9001 15.9359 10.0005C15.9359 10.101 15.9198 10.1944 15.8878 10.281C15.8557 10.3675 15.8007 10.4498 15.7227 10.5278L10.4391 15.8114C10.3237 15.9268 10.1808 15.9858 10.0104 15.9885C9.83999 15.9912 9.69016 15.9321 9.5609 15.8114C9.43162 15.6821 9.36698 15.5336 9.36698 15.3659C9.36698 15.1982 9.43162 15.0497 9.5609 14.9204L13.8558 10.6255Z" fill="#212534"/>
                    </g>
                  </svg>
                </h4>
              </div>
            </a>
          </div>
          <!-- Single Leason Card -->
          <div class="col-lg-4 col-md-6">
            <a href="#" class="leason-card-link">
              <div class="single-leason-card">
                <h3 class="text-24">Audio</h3>
                <p>We’ve made it easier than ever to create, manage, and grow a profitable coaching business. </p>
                <h4 class="explore d-flex align-items-center">      
                  Explore
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_78_238" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <rect width="20" height="20" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_78_238)">
                    <path d="M13.8558 10.6255H4.375C4.19765 10.6255 4.04915 10.5657 3.9295 10.446C3.80983 10.3264 3.75 10.1779 3.75 10.0005C3.75 9.82319 3.80983 9.67469 3.9295 9.55503C4.04915 9.43538 4.19765 9.37555 4.375 9.37555H13.8558L9.54806 5.06785C9.42413 4.94392 9.36297 4.79889 9.36458 4.63276C9.36618 4.46662 9.43162 4.31892 9.5609 4.18966C9.69016 4.06894 9.83652 4.00644 9.99998 4.00216C10.1634 3.99788 10.3098 4.06038 10.4391 4.18966L15.7227 9.4733C15.8007 9.55129 15.8557 9.63355 15.8878 9.7201C15.9198 9.80662 15.9359 9.9001 15.9359 10.0005C15.9359 10.101 15.9198 10.1944 15.8878 10.281C15.8557 10.3675 15.8007 10.4498 15.7227 10.5278L10.4391 15.8114C10.3237 15.9268 10.1808 15.9858 10.0104 15.9885C9.83999 15.9912 9.69016 15.9321 9.5609 15.8114C9.43162 15.6821 9.36698 15.5336 9.36698 15.3659C9.36698 15.1982 9.43162 15.0497 9.5609 14.9204L13.8558 10.6255Z" fill="#212534"/>
                    </g>
                  </svg>
                </h4>
              </div>
            </a>
          </div>
          <!-- Single Leason Card -->
          <div class="col-lg-4 col-md-6">
            <a href="#" class="leason-card-link">
              <div class="single-leason-card">
                <h3 class="text-24">Text</h3>
                <p>We’ve made it easier than ever to create, manage, and grow a profitable coaching business. </p>
                <h4 class="explore d-flex align-items-center">      
                  Explore
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_78_238" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <rect width="20" height="20" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_78_238)">
                    <path d="M13.8558 10.6255H4.375C4.19765 10.6255 4.04915 10.5657 3.9295 10.446C3.80983 10.3264 3.75 10.1779 3.75 10.0005C3.75 9.82319 3.80983 9.67469 3.9295 9.55503C4.04915 9.43538 4.19765 9.37555 4.375 9.37555H13.8558L9.54806 5.06785C9.42413 4.94392 9.36297 4.79889 9.36458 4.63276C9.36618 4.46662 9.43162 4.31892 9.5609 4.18966C9.69016 4.06894 9.83652 4.00644 9.99998 4.00216C10.1634 3.99788 10.3098 4.06038 10.4391 4.18966L15.7227 9.4733C15.8007 9.55129 15.8557 9.63355 15.8878 9.7201C15.9198 9.80662 15.9359 9.9001 15.9359 10.0005C15.9359 10.101 15.9198 10.1944 15.8878 10.281C15.8557 10.3675 15.8007 10.4498 15.7227 10.5278L10.4391 15.8114C10.3237 15.9268 10.1808 15.9858 10.0104 15.9885C9.83999 15.9912 9.69016 15.9321 9.5609 15.8114C9.43162 15.6821 9.36698 15.5336 9.36698 15.3659C9.36698 15.1982 9.43162 15.0497 9.5609 14.9204L13.8558 10.6255Z" fill="#212534"/>
                    </g>
                  </svg>
                </h4>
              </div>
            </a>
          </div>
          <!-- Single Leason Card -->
          <div class="col-lg-4 col-md-6">
            <a href="#" class="leason-card-link">
              <div class="single-leason-card">
                <h3 class="text-24">Image</h3>
                <p>We’ve made it easier than ever to create, manage, and grow a profitable coaching business. </p>
                <h4 class="explore d-flex align-items-center">      
                  Explore
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_78_238" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <rect width="20" height="20" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_78_238)">
                    <path d="M13.8558 10.6255H4.375C4.19765 10.6255 4.04915 10.5657 3.9295 10.446C3.80983 10.3264 3.75 10.1779 3.75 10.0005C3.75 9.82319 3.80983 9.67469 3.9295 9.55503C4.04915 9.43538 4.19765 9.37555 4.375 9.37555H13.8558L9.54806 5.06785C9.42413 4.94392 9.36297 4.79889 9.36458 4.63276C9.36618 4.46662 9.43162 4.31892 9.5609 4.18966C9.69016 4.06894 9.83652 4.00644 9.99998 4.00216C10.1634 3.99788 10.3098 4.06038 10.4391 4.18966L15.7227 9.4733C15.8007 9.55129 15.8557 9.63355 15.8878 9.7201C15.9198 9.80662 15.9359 9.9001 15.9359 10.0005C15.9359 10.101 15.9198 10.1944 15.8878 10.281C15.8557 10.3675 15.8007 10.4498 15.7227 10.5278L10.4391 15.8114C10.3237 15.9268 10.1808 15.9858 10.0104 15.9885C9.83999 15.9912 9.69016 15.9321 9.5609 15.8114C9.43162 15.6821 9.36698 15.5336 9.36698 15.3659C9.36698 15.1982 9.43162 15.0497 9.5609 14.9204L13.8558 10.6255Z" fill="#212534"/>
                    </g>
                  </svg>
                </h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- Multiple Leasons Area -->


    <!-- Learning Analytics Review Area -->
    <section class="learning-analyrics-section overflow-x-hidden">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <!-- Left -->
          <div class="col-lg-6 col-md-9" data-aos="fade-right">
            <!-- Analytics Img -->
            <div class="analytics-left-banner d-flex">
              <div class="analytics-interaction-banner">
                <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/analytics-banner.webp'" alt="">
              </div>
            </div>
          </div>
          <!-- Right -->
          <div class="col-lg-6 col-md-9" data-aos="fade-left">
            <div class="analytics-and-interaction">
              <h4 class="title-light">Learning Analytics Review</h4>
              <h3 class="title-32">Enhance the Learning: A Review of Learning Analytics</h3>
              <p>We’ve made it easier than ever to create, manage, and grow a profitable their coaching business that achieves transformational client results.</p>
              <ul class="analytics-and-interaction-list">
                <li>
                  <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/gray-list-check.svg'" alt="">
                  <span>Attach the Unlimited lesson materials</span>
                </li>
                <li>
                  <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/gray-list-check.svg'" alt="">
                  <span>Display the video content in a player</span>
                </li>
                <li>
                  <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/gray-list-check.svg'" alt="">
                  <span>Run lessons step-by-step on the regular basis</span>
                </li>
                <li>
                  <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/gray-list-check.svg'" alt="">
                  <span>Select a certain lesson and fill in with content</span>
                </li>
                <li>
                  <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/gray-list-check.svg'" alt="">
                  <span>Select a certain lesson and fill in with content</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Learning Analytics Review Area -->


    <!-- Interaction with Students Area -->
    <section class="interaction-student-section" data-aos="fade-up">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <!-- Left -->
          <div class="col-lg-6 col-md-9 order-2 order-lg-1">
            <div class="analytics-and-interaction">
              <h4 class="title-light">Interaction with Students</h4>
              <h3 class="title-32">Empowering Students through Active Engagement</h3>
              <p>We’ve made it easier than ever to create, manage, and grow a profitable their coaching business that achieves transformational client results.</p>
              <ul class="analytics-and-interaction-list">
                <li>
                  <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/gray-list-check.svg'" alt="">
                  <span>Attach the Unlimited lesson materials</span>
                </li>
                <li>
                  <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/gray-list-check.svg'" alt="">
                  <span>Display the video content in a player</span>
                </li>
                <li>
                  <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/gray-list-check.svg'" alt="">
                  <span>Run lessons step-by-step on the regular basis</span>
                </li>
                <li>
                  <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/gray-list-check.svg'" alt="">
                  <span>Select a certain lesson and fill in with content</span>
                </li>
                <li>
                  <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/gray-list-check.svg'" alt="">
                  <span>Select a certain lesson and fill in with content</span>
                </li>
              </ul>
            </div>
          </div>
          <!-- Right -->
          <div class="col-lg-6 col-md-9 order-1 order-lg-2">
            <!-- Interaction Img -->
            <div class="interaction-right-banner d-flex">
              <div class="analytics-interaction-banner">
                <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/interaction-banner.webp'" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Interaction with Students Area -->


    <!-- Payment Processing Area -->
    <section class="overflow-x-hidden">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <!-- Left -->
          <div class="col-lg-6 col-md-9" data-aos="fade-right">
            <!-- Analytics Img -->
            <div class="analytics-left-banner d-flex">
              <div class="analytics-interaction-banner">
                <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/payment-banner.webp'" alt="">
              </div>
            </div>
          </div>
          <!-- Right -->
          <div class="col-lg-6 col-md-9" data-aos="fade-left">
            <div class="analytics-and-interaction">
              <h4 class="title-light">Payment Processing</h4>
              <h3 class="title-32">Accelerate Your Business with Secure Payments</h3>
              <p>We’ve made it easier than ever to create, manage, and grow a profitable their coaching business that achieves transformational client results.</p>
              <ul class="analytics-and-interaction-list">
                <li>
                  <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/gray-list-check.svg'" alt="">
                  <span>Attach the Unlimited lesson materials</span>
                </li>
                <li>
                  <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/gray-list-check.svg'" alt="">
                  <span>Display the video content in a player</span>
                </li>
                <li>
                  <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/gray-list-check.svg'" alt="">
                  <span>Run lessons step-by-step on the regular basis</span>
                </li>
                <li>
                  <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/gray-list-check.svg'" alt="">
                  <span>Select a certain lesson and fill in with content</span>
                </li>
                <li>
                  <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/gray-list-check.svg'" alt="">
                  <span>Select a certain lesson and fill in with content</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Payment Processing Area -->


    <!-- Create Course Video Area -->
    <section id="digital-content" data-aos="fade-up">
      <div class="container">
        <div class="row">
          <!-- Section Title -->
          <div class="col-md-12">
            <div class="section-title-lms">
              <h1 class="title-h">Transforming Ideas into <span class="green-h">Digital Content</span></h1>
            </div>
          </div>
        </div>
        <div class="create-course-wrap" data-aos="zoom-in-up">
          <div class="row align-items-center justify-content-center mcg-30">
            <div class="col-lg-7 col-md-9">
              <!-- Left -->
              <div class="create-cousre-video" >
                <div class="plyr__video-embed my-video-player" id="player-3">
                  <iframe src="https://www.youtube.com/embed/5YHAVhEJ9TM?si=GrmhAZyUahBciHUm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-md-9">
              <!-- Right -->
              <div class="create-course-details">
                <h4 class="title-light">Video Tutorial</h4>
                <h3 class="title-32">Watch David Create a LMS Course in under 5 minutes</h3>
                <ul class="create-course-list">
                  <li>
                    <div class="course-list-img">
                      <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/course-list-1.svg'" alt="">
                    </div>
                    <span>Attach the Unlimited lesson materials</span>
                  </li>
                  <li>
                    <div class="course-list-img">
                      <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/course-list-2.svg'" alt="">
                    </div>
                    <span>Display the video content in a player</span>
                  </li>
                  <li>
                    <div class="course-list-img">
                      <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/course-list-3.svg'" alt="">
                    </div>
                    <span>Run lessons step-by-step on the regular basis</span>
                  </li>
                  <li>
                    <div class="course-list-img">
                      <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/course-list-4.svg'" alt="">
                    </div>
                    <span>Select a certain lesson and fill in with content</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Create Course Video Area -->


    <!-- Digital Content Area -->
    <section class="overflow-x-hidden">
      <div class="container">
        <div class="row padding-bottom-110 align-items-center justify-content-center">
          <!-- Left -->
          <div class="col-lg-6 col-md-9 order-2 order-lg-1" data-aos="fade-right">
            <div class="feature-content-area">
              <h4 class="title-light">Payment Processing</h4>
              <h3 class="title-32">Accelerate Your Business with Secure Payments</h3>
              <div class="feature-content-pera">
                <p>We’ve made it easier than ever to create, manage, and grow a profitable coaching business that achieves transformational client results. With Kajabi’s seamless setup and full suite of built-in coaching tools.</p>
              </div>
              <div class="feature-content-btn d-flex">
                <a href="#" class="unlimited-btn">Start a free Trail</a>
                <a href="#" class="white-btn-lms">Watch demo</a>
              </div>
            </div>
          </div>
          <!-- Right -->
          <div class="col-lg-6 col-md-9 order-1 order-lg-2" data-aos="fade-left"> 
            <div class="feature-right-banner d-flex">
              <div class="feature-content-banner">
                <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/feature-banner-1.webp'" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Digital Content Area -->


    <!-- Multi Leason Area -->
    <section data-aos="fade-up">
      <div class="container">
        <div class="row">
          <!-- Section Title -->
          <div class="col-md-12">
            <div class="section-title-lms">
              <h1 class="title-h">Empower Your Journey with <span class="green-h">Multi-Lesson</span> Content</h1>
              <p>We’ve made it easier than ever to create, manage, and grow a profitable coaching business that achieves transformational client results. </p>
            </div>
          </div>
        </div>
        <div class="row mcg-30 mrg-30 justify-content-center" data-aos="fade-up">
          <!-- Single Leason Card -->
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="single-multi-card">
              <div class="multi-item-img">
                <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/multi-icon-1.svg'" alt="">
              </div>
              <h4 class="text-20">Ebook</h4>
              <p>We’ve made it easier than ever to create and grow a profitable coaching business. </p>
            </div>
          </div>
          <!-- Single Leason Card -->
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="single-multi-card">
              <div class="multi-item-img">
                <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/multi-icon-2.svg'" alt="">
              </div>
              <h4 class="text-20">PDF</h4>
              <p>We’ve made it easier than ever to create and grow a profitable coaching business. </p>
            </div>
          </div>
          <!-- Single Leason Card -->
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="single-multi-card">
              <div class="multi-item-img">
                <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/multi-icon-3.svg'" alt="">
              </div>
              <h4 class="text-20">Image</h4>
              <p>We’ve made it easier than ever to create and grow a profitable coaching business. </p>
            </div>
          </div>
          <!-- Single Leason Card 4 -->
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="single-multi-card">
              <div class="multi-item-img">
                <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/multi-icon-4.svg'" alt="">
              </div>
              <h4 class="text-20">Audio</h4>
              <p>We’ve made it easier than ever to create and grow a profitable coaching business. </p>
            </div>
          </div>
          <!-- Single Leason Card -->
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="single-multi-card">
              <div class="multi-item-img">
                <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/multi-icon-5.svg'" alt="">
              </div>
              <h4 class="text-20">Vimeo</h4>
              <p>We’ve made it easier than ever to create and grow a profitable coaching business. </p>
            </div>
          </div>
          <!-- Single Leason Card -->
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="single-multi-card">
              <div class="multi-item-img">
                <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/multi-icon-6.svg'" alt="">
              </div>
              <h4 class="text-20">Text</h4>
              <p>We’ve made it easier than ever to create and grow a profitable coaching business. </p>
            </div>
          </div>
          <!-- Single Leason Card -->
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="single-multi-card">
              <div class="multi-item-img">
                <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/multi-icon-7.svg'" alt="">
              </div>
              <h4 class="text-20">Video Upload</h4>
              <p>We’ve made it easier than ever to create and grow a profitable coaching business. </p>
            </div>
          </div>
          <!-- Single Leason Card -->
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="single-multi-card">
              <div class="multi-item-img">
                <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/multi-icon-8.svg'" alt="">
              </div>
              <h4 class="text-20">Youtube</h4>
              <p>We’ve made it easier than ever to create and grow a profitable coaching business. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Multi Leason Area -->


    <!-- Create Course Video Area -->
    <section id="online-coaching" data-aos="fade-up">
      <div class="container">
        <div class="row">
          <!-- Section Title -->
          <div class="col-md-12">
            <div class="section-title-lms">
              <h1 class="title-h">The Future of Learning is Here & it’s <span class="green-h">Online Coaching</span></h1>
            </div>
          </div>
        </div>
        <div class="create-course-wrap" data-aos="zoom-in-up">
          <div class="row align-items-center justify-content-center mcg-30">
            <div class="col-lg-7 col-md-9">
              <!-- Left -->
              <div class="create-cousre-video">
                <div class="plyr__video-embed my-video-player" id="player-4">
                  <iframe src="https://www.youtube.com/embed/5YHAVhEJ9TM?si=GrmhAZyUahBciHUm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-md-9">
              <!-- Right -->
              <div class="create-course-details">
                <h4 class="title-light">Video Tutorial</h4>
                <h3 class="title-32">Watch David Create a LMS Course in under 5 minutes</h3>
                <ul class="create-course-list">
                  <li>
                    <div class="course-list-img">
                      <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/course-list-1.svg'" alt="">
                    </div>
                    <span>Attach the Unlimited lesson materials</span>
                  </li>
                  <li>
                    <div class="course-list-img">
                      <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/course-list-2.svg'" alt="">
                    </div>
                    <span>Display the video content in a player</span>
                  </li>
                  <li>
                    <div class="course-list-img">
                      <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/course-list-3.svg'" alt="">
                    </div>
                    <span>Run lessons step-by-step on the regular basis</span>
                  </li>
                  <li>
                    <div class="course-list-img">
                      <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/course-list-4.svg'" alt="">
                    </div>
                    <span>Select a certain lesson and fill in with content</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Create Course Video Area -->


    <!-- Appointment Booking Area -->
    <section class="overflow-x-hidden">
      <div class="container">
        <div class="row padding-bottom-110 justify-content-center">
          <!-- Left -->
          <div class="col-lg-5 col-md-9 order-2 order-lg-1" data-aos="fade-right">
            <div class="feature-content-area">
              <h4 class="title-light">Appointment Booking</h4>
              <h3 class="title-32">Empower your journey with our <span>Easy Booking</span></h3>
              <div class="feature-content-pera">
                <p>We’ve made it easier than ever to create, manage, and grow a profitable coaching business that achieves transformational client results.</p>
                <p>We’ve made it easier than ever to create, manage, and grow a profitable coaching business.</p>
              </div>
              <a href="#" class="black-btn-lms">Start for free</a>
            </div>
          </div>
          <!-- Right -->
          <div class="col-lg-7 col-md-9 order-1 order-lg-2" data-aos="fade-left">
            <div class="feature-right-banner d-flex">
              <div class="feature-content-banner">
                <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/feature-banner-2.webp'" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Appointment Booking Area -->


    <!-- Session SCHEDULING Area -->
    <section data-aos="fade-up">
      <div class="container">
        <div class="row padding-bottom-110 justify-content-center">
          <!-- Left -->
          <div class="col-lg-7 col-md-9">
            <div class="feature-left-banner d-flex">
              <div class="feature-content-banner">
                <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/feature-banner-3.webp'" alt="">
              </div>
            </div>
          </div>
          <!-- Right -->
          <div class="col-lg-5 col-md-9">
            <div class="feature-content-area">
              <h4 class="title-light">Session SCHEDULING</h4>
              <h3 class="title-32">Effortless Learning Begins with <span>Smart Scheduling</span></h3>
              <div class="feature-content-pera">
                <p>We’ve made it easier than ever to create, manage, and grow a profitable coaching business that achieves transformational client results.</p>
                <p>We’ve made it easier than ever to create, manage, and grow a profitable coaching business.</p>
              </div>
              <a href="#" class="black-btn-lms">Start for free</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Session SCHEDULING Area -->


    <!-- Live Video Class Area -->
    <section class="overflow-x-hidden">
      <div class="container">
        <div class="row padding-bottom-110 justify-content-center">
          <!-- Left -->
          <div class="col-lg-5 col-md-9 order-2 order-lg-1" data-aos="fade-right">
            <div class="feature-content-area">
              <h4 class="title-light">Live Video Class</h4>
              <h3 class="title-32">Unlock the Future of Learning through <span>Live Video Classes</span></h3>
              <div class="feature-content-pera">
                <p>We’ve made it easier than ever to create, manage, and grow a profitable coaching business that achieves transformational client results.</p>
                <p>We’ve made it easier than ever to create, manage, and grow a profitable coaching business.</p>
              </div>
              <a href="#" class="black-btn-lms">Start for free</a>
            </div>
          </div>
          <!-- Right -->
          <div class="col-lg-7 col-md-9 order-1 order-lg-2" data-aos="fade-left">
            <div class="feature-right-banner d-flex">
              <div class="feature-content-banner">
                <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/feature-banner-4.webp'" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Live Video Class Area -->

    <Footer :elementCategories="element_categories"/>
</template>