<script setup>
import Header from '../../Components/Global/Header.vue';
import Footer from '../../Components/Global/Footer.vue'
import { onMounted } from 'vue';

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
});


</script>

<template>
    <Header/>

    <!-- Start Terms & Condition Content -->
    <section class="pt-80 pb-110">
      <div class="container">
        <div class="row">
          <!-- Main content -->
          <div class="col-lg-8 offset-lg-2">
            <div class="career-details">
              <div class="c_header">
                <h1 class="fz-24-sb-34-black pb-20">
                  General and Contact Information
                </h1>
                <p class="info">
                    Effective date: 1 January 2021
                </p>
              </div>
              <div class="c_body">
                <!-- Changes and Closure of the Website -->
                <div class="c_info">
                  <h2 class="cd_title pb-20">
                    Changes and Closure of the Website
                  </h2>
                  <ol class="cd_list">
                    <li>
                      This job is more about designing and less about
                      implementation. Really good at design tools of choice
                      (Sketch, Figma, Adobe Photoshop, etc.) with perhaps only
                      light HTML and CSS skills.
                    </li>
                    <li>
                      A UX designer, or “User Experience Designer,” focuses on
                      studying and researching how people use a site.
                    </li>
                    <li>
                      Design specialty keeps user needs and the overall purpose
                      of a design at the top of mind by incorporating
                      accessibility factors and user psychology into the overall
                      look and feel of a design.
                    </li>
                    <li>
                      Then ushering changes for the better through the system
                      and testing the implementation results.
                    </li>
                    <li>
                      Collaboration with the project manager and developers at
                      the design stages
                    </li>
                  </ol>
                </div>
                <!-- Intellectual Property -->
                <div class="c_info">
                  <h2 class="cd_title pb-20">Intellectual Property</h2>
                  <p class="c_text">
                    It doesn’t matter where you went to college or what your GPA
                    was as long as you are smart, passionate ready to work hard,
                    and have fun.
                  </p>
                </div>
                <!-- Authorized Use -->
                <div class="c_info">
                  <h2 class="cd_title pb-20">Authorized Use</h2>
                  <ul class="cd_list_2">
                    <li>
                      Interview with the Engineering Team Lead &amp; Talent Team.
                    </li>
                    <li>Final Interview with the Board of Directors.</li>
                  </ul>
                </div>
                <!-- Application Process -->
                <div class="c_info">
                  <h2 class="cd_title pb-20">The Application Process</h2>
                  <ol class="cd_list">
                    <li>An Assignment to Complete.</li>
                    <li>
                      Interview with the Engineering Team Lead &amp; Talent Team.
                    </li>
                    <li>Final Interview with the Board of Directors.</li>
                    <li>A Formal Job Offer.</li>
                  </ol>
                </div>
                <!-- Data controller -->
                <div class="c_info">
                  <h2 class="cd_title pb-20">Data controller</h2>
                  <p class="c_text pb-20">
                    It doesn’t matter where you went to college or what your GPA
                    was as long as you are smart, passionate ready to work hard,
                    and have fun.
                  </p>
                  <ol class="cd_list">
                    <li>An Assignment to Complete.</li>
                    <li>
                      Interview with the Engineering Team Lead &amp; Talent Team.
                    </li>
                    <li>Final Interview with the Board of Directors.</li>
                    <li>A Formal Job Offer.</li>
                  </ol>
                </div>
                <!-- Browsing the Website -->
                <div class="c_info">
                  <h2 class="cd_title pb-20">Browsing the Website</h2>
                  <p class="c_text">
                    It doesn’t matter where you went to college or what your GPA
                    was as long as you are smart, passionate ready to work hard,
                    and have fun.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Terms & Condition Content -->

    <Footer :elementCategories="element_categories"/>
</template>