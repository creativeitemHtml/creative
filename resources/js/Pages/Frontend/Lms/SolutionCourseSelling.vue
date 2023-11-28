<script setup>
import Header from '../../../Components/Global/Header.vue';
import LmsHeader from '../../../Components/Global/LmsHeader.vue';
import Footer from '../../../Components/Global/Footer.vue'

const props = defineProps({
    element_categories: Array,
});

</script>

<template>
    <Header/>
    <LmsHeader/>
    
    <!-- Start Course Selling Top Title -->
    <section class="course-selling-top-section padding-bottom-110">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="course-selling-top-title">
              <h6 class="light">COURSE SELLING</h6>
                <h1 class="title">Build and Sell Courses with easily using
                  <span class="highlight">Creative LMS</span></h1>
                <p class="info">Create and monetize your courses simply, whether you are a professional educator or a skilled individual, and easily access both local and global audiences. Creative LMS enables people from various areas of life to share and monetize their expertise easily.</p>
                <a href="#" class="signup-btn-1">Sign up for free</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Course Selling Top Title -->


    <!-- Start Through Learning Area -->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="through-learning-main d-flex padding-bottom-110">
              <!-- Left -->
              <div class="through-learning-left">
                <!-- Main Title -->
                <div class="through-learning-title">
                  <h2 class="title">Discover Your Path to Success through <span class="highlight">Learning</span></h2>
                </div>
                <div class="through-learning-inner">
                  <!-- Single Card -->
                  <div class="through-white-card">
                    <div class="through-white-details">
                      <h4 class="title">E-Learning Courses</h4>
                      <p class="info">Explore and create online courses based on your skills and knowledge according to your niche and share it to your learners all around the world......</p>
                    </div>
                    <div class="through-white-img">
                      <img :src=" $page.props.base.url + '/public/assets/img/lms/through-learning-1.webp'" alt="">
                    </div>
                  </div>
                  <!-- Single Card -->
                  <div class="throught-black-card-1">
                    <div class="through-black-details-1">
                      <h4 class="title">Webinars and Training Session</h4>
                      <p class="info"> Host live webinars and training sessions for your students to provide more insightful knowledge and demonstrate your skills in real-time.</p>
                    </div>
                    <div class="through-black-img-1">
                      <img :src=" $page.props.base.url + '/public/assets/img/lms/through-learning-2.webp'" alt="">
                    </div>
                  </div>
                  <!-- Single Card -->
                  <div class="through-white-card">
                    <div class="through-white-details">
                      <h4 class="title">Consultancy Services</h4>
                      <p class="info">Establish your niche-specialized consultancy services to provide one-to-one service to students with specific requirements, and share your expertise effectively.</p>
                    </div>
                    <div class="through-white-img">
                      <img :src=" $page.props.base.url + '/public/assets/img/lms/through-learning-3.webp'" alt="">
                    </div>
                  </div>
                  <!-- Single Card -->
                  <div class="throught-black-card-1">
                    <div class="through-black-details-1">
                      <h4 class="title">Online Coaching</h4>
                      <p class="info">Create private online coaching sessions and share your experience as a coach to guide your students achieve their personal goals.</p>
                    </div>
                    <div class="through-black-img-1">
                      <img :src=" $page.props.base.url + '/public/assets/img/lms/through-learning-4.webp'" alt="">
                    </div>
                  </div>
                </div>
              </div>
              <!-- Right -->
              <div class="through-learning-right">
                <div class="through-learning-inner">
                  <!-- Single Card -->
                  <div class="throught-black-card-1">
                    <div class="through-black-img-1">
                      <img :src=" $page.props.base.url + '/public/assets/img/lms/through-learning-5.webp'" alt="">
                    </div>
                    <div class="through-black-details-1 through-black-details-2">
                      <h4 class="title">Digital Content</h4>
                      <p class="info">Access an abundance of online tools, including manuals you can download and multimedia content, that will help you advance your knowledge and abilities......</p>
                    </div>
                  </div>
                  <!-- Single Card -->
                  <div class="through-white-card">
                    <div class="through-white-details">
                      <h4 class="title">Bootcamp</h4>
                      <p class="info">Organize Bootcamps to provide intense teaching sessions and practical experience, all while getting back-to-back assessments from your students.</p>
                    </div>
                    <div class="through-white-img">
                      <img :src=" $page.props.base.url + '/public/assets/img/lms/through-learning-6.webp'" alt="">
                    </div>
                  </div>
                  <!-- Single Card -->
                  <div class="throught-black-card-1">
                    <div class="through-black-details-1">
                      <h4 class="title">Podcasts</h4>
                      <p class="info">Start your podcast journey with Creative LMS and feature your detailed discussions on your technical and professional skills to your audience.</p>
                    </div>
                    <div class="through-black-img-1">
                      <img :src=" $page.props.base.url + '/public/assets/img/lms/through-learning-7.webp'" alt="">
                    </div>
                  </div>
                  <!-- Single Card -->
                  <div class="through-white-card">
                    <div class="through-white-details">
                      <h4 class="title">Subscription Services</h4>
                      <p class="info">Subscribe to premium services that provide you unique access to a ton of worthwhile tools, information, and continuous assistance.</p>
                    </div>
                    <div class="through-white-img">
                      <img :src=" $page.props.base.url + '/public/assets/img/lms/through-learning-8.webp'" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Through Learning Area -->


    <!-- Start Unlock Your Expertise Area -->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title-course-selling">
              <h2 class="title-42">Unlock Your Expertise with <span>Creative LMS</span></h2>
              <p class="info">Discover why Creative LMS is the first choice for every skilled individual to monetize his/her unique knowledge and expertise into profitable online courses and empower both the educators and learners.</p>
            </div>
          </div>
        </div>
        <div class="row padding-bottom-110">
          <div class="col-md-12">
            <div class="unlock-expertise-grid">
              <div class="unlock-expertise-single grid-item-4-4">
                <div class="expertise-title-img d-flex justify-content-between">
                  <h4 class="title">Teachers</h4>
                  <img :src=" $page.props.base.url + '/public/assets/img/lms/expertise-111.png'" alt="">
                </div>
                <p class="info">From university lecturers to kindergarten tutors, every teacher can easily navigate through Creative LMS to create and sell courses and provide students better education.</p>
              </div>
              <div class="unlock-expertise-single grid-item-4-4">
                <div class="expertise-title-img d-flex justify-content-between">
                  <h4 class="title">Chef</h4>
                  <img :src=" $page.props.base.url + '/public/assets/img/lms/expertise-2.png'" alt="">
                </div>
                <p class="info">Eager to share your cooking skills but don’t know where to start? Creative LMS can be your perfect choice to share and monetize your cooking expertise.</p>
              </div>
              <div class="unlock-expertise-single grid-item-4-8">
                <div class="expertise-4-8-img d-flex justify-content-center">
                  <img :src=" $page.props.base.url + '/public/assets/img/lms/expertise-3.png'" alt="">
                </div>
                <h4 class="title">Entrepreneur</h4>
                <p class="info">Every new startup needs proper guidance, and experienced entrepreneurs can create and sell courses on entrepreneurship, startups and digital marketing for beginners.</p>
              </div>
              <div class="unlock-expertise-single grid-item-3-4">
                <div class="expertise-title-img d-flex justify-content-between">
                  <h4 class="title">Podcasters</h4>
                  <img :src=" $page.props.base.url + '/public/assets/img/lms/expertise-4.png'" alt="">
                </div>
                <p class="info">Sharing your content through podcasts can be great with Creative LMS as it is the perfect platform for broadcasting with proper monetization strategy.</p>
              </div>
              <div class="unlock-expertise-single grid-item-5-4">
                <div class="expertise-title-img d-flex justify-content-between">
                  <h4 class="title">Sports Coach</h4>
                  <img :src=" $page.props.base.url + '/public/assets/img/lms/expertise-5.png'" alt="">
                </div>
                <p class="info">Training for sports and fitness can be made easy by uploading your courses on skill improvement, nutrition, fitness and earn passive income using Creative LMS.</p>
              </div>

              <div class="unlock-expertise-single grid-item-4-8">
                <div class="expertise-4-8-img expertise-4-8-img-2 d-flex justify-content-center">
                  <img :src=" $page.props.base.url + '/public/assets/img/lms/expertise-6.png'" alt="">
                </div>
                <h4 class="title">Graphic Design</h4>
                <p class="info">Turn your graphic designing skills into courses for aspiring designers with Creative LMS and easily provide design concepts, software tutorials and more.</p>
              </div>
              <div class="unlock-expertise-single grid-item-3-4">
                <div class="expertise-title-img d-flex justify-content-between">
                  <h4 class="title">Nursing</h4>
                  <img :src=" $page.props.base.url + '/public/assets/img/lms/expertise-7.png'" alt="">
                </div>
                <p class="info">Nurse educators can easily create courses on healthcare, patient care, and medical procedures with Creative LMS and make it available for aspiring nurses anytime, anywhere.</p>
              </div>
              <div class="unlock-expertise-single grid-item-5-4">
                <div class="expertise-title-img d-flex justify-content-between">
                  <h4 class="title">Life Coach</h4>
                  <img :src=" $page.props.base.url + '/public/assets/img/lms/expertise-8.png'" alt="">
                </div>
                <p class="info">With Creative LMS, life coaches can create personal development courses about mindfulness, goal setting, and mental wellness to help their learners achieve their life goals.</p>
              </div>
              <div class="unlock-expertise-single grid-item-4-4">
                <div class="expertise-title-img d-flex justify-content-between">
                  <h4 class="title">University Program</h4>
                  <img :src=" $page.props.base.url + '/public/assets/img/lms/expertise-9.png'" alt="">
                </div>
                <p class="info">Universities can provide better learning by creating online courses in a post covid world through Creative LMS, enabling the students to receive global learning.</p>
              </div>
              <div class="unlock-expertise-single grid-item-4-4">
                <div class="expertise-title-img d-flex justify-content-between">
                  <h4 class="title">HR Professional</h4>
                  <img :src=" $page.props.base.url + '/public/assets/img/lms/expertise-10.png'" alt="">
                </div>
                <p class="info">Monetize your HR expertise and sell HR practitioners and business owners courses on employee management, workplace diversity, and best practices in HR.</p>
              </div>
              <div class="unlock-expertise-single grid-item-4-4">
                <div class="expertise-title-img d-flex justify-content-between">
                  <h4 class="title">Tutor</h4>
                  <img :src=" $page.props.base.url + '/public/assets/img/lms/expertise-11.png'" alt="">
                </div>
                <p class="info"> Whether you are a private tutor, or a student wishing to share your knowledge, you can expand your tutoring using Creative LMS and make learning enjoyable.</p>
              </div>
              <div class="unlock-expertise-single grid-item-4-4">
                <div class="expertise-title-img d-flex justify-content-between">
                  <h4 class="title">Financial Advisor</h4>
                  <img :src=" $page.props.base.url + '/public/assets/img/lms/expertise-12.png'" alt="">
                </div>
                <p class="info">Make your financial advising skills more profitable by selling courses on financial planning, budgeting, investing and help your students acquire proper financial knowledge.</p>
              </div>
              <div class="unlock-expertise-single grid-item-4-4">
                <div class="expertise-title-img d-flex justify-content-between">
                  <h4 class="title">Yoga Instructor</h4>
                  <img :src=" $page.props.base.url + '/public/assets/img/lms/expertise-13.png'" alt="">
                </div>
                <p class="info">Creating detailed and practical yoga programs is easier with Creative LMS. Sell yoga and wellness courses to stand out among the crowd as a yoga instructor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Unlock Your Expertise Area -->


    <!-- Start All in One Area -->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title-course-selling">
              <h2 class="title-42">All tools in <span>one place</span></h2>
            </div>
          </div>
        </div>
        <div class="row padding-bottom-80">
          <div class="col-md-12">
            <div class="one-place-grid one-place-grid-1">
              <div class="one-place-icon-card one-place-left-card">
                <div class="one-place-icon">
                  <img :src=" $page.props.base.url + '/public/assets/img/lms/one-place-1.svg'" alt="">
                </div>
                <h4 class="title">Curriculum Creation</h4>
                <p class="info">Create engaging and helpful course material with our curriculum development tools. To ensure thorough and worthwhile learning experiences, design courses that are individually customized to the needs of your students.</p>
              </div>
              <div class="one-place-title-wrap one-place-title-right-wrap">
                <div class="one-place-title">
                  <h4 class="title">Promotion and Outreach</h4>
                  <p class="info">Increase your audience and your reach with ease. Your web presence will be  enhanced, and your course marketing will be assisted by our outreach and promotion tools.</p>
                </div>
                <div class="one-place-title">
                  <h4 class="title">Automated Email Campaigns</h4>
                  <p class="info">Automated email campaigns can make communicating with students simpler. Keep them informed, involved, and motivated as they advance through their learning process.</p>
                </div>
              </div>
            </div>
            <div class="one-place-grid">
              <div class="one-place-title-wrap one-place-title-left-wrap">
                <div class="one-place-title">
                  <h4 class="title">Page Customization</h4>
                  <p class="info">With simple page modification, create a distinctive and branded learning environment. Make a strong impact on your students by customizing the course pages to match your personality.</p>
                </div>
                <div class="one-place-title">
                  <h4 class="title">Real-Time Instruction, Interactive Webinars, and Live Streaming</h4>
                  <p class="info">For an interactive and engaging learning experience, provide real-time instruction, host live streaming sessions, and include your students in interactive webinars.</p>
                </div>
              </div>
              <div class="one-place-icon-card one-place-right-card">
                <div class="one-place-icon">
                  <img :src=" $page.props.base.url + '/public/assets/img/lms/one-place-2.svg'" alt="">
                </div>
                <h4 class="title">Online Community</h4>
                <p class="info">With the help of an online community, promote a sense of community and cooperation. Create a community directly on your website where visitors can follow, ask questions, participate in debates, like, and share information.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End All in One Area -->


    <!-- Start Frequently asked questions Area -->
    <section class="frequently-section frequently-section-2">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="frequently-title">
              <h2 class="title-58">Frequently asked questions</h2>
            </div>
            <div class="frequently-accordion">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Why should I sell online courses on Creative LMS?
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>Selling your online courses through Creative LMS provides a user-friendly, feature-rich platform built to increase your reach. A large audience, multiple price options, and the opportunity to modify your courses to fit your brand and teaching style all work to your advantage.</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      How do I create and sell an online course?
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>Online course creation and monetization are easier than you might imagine. All you need to get started teaching is some knowledge or a passion to share, a desire to do so, some basic technology (like a computer and internet), and a platform like Creative LMSi that makes it simple to create courses and sell them.</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      What type of online courses can I sell?
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>You can sell a variety of online courses using Creative LMS, including those that are related to academic disciplines, professional skills, hobbies, and more. You have the freedom to select the course specialization that best suits you.</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      What features are available on a free plan?
                    </button>
                  </h2>
                  <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>You can sign up for up to 20 students on our free plan to get started. By doing this, you can use the platform's features for free at first so you can learn more about its potential.</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      What if this is the first time I've sold something online?
                    </button>
                  </h2>
                  <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>Both inexperienced and seasoned online course developers can use Creative LMS. Even if you're new to online selling, we make the process simple and accessible by providing tools, instructions, and customer assistance.</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingSix">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                      Does Creative LMS Integrate with other tools?
                    </button>
                  </h2>
                  <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>Yes, Creative LMS offers choices for tool and platform integration. To improve your experience selling courses and expedite your workflow, you can link with well-known payment gateways, marketing tools, and more.</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingSeven">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                      What Languages and Currencies does Creative LMS support?
                    </button>
                  </h2>
                  <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>Creative LMS is designed to be inclusive and supports multiple languages and currencies. Our platform makes it simpler for you to market your courses abroad because it enables you to access a global audience and serve a variety of learners.</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingEight">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                      Is creating online courses profitable?
                    </button>
                  </h2>
                  <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>Yes, making online classes can be quite successful. Offering worthwhile and interesting courses that are tailored to particular target audiences allows many course producers to make a sizable living.</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingNine">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                      Can I cancel my Creative LMS subscription anytime?
                    </button>
                  </h2>
                  <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>Yes, you are free to cancel your Creative LMS subscription at any time. You can choose the subscription plan that is suitable for you from our selection of monthly and yearly options.</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTen">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                      Is the Creative LMS software secure?
                    </button>
                  </h2>
                  <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>Yes, Creative LMS places a high priority on security. For the protection of your data and to provide a secure learning environment for your organization, we use advanced security measures and encryption techniques.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Frequently asked questions Area -->

    <Footer :elementCategories="element_categories"/>
</template>