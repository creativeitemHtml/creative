<script setup>

import Header from '../../../Components/Global/Header.vue';
import Footer from '../../../Components/Global/Footer.vue'
import Breadcrumb from '../../../Components/Backend/Breadcrumb.vue'
import MobileOffcanvas from '../../../Components/Backend/MobileOffcanvas.vue'
import Navigation from '../../../Components/Backend/Navigation.vue'
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    element_categories: Array,
    downloads: Array,
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
                <h4 class="fz-20-sb-black">Creative Elements - Download History</h4>
                <Link :href="route('elements')" class="new-goelement-btn">
                  Go to Elements
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
                </Link>
                <button class="d-lg-none mobile-menu-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                  <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/menu-icon.svg'" alt="menu">
                </button>
              </div>
              <!-- Table -->
              <div v-if="downloads.length > 0" class="table-responsive">
                <table class="table eTable el-table">
                  <!-- Table Head -->
                  <thead>
                    <tr>
                      <th scope="col">Item</th>
                      <th scope="col"></th>
                      <th scope="col">Date</th>
                      <th scope="col">Price</th>
                      <th scope="col">Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="download in downloads" :key="download.id">
                      <td>
                        <div class="dl_thumb_img">
                          <img
                            class="img-fluid"
                            :src="download.thumbnail"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="dl_property_id">
                          <p>{{ download.title }}</p>
                        </div>
                      </td>
                      <td>
                        <div class="dl_property_price">
                          <p>{{ formatDate(download.timestamp) }}</p>
                        </div>
                      </td>
                      <td>
                        <div class="dl_property_type">
                          <p>${{ download.price }}</p>
                        </div>
                      </td>
                      <td>
                        <div class="adminTable-action">
                          <div class="btn-group">
                            <button
                              type="button"
                              class="dropdown-btn dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Actions
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                              <li>
                                <a class="dropdown-item" href="#">Action</a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="#"
                                  >Another action</a
                                >
                              </li>
                              <li>
                                <a class="dropdown-item" href="#"
                                  >Something else here</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div v-else class="no-subscription arrow-right mt-60">
                <img :src=" $page.props.base.url + '/public/assets/img/admin-customer/subscription-status.png'" alt="">
                <h4 class="title"> Purchase a new item!</h4>
                <Link :href="route('elements')" class="new-goelement-btn">
                  Browse elements file
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
                </Link>
              </div>

              <!-- <div class="pt-40">
                <nav>
                  <ul
                    class="pagination ci-pagination ci-pagination-1 justify-content-center"
                  >
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