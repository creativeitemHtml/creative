<script setup>
import Header from '@/Components/Global/Header.vue';
import Footer from '@/Components/Global/Footer.vue';
import { Link } from '@inertiajs/vue3';
import { ref, onMounted } from 'vue';

// Define props using the defineProps() function
const props = defineProps({
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

  console.log( getCookie('userhash') )
  
});

function getCookie(name){
    var pattern = RegExp(name + "=.[^;]*")
    var matched = document.cookie.match(pattern)
    if(matched){
        var cookie = matched[0].split('=')
        return cookie[1]
    }
    return false
}


</script>

<template>
  <Header/>

  <!-- Start Banner Area -->
  <section class="home-banner-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <!-- Vectors -->
          <div class="banner-vaectors">
            <img class="banner-vaector-1" :src=" $page.props.base.url + '/public/assets/img/home/home-banner-vector-1.svg'" alt="">
            <img class="banner-vaector-2" :src=" $page.props.base.url + '/public/assets/img/home/home-banner-vector-2.svg'" alt="">
          </div>
          <!-- Content -->
          <div class="home-banner-area">
            <h1 class="title-64">Creative Elements</h1>
            <p class="pera-24">Free Premium UI Components</p>
            <div class="home-banner-path d-flex align-items-center justify-content-center">
              <Link :href="route('elements')">
                Learn More
                <img :src=" $page.props.base.url + '/public/assets/img/icon/right-blue-angle.svg'" alt="">
              </Link>
              <Link :href="route('elements_package_pricing')">
                Subscribe
                <img :src=" $page.props.base.url + '/public/assets/img/icon/right-blue-angle.svg'" alt="">
              </Link>
            </div>
            <!-- Nav -->
            <nav class="home-banner-nav">
              <ul>
                  <li v-for="category in element_categories" :key="category.id">
                      <Link :href="route('search_element_products', { slug: category.slug})" :class="{ active: category.slug === 'ui-kits' }">{{ category.name }}</Link>
                  </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Banner Area -->

  <!-- Start Product Area -->
  <section class="pb-110">
    <div class="home-product-wrap pb-80">
      <div class="home-product-single home-product-single-1">
        <div class="home-product-inner">
          <h2 class="title-48">Academy LMS</h2>
          <p class="pera-16">Create, Manage, and sell your courses in one place. Academy LMS allows you to create courses and earn money by selling them to your students. Your students can browse through the options and select the best course for them.</p>
          <div class="product-link-path d-flex align-items-center justify-content-center">
            <a href="https://1.envato.market/jGqOZ" target="_blank">
              Learn More
              <img :src=" $page.props.base.url + '/public/assets/img/icon/right-blue-angle.svg'" alt="">
            </a>
            <a href="https://1.envato.market/jGqOZ" target="_blank">
              Buy Now
              <img :src=" $page.props.base.url + '/public/assets/img/icon/right-blue-angle.svg'" alt="">
            </a>
          </div>
          <div class="product-vactor-wrap">
            <img :src=" $page.props.base.url + '/public/assets/img/home/product-vector-1.svg'" alt="">
          </div>
        </div>
      </div>
      <div class="home-product-single home-product-single-2">
        <div class="home-product-inner">
          <h2 class="title-48">Locus</h2>
          <p class="pera-16">Locus is a directory listing website for your real estate business. Create subscription-based packages for your agents and they can list their properties to sell. Buyers can visit properties to buy or rent and contact the agent.</p>
          <div class="product-link-path d-flex align-items-center justify-content-center">
            <a href="https://1.envato.market/locus_creativeitem" target="_blank">
              Learn More
              <img :src=" $page.props.base.url + '/public/assets/img/icon/right-blue-angle.svg'" alt="">
            </a>
            <a href="https://1.envato.market/locus_creativeitem" target="_blank">
              Buy Now
              <img :src=" $page.props.base.url + '/public/assets/img/icon/right-blue-angle.svg'" alt="">
            </a>
          </div>
          <div class="product-vactor-wrap">
            <img :src=" $page.props.base.url + '/public/assets/img/home/product-vector-2.svg'" alt="">
          </div>
        </div>
      </div>
      <div class="home-product-single home-product-single-3">
        <div class="home-product-inner">
          <h2 class="title-48">Sociopro</h2>
          <p class="pera-16">Utilize Sociopro to create a private, secure social network. Sociopro allows you to build a safe social environment where you can choose who you connect with and can share content with your users and earn money from it.</p>
          <div class="product-link-path d-flex align-items-center justify-content-center">
            <a href="https://1.envato.market/15n2Px" target="_blank">
              Learn More
              <img :src=" $page.props.base.url + '/public/assets/img/icon/right-blue-angle.svg'" alt="">
            </a>
            <a href="https://1.envato.market/15n2Px" target="_blank">
              Buy Now
              <img :src=" $page.props.base.url + '/public/assets/img/icon/right-blue-angle.svg'" alt="">
            </a>
          </div>
          <div class="product-vactor-wrap">
            <img :src=" $page.props.base.url + '/public/assets/img/home/product-vector-3.svg'" alt="">
          </div>
        </div>
      </div>
      <div class="home-product-single home-product-single-4">
        <div class="home-product-inner">
          <h2 class="title-48">Ekattor 8</h2>
          <p class="pera-16">Keep track of your school's activity with Ekattor 8 ERP.  Ekattor 8 is designed to assist your schools in administering the responsibilities on a day-to-day basis by reducing the pressure of managing a large amount of data.</p>
          <div class="product-link-path d-flex align-items-center justify-content-center">
            <a href="https://1.envato.market/gb0BLv" target="_blank">
              Learn More
              <img :src=" $page.props.base.url + '/public/assets/img/icon/right-white-angle.svg'" alt="">
            </a>
            <a href="https://1.envato.market/gb0BLv" target="_blank">
              Buy Now
              <img :src=" $page.props.base.url + '/public/assets/img/icon/right-white-angle.svg'" alt="">
            </a>
          </div>
          <div class="product-vactor-wrap">
            <img :src=" $page.props.base.url + '/public/assets/img/home/product-vector-4.svg'" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-center">
      <Link :href="route('web_applications')" class="view-all-products-2">
          <span class="content">View All Products</span>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
      </Link>
    </div>
  </section>
  <!-- End Product Area -->

  <!-- Start Why Best Product Area -->
  <section class="why-best-products">
    <div class="container">
      <!-- Title -->
      <div class="row justify-content-center">
          <div class="col-md-8">
              <div class="best-products">
                  <h4 class="title">Why Our Products are the best</h4>
                  <p class="info">We work on products that matter &amp; make the product keeping in mind customers' needs. What you actually want, what's going to reduce your workload, and make your life easier is our first priority.</p>
              </div>
          </div>
      </div>
      <!-- Items -->
      <div class="why-best-items">
          <div class="why-best-item">
              <div class="title">
                  <div class="icon">
                      <img :src=" $page.props.base.url + '/public/assets/img/home/search-alt.svg'" alt="">
                  </div>
                  <h4>Research</h4>
              </div>
              <p class="info">A depth market study is our heart of production. We focus on the solution to people's problems.</p>
          </div>
          <div class="why-best-item">
              <div class="title">
                  <div class="icon">
                      <img :src=" $page.props.base.url + '/public/assets/img/home/file.svg'" alt="">
                  </div>
                  <h4>Documentation</h4>
              </div>
              <p class="info">We properly described every single module of our products which makes our customer's life easy</p>
          </div>
          <div class="why-best-item">
              <div class="title">
                  <div class="icon">
                      <img :src=" $page.props.base.url + '/public/assets/img/home/life-ring.svg'" alt="">
                  </div>
                  <h4>Customer Support</h4>
              </div>
              <p class="info">Customers can ask us questions anytime, and we are committed to answering them on time.</p>
          </div>
          <div class="why-best-item">
              <div class="title">
                  <div class="icon">
                      <img :src=" $page.props.base.url + '/public/assets/img/home/refresh.svg'" alt="">
                  </div>
                  <h4>Xontinuous Update</h4>
              </div>
              <p class="info">Our products are updated with new features and bug fixes regularly.</p>
          </div>
          <div class="why-best-item">
              <div class="title">
                  <div class="icon">
                      <img :src=" $page.props.base.url + '/public/assets/img/home/shield.svg'" alt="">
                  </div>
                  <h4>Data Security</h4>
              </div>
              <p class="info">There is no compromise with our customer's data security, even a single bit.</p>
          </div>
          <div class="why-best-item">
              <div class="title">
                  <div class="icon">
                      <img :src=" $page.props.base.url + '/public/assets/img/home/ruler-triangle.svg'" alt="">
                  </div>
                  <h4>Testing</h4>
              </div>
              <p class="info">Every release of our products is adequately examined with multiple levels concerning bugs and user experience.</p>
          </div>
          <div class="why-best-item">
              <div class="title">
                  <div class="icon">
                      <img :src=" $page.props.base.url + '/public/assets/img/home/head-vr.svg'" alt="">
                  </div>
                  <h4>Technology</h4>
              </div>
              <p class="info">Most advanced technologies are used in our products and has always been updated with the latest trends.</p>
          </div>
          <div class="why-best-item">
              <div class="title">
                  <div class="icon">
                      <img :src=" $page.props.base.url + '/public/assets/img/home/user.svg'" alt="">
                  </div>
                  <h4>Customer first</h4>
              </div>
              <p class="info">Customer satisfaction is the heart of our hard work. We do whatever it takes to make them happy.</p>
          </div>
      </div>
    </div>
  </section>
  <!-- End Why Best Product Area -->

  <!-- Start Trusted Area -->
  <section class="trusted-section">
    <div class="container">
      <!-- Title -->
      <div class="row">
          <div class="col-lg-12">
              <div class="trusted-title">
                  <h4 class="title">Trusted by <span>24,000</span> individuals <br>agencies and enterprises all over the world.</h4>
                  <p class="info">24-hour customer support, Your privacy is our priority, Always there to help you out</p>
              </div>
          </div>
      </div>
      <div class="trusted-items">
          <div class="row">
              <div class="col-md-3 col-sm-6">
                  <div class="trusted-item">
                      <div class="icon">
                          <img :src=" $page.props.base.url + '/public/assets/img/home/crown.svg'" alt="">
                      </div>
                      <h4 class="title">50+</h4>
                      <p class="info">Awesome products</p>
                  </div>
              </div>
              <div class="col-md-3 col-sm-6">
                  <div class="trusted-item">
                      <div class="icon">
                          <img :src=" $page.props.base.url + '/public/assets/img/home/ticket.svg'" alt="">
                      </div>
                      <h4 class="title">24K+</h4>
                      <p class="info">Customers</p>
                  </div>
              </div>
              <div class="col-md-3 col-sm-6">
                  <div class="trusted-item">
                      <div class="icon">
                          <img :src=" $page.props.base.url + '/public/assets/img/home/marker.svg'" alt="">
                      </div>
                      <h4 class="title">11+</h4>
                      <p class="info">Years of experience</p>
                  </div>
              </div>
              <div class="col-md-3 col-sm-6">
                  <div class="trusted-item">
                      <div class="icon">
                          <img :src=" $page.props.base.url + '/public/assets/img/home/shield-check.svg'" alt="">
                      </div>
                      <h4 class="title">950+</h4>
                      <p class="info">5 star reviews</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </section>
  <!-- End Trusted Area -->

  <Footer :elementCategories="element_categories"/>
</template>