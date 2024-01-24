<script setup>
import ServiceCheckout from '../../Components/Global/ServiceCheckout.vue'

const props = defineProps({
  feature: Array,
  modalId: String
});

const toggleAccordion = (service) => {
  service.isOpen = !service.isOpen;
};

const evenServices = props.feature.service_features.filter((service, index) => index % 2 === 1);
const oddServices = props.feature.service_features.filter((service, index) => index % 2 === 0);


</script>

<template>
  <div class="d-flex justify-content-center">
    <button type="button" class="need-text" data-bs-toggle="modal" :data-bs-target="'#' + modalId" data-bs-whatever="@mdo">Learn More</button>
  </div>

  <div :id="modalId" class="modal fade" tabindex="-1" aria-labelledby="serviceHelpLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header pe-0">
          <div class="row justify-content-between w-100">
            <div class="col-lg-9 col-12 ">
              <div class="d-flex align-items-center">
                <h1 class="modal-title">{{ feature.name }} Package :</h1>
                <span v-if="feature.name == 'Pro'" class="model-title-value mb-0"> Included Basic Packages</span>
                <span v-else-if="feature.name == 'Business'" class="model-title-value mb-0"> Included Professional & Business Packages</span>
                <span v-else class="model-title-value mb-0"></span>
              </div>
            </div>
            <div class="col-lg-3 col-12 ">
              <div class="bar-controls d-flex text-sm-center align-items-center justify-content-end p-0 ps-4">
                <h1 class="modal-title">${{ feature.discounted_price }}</h1>
                <ServiceCheckout :feature="feature" :isModal="true" :modalId="'exampleModal' + feature.id" />
                <button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div class="row justify-content-center">
            <h2 class="service-help-txt">Service Details</h2>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-12">
              <div class="service-help-item" v-for="service in oddServices" :key="service">
                <h2 class="service-help-header">{{ service.feature }}</h2>
                <div class="service-help-body">{{ service.note }}</div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="service-help-item" v-for="service in evenServices" :key="service">
                <h2 class="service-help-header">{{ service.feature }}</h2>
                <div class="service-help-body">{{ service.note }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>