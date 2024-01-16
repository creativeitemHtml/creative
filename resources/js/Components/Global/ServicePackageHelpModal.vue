<script setup>

const props = defineProps({
  services: Array,
  modalId: String
});

const toggleAccordion = (service) => {
  service.isOpen = !service.isOpen;
};

</script>

<template>
  <div class="d-flex justify-content-center">
    <button type="button" class="need-text" data-bs-toggle="modal" :data-bs-target="'#' + modalId" data-bs-whatever="@mdo">Need Help?</button>
  </div>

  <div :id="modalId" class="modal fade" tabindex="-1" aria-labelledby="serviceHelpLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="serviceHelpLabel">Service Details</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- Start Checkout Wraper -->
          {{ $page.props.services }}
          <section class="faq">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-3 col-md-12">
                        <div class="faq-img">
                            <img :src=" $page.props.base.url + '/public/assets/img/product-item/faq-img.png'" alt="...">
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-12">
                        <div class="faq-wrap">
                          <div class="accordion" id="accordionExample">
                              <div class="accordion-item" v-for="service in services" :key="service.id">
                                <h2 class="accordion-header" :id="'heading' + service.id">
                                  <button class="accordion-button" :class="{ collapsed: service.isOpen }" type="button" :data-bs-toggle="'#collapse' + service.id" :aria-expanded="!service.isOpen" :aria-controls="'collapse' + service.id" @click="toggleAccordion(service)">
                                    {{ service.feature }}
                                  </button>
                                </h2>
                                <div :id="'collapse' + service.id" class="accordion-collapse collapse" :class="{ show: !service.isOpen }" :aria-labelledby="'heading' + service.id" data-bs-parent="#accordionExample">
                                  <div class="accordion-body">{{ service.note }}</div>
                                </div>
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>
          <!-- End Checkout Wraper -->

        </div>
      </div>
    </div>
  </div>
</template>