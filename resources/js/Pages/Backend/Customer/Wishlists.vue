<script setup>

import Header from '../../../Components/Global/Header.vue';
import Footer from '../../../Components/Global/Footer.vue'
import Breadcrumb from '../../../Components/Backend/Breadcrumb.vue'
import MobileOffcanvas from '../../../Components/Backend/MobileOffcanvas.vue'
import Navigation from '../../../Components/Backend/Navigation.vue'
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    element_categories: Array,
    wishlists: Array,
    server_url: Object,
});

const slugify = (text) => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w-]+/g, '')       // Remove non-word characters
    .replace(/--+/g, '-')           // Replace multiple - with single -
    .replace(/^-+|-+$/g, '');       // Trim - from start and end of the string
};

const generateProductDetailsLink = (title, id) => {
  // Here, you can use the slugified title and the ID to generate the link
  const titleSlug = slugify(title)+'-'+id;
  return route('element_product_details', { title: titleSlug });
};

</script>

<template>
    <Header/>
    <Breadcrumb/>
    <MobileOffcanvas/>

    <section class="elements-section elements-section-2 breadcrumb-under">
      <div class="container">
        <div class="row justify-content-center">

          <!-- Left side -->
          <Navigation/>

          <!-- Right side -->
          <div class="col-lg-9">
            <div class="subscription-main-wrap l_col_main">
              <div class="title-btn-menu-wrap d-flex justify-content-between align-items-center flex-wrap g-10 pb-30 mb-20">
                <h4 class="fz-20-sb-black">Creative Elements - Wishlists</h4>
                <Link :href="route('elements')" class="new-goelement-btn">
                  Go to Elements
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
                </Link>
                <button class="d-lg-none mobile-menu-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                  <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/menu-icon.svg'" alt="menu">
                </button>
              </div>

              <!-- Products -->
              <div v-if="wishlists.length > 0" class="row">
                <div class="col-lg-4 col-md-6" v-for="wishlist in wishlists" :key="wishlist.id">
                  <div class="product-item-three product-item-add">
                    <Link :href="generateProductDetailsLink(wishlist.title, wishlist.id)" class="product-three-link"></Link>
                    <div class="thumbnil-price">
                      <img :src="wishlist.thumbnail" alt="" />
                      <ul class="wishlist-bookmark">
                        <li data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Like">
                          <span class="active" href="#">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.98268 15.4327C9.83416 15.4327 9.69447 15.4068 9.56359 15.355C9.43272 15.3032 9.30692 15.2238 9.1862 15.117L8.4378 14.4407C6.91322 13.0935 5.59778 11.8042 4.49149 10.5729C3.38518 9.34161 2.83203 8.08119 2.83203 6.79167C2.83203 5.81517 3.17124 4.99465 3.84966 4.33012C4.52807 3.6656 5.36248 3.33333 6.35286 3.33333C6.93299 3.33333 7.5417 3.47996 8.17899 3.77323C8.81628 4.06651 9.42285 4.64583 9.9987 5.51121C10.6023 4.64583 11.2158 4.06651 11.8392 3.77323C12.4626 3.47996 13.0644 3.33333 13.6445 3.33333C14.6349 3.33333 15.4693 3.6656 16.1477 4.33012C16.8262 4.99465 17.1654 5.81517 17.1654 6.79167C17.1654 8.11325 16.5855 9.39771 15.4258 10.645C14.2661 11.8924 12.9773 13.1522 11.5596 14.4247L10.7952 15.117C10.6745 15.2238 10.546 15.3032 10.4098 15.355C10.2735 15.4068 10.1312 15.4327 9.98268 15.4327Z" fill="#FE2048"/>
                            </svg>                            
                          </span>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Bookmark">
                          <span href="#">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 14.7263L6.93652 15.8993C6.48141 16.0726 6.04487 16.0222 5.62692 15.7484C5.20897 15.4745 5 15.1033 5 14.6348V4.34683C5 3.96121 5.13458 3.64033 5.40375 3.3842C5.67292 3.12807 6.01012 3 6.41537 3H13.5846C13.9899 3 14.3271 3.12807 14.5962 3.3842C14.8654 3.64033 15 3.96121 15 4.34683V14.6348C15 15.1033 14.791 15.4745 14.3731 15.7484C13.9551 16.0222 13.5186 16.0726 13.0635 15.8993L10 14.7263ZM10 3.76126H5.8H14.2H10Z" fill="#0A7EFB"/>
                            </svg>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div class="content d-flex">
                      <div class="product-title-author">
                        <h4 class="product-title">{{ wishlist.title }}</h4>
                      </div>
                      <span class="product-price">${{ wishlist.price }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div v-else class="no-subscription arrow-right mt-60">
                <img :src=" $page.props.base.url + '/public/assets/img/admin-customer/subscription-status.png'" alt="">
                <h4 class="title"> Purchase a new item!</h4>
                <Link :href="route('elements')" class="new-goelement-btn">
                  Browse elements file
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
                </Link>
              </div>

              <!-- <div class="web-ui-pagination pt-60">
                <nav>
                  <ul class="pagination ci-pagination ci-pagination-1">
                    <li class="page-item">
                      <a class="page-link previous" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="12"
                          viewBox="0 0 8.414 14.828"
                        >
                          <path
                            id="Path_460"
                            data-name="Path 460"
                            d="M15,6,9,12l6,6"
                            transform="translate(-8 -4.586)"
                            fill="none"
                            stroke="#797c8b"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          />
                        </svg>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link active" href="#">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">4</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">...</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">16</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link next" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="12"
                          viewBox="0 0 8.414 14.828"
                        >
                          <path
                            id="Path_462"
                            data-name="Path 462"
                            d="M9,6l6,6L9,18"
                            transform="translate(-7.586 -4.586)"
                            fill="none"
                            stroke="#797c8b"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div> -->


            </div>
          </div>
        </div>
        <!-- End Textual Inputs -->
      </div>
    </section>
    <!-- End Elements -->



    <Footer :elementCategories="element_categories"/>
</template>