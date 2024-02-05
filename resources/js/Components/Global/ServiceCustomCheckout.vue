<script setup>
import { useForm } from '@inertiajs/vue3';
import { usePage } from '@inertiajs/vue3'
import { ref, computed } from 'vue'
import CustomeToast from '../../Components/Global/CustomeToast.vue'

const user = usePage().props.auth.user;
const showToast = ref(false);

const props = defineProps({
  selectedServices: Array
});  

const form = useForm({
  name: user ? user.name : '',
  email: user ? user.email : '',
  selectedServices: '',
});

const submit = () => {
    if(form.email != '') {
        form.selectedServices = props.selectedServices;
        form.post(route('purchase_custom_service'));
        $('#customCheckoutModal').modal('hide');
    } else {
        showToast.value = false;
        setTimeout(() => {
            showToast.value = true;
        }, 100);
    }
};

const totalPrice = computed(() => {
  return props.selectedServices.reduce((total, service) => total + parseFloat(service.price), 0);
});

</script>

<template>
  <div class="modal fade" id="customCheckoutModal" tabindex="-1" aria-labelledby="customCheckoutModalLabel" aria-hidden="true">
    <CustomeToast v-if="showToast" :type="'info'" :message="'Please provide a email address'" />
    <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title">Checkout</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form @submit.prevent="submit">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-12">
                            <h1 class="modal-title pb-3">Billing Address</h1>
                            <div v-if="$page.props.auth.user" class="cFormInput-wrap">
                                <input type="text" class="form-control eForm-control checkout" id="name" name="name" v-model="form.name" disabled />
                            </div>
                            <div v-if="$page.props.auth.user" class="cForm-wrap">
                                <div class="cFormInput-wrap">
                                    <input type="email" class="form-control eForm-control checkout" id="email" name="email" v-model="form.email" disabled />
                                </div>
                            </div>
                            <div v-if="!$page.props.auth.user" class="cForm-wrap">
                                <div class="cFormInput-wrap">
                                    <input type="email" class="form-control eForm-control checkout" id="email" name="email" placeholder="Your Email" aria-label="Your Email" v-model="form.email"/>
                                </div>
                            </div>
                            <div v-if="!$page.props.auth.user" class="eCheckbox eCheckbox-2 d-flex flex-column g-20 pt-11">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="createAccount" checked disabled />
                                    <label class="form-check-label" for="createAccount">Create an account</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-12"></div>
                        <div class="col-lg-4 col-md-12">
                            <h1 class="modal-title pb-3">Order Summary</h1>

                            <div class="mr-25 bd-all bd-r-10">
                                <div class="eCheckbox planCheck-wrap">
                                    <div class="nav flex-column nav-pills planCheck" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <div class="form-check check-custom">
                                            <div class="row" v-for="service in selectedServices" :key="service.id">
                                                <div class="col-9">
                                                    <label class="eForm-label cus-label" for="flexCheckBasic">{{ service.name }}</label>
                                                </div>
                                                <div class="col-3 cus-label text-end">
                                                    <p>${{ service.price }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mr-25 py-20 d-flex justify-content-between align-items-center flex-wrap g-10">
                                <h4 class="fz-18-sb-black">Total</h4>
                                <h4 class="fz-18-sb-black" id="selected-package-price"> ${{ totalPrice }}</h4>
                            </div>

                            <div class="pb-20 mr-25">
                                <div class="content">
                                    <div class="cForm-wrap">
                                        <button type="submit" class="checkout-order-btn">Complete order</button>
                                    </div>
                                </div>
                            </div>

                            <div class="elitem-allFile mb-10">
                                <img :src=" $page.props.base.url + '/public/assets/img/icon/shield-security.svg'" alt="">
                                <p>Secure Checkout</p>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>
  
</template>