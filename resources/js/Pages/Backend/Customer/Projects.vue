<script setup>
import Header from '../../../Components/Global/Header.vue';
import Footer from '../../../Components/Global/Footer.vue'
import Breadcrumb from '../../../Components/Backend/Breadcrumb.vue'
import MobileOffcanvas from '../../../Components/Backend/MobileOffcanvas.vue'
import Navigation from '../../../Components/Backend/Navigation.vue'
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    projects: Array,
});

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
                        <h4 class="fz-20-sb-black">Projects</h4>
                        <a href="#" class="new-project-btn new-project-btn-desktop">
                            Submit new projects
                        </a>
                        <button class="d-lg-none mobile-menu-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/menu-icon.svg'" alt="menu">
                        </button>
                    </div>
                    <!-- Table -->
                    <ul class="nav nav-pills pb-20">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Active</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Pending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Archive</a>
                        </li>
                    </ul>
                    <div class="table-responsive">
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
                                            <p class="status-btn status-up">{{ project.status }}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="min-w-100">
                                            <p class="status-btn status-down">
                                                <i class="fa-solid fa-arrow-down"></i> {{ project.completion_progress }}%
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="min-w-100">
                                            <p class="fz-15-m-black">${{ project.paid_amount }}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="adminTable-action">
                                            <div class="btn-group">
                                                <button type="button"  class="dropdown-btn dropdown-toggle"  data-bs-toggle="dropdown"  aria-expanded="false">Actions</button>
                                                <ul class="dropdown-menu dropdown-menu-end">
                                                    <li>
                                                        <a class="dropdown-item" href="#">View Details</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">Edit</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="javascript:;">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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