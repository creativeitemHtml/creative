<script setup>

import Header from '../../../Components/Global/Header.vue';
import Footer from '../../../Components/Global/Footer.vue'
import Breadcrumb from '../../../Components/Backend/Breadcrumb.vue'
import MobileOffcanvas from '../../../Components/Backend/MobileOffcanvas.vue'
import Navigation from '../../../Components/Backend/Navigation.vue'
import { Link } from '@inertiajs/vue3';
import { ref, computed } from 'vue';

const props = defineProps({
  element_categories: Array,
  current_subscription: Object,
  subscriptions: Array,
});

const today = new Date()

const isSubscriptionActive = computed(() => {
  // console.log(new Date(props.current_subscription.expire_date * 1000))
  return (props.current_subscription &&
    (props.current_subscription.subscription_to_package.interval === 'lifetime' ||
      new Date(props.current_subscription.expire_date * 1000) > today)
  );
});

const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
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
                <h4 class="fz-20-sb-black">Creative Elements - Subscription Report</h4>
                <Link :href="route('elements')" class="new-goelement-btn">
                  Go to Elements
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
                </Link>
                <button class="d-lg-none mobile-menu-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                  <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/menu-icon.svg'" alt="menu">
                </button>
              </div>
              <div class="row rg-40">
                <div v-if="isSubscriptionActive" class="col-md-6">
                  <div class="project-item-2">
                    <div class="project-item-2-title">
                      <h3 class="title">Subscription Status</h3>
                    </div>
                    <div class="py-20 text-center">
                      <img :src=" $page.props.base.url + '/public/assets/img/admin-customer/subscription-status-2.png'" alt="" />
                    </div>
                    <!-- List -->
                    <div class="el-sp-table sStatus-table mx-20 pb-28">
                      <table class="table eTable">
                        <tbody>
                          <tr>
                            <td>
                              <div class="el_table_title">
                                <img :src=" $page.props.base.url + '/public/assets/img/icon/pulse.svg'" alt="" />
                                <p>Current subscription status:</p>
                              </div>
                            </td>
                            <td>
                              <div class="el_table_info">
                                <p>{{ current_subscription.subscription_to_package.name }}</p>
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
                                <p>Next payment date:</p>
                              </div>
                            </td>
                            <td>
                              <div class="el_table_info">
                                <p>{{ formatDate(current_subscription.expire_date) }}</p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="el_table_title">
                                <img
                                  :src=" $page.props.base.url + '/public/assets/img/icon/credit-card-2.svg'"
                                  alt=""
                                />
                                <p>Payment amount:</p>
                              </div>
                            </td>
                            <td>
                              <div class="el_table_info">
                                <p>${{ current_subscription.paid_amount }}</p>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <a href="#" class="cancel-subscription m-auto"
                      >Cancel Subscription</a
                    >
                  </div>
                </div>
                <!-- Subscription Status -->
                <div v-else class="col-md-6">
                  <div class="project-item-2">
                    <!-- Title -->
                    <div class="project-item-2-title">
                      <h3 class="title">Subscription Status</h3>
                    </div>
                    <!-- Content -->
                    <div class="no-subscription">
                      <img :src=" $page.props.base.url + '/public/assets/img/admin-customer/subscription-status.png'" alt="" />
                      <h4 class="title">
                        <img :src=" $page.props.base.url + '/public/assets/img/icon/warning.svg'" alt="" />
                        Expired / No Subscription
                      </h4>
                      <Link :href="route('elements_package_pricing')">Subscribe Now</Link>
                    </div>
                  </div>
                </div>
                <!-- Billing History -->
                <div v-if="current_subscription.paid_amount != 0 && subscriptions.length > 0" class="col-md-6">
                  <div class="project-item-2">
                    <!-- Title -->
                    <div class="project-item-2-title">
                      <h3 class="title">Billing History</h3>
                    </div>
                    <!-- Table -->
                    <div class="table-responsive">
                      <table class="table eTable eTable-project">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Invoice</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="subscription in subscriptions" :key="subscription.id">
                            <td>
                              <div class="project-date-min">
                                <p class="fz-15-sb-black">{{ formatDate(subscription.expire_date) }}</p>
                              </div>
                            </td>
                            <td>
                              <div class="min-w">
                                <p class="fz-15-sb-black">${{ subscription.paid_amount }}</p>
                              </div>
                            </td>
                            <td>
                              <div class="min-w">
                                <a href="#" class="payfile-download">
                                  <img :src=" $page.props.base.url + '/public/assets/img/icon/download.svg'" alt="" />
                                </a>
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
        </div>
        <!-- End Textual Inputs -->
      </div>
    </section>
    <!-- End Elements -->



    <Footer :elementCategories="element_categories"/>
</template>