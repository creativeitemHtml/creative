<script setup>
import Header from '../../../Components/Global/Header.vue';
import ElementHeader from '../../../Components/Global/ElementHeader.vue';
import Footer from '../../../Components/Global/Footer.vue'
import ElementPackageCheckout from '../../../Components/Elements/ElementPackageCheckout.vue'
import { Link } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';

// Define props using the defineProps() function
const props = defineProps({
    packages: Array,
    element_categories: Array,
    seo: Object,
});

const selectedPackage = ref('');

const openModal = (pack) => {
  selectedPackage.value = pack;
  $('#exampleModal').modal('show');
};

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
    <ElementHeader :elementCategories="element_categories"/>

    <!-- Start Breadcrumb -->
    <section class="breadcrumb-section pricing-breadcrumb">
      <div class="breadcrumb-one-graphic-1">
        <img :src=" $page.props.base.url + '/public/assets/img/banner-graphic-1.png'" alt="" />
      </div>
      <div class="breadcrumb-one-graphic-2">
        <img :src=" $page.props.base.url + '/public/assets/img/banner-graphic-2.png'" alt="" />
      </div>
    </section>
    <!-- End Breadcrumb -->


    <!-- Start Pricing -->
    <section class="pricing-n-section padding-bottom-110">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="pricing-n-title">
              <h1 class="text-52">Our Pricing is simple with no hidden fees</h1>
              <p class="text-22">We provide you with clarity in pricing with our transparent cost approach</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" v-for="pack in packages" :key="pack.id">
            <div class="single-n-pricing" :class="{ active: pack.name === 'Pro' }">
              <div class="pricing-n-popular d-flex align-items-center justify-content-between">
                <h4 class="text-22">{{ pack.name }}</h4>
                <a href="#" class="text-15" v-if="pack.name === 'Pro'">Popular</a>
              </div>
              <div class="pricing-n-price d-flex">
                <h2 class="pricing-price-l d-flex"><span>$</span><span>{{ pack.discounted_price }}</span></h2>
                <h3 class="pricing-price-r d-flex">
                  <span v-if="pack.discounted_price != 0">${{ pack.price }}</span>
                  <span>/ {{ pack.int_val }}</span>
                </h3>
              </div>
              <p class="text-15 pricing-n-batch">{{ pack.interval_period_text }}</p>
              <div class="pricing-n-list">
                <ul>
                    <li v-for="packages_feature in pack.packages_features" :key="packages_feature.id">
                        {{ packages_feature }}
                    </li>
                </ul>
              </div>
              <a @click="() => openModal(pack)" type="button" class="pricing-n-btn text-18" data-bs-whatever="@mdo">Upgrade Plan</a>
              <ElementPackageCheckout :packages="packages" :selected_package="selectedPackage" />
              <!-- <Link :href="route('element_checkout', { id: pack.id })" class="pricing-n-btn text-18">Upgrade Plan</Link> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Pricing -->

    <!-- Start Faqs -->
    <section class="pb-110">
      <div class="container">
        <!-- Title -->
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="text-center pb-60">
              <h2 class="fz-34-sb-black pb-15">Faqs</h2>
              <p class="fz-16-m-black-2">Here are some helpful answers to your common questions and queries regarding our products</p>
            </div>
          </div>
        </div>
        <!-- Faqs Items -->
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="faq-wrap">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Can I use Creative elements templates for my clients?</button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">Absolutely! Our templates are made to be flexible and adaptable for your clients, enabling you to develop customized solutions that satisfy the unique needs of your customers and produce your anticipated results.</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Do you provide documentation and support?</button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">Yes, we provide thorough documentation and first-rate assistance. Our devoted team is ready to help you with any queries or problems you encounter to make your seamless experience with Creative Elements.</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">How long do I have support access?</button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">As long as your package is paid for, you have access to help. Throughout your membership, we're available to help and ensure you always have access to our resources.</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">What payment methods do you accept?</button>
                  </h2>
                  <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div class="accordion-body">We mainly accept Visa and MasterCard as forms of payment. We do not currently accept PayPal or any other forms of payment.</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">What happens after my subscription runs out?</button>
                  </h2>
                  <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div class="accordion-body">You can only access the products you purchased during the active membership period after your subscription expires. After that, access to any items or upgrades will need to be renewed or purchased separately.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Faqs -->

    <!-- Start Ask Questions -->
    <section class="pb-82">
      <div class="container">
        <div class="contact-one-wrap d-flex justify-content-between align-items-center flex-wrap g-20">
          <div class="content">
            <h4 class="fz-28-eb-black pb-20">Any questions you can ask us</h4>
            <p class="fz-16-m-black">
              If you have any more queries, don’t hesitate to ask us anything - We’re here to help you throughout your journey with us!
            </p>
          </div>
          <a href="" class="btn-main btn-contact-one">Contact Us</a>
        </div>
      </div>
    </section>
    <!-- End Ask Questions -->

    <Footer :elementCategories="element_categories"/>
</template>