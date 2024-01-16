<script setup>
import Header from '../../Components/Global/Header.vue'
import Footer from '../../Components/Global/Footer.vue'
import ServiceCheckout from '../../Components/Global/ServiceCheckout.vue'
import ServiceCustomCheckout from '../../Components/Global/ServiceCustomCheckout.vue'
import ServiceHelpModal from '../../Components/Global/ServiceHelpModal.vue'
import ServicePackageHelpModal from '../../Components/Global/ServicePackageHelpModal.vue'
import { onMounted, ref, watch } from 'vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';

const page = usePage()

const service_packages = ref([])
const services = ref([])

const props = defineProps({
  seo: Object,
  products: Array,
});

const selectedServices = ref([]);
const totalPrice = ref(0);

const formData = useForm({
  selectedServices: [],
});

const updateTotalPrice = () => {
  totalPrice.value = selectedServices.value.reduce((total, service) => {
    return total + parseFloat(service.price);
  }, 0);
  console.log("Selected Services:", selectedServices);
};

watch(selectedServices, updateTotalPrice);

// watch(() => {
//   // Calculate total price based on selected services
//   totalPrice.value = selectedServices.value.reduce((total, serviceId) => {
//     console.log(serviceId)
//     const service = services.find((s) => s.id === serviceId);
//     return total + parseFloat(service.price);
//   }, 0);

//   // Update the form data
//   formData.selectedServices = selectedServices.value;
// });

const fetchData = async (slug) => {
  try {
    const response = await fetch(`${page.props.base.url}/api/product_wise_packages/${slug}`);
    
    if (response.ok) {
      const data = await response.json();
      if (data.status === 'success') {
        service_packages.value = data.data;
        services.value = data.services;

      } else {
        console.error('API request failed');
      }
    } else {
      console.error('Network response was not ok');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }

};

onMounted(() => {

  fetchData('academy-lms');
  updateTotalPrice();

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

    <!-- New Service Start -->
    <section class="eService pt-30">
      <div class="container">

        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="text-center pb-60">
              <h2 class="fz-34-sb-black pb-15">Get Our Services</h2>
              <p class="fz-16-m-black-2">It is a long established fact that a reader will be distracted by the readable of a page when looking at its layout. </p>
              <div class="btn-control justify-content-center align-items-center d-flex">
                <Link :href="route('services')" class="active">Ready Plans</Link>
                <Link :href="route('hire_us')" class="">New Project</Link>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-3">
            <div class="tab-left">
              <div class="Etop">
                <h4>Select a Product</h4>
                  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    
                    <button v-for="product in products" :key="product.id" class="nav-link" :class="{ active: product.slug === 'academy-lms' }" :id="'v-pills-' + product.slug + '-tab'" data-bs-toggle="pill" :data-bs-target="'#v-pills-' + product.slug" type="button" role="tab" :aria-controls="'v-pills-' + product.slug" aria-selected="true" @click="fetchData(product.slug)">
                      <div class="eNav d-flex">
                        <div v-if="product.slug == 'academy-lms'" class="image">
                          <img :src=" $page.props.base.url + '/assets/img/icon/academy.svg' " alt="">                          
                        </div>
                        <div v-else class="image">
                          <img :src=" $page.props.base.url + '/assets/img/icon/ekattor8.svg' " alt="">                         
                        </div>
                        <div class="motion">
                            <h5>{{ product.name }}</h5>
                            <span>3 Package</span>
                        </div>
                      </div>
                    </button>
              
                  </div>
              </div>

              <div class="support">
                <h4>Need Support?</h4>
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/company/creativeitem" target="_blank"><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.662476 2.15679C0.662476 1.55618 0.872692 1.06068 1.29311 0.670302C1.71352 0.279906 2.26008 0.0847168 2.93275 0.0847168C3.59341 0.0847168 4.12794 0.276897 4.53635 0.661293C4.95676 1.05769 5.16698 1.57419 5.16698 2.21084C5.16698 2.78742 4.96278 3.26789 4.55437 3.65228C4.13395 4.04868 3.58139 4.24688 2.89671 4.24688H2.87869C2.21803 4.24688 1.6835 4.04868 1.27509 3.65228C0.866674 3.25589 0.662476 2.75738 0.662476 2.15679ZM0.89671 17.9226V5.88652H4.89671V17.9226H0.89671ZM7.11293 17.9226H11.1129V11.2018C11.1129 10.7814 11.161 10.4571 11.2571 10.2289C11.4252 9.82044 11.6805 9.47509 12.0228 9.19282C12.3652 8.91053 12.7946 8.7694 13.3111 8.7694C14.6565 8.7694 15.3291 9.6763 15.3291 11.4901V17.9226H19.3291V11.0217C19.3291 9.24387 18.9087 7.89553 18.0679 6.97661C17.227 6.05769 16.1159 5.59823 14.7345 5.59823C13.185 5.59823 11.9778 6.2649 11.1129 7.59823V7.63426H11.0949L11.1129 7.59823V5.88652H7.11293C7.13694 6.2709 7.14896 7.46608 7.14896 9.4721C7.14896 11.4781 7.13694 14.2949 7.11293 17.9226Z" fill="white"/>
                      </svg>
                      </a>
                    </li>
                    <li>
                      <a class="color-1" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                        </svg>
                        
                        
                      </a>
                    </li>
                    <li>
                      <a class="color-2" href="#"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.24273 6.83118C5.90705 4.79901 9.01734 3.45928 10.5736 2.81199C15.0169 0.963837 15.9402 0.642794 16.542 0.632193C16.6744 0.629862 16.9703 0.662664 17.162 0.818214C17.3239 0.949558 17.3684 1.12699 17.3897 1.25151C17.4111 1.37604 17.4376 1.65972 17.4165 1.88138C17.1757 4.41136 16.1338 10.5509 15.6038 13.3846C15.3795 14.5836 14.9379 14.9856 14.5103 15.0249C13.5812 15.1104 12.8756 14.4109 11.9757 13.821C10.5675 12.8979 9.77193 12.3232 8.40502 11.4225C6.82532 10.3815 7.84938 9.80932 8.74964 8.87426C8.98525 8.62956 13.0791 4.90588 13.1583 4.56809C13.1683 4.52584 13.1775 4.36836 13.0839 4.28521C12.9903 4.20206 12.8523 4.23049 12.7526 4.25311C12.6114 4.28516 10.3618 5.77208 6.00373 8.71387C5.36518 9.15235 4.7868 9.36599 4.26859 9.35479C3.69731 9.34245 2.59839 9.03178 1.78145 8.76623C0.779452 8.44052 -0.0169188 8.26831 0.0524273 7.71515C0.088547 7.42704 0.485314 7.13238 1.24273 6.83118Z" fill="white"/>
                        </svg>
                        
                      </a>
                    </li>
                    <li>
                      <a class="color-3" href="https://www.instagram.com/creativeitem.developers/" target="_blank"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.00585 10.1533C7.00585 8.41411 8.41533 7.00387 10.1545 7.00387C11.8937 7.00387 13.3039 8.41411 13.3039 10.1533C13.3039 11.8924 11.8937 13.3027 10.1545 13.3027C8.41533 13.3027 7.00585 11.8924 7.00585 10.1533ZM5.30334 10.1533C5.30334 12.8326 7.4752 15.0044 10.1545 15.0044C12.8338 15.0044 15.0057 12.8326 15.0057 10.1533C15.0057 7.47398 12.8338 5.30212 10.1545 5.30212C7.4752 5.30212 5.30341 7.47382 5.30341 10.1533M14.0641 5.10977C14.064 5.33399 14.1304 5.5532 14.2549 5.73969C14.3794 5.92618 14.5564 6.07155 14.7635 6.15744C14.9706 6.24333 15.1986 6.26587 15.4185 6.22222C15.6384 6.17856 15.8405 6.07067 15.9991 5.91218C16.1577 5.7537 16.2658 5.55173 16.3096 5.33184C16.3534 5.11194 16.3311 4.88398 16.2454 4.67679C16.1596 4.4696 16.0144 4.29248 15.828 4.16784C15.6416 4.04319 15.4225 3.97661 15.1982 3.97652H15.1978C14.8972 3.97666 14.609 4.09609 14.3965 4.30857C14.1839 4.52105 14.0643 4.80921 14.0641 5.10977ZM6.33772 17.8434C5.41663 17.8014 4.91599 17.648 4.58329 17.5184C4.14221 17.3467 3.82749 17.1421 3.4966 16.8117C3.16572 16.4813 2.96089 16.1669 2.78993 15.7258C2.66024 15.3932 2.50681 14.8924 2.46494 13.9713C2.41914 12.9755 2.40999 12.6764 2.40999 10.1534C2.40999 7.6305 2.41989 7.33219 2.46494 6.33552C2.50689 5.41443 2.66145 4.91462 2.78993 4.58109C2.96165 4.14 3.16617 3.82529 3.4966 3.4944C3.82704 3.16351 4.14145 2.95869 4.58329 2.78773C4.91584 2.65803 5.41663 2.50461 6.33772 2.46274C7.33356 2.41694 7.6327 2.40779 10.1545 2.40779C12.6763 2.40779 12.9757 2.41754 13.9724 2.46289C14.8935 2.50483 15.3933 2.6594 15.7268 2.78788C16.1679 2.95884 16.4826 3.16412 16.8135 3.49455C17.1444 3.82499 17.3485 4.14015 17.5202 4.58124C17.6499 4.91379 17.8033 5.41458 17.8452 6.33567C17.891 7.33234 17.9001 7.63065 17.9001 10.1536C17.9001 12.6765 17.891 12.9748 17.8452 13.9715C17.8032 14.8926 17.6491 15.3932 17.5202 15.7259C17.3485 16.167 17.144 16.4817 16.8135 16.8119C16.4831 17.142 16.1679 17.3468 15.7268 17.5185C15.3943 17.6482 14.8935 17.8016 13.9724 17.8435C12.9766 17.8893 12.6774 17.8985 10.1545 17.8985C7.63157 17.8985 7.33326 17.8893 6.33772 17.8435M6.2595 0.763024C5.25376 0.808826 4.56651 0.968299 3.96633 1.20184C3.34514 1.44302 2.81858 1.76657 2.29277 2.29155C1.76696 2.81653 1.44424 3.34317 1.20306 3.96511C0.96952 4.56567 0.810046 5.25254 0.764245 6.25828C0.717688 7.2656 0.707031 7.58765 0.707031 10.1533C0.707031 12.7189 0.717688 13.041 0.764245 14.0483C0.810046 15.0541 0.96952 15.7409 1.20306 16.3414C1.44424 16.9626 1.76704 17.4903 2.29277 18.015C2.8185 18.5398 3.34439 18.8629 3.96633 19.1047C4.56764 19.3383 5.25376 19.4977 6.2595 19.5435C7.26735 19.5893 7.58887 19.6007 10.1545 19.6007C12.7201 19.6007 13.0422 19.5901 14.0495 19.5435C15.0553 19.4977 15.7421 19.3383 16.3427 19.1047C16.9639 18.8629 17.4904 18.54 18.0162 18.015C18.542 17.49 18.8641 16.9626 19.1059 16.3414C19.3395 15.7409 19.4997 15.054 19.5448 14.0483C19.5906 13.0402 19.6012 12.7189 19.6012 10.1533C19.6012 7.58765 19.5906 7.2656 19.5448 6.25828C19.4989 5.25246 19.3395 4.56529 19.1059 3.96511C18.8641 3.34392 18.5412 2.81736 18.0162 2.29155C17.4912 1.76574 16.9639 1.44302 16.3434 1.20184C15.7421 0.968299 15.0552 0.80807 14.0503 0.763024C13.0428 0.716996 12.7209 0.705811 10.1556 0.705811C7.59038 0.705811 7.26773 0.716467 6.25987 0.763024" fill="white"/>
                        </svg>
                        
                      </a>
                    </li>
                  </ul>
              </div>

              <div class="support video-sup d-flex align-items-center">
                  <a href=""><svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.77781 20C2.77645 19.9957 1.81729 19.5627 1.10956 18.7956C0.401841 18.0285 0.00298422 16.9894 0 15.9051V4.09073C1.68461e-05 3.37265 0.174588 2.66722 0.506167 2.04535C0.837746 1.42348 1.31465 0.907075 1.88895 0.548042C2.46325 0.189008 3.1147 -4.56059e-06 3.77784 0C4.44097 4.56076e-06 5.09243 0.189027 5.66672 0.548068L15.1113 6.45524C15.6855 6.8143 16.1624 7.33071 16.4939 7.95257C16.8255 8.57444 17 9.27985 17 9.9979C17 10.716 16.8255 11.4214 16.4939 12.0432C16.1624 12.6651 15.6855 13.1815 15.1113 13.5406L5.66672 19.4477C5.09294 19.8086 4.44136 19.9991 3.77781 20Z" fill="white"/>
                  </svg>
                  </a>
                  <h4>How it Works!</h4>
              </div>

            </div>
          </div>
          <div class="col-lg-9 col-md-9">
            <div class="tab-right">
              <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade" :class="{ 'show active': product.slug === 'academy-lms' }" v-for="product in products" :key="product.id" id="v-pills-{{ product.slug }}" role="tabpanel" aria-labelledby="v-pills-{{ product.slug }}-tab" tabindex="0">
                  <div class="row">
                    <p class="package-title">Select a Package</p>
                    <div class="col-lg-4 col-md-6 col-sm-6" v-for="(feature, pos) in service_packages" :key="feature.id">
                      <div class="package-plan">
                          <div class="most d-flex">
                            <h4>{{ feature.name }}</h4>
                            <span v-if="feature.name == 'Pro'">Most Popular</span>
                          </div>
                          <span>${{ feature.discounted_price }} <del class="del_text">${{ feature.price }}</del></span>
                          <ul class="plan">
                            <li class="d-flex align-items-center" v-for="(service_feature, index) in feature.service_features" :key="service_feature.id">
                              <svg v-if="pos == 0 || index != 0" width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.79844 13C6.49844 13 6.29844 12.9 6.09844 12.7L1.19844 7.49997C0.798438 7.09997 0.798438 6.49997 1.19844 6.09997C1.59844 5.69997 2.19844 5.69997 2.59844 6.09997L6.69844 10.5L15.0984 1.29997C15.3984 0.899971 16.0984 0.79997 16.4984 1.09997C16.8984 1.39997 16.9984 2.09997 16.6984 2.49997L16.5984 2.59997L7.49844 12.6C7.39844 12.9 7.09844 13 6.79844 13Z" fill="#02BC7D"/>
                              </svg>
                              <p v-if="pos == 0 || index != 0">{{ service_feature.feature }}</p>
                              <p v-else class="service-feature">{{ service_feature.feature }}</p>
                            </li>
                          </ul>
                          <ServiceCheckout :feature="feature" :modalId="'exampleModal' + feature.id" />
                          <ServicePackageHelpModal :services="feature.service_features" :modalId=" 'serviceModal' + feature.id" />
                      </div>
                    </div>
                  </div>
                  <p v-if="services.length > 0" class="package-title mt-3">or, customize your package</p>
                  <div v-if="services.length > 0" class="eg_row">
                    <p class="epack">Service List:</p>
                    <div class="row">
                      <div class="col-lg-4 col-md-6 col-sm-6 right-border">
                        <div class="eCheck">
                          <div v-for="(service, index) in services" :key="service.id">
                            <div class="single-eCheck d-flex justify-content-between align-items-center" v-if="index % 2 === 0">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="selectedServices" :value="service" :id="service.id">
                                <label class="form-check-label" :for="service.id">{{ service.name }} </label>
                              </div>
                              <span>${{ service.price }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-6 right-border">
                        <div class="eCheck">
                          <div v-for="(service, index) in services" :key="service.id">
                            <div class="single-eCheck d-flex justify-content-between align-items-center" v-if="index % 2 !== 0">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="selectedServices" :value="service" :id="service.id">
                                <label class="form-check-label" :for="service.id">{{ service.name }} </label>
                              </div>
                              <span>${{ service.price }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-12 d-flex align-items-center">
                        <div class="eCheck eCheck-price">
                          <p>Total Amount</p>
                          <h5>${{ totalPrice.toFixed(2) }}</h5>
                          <span>{{selectedServices.length }} Service Selected</span>
                          <ServiceCustomCheckout :selectedServices="selectedServices"/>
                          <ServiceHelpModal :services="services" />
                          <!-- <a href="#" class="need-text">Need Help?</a> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>                    
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- New Service End -->

    
    <Footer />
</template>