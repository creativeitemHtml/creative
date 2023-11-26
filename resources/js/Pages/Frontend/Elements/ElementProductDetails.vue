<script setup>
import Header from '../../../Components/Global/Header.vue';
import ElementHeader from '../../../Components/Global/ElementHeader.vue';
import Footer from '../../../Components/Global/Footer.vue';
import { Link } from '@inertiajs/vue3';
import { usePage } from '@inertiajs/vue3'
import { ref, onMounted, computed } from 'vue';

const page = usePage()

// Define props using the defineProps() function
const props = defineProps({
    selected_product: Object,
    selected_category: Object,
    selected_category_slug: Object,
    element_categories: Array,
    element_products: Array,
    more_products: Array,
    product_comments: Array,
    preview_thumbnails: Array,
    today: Object,
    current_subscription: Object,
    is_purchased: Object,
    seo: Object,
});

const thumbnails = ref([]);
const previews = ref([]);
const currentPageUrl = ref('');

const countLikes = computed(() => {
    if (props.selected_product && props.selected_product.like) {
      const likes = JSON.parse(props.selected_product.like);
      return likes.length;
    } else {
      return 0;
    }
});

onMounted(() => {
  // Assuming `selected_product.preview_thumbnails` is a JSON string
  const thumbnailsData = JSON.parse(props.selected_product.preview_thumbnails || '[]');
  thumbnails.value = thumbnailsData;
  const screenshots = JSON.parse(props.preview_thumbnails || '[]');
  previews.value = screenshots;
  currentPageUrl.value = window.location.href;

  
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

// Element Details Slider
$(document).ready(function(){
    var swiper = new Swiper(".elSlider-thumb", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".elSlider-main", {
        loop: true,
        spaceBetween: 50,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });


    new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        share: false,
        spinner: 'rotating-plane'
    });

    const player = new Plyr('#player');
});

//Element Details Share show hide
$(document).ready(function () {
  var copyButton = $("#copy-button");
  var linkInput = $("#link-input");
  var copyImage = $("#copy-image");

  copyButton.on("click", function() {
    linkInput.select();
    document.execCommand("copy");
    copyButton.addClass("copied");
    window.getSelection().removeAllRanges();
    setTimeout(function() {
        copyButton.removeClass("copied");
    }, 1000);
  });

  $(".shareDropdown-button").click(function () {
    event.stopPropagation();
    $(this).parent().find(".shareDropdown-menu").toggle();
  });
  $(document).click(function (event) {
    if (!$(event.target).closest(".shareDropdown-menu").length) {
      if ($(".shareDropdown-menu").is(":visible")) {
        $(".shareDropdown-menu").toggle();
      }
    }
  });
});

</script>

<template>
    <Header/>
    <ElementHeader :elementCategories="element_categories"/>

    <!-- Start Main Content -->
    <section class="elDetails pt-30 pb-100">
      <div class="container">
        <!-- Title -->
        <div
          class="elDetails-title d-flex justify-content-between align-items-start flex-wrap g-20"
        >
          <div class="content">
            <h1 class="title">{{ selected_product.title }}</h1>
            <p class="info">
              {{ selected_product.summary }}
            </p>
          </div>
          <Link :href="$page.props.urlPrev" class="breadcrumb-two-back">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>
            Back
          </Link>
        </div>
        <!-- Preview & Sidebar -->
        <div class="elDetails-preview-sidebar pb-50">
          <div class="row">
            <!-- Preview -->
            <div class="col-lg-8">
              <!-- Slider -->
              <div v-if="selected_category.slug === 'video'" class="element-video-wrap">
                <div class="plyr__video-embed" id="player">
                  <iframe
                    :src="`${selected_product.preview_video}?origin=https://plyr.io&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1`"
                    allowfullscreen
                    allowtransparency
                    allow="autoplay"
                  ></iframe>
                </div>
              </div>
              <div v-else-if="selected_category.slug === '3d'" class="element-3d-wrap">
                <div class="swiper elSlider-main">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <img :src=" selected_product.server_url + '/' + selected_product.thumbnail" />
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="preview-wrap">
                <div v-if="selected_category.slug != 'components'" class="swiperSlider-control">
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
                </div>
                <div class="swiper elSlider-main">
                  <div class="swiper-wrapper">
                    <div v-for="thumbnail in thumbnails" :key="thumbnail" class="swiper-slide">
                      <img :src=" selected_product.server_url + '/' + thumbnail" />
                    </div>
                  </div>
                </div>
                <div v-if="selected_category.slug != 'components'" thumbsSlider="" class="swiper elSlider-thumb">
                  <div class="swiper-wrapper">
                    <div v-for="thumbnail in thumbnails" :key="thumbnail" class="swiper-slide">
                      <img :src=" selected_product.server_url + '/' + thumbnail" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="elDetails-live-about">
                <!-- Button -->
                <div class="d-flex justify-content-center align-items-center flex-wrap g-10 pb-30">
                  <div class="venobox-img-wrap">
                    <div v-for="(thumbnail, index) in previews" :key="index">
                      <a v-if="index === 0 && selected_category.slug == 'ui-kits'" class="my-image-links live-preview-btn" data-gall="gallery01" :href="thumbnail.src">Screenshots</a>
                      <a v-if="selected_category.slug == 'html'" :href="`https://demo.creativeitem.com/iframe-element/index.php?marketplace=creativeelement&product=${selected_product.product_id}`" target="_blank" class="live-preview-btn">Preview</a>
                      <a v-else class="my-image-links" data-gall="gallery01" :href="thumbnail.src"></a>
                    </div>
                  </div>
                  <a href="#" class="el-save-btn">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 14.7263L6.93652 15.8993C6.48141 16.0726 6.04487 16.0222 5.62692 15.7484C5.20897 15.4745 5 15.1033 5 14.6348V4.34683C5 3.96121 5.13458 3.64033 5.40375 3.3842C5.67292 3.12807 6.01012 3 6.41537 3H13.5846C13.9899 3 14.3271 3.12807 14.5962 3.3842C14.8654 3.64033 15 3.96121 15 4.34683V14.6348C15 15.1033 14.791 15.4745 14.3731 15.7484C13.9551 16.0222 13.5186 16.0726 13.0635 15.8993L10 14.7263ZM10 3.76126H5.8H14.2H10Z" fill="#0A7EFB"></path>
                    </svg>
                    Save
                  </a>
                </div>
                <!-- About -->
                <div class="elDetails-about">
                  <h2 class="title">About</h2>
                  <div class="elDetails-about-wrap" v-html="selected_product.description"></div>
                </div>
              </div>
            </div>
            <!-- Sidebar -->
            <div class="col-lg-4">
              <div class="elDetails-sidebar">
                <!-- Items Summary -->
                <div class="el-summary-items">
                  <!-- Favourite -->
                  <div
                    class="el-summary-item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Liked by"
                  >
                    <div class="icon">
                      <img :src=" $page.props.base.url + '/public/assets/img/icon/heart.svg'" alt="" />
                    </div>
                    <span>{{ countLikes }}</span>
                  </div>
                  <!-- Downloads -->
                  <div
                    class="el-summary-item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Downloaded"
                  >
                    <div class="icon">
                      <img :src=" $page.props.base.url + '/public/assets/img/icon/download.svg'" alt="" />
                    </div>
                    <span>{{ selected_product.download }}</span>
                  </div>
                  <!-- Share -->
                  <div class="el-summary-item shareDropdown">
                    <button class="shareDropdown-button">
                      <div class="icon">
                        <img :src=" $page.props.base.url + '/public/assets/img/icon/share.svg'" alt="" />
                      </div>
                      <span>Share</span>
                    </button>
                    <ul class="shareDropdown-menu">
                      <li class="shareDropdown-content">
                        <div class="copyInput">
                          <input
                            type="text"
                            id="link-input"
                            class="form-control"
                            v-model="currentPageUrl"
                          />
                          <a
                            :href="currentPageUrl"
                            class="linkCopy"
                            ><img :src=" $page.props.base.url + '/public/assets/img/icon/link.svg'" alt=""
                          /></a>
                          <button class="copyBtn" id="copy-button">
                            <img
                              id="copy-image"
                              :src=" $page.props.base.url + '/public/assets/img/icon/duplicate.svg'"
                              alt=""
                            />Copy
                          </button>
                          <div class="copy-overlay">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                            <p>Copied</p>
                          </div>
                        </div>
                        <ul class="shareDropdown-social">
                          <li>
                            <a :href="`https://www.facebook.com/sharer/sharer.php?u=${currentPageUrl}&display=popup`" target="_blank">
                              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                              Facebook
                            </a>
                          </li>
                          <li>
                            <a :href="`http://twitter.com/share?url=${currentPageUrl}`" target="_blank">
                              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                              Twitter
                            </a>
                          </li>
                          <li>
                            <a :href="`https://pinterest.com/pin/create/button/?url=${currentPageUrl}&media=${selected_product.server_url + '/' + selected_product.thumbnail}&description=${selected_product.title}`" target="_blank">
                              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/></svg>
                              Pinterest
                            </a>
                          </li>
                          <li>
                            <a :href="`http://www.linkedin.com/shareArticle?mini=true&url=${currentPageUrl}`" target="_blank">
                              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                              Linkedin
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- Price -->
                <div v-if="$page.props.auth.user && $page.props.auth.user.role_id != 1" class="elitem-price p-30 bd-r-10 box-shadow-13 mb-30">
                  <h4 class="price">Price : <span>${{ selected_product.price }} USD</span></h4>
                  <a v-if="current_subscription && (current_subscription.subscription_to_package.interval == 'lifetime' || current_subscription.expire_date > $today) || is_purchased" :href="route('customer.download_link_generate', { product_id: selected_product.id })" class="el-btn-buy mb-12">
                    Download
                  </a>
                  <div v-else>
                    <Link :href="route('element_buy_now', { product_id: selected_product.id })" class="el-btn-buy mb-12">
                      Buy Now
                    </Link>
                    <span class="seperate">or</span>
                    <Link :href="route('elements_package_pricing')" class="el-btn-subscribe mb-20">Subscribe</Link>
                  </div>
                  <div class="elitem-allFile">
                    <img :src=" $page.props.base.url + '/public/assets/img/icon/unlock.svg'" alt="" />
                    <p>Unlock all file for $4.5/month</p>
                  </div>
                </div>
                <div v-else class="elitem-price p-30 bd-r-10 box-shadow-13 mb-30">
                  <h4 class="price">Price : <span>${{ selected_product.price }} USD</span></h4>
                  <Link :href="route('element_buy_now', { product_id: selected_product.id })" class="el-btn-buy mb-12">
                    Buy Now
                  </Link>
                  <span class="seperate">or</span>
                  <Link :href="route('elements_package_pricing')" class="el-btn-subscribe mb-20">Subscribe</Link>
                  <div class="elitem-allFile">
                    <img :src=" $page.props.base.url + '/public/assets/img/icon/unlock.svg'" alt="" />
                    <p>Unlock all file for $4.5/month</p>
                  </div>
                </div>
                <!-- Specification -->
                <div class="el-specification py-30 bd-r-10 box-shadow-13">
                  <h4 class="el-sp-title">Specification</h4>
                  <div class="el-sp-table px-30">
                    <table class="table eTable">
                      <tbody>
                        <tr>
                          <td>
                            <div class="el_table_title">
                              <img
                                :src=" $page.props.base.url + '/public/assets/img/icon/dashboard-2.svg'"
                                alt=""
                              />
                              <p>Category :</p>
                            </div>
                          </td>
                          <td>
                            <div class="el_table_info">
                              <p>{{ selected_category.name }}</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="el_table_title">
                              <img
                                :src=" $page.props.base.url + '/public/assets/img/icon/calendar-minus.svg'"
                                alt=""
                              />
                              <p>Published :</p>
                            </div>
                          </td>
                          <td>
                            <div class="el_table_info">
                              <p>{{ selected_product.created_at }}</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="el_table_title">
                              <img
                                :src=" $page.props.base.url + '/public/assets/img/icon/add-folder.svg'"
                                alt=""
                              />
                              <p>File type :</p>
                            </div>
                          </td>
                          <td>
                            <div class="el_table_info">
                              <p>{{ selected_product.file_types }}</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="el_table_title">
                              <img
                                :src=" $page.props.base.url + '/public/assets/img/icon/add-folder.svg'"
                                alt=""
                              />
                              <p>File size :</p>
                            </div>
                          </td>
                          <td>
                            <div class="el_table_info">
                              <p>{{ selected_product.file_size }}</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- More Items -->
        <div class="elDetails-more-items">
          <div
            class="d-flex justify-content-between align-items-center flex-wrap g-20 pb-16"
          >
            <h4 class="fz-24-eb-black">More Items</h4>
            <Link :href="route('search_element_products', { slug: selected_category_slug})" class="view-all-btn">
              View all
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
            </Link>
          </div>
          <div class="row justify-content-center">
            <!-- Single Element -->
            <div class="col-lg-3 col-md-4 col-sm-6" v-for="product in more_products" :key="product.id">
              <div class="product-item-three product-item-add">
                <Link :href="generateProductDetailsLink(product.title, product.id)" class="product-three-link"></Link>
                <div class="thumbnil-price">
                  <img :src=" product.server_url + '/' + product.thumbnail" alt="" />
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
                    <h4 class="product-title">{{ product.title }}</h4>
                  </div>
                  <span class="product-price">${{ product.price }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Main Content -->

    <Footer :elementCategories="element_categories"/>
</template>