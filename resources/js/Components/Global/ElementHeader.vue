<script setup>
import { Link } from '@inertiajs/vue3'
import '../../../../public/assets/css/element-header.css';
import { usePage, useForm } from '@inertiajs/vue3'

import { ref } from 'vue';

const page = usePage()

const slug = ref(page.props.element.categories[0].slug);
const form = useForm({
    search: '',
});

const handleCategoryChange = () => {
  slug.value = slug.value;
};

const submitForm = () => {
  form.get(route('search_element_products', { slug: slug.value }));
};


// Get the current URL
const currentURL = window.location.href;

// Split the URL by '/'
const parts = currentURL.split('/');

// Get the last part of the URL
const lastParam = parts[parts.length - 1];

// Element Search class add remove
$(document).ready(function() {
  const menuContainer = $(".el-have-search");
  const menuToggle = $(".search-show-btn");
  const menu = $(".menu-search-antry");
  if (menuToggle.length) {
    menuToggle.on("click", function(event) {
      event.stopPropagation();
      menu.toggleClass("active");
      menuToggle.toggleClass("active");
    });
  }
  $(document).on("click", function(event) {
    const target = $(event.target);
    if (menuContainer.length && !menuContainer.is(target) && !menuContainer.has(target).length) {
      menu.removeClass("active");
      if (menuToggle.length) {
        menuToggle.removeClass("active");
      }
    }
  });
});

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
                  <Link :href="route('elements')"><img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/element-logo.svg'" alt="logo"></Link>
                </div>
                <!-- Menu -->
                <div class="element-menu-area">
                  <nav class="element-desktop-nav">
                    <ul class="d-flex align-items-center align-items-center">
                      <li v-for="category in $page.props.element.categories" :key="category.id">
                        <Link :href="route('search_element_products', { slug: category.slug})" :class="{'active': lastParam === category.slug}">{{ category.name }}</Link>
                      </li>
                      <li><Link :href="route('elements_package_pricing')" class="border-none" :class="{'active': lastParam === 'pricing'}">Pricing</Link></li>
                      <li class="el-have-search">
                        <a href="javascript:void(0);" class="search-show-btn">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                        </a>
                        <!-- Search Bar  -->
                        <div class="menu-search-antry">
                          <form @submit.prevent="submitForm" class="d-flex align-items-center">
                            <select v-model="slug" @change="handleCategoryChange" class="nice-select">
                              <option v-for="category in $page.props.element.categories" :key="category.id" :value="category.slug">{{ category.name }}</option>
                            </select>
                            <div class="search-input-after">
                              <input v-model="form.search" type="search" id="search" name="search" class="form-control form-control-2">
                            </div>
                            <button type="submit">
                              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                              Search</button>
                          </form>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
                <!-- Unlimited Button -->
                <div class="element-sm-btn d-flex align-items-center">
                  <div class="element-menu-button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                  </div>
                  <Link :href="route('elements_package_pricing')" class="unlimited-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.6164 17.25L20.2316 18.9187C20.1529 19.2592 19.8499 19.5 19.5004 19.5H4.50039C4.15089 19.5 3.84789 19.2592 3.76914 18.9187L3.38439 17.25H20.6164ZM22.4816 9.16874L20.9629 15.75H3.03789L1.51914 9.16874C1.45239 8.87849 1.56339 8.57549 1.80264 8.39774C2.04264 8.21999 2.36439 8.20124 2.62239 8.34899L7.26414 11.0017L11.3756 4.83449C11.5099 4.63349 11.7319 4.50899 11.9726 4.49999C12.2156 4.48949 12.4444 4.59899 12.5921 4.78949L17.4139 10.989L21.3341 8.37599C21.5899 8.20649 21.9236 8.20799 22.1764 8.38274C22.4299 8.55749 22.5499 8.86949 22.4816 9.16874Z" fill="white"/>
                    </svg>
                    <span>Get Unlimited <span class="hide-text">Downloads</span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Element Header -->
</template>