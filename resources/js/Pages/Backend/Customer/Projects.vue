<script setup>
import Header from '../../../Components/Global/Header.vue';
import Footer from '../../../Components/Global/Footer.vue'
import Breadcrumb from '../../../Components/Backend/Breadcrumb.vue'
import MobileOffcanvas from '../../../Components/Backend/MobileOffcanvas.vue'
import Navigation from '../../../Components/Backend/Navigation.vue'
import { Link, usePage } from '@inertiajs/vue3';
import CustomeToast from '@/Components/Global/CustomeToast.vue';
import { ref, onMounted, watch } from 'vue';

const props = defineProps({
    projects: Array,
    tab: String,
    active: String,
    pending: String,
    archive: String,
});

const flash = ref(usePage().props.flash);

// Watch for changes in props.flash
watch(() => usePage().props.flash, (newFlash) => {
  flash.value = newFlash;
});

onMounted(() => {
  // Set initial value on mount
  flash.value = usePage().props.flash;
});

</script>

<template>
    <Header/>
    <div v-if="(flash.success || flash.info || flash.warning || flash.error) != null" class="absolute top-8 right-10 z-10">
        <CustomeToast v-if="flash.success" :type="'success'" :message="flash.success" />
        <CustomeToast v-else-if="flash.info" :type="'info'" :message="flash.info" />
        <CustomeToast v-else-if="flash.warning" :type="'warning'" :message="flash.warning" />
        <CustomeToast v-else-if="flash.error" :type="'error'" :message="flash.error" />
    </div>
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
                        <h4 class="fz-20-sb-black">Projects</h4>
                        <Link :href="route('customer.project_create')" class="new-project-btn new-project-btn-desktop">
                            Submit new projects
                        </Link>
                        <button class="d-lg-none mobile-menu-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/menu-icon.svg'" alt="menu">
                        </button>
                    </div>
                    <!-- Table -->
                    <ul class="nav nav-pills pb-20">
                        <li class="nav-item">
                            <Link class="nav-link" :class="{ 'active': tab == 'active' }" aria-current="page" :href="route('customer.projects', { param: 'active'})">
                                Active ({{ active }})
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" :class="{ 'active': tab == 'pending' }" aria-current="page" :href="route('customer.projects', { param: 'pending'})">
                                Pending ({{ pending }})
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" :class="{ 'active': tab == 'archive' }" aria-current="page" :href="route('customer.projects', { param: 'archive'})">
                                Archive ({{ archive }})
                            </Link>
                        </li>
                    </ul>
                    <div v-if="projects.length > 0" class="table-responsive">
                        <table class="table eTable">
                            <!-- Table Head -->
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Project title</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Completion</th>
                                    <th scope="col">Paid Amount</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(project, index) in projects" :key="project.id">
                                    <td>
                                        <div>
                                            <p class="fz-15-sb-black">{{ ++index }}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="min-w-100">
                                            <p class="fz-15-sb-black">{{ project.title }}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="min-w-100">
                                            <p class="status-btn" :class="project.status == 'active' ? 'status-up' : 'status-down'">{{ project.status }}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="min-w-100">
                                            <p class="status-btn" :class="project.status == 'active' ? 'status-up' : 'status-down'">
                                                <svg v-if="project.status == 'active'" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
                                                <svg v-else xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                                {{ project.completion_progress }}%
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="min-w-100">
                                            <p class="fz-15-m-black">${{ project.paid_amount }}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <Link :href="route('customer.project_details', { id: project.id })" class="ciBtn ciBtn-primary project-view-btn">View details</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div v-else class="no-subscription arrow-right mt-60">
                        <img :src=" $page.props.base.url + '/public/assets/img/admin-customer/subscription-status.png'" alt="">
                        <h4 class="title"> No project found. Create A New Project!</h4>
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