<script setup>
import Header from '../../../Components/Global/Header.vue';
import ElementHeader from '../../../Components/Global/ElementHeader.vue';
import Footer from '../../../Components/Global/Footer.vue'
import { Link, useForm } from '@inertiajs/vue3';
import { usePage } from '@inertiajs/vue3'
import { ref } from 'vue';

// Define props using the defineProps() function
const props = defineProps({
    packages: Array,
    element_categories: Array,
    selected_package: Object,
});

const user = usePage().props.auth.user;

const form = useForm({
    name: user ? user.name : '',
    email: user ? user.email : '',
});

const selectedPackageId = ref(props.selected_package.id);

const updateSelectedPackage = (pack) => {
    selectedPackageId.value = pack.id;
};

const calculateTotalPrice = () => {
    const selectedPackage = props.packages.find(pack => pack.id === selectedPackageId.value);
    if (selectedPackage && selectedPackage.interval_period !== null) {
        return selectedPackage.discounted_price * selectedPackage.interval_period;
    } else if (selectedPackage) {
        return selectedPackage.discounted_price;
    } else {
        return 0;
    }
};

const submit = () => {
    form.post(route('purchase_subscription', { package_id: selectedPackageId.value }));
};

$(document).ready(function () {
    $(".checkThis").on("click", function () {
        // Remove 'active' class from all buttons
        $(".checkThis").removeClass("active");

        // Add 'active' class to the clicked button
        $(this).addClass("active");

        // Optionally, update selected_package.id based on the clicked button's data
        var packId = $(this).data("pack-id");
        // Update selected_package.id here if needed

        // Your existing code to update checkbox status
        $(".planCheck-input").prop("checked", false);
        $(this).find(".planCheck-input").prop("checked", true);
    });
});
</script>

<template>
    <Header/>
    <ElementHeader :elementCategories="element_categories"/>

    <!-- Start Breadcrumb -->
    <section class="breadcrumb-two">
      <div class="breadcrumb-two-graphic-1">
        <img :src=" $page.props.base.url + '/public/assets/img/banner-graphic-1.png'" alt="" />
      </div>
      <div class="container">
          <div class="breadcrumb-two-content">
            <div class="content">
              <h4 class="title">Checkout</h4>
              <p class="info">
                Element subscription checkout page
              </p>
            </div>
            <Link :href="route('elements_package_pricing')" class="breadcrumb-two-back">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>
              Back
            </Link>
          </div>
      </div>
    </section>
    <!-- End Breadcrumb -->

    <!-- Start Checkout Wraper -->
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
                                            <button
                                                v-for="pack in packages" :key="pack.id"
                                                class="nav-link checkThis"
                                                :class="{ 'active': pack.id === selected_package.id }"
                                                id="v-pills-{{ pack.name }}-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#v-pills-{{ pack.name }}"
                                                type="button"
                                                role="tab"
                                                aria-controls="v-pills-{{ pack.name }}"
                                                :aria-selected="pack.id === selected_package.id ? 'true' : 'false'"
                                                @click="updateSelectedPackage(pack)"
                                            >
                                                <div class="form-check">
                                                    <div class="col-auto">
                                                        <input class="form-check-input planCheck-input" type="checkbox" value="" id="flexCheckBasic" :checked="pack.id === selected_package.id" />
                                                    </div>
                                                    <div class="col-auto">
                                                        <label class="form-check-label" for="flexCheckBasic">{{ pack.name }}</label>
                                                        <p>
                                                            ${{ pack.discounted_price }}/{{ pack.int_val }} ( {{ pack.interval_period_text }} )
                                                        </p>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="ml-24 mr-25 py-20 d-flex justify-content-between align-items-center flex-wrap g-10">
                                    <h4 class="fz-18-sb-black">Total</h4>
                                    <h4 class="fz-18-sb-black" id="selected-package-price">
                                        ${{ calculateTotalPrice() }}
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
    <!-- End Checkout Wraper -->


    <Footer :elementCategories="element_categories"/>
</template>