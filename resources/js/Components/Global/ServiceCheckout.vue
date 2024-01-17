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
};

</script>

<template>
    <button v-if="isModal == true" type="button" class="ciBtn ciBtn-primary" :data-bs-toggle="'modal'" :data-bs-target="'#' + modalId" data-bs-whatever="@mdo">Buy Now</button>
    <button v-else type="button" class="buy-btn" :data-bs-toggle="'modal'" :data-bs-target="'#' + modalId" data-bs-whatever="@mdo">Buy Now</button>

    <div :id="modalId" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Checkout</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <section class="checkout-wrap pt-60 pb-100">
                        <div class="container">
                            <div class="billing-order-wrap">
                                <form @submit.prevent="submit">
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <div class="billing-address bd-all bd-r-5 px-25 py-25">
                                                <h4 class="fz-24-b-black pb-30">Billing Address</h4>
                                                <div v-if="$page.props.auth.user" class="cFormInput-wrap">
                                                    <label for="name" class="eForm-label">Name</label>
                                                    <input type="text" class="form-control eForm-control" id="name" name="name" v-model="form.name" disabled />
                                                </div>
                                                <div v-if="$page.props.auth.user" class="cForm-wrap">
                                                    <div class="cFormInput-wrap">
                                                        <label for="email" class="eForm-label">Email</label>
                                                        <input type="email" class="form-control eForm-control" id="email" name="email" v-model="form.email" disabled />
                                                    </div>
                                                </div>
                                                <div v-if="!$page.props.auth.user" class="cForm-wrap">
                                                    <div class="cFormInput-wrap">
                                                        <label for="yourEmail" class="eForm-label">Email</label>
                                                        <input type="email" class="form-control eForm-control" id="email" name="email" placeholder="Your Email" aria-label="Your Email" v-model="form.email"/>
                                                    </div>
                                                </div>
                                                <div v-if="!$page.props.auth.user" class="eCheckbox eCheckbox-2 d-flex flex-column g-20 pt-11">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="createAccount" checked disabled />
                                                        <label class="form-check-label" for="createAccount">Create an account</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="order-summary pt-24 pb-20 box-shadow-13 bg-white bd-r-10">
                                                <h4 class="os-header pl-24 pr-25 pb-20 mb-24 bd-b-1 fz-18-sb-black">Order Summary</h4>
                                                <div class="p-20 ml-24 mr-25 bd-all bd-r-10">
                                                    <div class="eCheckbox planCheck-wrap">
                                                        <div class="nav flex-column nav-pills planCheck" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                            <div class="form-check">
                                                                <div class="row">
                                                                    <div class="col-auto">
                                                                        <label class="eForm-label" for="flexCheckBasic">
                                                                            {{ feature.name }}
                                                                        </label>
                                                                        <p>${{ feature.discounted_price }}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ml-24 mr-25 py-20 d-flex justify-content-between align-items-center flex-wrap g-10">
                                                    <h4 class="fz-18-sb-black">Total</h4>
                                                    <h4 class="fz-18-sb-black" id="selected-package-price">
                                                        ${{ feature.discounted_price }}
                                                    </h4>
                                                </div>
                                                <div class="bd-all bd-r-10 pt-16 pb-20 ml-24 mr-25">
                                                    <div class="content px-20">
                                                        <div class="cForm-wrap">
                                                            <button type="submit" class="checkout-order-btn">Complete order</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="elitem-allFile mt-20">
                                                    <img :src=" $page.props.base.url + '/public/assets/img/icon/lock.svg'" alt="" />
                                                    <p>Secure Checkout</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>