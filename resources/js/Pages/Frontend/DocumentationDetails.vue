<script setup>
import Header from '../../Components/Global/Header.vue';
import Footer from '../../Components/Global/Footer.vue'
import { Link, useForm } from '@inertiajs/vue3';
import { computed } from 'vue';
import { usePage } from '@inertiajs/vue3'

const page = usePage()

// Define props using the defineProps() function
const props = defineProps({
    product_details: Object,
    element_categories: Array,
    article_details: Array,
    documentation_details: Object,
    product_slug: Object,
    article_slug: Object,
    topics: Array,
    num_of_articles: Object,
});

const getProductImage = computed(() => {
  return props.product_details.favicon
    ? `${page.props.base.url}/public/uploads/favicons/products/${props.product_details.favicon}`
    : `${page.props.base.url}/public/assets/img/doc-icon/academy-lms.svg`;
});

// convertion

const formattedDocumentation = computed(() => {
  let doc = reformatImagePath(props.documentation_details.documentation);
  return doc;
});

function reformatImagePath(html) {
  let startImgTagWeb = '<div class="creative-photo mb-30">';
  let endImgTagWeb = '</div>';

  let startImgTagMobile = '<div class="creative-photo creative-mobile-photo mb-30">';
  let endImgTagMobile = '</div>';

  // Use a regular expression to match img tags
  let imgTags = html.match(/<img[^>]+>/gi) || [];

  let duplicate = {};
  imgTags.forEach((imageTag) => {
    // Use a regular expression to extract the src attribute value
    let onlySrc = imageTag.match(/src="([^"]+)"/);
    onlySrc = onlySrc ? onlySrc[1] : "";

    // Your logic to update the image path based on the PHP function
    let updatedImagePath = updateImagePath(onlySrc);

    if (onlySrc.includes("mobile")) {
      if (!duplicate[imageTag]) {
        duplicate[imageTag] = 1;
        html = html.replace(imageTag, startImgTagMobile + '<img src="' + updatedImagePath + '/>' + endImgTagMobile);
      } else {
        // Handle duplicates for mobile
        // You can add your logic here
      }
    } else {
      if (!duplicate[imageTag]) {
        duplicate[imageTag] = 1;
        html = html.replace(imageTag, startImgTagWeb + '<img src="' + updatedImagePath + '/>' + endImgTagWeb);
      } else {
        // Handle duplicates for web
        // You can add your logic here
        html = html.replace(imageTag, startImgTagWeb + '<img src="' + updatedImagePath + '/>' + endImgTagWeb);
      }
    }
  });

  // ... (rest of your logic)

  return html;
}



function updateImagePath(src) {
  let explodedSource = src.split('/');
  let product = explodedSource[explodedSource.length - 3];
  let topic = explodedSource[explodedSource.length - 2];

  // Your logic to update the image path based on the PHP function
  // ...

  // Example logic (replace this with your actual logic)
  let imageName = explodedSource.pop(); // Get the last part of the path as the image name
  let imageActualPath = `${page.props.base.url}/public/uploads/documentation/${product}/${topic}/${imageName}`;
  let pathParts = pathinfo(imageActualPath);
  let imageTitle = ucwords(pathParts['filename'].replace(/-/g, " ").replace(/_/g, " "));
  imageActualPath += `" title="${imageTitle}" alt="${imageTitle}" style="max-width: 100%;"`;

  return imageActualPath;
}

// Your implementation of the ucwords function
function ucwords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

function pathinfo(path) {
  var parts = path.split('/');
  var filename = parts[parts.length - 1];
  var extension = filename.split('.').pop();
  var basename = filename.replace('.' + extension, '');
  var dirname = parts.slice(0, -1).join('/');
  return {
    dirname: dirname,
    basename: basename,
    extension: extension,
    filename: filename
  };
}


$(document).ready(function () {
  accordion();
  accordionside();
});
</script>

<template>
    <Header/>

    <!-- Start Main Content -->
    <section class="pt-80 pb-120">
      <div class="container">
        <div class="row">
          <!-- Left side -->
          <div class="col-lg-4">
            <div class="doc-sidebar doc-sidebar-2 p-30 bd-r-5 box-shadow-11">
              <!-- Doc title -->
              <div class="doc-sidebar-header">
                <div class="d-flex align-items-center justify-content-between">
                  <div class="doc-s-title d-flex align-items-center g-16">
                    <div class="icon">
                      <img :src=" getProductImage " alt="" />
                    </div>
                    <div class="content">
                      <h3 class="fz-20-b-black">{{ product_details.name }}</h3>
                      <span class="cBadge">{{ num_of_articles + ' Articles' }}</span>
                    </div>
                  </div>
                  <Link :href="route('docs')" class="doc-back-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>
                    Back
                  </Link>
                  <!-- offcanvas Button -->
                  <button class="d-lg-none mobile-menu-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/menu-icon.svg'" alt="menu">
                  </button>
                </div>
              </div>
              <!-- offcanvas -->
              <div class="offcanvas my-res-offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header d-lg-none">
                  <h5 class="offcanvas-title" id="offcanvasRightLabel">Documentation</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <!-- Search -->
                  <form action="" class="sidebar-search d-flex justify-content-start align-items-center mb-20">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path
                          id="Search_icon"
                          data-name="Search icon"
                          d="M2,7A4.951,4.951,0,0,1,7,2a4.951,4.951,0,0,1,5,5,4.951,4.951,0,0,1-5,5A4.951,4.951,0,0,1,2,7Zm12.3,8.7a.99.99,0,0,0,1.4-1.4l-3.1-3.1A6.847,6.847,0,0,0,14,7,6.957,6.957,0,0,0,7,0,6.957,6.957,0,0,0,0,7a6.957,6.957,0,0,0,7,7,6.847,6.847,0,0,0,4.2-1.4Z"
                          fill="#797c8b"
                        />
                      </svg>
                    </span>
                    <input type="text" placeholder="Search documentation" class="form-control"/>
                    <input type="submit" value="" class="sidebar-search-submit">
                  </form>
                  <!-- Sidebar item -->
                  <ul class="doc-sidebar-item accordion-doc-menu">
                    <li v-for="topic in topics" :key="topic.id" class="doc-sidebar-li active">
                      <p class="doc-badge-outline">{{ topic.topic }}</p>
                      <ul class="sidebarMenu" :style="{ display: article_details.topic_id === topic.id ? 'block' : 'none' }">
                        <li v-for="article in topic.articles" :key="article.id" class="item">
                          <Link :href="route('documentation_details', { product_slug: product_slug, article_slug: article.slug })" :class="{ active: article.slug === article_slug }">
                            {{ article.article }}
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- offcanvas -->
            </div>
          </div>
          <!-- Right side -->
          <div class="col-lg-8">
            <div v-if="Object.keys(documentation_details).length > 0" class="doc-main-wrap">
              <!-- Doc title & short description -->
              <div class="doc-title-des bd-b-1">
                <h1 class="title">{{ article_details.article }}</h1>
                <div v-html="formattedDocumentation"></div>
              </div>

              <!-- Article popularity -->
              <div
                class="bg-g-one d-flex justify-content-center justify-content-md-between align-items-center flex-wrap g-10 py-25 px-30 mt-40 mb-40 bd-r-5"
              >
                <h4 class="fz-20-sb-black">Was this article helpful to you?</h4>
                <div class="d-flex g-20">
                  <a href="#" class="btn-popularity get-popular">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/></svg>
                    Yes ( 15 )
                  </a>
                  <a href="#" class="btn-popularity">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/></svg>
                    No ( 10 )
                  </a>
                </div>
              </div>
              <!-- Help -->
              <div class="text-center">
                <a href="#" class="btn-help">How can we help?</a>
                <p class="fz-16-sb-black pt-20">
                  Contact us and we'll get back to you as soon as possible
                </p>
              </div>
            </div>

            <div v-else class="doc-main-wrap">
              <div class="text-left">
                  <span>Coming Soon...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Main Content -->

    <Footer :elementCategories="element_categories"/>
</template>