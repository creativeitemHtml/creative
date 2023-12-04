<script setup>
import Header from '../../../Components/Global/Header.vue';
import Footer from '../../../Components/Global/Footer.vue'
import Breadcrumb from '../../../Components/Backend/Breadcrumb.vue'
import MobileOffcanvas from '../../../Components/Backend/MobileOffcanvas.vue'
import Navigation from '../../../Components/Backend/Navigation.vue'
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    milestone_details: Object,
});

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'short', day: '2-digit' };
  return new Date(date).toLocaleDateString(undefined, options);
};

const printableDiv = (printableAreaDivId) => {
    const printContents = document.getElementById(printableAreaDivId).innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
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

                    <div class="invoice-content">
                        <div class="invoice-header">
                            <div class="title-btn-menu-wrap d-flex justify-content-between align-items-center flex-wrap g-10 pb-30">
                                <h4 class="title">MILESTONE INVOICE</h4>
                                <Link :href="$page.props.urlPrev" class="breadcrumb-two-back">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"></path></svg>
                                    Back
                                </Link>
                                <button class="d-lg-none mobile-menu-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                    <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/menu-icon.svg'" alt="menu">
                                </button>
                            </div>
                        </div>
                        <div class="invoice-body" id="invoice_print">
                            <!-- Info items -->
                            <div class="invoice-items">
                                <div class="invoice-item">
                                    <div class="invoice-info">
                                        <h5 class="title">Bill to {{ milestone_details.paymentMilestone_to_user.name}}</h5>
                                        <p class="info">
                                            {{ milestone_details.paymentMilestone_to_user.email }}
                                        </p>
                                        <p class="info">
                                            {{ milestone_details.paymentMilestone_to_user.phone }}
                                        </p>
                                    </div>
                                </div>
                                <div class="invoice-item">
                                    <div class="company-logo">
                                        <img :src=" $page.props.base.url + '/public/assets/img/admin-customer/logo-invoice.png'" alt="" />
                                    </div>
                                </div>
                                <div class="invoice-item">
                                    <div class="invoice-info">
                                        <h5 class="title">Invoice No</h5>
                                        <p class="info">#{{ milestone_details.id }}</p>
                                    </div>
                                    <div class="invoice-info">
                                        <h5 class="title">Date</h5>
                                        <p class="info">{{ formatDate(milestone_details.updated_at) }}</p>
                                    </div>
                                    <div class="invoice-info">
                                        <span class="paid">Paid - ${{ milestone_details.amount }}</span>
                                    </div>
                                </div>
                            </div>
                            <!-- Table -->
                            <div class="table-responsive">
                                <table class="table eTable el-table invoice-table">
                                    <!-- Table Head -->
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Item</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="dl_property_id">
                                                    <p>1</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="dl_property_price">
                                                    <p>{{ formatDate(milestone_details.updated_at) }}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="dl_property_id">
                                                    <p>{{ milestone_details.PaymentMilestone_to_project.title }}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="dl_property_price">
                                                    <p>${{ milestone_details.amount }}</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="table-responsive">
                                <table class="table eTable el-table invoice-table ms-auto max-w-332">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="dl_property_price">
                                                    <p>Subtotal</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="dl_property_id">
                                                    <p>${{ milestone_details.amount }}</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="dl_property_price">
                                                    <p>Offer</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="dl_property_id">
                                                    <p>%00</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="invoice-grand-total max-w-358 ms-auto">
                                <p>Grand Total</p>
                                <p>${{ milestone_details.amount }}</p>
                            </div>
                        </div>
                        <div class="invoice-print-area">
                            <a href="javascript:;" class="print-btn" id="print" @click="printableDiv('invoice_print')">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
                                Print
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Textual Inputs -->
        </div>
    </section>
    <!-- End Elements -->

    <Footer/>
</template>