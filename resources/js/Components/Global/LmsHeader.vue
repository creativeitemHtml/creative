<script setup>
import { Link } from '@inertiajs/vue3'
import '../../../../public/assets/css/element-header.css';
</script>

<template>
    <!-- Start Element Header -->
    <section class="element-menu-section ">
      <div class="element-menu-header">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="element-menu-wrap d-flex justify-content-between align-items-center">
                <!-- Logo -->
                <div class="element-logo">
                  <a href="#"><img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/lms-logo.svg'" alt="logo"></a>
                </div>
                <!-- Menu -->
                <div class="element-menu-area">
                  <nav class="element-desktop-nav">
                    <ul class="d-flex align-items-center align-items-center">
                      <li><Link :href="route('lms.home')" class="active">Home</Link></li>
                      <li><Link :href="route('lms.features')">Features</Link></li>
                      <li><Link :href="route('lms.pricing')">Pricing</Link></li>
                      <li class="el-have-sub">
                        <a href="javascript:void(0);">Solutions
                          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.67145 6.46581C5.46816 6.46581 5.2649 6.38819 5.10991 6.23327L0.232691 1.356C-0.0775637 1.04575 -0.0775637 0.54273 0.232691 0.232595C0.54282 -0.0775318 1.04574 -0.0775318 1.35602 0.232595L5.67145 4.54827L9.9869 0.232756C10.2972 -0.0773869 10.8 -0.0773869 11.1101 0.232756C11.4205 0.542875 11.4205 1.0459 11.1101 1.35616L6.23299 6.23342C6.07792 6.38836 5.87466 6.46581 5.67145 6.46581Z" fill="#212534"></path>
                          </svg>
                        </a>
                        <ul class="el-sub-menu">
                          <span></span>
                          <li><Link :href="route('lms.solution_course_selling')" class="active">Course Selling</Link></li>
                          <li><Link :href="route('lms.solution_training')">Training</Link></li>
                        </ul>
                      </li>
                      <!-- <li><Link :href="route('lms.demo')">Demo</Link></li> -->
                    </ul>
                  </nav>
                </div>
                <!-- Start Free Button -->
                <div class="element-sm-btn d-flex align-items-center">
                  <div class="element-menu-button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                  </div>
                  <a href="#" class="unlimited-btn">Start For Free</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Element Header -->
</template>