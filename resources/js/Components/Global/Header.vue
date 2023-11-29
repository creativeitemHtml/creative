<script setup>
import { Link } from '@inertiajs/vue3'
import { ref, onMounted, onUnmounted, onBeforeUnmount } from 'vue';

const currentTime = ref(new Date());
const targetTime = new Date('2023-12-03T23:59:59');
const timeDifference = ref({
  hours: 0,
  minutes: 0,
  seconds: 0
});

// Function to calculate the time difference
const calculateTimeDifference = () => {
  const difference = Math.floor((targetTime - currentTime.value) / 1000); // Convert milliseconds to seconds
  timeDifference.value.hours = Math.floor(difference / 3600); // 1 hour = 3600 seconds
  timeDifference.value.minutes = Math.floor((difference % 3600) / 60); // 1 minute = 60 seconds
  timeDifference.value.seconds = difference % 60;
};

// Update the time difference every second
const updateTimeInterval = setInterval(() => {
  currentTime.value = new Date();
  calculateTimeDifference();
}, 1000);

// Call the calculateTimeDifference function when the component is mounted
onMounted(() => {
  calculateTimeDifference();

  // Set a timeout to show modals after 8 seconds
  const timeoutId = setTimeout(() => {
    $('#promotionalModal').modal('show');
    $('#promotionalModal-2').modal('show');
  }, 12000);

  // Clear the timeout when the component is unmounted
  onBeforeUnmount(() => {
    clearTimeout(timeoutId);
  });
  
});

// Cleanup the interval when the component is unmounted
onUnmounted(() => {
  clearInterval(updateTimeInterval);
});


// Main Menu
$(document).ready(function () {
  $(".mobile-menu-button").click(function () {
    $('.main-mobile-menu').addClass("active");
  });
  $(".mobile-menu-close").click(function () {
    $('.main-mobile-menu').removeClass("active");
  });

  accordionmenu();

});


// Define the support function
const support = () => {
  // Make sure the zE function is accessible here
  zE(function() {
    zE.activate();
  });
};

</script>

<template>

  <!-- Start Promotion Topbar -->
  <section class="promotion-top-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="promotion-top-wrap d-flex align-items-center justify-content-center">
            <p class="info">Elements! Thousands of Components are free to use </p>
            <Link :href="route('elements_package_pricing')" class="checkout-btn-1">Check it Now</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Promotion Topbar -->

  <!-- Start Promotion Modal -->
  <div id="promotionalModal-2" class="modal fade promotional-modal promotional-modal-2" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <div class="header-logo">
            <img :src=" $page.props.base.url + '/public/assets/img/element-logo.svg'" alt="logo">
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            <img :src=" $page.props.base.url + '/public/assets/img/lms/white-cross.svg'" alt="">
          </button>
        </div>
        <div class="black-friday-img">
          <img :src=" $page.props.base.url + '/public/assets/img/black-friday.svg'" alt="">
        </div>
        <div class="modal-body text-center">
          <img class="add-banner-1" :src=" $page.props.base.url + '/public/assets/img/add-banner.webp'" style="" alt="add">
          <div class="promotion-date-limit d-flex justify-content-center flex-wrap">
            <div class="promotion-time-card">
              <h3 class="time">Hours</h3>
              <h2 class="limited-time" id="hours">{{ timeDifference.hours }}</h2>
            </div>
            <div class="promotion-time-card">
              <h3 class="time">Minutes</h3>
              <h2 class="limited-time" id="minutss">{{ timeDifference.minutes }}</h2>
            </div>
            <div class="promotion-time-card">
              <h3 class="time">Seconds</h3>
              <h2 class="limited-time" id="minutss">{{ timeDifference.seconds }}</h2>
            </div>
          </div>
          <h3 class="promotion-limit">** LIMITED TIME DEAL**</h3>
          <div class="d-flex justify-content-center">
            <a :href="route('elements_package_pricing')" class="checkout-btn-2 checkout-btn-3">Check it Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Promotion Modal -->

    <!-- Start Main Header -->
    <header class="main-menu-header">
      <div class="container-xxl">
        <div class="row">
          <div class="col-md-12">
            <div class="main-menu-wrap d-flex justify-content-between align-items-center">
              <div class="menu-logo">
                <Link :href="route('home')" class="desk-menu-logo">
                  <img :src=" $page.props.base.url + '/public/assets/img/logo-white.svg'" alt="logo" />
                </Link>
                <Link :href="route('home')" class="mobile-menu-logo">
                  <img :src=" $page.props.base.url + '/public/assets/img/logo-icon.svg'" alt="logo" />
                </Link>
              </div>
              <div class="main-menu-area">
                <!-- Desktop Menu -->
                <nav class="main-menu-nav ml-xl-100">
                  <ul class="d-flex align-items-center main-menu-ul">
                    <li><Link :href="route('home')" class="menu-parent-a" :class="{ 'active': route().current('home') }">Home</Link></li>
                    <li class="have-mega-menu">
                      <a href="javascript:void(0);" class="menu-parent-a" :class="{ 'active': route().current('web_applications') }">Products
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.67145 6.46581C5.46816 6.46581 5.2649 6.38819 5.10991 6.23327L0.232691 1.356C-0.0775637 1.04575 -0.0775637 0.54273 0.232691 0.232595C0.54282 -0.0775318 1.04574 -0.0775318 1.35602 0.232595L5.67145 4.54827L9.9869 0.232756C10.2972 -0.0773869 10.8 -0.0773869 11.1101 0.232756C11.4205 0.542875 11.4205 1.0459 11.1101 1.35616L6.23299 6.23342C6.07792 6.38836 5.87466 6.46581 5.67145 6.46581Z" fill="#a6abbe"/>
                        </svg>
                      </a>
                      <ul class="main-mega-menu">
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="mega-menu-items">
                              <Link :href="route('web_applications')" class="mega-menu-item mega-menu-item-1">
                                <div class="icon">
                                  <img
                                    :src=" $page.props.base.url + '/public/assets/img/new-icons-images/mega-1.svg'"
                                    alt=""
                                  />
                                </div>
                                <div class="content">
                                  <h3 class="title">Web Applications</h3>
                                  <p class="info">
                                    8+ web applications with multiple available addons
                                  </p>
                                </div>
                              </Link>
                              <Link :href="route('lms.home')" class="mega-menu-item mega-menu-item-4">
                                <div class="icon">
                                  <img
                                    :src=" $page.props.base.url + '/public/assets/img/new-icons-images/mega-4.svg'"
                                    alt=""
                                  />
                                </div>
                                <div class="content">
                                  <h3 class="title">Creative LMS</h3>
                                  <p class="info">
                                    SAAS Online Learning Management System
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="mega-menu-items">
                              <Link :href="route('elements')" class="mega-menu-item mega-menu-item-3">
                                <div class="icon">
                                  <img
                                    :src=" $page.props.base.url + '/public/assets/img/new-icons-images/mega-2.svg'"
                                    alt=""
                                  />
                                </div>
                                <div class="content">
                                  <h3 class="title">
                                    Elements
                                  </h3>
                                  <p class="info">
                                    Stay updated with the latest pre-built elements
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </li>
                    <li>
                      <Link :href="route('elements')" class="menu-parent-a" :class="{ 'active': route().current('elements') }">Elements</Link>
                    </li>
                    <li><Link :href="route('services')" class="menu-parent-a" :class="{ 'active': route().current('services') }">Service</Link></li>
                    <li><Link :href="route('blog')" class="menu-parent-a" :class="{ 'active': route().current('blog') }">Blog</Link></li>
                    <li><a href="javascript:;" @click="support" class="menu-parent-a">Support</a></li>
                  </ul>
                </nav>
                <!-- Mobile Menu -->
                <div class="main-mobile-menu">
                  <div class="mobile-logo-area d-flex justify-content-between">
                    <Link :href="route('home')" class="mobile-menu-logo">
                      <img  :src=" $page.props.base.url + '/public/assets/img/logo-icon.svg'" alt="logo" />
                    </Link>
                    <div class="mobile-menu-close">
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                    </div>
                  </div>
                  <nav class="mobile-menu-nav">
                    <ul class="mobile-menu-ul">
                      <li>
                        <Link :href="route('home')">Home</Link>
                      </li>
                      <li class="mobile-menu-li">
                        <a href="javascript:void(0);" class="mobile-sub-btn">Products
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                        </a>
                        <ul class="mobile-dropdown mobile-dropdown-mega">
                          <Link :href="route('web_applications')">
                            <div class="mobile-mega-single">
                              <div class="mobile-mega-icon">
                                <div class="mega-icon-inner">
                                  <img  :src=" $page.props.base.url + '/public/assets/img/new-icons-images/mega-1.svg'" alt="">
                                </div>
                              </div>
                              <h4 class="mega-heading">Web Applications</h4>
                              <p class="mega-descrip">10+ Web Applications with Essentials Plugins</p>
                            </div>
                          </Link>
                          <Link :href="route('elements')">
                            <div class="mobile-mega-single">
                              <div class="mobile-mega-icon">
                                <div class="mega-icon-inner">
                                  <img  :src=" $page.props.base.url + '/public/assets/img/new-icons-images/mega-5.svg'" alt="">
                                </div>
                              </div>
                              <h4 class="mega-heading">Elements</h4>
                              <p class="mega-descrip">10+ Web Applications with Essentials Plugins</p>
                            </div>
                          </Link>
                        </ul>
                      </li>
                      <li>
                        <a :href="route('elements')">Elements</a>
                      </li>
                      <li>
                        <a :href="route('services')">Service</a>
                      </li>
                      <li>
                        <a :href="route('blog')">Blog</a>
                      </li>
                      <li>
                        <a href="#">Support</a>
                      </li>
                      <li v-if="!($page.props.auth.user)">
                        <Link :href="route('login')" >Login</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="mobile-menu-button">
                  <img :src=" $page.props.base.url + '/public/assets/img/icon/gl-mobile-menu.svg'" alt="">
                </div>
              </div>
              <div class="menu-login-profile d-flex align-items-center">
                <!-- Login Profile Html -->
                <div v-if="$page.props.auth.user" class="main-menu-profile">
                  <button type="button" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <h4 class="userName">{{ $page.props.auth.user.name }}</h4>
                    <img :src=" $page.props.base.url + '/public/assets/img/user.png'" alt="" />
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <span></span>
                    <li>
                      <Link class="dropdown-item active" :href="route('customer.subscription_details')">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16.663" height="16.663" viewBox="0 0 16.663 16.663">
                            <path
                            id="send"
                            d="M17.425,5.136A1.371,1.371,0,0,1,19.159,6.87L14.521,20.785a1.392,1.392,0,0,1-2.656-.076c-.324-1.181-.741-2.622-1.152-3.842-.206-.611-.407-1.155-.59-1.579-.092-.212-.176-.385-.25-.516-.037-.065-.068-.116-.095-.153-.013-.019-.024-.032-.032-.042l-.009-.011,0,0h0l-.015-.013-.042-.032c-.038-.026-.088-.058-.153-.095-.132-.074-.3-.158-.516-.25-.424-.184-.968-.385-1.579-.59-1.22-.411-2.661-.827-3.842-1.152A1.392,1.392,0,0,1,3.51,9.774Zm-4.2,15.216L17.859,6.436,3.943,11.075h0a.062.062,0,0,0,0,.03v0l.006,0c1.189.327,2.66.751,3.916,1.175.627.211,1.212.426,1.687.632a7.112,7.112,0,0,1,.642.312,2.357,2.357,0,0,1,.509.365,2.36,2.36,0,0,1,.365.509,7.121,7.121,0,0,1,.312.642c.206.474.421,1.059.632,1.687.423,1.256.848,2.727,1.175,3.916l0,.006h0l.016,0h.014v0Z"
                            transform="translate(-2.569 -5.063)"
                            fill="#676c7d"
                            fill-rule="evenodd"
                            />
                          </svg>
                        </span>
                        My Subscription
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" :href="route('customer.downloads')">
                        <span>
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="19.557"
                              height="16.94"
                              viewBox="0 0 19.557 16.94"
                          >
                              <g id="Layer_2" data-name="Layer 2" transform="translate(-1 -3)">
                                  <path
                                      id="Path_5542"
                                      data-name="Path 5542"
                                      d="M14.258,26.909a.649.649,0,0,1-.461-.191l-2.606-2.606a.651.651,0,1,1,.921-.921l2.145,2.145L16.4,23.191a.651.651,0,1,1,.921.921l-2.606,2.606A.649.649,0,0,1,14.258,26.909Z"
                                      transform="translate(-3.485 -6.97)"
                                      fill="#676c7d"
                                  />
                                  <path
                                      id="Path_5543"
                                      data-name="Path 5543"
                                      d="M15.652,22.773A.651.651,0,0,1,15,22.121v-8.47a.652.652,0,0,1,1.3,0v8.47A.651.651,0,0,1,15.652,22.773Z"
                                      transform="translate(-4.879 -3.485)"
                                      fill="#676c7d"
                                  />
                                  <path
                                      id="Path_5544"
                                      data-name="Path 5544"
                                      d="M16.962,14.727h-.977a.652.652,0,0,1,0-1.3h.977A2.281,2.281,0,1,0,16.6,8.9a.649.649,0,0,1-.739-.5A5.21,5.21,0,0,0,5.6,8.935a.652.652,0,0,1-.648.58h-.69a1.955,1.955,0,0,0,0,3.909h1.3a.652.652,0,0,1,0,1.3h-1.3a3.258,3.258,0,1,1,0-6.515H4.39a6.513,6.513,0,0,1,12.6-.652,3.583,3.583,0,1,1-.023,7.167Z"
                                      fill="#676c7d"
                                  />
                              </g>
                          </svg>
                        </span>
                        My Downloads
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" :href="route('logout')" method="post">
                        <span><img :src=" $page.props.base.url + '/public/assets/img/icon/downloads.svg'" alt=""/></span>
                        Logut
                      </Link>
                    </li>
                  </ul>
                </div>
                <!-- Login Logout Button -->
                <div v-else class="main-menu-login d-flex align-items-center">
                  <Link :href="route('login')" class="log-in">Log in</Link>
                  <Link :href="route('register')" class="sign-up">Sign Up</Link>
                </div>
                <!-- Mobile Login Button -->
                <div v-if="!($page.props.auth.user)" class="menu-mobile-login">
                  <Link :href="route('login')">
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6286 2.77603C14.6286 1.92161 13.8718 1.26522 13.026 1.38605L2.57703 2.87875C2.57702 2.87875 2.57704 2.87875 2.57703 2.87875C1.88525 2.97763 1.37142 3.57009 1.37142 4.26873V5.59097C1.37142 5.96968 1.06442 6.27668 0.685712 6.27668C0.307004 6.27668 0 5.96968 0 5.59097V4.26873C0 2.88751 1.01572 1.71652 2.38302 1.52112L12.832 0.0284161C14.504 -0.210451 16 1.08705 16 2.77603V14.6753C16 16.3643 14.504 17.6618 12.832 17.4229L2.38308 15.9302C2.38307 15.9302 2.38309 15.9302 2.38308 15.9302C1.0157 15.7349 0 14.5637 0 13.1826V11.8604C0 11.4816 0.307004 11.1746 0.685712 11.1746C1.06442 11.1746 1.37142 11.4816 1.37142 11.8604V13.1826C1.37142 13.8813 1.88527 14.4737 2.57697 14.5726L13.026 16.0652C13.8718 16.1861 14.6286 15.5297 14.6286 14.6753V2.77603ZM7.51513 5.1061C7.78292 4.83831 8.21709 4.83831 8.48488 5.1061L11.6196 8.24078C11.7481 8.36938 11.8204 8.54379 11.8204 8.72566C11.8204 8.90752 11.7481 9.08193 11.6196 9.21053L8.48488 12.3452C8.21709 12.613 7.78292 12.613 7.51513 12.3452C7.24735 12.0774 7.24735 11.6432 7.51513 11.3754L9.47923 9.41137H0.685712C0.307004 9.41137 0 9.10437 0 8.72566C0 8.34696 0.307004 8.03994 0.685712 8.03994H9.47923L7.51513 6.07584C7.24735 5.80806 7.24735 5.37389 7.51513 5.1061Z" fill="white"/>
                    </svg>                      
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- End Main Header -->
</template>