<script setup>
import Header from '../../Components/Global/Header.vue'
import Footer from '../../Components/Global/Footer.vue'
import ServiceCheckout from '../../Components/Global/ServiceCheckout.vue'
import ServiceCustomCheckout from '../../Components/Global/ServiceCustomCheckout.vue'
import ServiceHelpModal from '../../Components/Global/ServiceHelpModal.vue'
import ServicePackageHelpModal from '../../Components/Global/ServicePackageHelpModal.vue'
import ServiceVideoModal from '../../Components/Global/ServiceVideoModal.vue'
import { onMounted, ref, watch } from 'vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

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

  setTimeout(function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  }, 3000);




  // var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  // var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  //   return new bootstrap.Tooltip(tooltipTriggerEl)
  // })
  
});

const serviceVideo = () => {
  $('#serviceVideoModal').modal('show');
};

const openServicePackageHelpModal = (modelId) => {
  $('#' + modelId).modal('show');
}

const options = {
    // 'position': toast.POSITION.TOP_CENTER,
    'autoClose': 2000,
    'closeOnClick': true,
    'type': 'default'
}

const notify = (type, message) => {

  //Setting for type of notificatiob. e.g error, warning, success or info
  options['type'] = type;

  toast(message, options);
}

</script>

<template>
    <Header/>

    <!-- New Service Start -->
    <section class="eService pt-30">
      <div class="container">

        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="text-center pb-60">
              <h2 class="fz-34-sb-black pb-15">Ready Services For Your Website</h2>
              <p class="fz-16-m-black-2">Select any package or choose from our services to meet your needs. </p>
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

              <div class="large-show">
                    <div class="support">
                    <h4>Contact For Support</h4>
                      <ul>
                        <li>
                          <a href="http://support.creativeitem.com/" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Zendesk">
                            <img :src=" $page.props.base.url + '/public/assets/img/icon/zendesk-service.svg'" alt="" >
                          </a>
                        </li>
                        <li>
                          <a href="https://wa.link/izd8dl" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Whatsapp">
                            <img :src=" $page.props.base.url + '/public/assets/img/icon/whatsapp-service.svg'" alt="" >
                          </a>
                        </li>
                        <li>
                          <a href="https://t.me/creativeitem_elements" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Telegram">
                            <img :src=" $page.props.base.url + '/public/assets/img/icon/telegram-service.svg'" alt="" >
                          </a>
                        </li>
                        <li>
                          <a href="https://m.me/creativeitemApps" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Messenger">
                            <img :src=" $page.props.base.url + '/public/assets/img/icon/messenger-service.svg'" alt="" >
                          </a>
                        </li>
                      </ul>
                  </div>

                  <div class="support video-sup d-flex align-items-center">
                     <a @click="serviceVideo" type="button" data-bs-whatever="@mdo">
                        <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.77781 20C2.77645 19.9957 1.81729 19.5627 1.10956 18.7956C0.401841 18.0285 0.00298422 16.9894 0 15.9051V4.09073C1.68461e-05 3.37265 0.174588 2.66722 0.506167 2.04535C0.837746 1.42348 1.31465 0.907075 1.88895 0.548042C2.46325 0.189008 3.1147 -4.56059e-06 3.77784 0C4.44097 4.56076e-06 5.09243 0.189027 5.66672 0.548068L15.1113 6.45524C15.6855 6.8143 16.1624 7.33071 16.4939 7.95257C16.8255 8.57444 17 9.27985 17 9.9979C17 10.716 16.8255 11.4214 16.4939 12.0432C16.1624 12.6651 15.6855 13.1815 15.1113 13.5406L5.66672 19.4477C5.09294 19.8086 4.44136 19.9991 3.77781 20Z" fill="white"/>
                        </svg>
                      </a>
                      <h4>How it Works!</h4>
                  </div>
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
                            <a @click="openServicePackageHelpModal('serviceModal' + feature.id)" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Learn More" style="cursor: pointer;">
                              <img :src=" $page.props.base.url + '/public/assets/img/icon/help.svg'" alt="" >
                            </a>
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
                          <ServicePackageHelpModal :feature="feature" :modalId=" 'serviceModal' + feature.id" />
                          <!-- <ServicePackageHelpModal :services="feature.service_features" :modalId=" 'serviceModal' + feature.id" /> -->
                      </div>
                    </div>
                  </div>
                  <p v-if="services.length > 0" class="package-title mt-3">or, customize your package</p>
                  <div v-if="services.length > 0" class="eg_row">
                    <p class="epack ml-65">Service List:</p>
                    <div class="row">
                      <div class="col-lg-1">
                      </div>
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
                      <div class="col-lg-3 col-md-12 d-flex align-items-center">
                        <div class="eCheck eCheck-price">
                          <p>Total Amount</p>
                          <h5>${{ totalPrice.toFixed(2) }}</h5>
                          <span>{{ selectedServices.length }} Service Selected</span>
                          <div class="eCheck-price">
                            <button @click="openCustomCheckoutModal" type="button" class="buy-btn" data-bs-whatever="@mdo">Buy Now</button>
                          </div>
                          <ServiceCustomCheckout :selectedServices="selectedServices" />
                          <ServiceHelpModal :services="services" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>                    
            </div>

            <div class="small-show tab-left">
                    <div class="support">
                    <h4>Contact For Support</h4>
                      <ul>
                        <li>
                          <a href="http://support.creativeitem.com/" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Zendesk">
                            <img :src=" $page.props.base.url + '/public/assets/img/icon/zendesk-service.svg'" alt="" >
                          </a>
                        </li>
                        <li>
                          <a href="https://wa.link/izd8dl" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Whatsapp">
                            <img :src=" $page.props.base.url + '/public/assets/img/icon/whatsapp-service.svg'" alt="" >
                          </a>
                        </li>
                        <li>
                          <a href="https://t.me/creativeitem_elements" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Telegram">
                            <img :src=" $page.props.base.url + '/public/assets/img/icon/telegram-service.svg'" alt="" >
                          </a>
                        </li>
                        <li>
                          <a href="https://m.me/creativeitemApps" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Messenger">
                            <img :src=" $page.props.base.url + '/public/assets/img/icon/messenger-service.svg'" alt="" >
                          </a>
                        </li>
                      </ul>
                  </div>

                  <div class="support video-sup d-flex align-items-center">
                      <a @click="serviceVideo" type="button" data-bs-whatever="@mdo">
                        <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.77781 20C2.77645 19.9957 1.81729 19.5627 1.10956 18.7956C0.401841 18.0285 0.00298422 16.9894 0 15.9051V4.09073C1.68461e-05 3.37265 0.174588 2.66722 0.506167 2.04535C0.837746 1.42348 1.31465 0.907075 1.88895 0.548042C2.46325 0.189008 3.1147 -4.56059e-06 3.77784 0C4.44097 4.56076e-06 5.09243 0.189027 5.66672 0.548068L15.1113 6.45524C15.6855 6.8143 16.1624 7.33071 16.4939 7.95257C16.8255 8.57444 17 9.27985 17 9.9979C17 10.716 16.8255 11.4214 16.4939 12.0432C16.1624 12.6651 15.6855 13.1815 15.1113 13.5406L5.66672 19.4477C5.09294 19.8086 4.44136 19.9991 3.77781 20Z" fill="white"/>
                        </svg>
                      </a>
                      <h4>How it Works!</h4>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
    <!-- New Service End -->
    <ServiceVideoModal />

    <!-- Start Faqs -->
    <section class="faq">
      <div class="container">
        <!-- Title -->
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="text-center pb-60">
              <h2 class="fz-34-sb-black pb-15">Faqs</h2>
              <p class="fz-16-m-black-2">Here are some helpful answers to your common questions and queries regarding our services</p>
            </div>
          </div>
        </div>
        <!-- Faqs Items -->
        <div class="row justify-content-center">
          <div class="col-lg-3 col-md-12">
              <div class="faq-img">
                <img :src=" $page.props.base.url + '/public/assets/img/product-item/faq-img.png'" alt="...">
              </div>
          </div>
          <div class="col-lg-9 col-md-12">
            <div class="faq-wraps">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">What is a service?</button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">Services are a task list that we will do dedicatedly to build your website. We will take all the technical liabilities to build the website from scratch and make your life easier. Services are categorized in several packages according to your needs & purposes. Also, you can choose specific service(s) if you don't require a complete package.</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">What services will I get in the Pro package?</button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">In the "Pro package", you will get the services listed above along with the features from the "Basic package".</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">What services will I get in the Business package?</button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">In the "Business package", you will get the services listed above along with the features from the both "Basic package" & "Pro package".</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">How can I purchase a service package?</button>
                  </h2>
                  <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div class="accordion-body">To purchase one of our service packages, simply choose the package that suits your needs and click on the "buy now" button. Once you've completed the payment, the selected package will be yours, and our team will initiate the service process. It's that simple!</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">How can I choose specific services without purchasing any packages?</button>
                  </h2>
                  <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div class="accordion-body">You have the flexibility to select specific services from our pre-defined service list, and you will only be charged for those particular services. This allows you to tailor your experience based on your specific requirements.</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingSix">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">How long will the packages be valid?</button>
                  </h2>
                  <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                    <div class="accordion-body">The package will be valid for 3 months from the date of purchase. During this period, you can avail the services included in the package. Please note that each package is offered for one-time use.</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingSeven">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">How will I get the support?</button>
                  </h2>
                  <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                    <div class="accordion-body">We have a reliable and dedicated tech support team ready to assist you. If you encounter any issues, feel free to reach out to us through our Zendesk, email, or Telegram support channels. Your concerns are our priority, and we'll be there to help promptly.</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingEight">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">What if my required features are not available on your service list?</button>
                  </h2>
                  <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                    <div class="accordion-body">If you don't find your required feature in our service list, simply click on the "New Project" tab and provide details about your specific requirements. We'll create a customized quotation for you and send it to your email for further consideration.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Faqs -->

    
    <Footer />
</template>