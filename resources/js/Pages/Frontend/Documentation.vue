<script setup>
import Header from '../../Components/Global/Header.vue';
import Footer from '../../Components/Global/Footer.vue'
// import '../../../../public/assets/assets/js/new-script.js'
import { Link, useForm } from '@inertiajs/vue3';
import { onMounted } from 'vue';

// Define props using the defineProps() function
const props = defineProps({
    products: Array,
    element_categories: Array,
    seo: Object,
});

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

</script>

<template>
    <Header/>

    <!-- Start Banner & Search -->
    <section class="hero-banner pt-40">
      <div class="container">
        <div class="hero-banner-wrap text-center">
          <h1 class="fz-60-b-black fz-sm-40-sb-black pb-20">
            Search Documentation
          </h1>
          <p class="fz-18-m-black-2 w-lg-50 mx-auto px-lg-4 pb-50">
            Here you'll find all the information you need to get started with our products, including installation, user guides, tutorials, troubleshooting, FAQs, and more.
          </p>
          <!-- Search -->
        </div>
      </div>
    </section>
    <!-- End Banner & Search -->

    <!-- Start Documentation Item -->
    <section class="documentation-item pb-120">
      <div class="container">
        <div class="row justify-content-center">
          <div v-for="product in products" :key="product.id" class="col-lg-3 col-md-4 col-sm-6">
            <Link :href="route('documentation_details', { product_slug: product.slug })" class="doc-item" :style="{ borderColor: product.color_code }">
              <div :style="{ backgroundColor: product.color_code + '20' }" class="doc-item-icon">
                <img :src="`${$page.props.base.url}/uploads/favicons/products/${product.favicon || 'favicon.png'}`" alt="" />
              </div>
              <div class="content">
                <div class="doc-item-name">{{ product.name }}</div>
                <p class="doc-item-article">15 Articles</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <!-- End Documentation Item -->

    <!-- Start Contact -->
    <section class="contact-section pb-120">
      <div class="container">
        <div
          class="contact-one-wrap d-flex justify-content-between align-items-center flex-wrap g-20"
        >
          <div class="content">
            <h2 class="fz-44-eb-black fz-sm-30-sb-black pb-20">
              Still need any help?
            </h2>
            <p class="fz-16-m-black">
              Whether you have a question, need assistance with a product, or are experiencing technical difficulties, our team of experts is ready to assist you.
            </p>
          </div>
          <a href="" class="btn-main btn-contact-one">Contact Us</a>
        </div>
      </div>
    </section>
    <!-- End Contact -->

    <Footer :elementCategories="element_categories"/>
</template>