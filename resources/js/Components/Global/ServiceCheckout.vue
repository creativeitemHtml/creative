<script setup>
import { useForm } from '@inertiajs/vue3';
import { usePage } from '@inertiajs/vue3'
import { ref, computed } from 'vue'

const props = defineProps({
    feature: Object,
    modalId: String,
    isModal: Boolean
});

const user = usePage().props.auth.user;

const form = useForm({
    name: user ? user.name : '',
    email: user ? user.email : '',
});

const submit = () => {
    form.post(route('purchase_service_package', { service_id: props.feature.id }));
    $('#' + props.modalId).modal('hide');
};

</script>

<template>
    <button v-if="isModal == true" type="button" class="ciBtn ciBtn-primary ms-2" :data-bs-toggle="'modal'" :data-bs-target="'#' + modalId" data-bs-dismiss="modal" data-bs-whatever="@mdo">Buy Now</button>
    <button v-else type="button" class="buy-btn" :data-bs-toggle="'modal'" :data-bs-target="'#' + modalId" data-bs-whatever="@mdo">Buy Now</button>

    <div :id="modalId" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                <div class="row">
                                                    <div class="col-9">
                                                        <label class="eForm-label cus-label" for="flexCheckBasic">{{ feature.name }}</label>
                                                    </div>
                                                    <div class="col-3 cus-label text-end">
                                                        <p>${{ feature.discounted_price }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="mr-25 py-20 d-flex justify-content-between align-items-center flex-wrap g-10">
                                    <h4 class="fz-18-sb-black">Total</h4>
                                    <h4 class="fz-18-sb-black" id="selected-package-price"> ${{ feature.discounted_price }}</h4>
                                </div>

                                <div class="pb-20 mr-25">
                                    <div class="content">
                                        <div class="cForm-wrap">
                                            <button type="submit" class="checkout-order-btn">Complete order</button>
                                        </div>
                                    </div>
                                </div>

                                <div class="elitem-allFile mb-10">
                                    <img src="https://creativeitem.com/public/assets/img/icon/lock.svg" alt="">
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