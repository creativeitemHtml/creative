<script setup>

const props = defineProps({
  services: Array
});

const toggleAccordion = (service) => {
  service.isOpen = !service.isOpen;
};

const evenServices = props.services.filter((service, index) => index % 2 === 1);
const oddServices = props.services.filter((service, index) => index % 2 === 0);

</script>

<template>
  <div class="d-flex justify-content-center">
    <button type="button" class="need-text" data-bs-toggle="modal" data-bs-target="#serviceHelp" data-bs-whatever="@mdo">Need Help?</button>
  </div>

  <div class="modal fade" id="serviceHelp" tabindex="-1" aria-labelledby="serviceHelpLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title">Custom Services :</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row justify-content-center">
            <h2 class="service-help-txt">Service Details</h2>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-12">
              <div class="service-help-item" v-for="service in oddServices" :key="service.id">
                <h2 class="service-help-header">{{ service.name }}</h2>
                <div class="service-help-body">{{ service.note }}</div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="service-help-item" v-for="service in evenServices" :key="service.id">
                <h2 class="service-help-header">{{ service.name }}</h2>
                <div class="service-help-body">{{ service.note }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>