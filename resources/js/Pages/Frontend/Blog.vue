<script setup>
import Header from '../../Components/Global/Header.vue';
import Footer from '../../Components/Global/Footer.vue'
// import '../../../../public/assets/js/new-script.js'
import { Link, useForm } from '@inertiajs/vue3';
import { ref, onMounted } from 'vue';

// Define props using the defineProps() function
const props = defineProps({
    latest_blog: Object,
    latest_three: Array,
    featured_blogs: Array,
    blog_categories: Array,
    element_categories: Array,
    seo: Object,
});

const form = useForm({
    search: '',
});

const submit = () => {
    form.get(route('blog'));
};

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'short', day: '2-digit' };
  return new Date(date).toLocaleDateString(undefined, options);
};

onMounted(() => {
  $(document).prop('title', props.seo.meta_title);
  $("meta[name='description']").attr("content", props.seo.meta_description);
  $("meta[name='keywords']").attr("content", props.seo.meta_keywords);
  $("meta[name='robot']").attr("content", props.seo.meta_robot);
  $("link[rel='canonical']").attr("href", props.seo.canonical_url);
  $("link[rel='custom']").attr("href", props.seo.custom_url);
  $("meta[property='og:title']").attr("content", props.seo.og_title);
  $("meta[property='og:description']").attr("content", props.seo.og_description);
  $("meta[property='og:image']").attr("content", props.seo.og_image);
});

const displayExcerpt = (excerpt) => {
  return excerpt.length < 130 ? excerpt : excerpt.slice(0, 130)+'...';
};

</script>

<template>
    <Header/>

    <!-- Start Blog Trending Section -->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <!-- Section Title -->
            <div class="blog-section-title">
              <h1 class="text-54">Creativeitem Blog</h1>
              <p class="blog-p">Crafting Stories, Igniting Ideas: Your Premier Source for Creativity Where Imagination Meets Innovation. </p>
            </div>
            <!-- Blog search -->
            <div class="blog-search">
              <form @submit.prevent="submit" class="d-flex align-items-center">
                <input type="search" class="form-control" placeholder="Search …" id="search" name="search" v-model="form.search">
                <button type="submit" :disabled="form.processing">
                  <img :src=" $page.props.base.url + '/public/assets/img/new-icons-images/white-search.svg'" alt="">
                  Search
                </button>
              </form>
            </div>
            <!-- Blog Nav Area -->
            <div class="blog-nav-area">
              <nav>
                <ul class="d-flex align-items-center justify-content-center">
                  <li v-for="blog_category in blog_categories" :key="blog_category.id">
                    <Link :href="route('blog', { type: 'category', keyword: blog_category.slug})">{{ blog_category.name }}</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div class="row pb-24">
          <!-- Trending Left -->
          <div class="col-md-6">
            <Link :href="route('blog_details', { slug: latest_blog.slug})" class="trending-top-link">
              <div class="trending-top-article">
                <div class="trending-top-banner">
                  <img :src="$page.props.base.url + '/public/uploads/blog/thumbnail_image/' + latest_blog.thumbnail" alt="banner">
                </div>
                <div class="article-date">
                  <p class="text-15">{{ formatDate(latest_blog.created_at) }}</p>
                </div>
                <div class="trending-top-details">
                  <h1 class="text-24">{{ latest_blog.title.length < 80 ? latest_blog.title : latest_blog.title.slice(0, 80)+'...' }}</h1>
                  <p class="blog-p">{{ latest_blog.excerpt.length < 200 ? latest_blog.excerpt : latest_blog.excerpt.slice(0, 200)+'...' }}</p>
                </div>
                <div class="blog-read-more">
                  <h3 class="d-flex align-items-center text-15">
                    <span>Read More</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.1442 7.80381L6.81147 17.1269C6.673 17.2654 6.49897 17.333 6.28937 17.3298C6.07975 17.3266 5.90572 17.2558 5.76727 17.1173C5.6288 16.9788 5.55957 16.8064 5.55957 16.6C5.55957 16.3936 5.6288 16.2212 5.76727 16.0827L15.0904 6.74998H6.89417C6.68167 6.74998 6.50355 6.67808 6.3598 6.53428C6.21606 6.39046 6.1442 6.21226 6.1442 5.99968C6.1442 5.78708 6.21606 5.60899 6.3598 5.46541C6.50355 5.32182 6.68167 5.25003 6.89417 5.25003H16.7403C16.9964 5.25003 17.2111 5.33665 17.3843 5.50988C17.5575 5.68311 17.6441 5.89777 17.6441 6.15386V16C17.6441 16.2125 17.5722 16.3906 17.4284 16.5344C17.2846 16.6781 17.1064 16.75 16.8938 16.75C16.6812 16.75 16.5032 16.6781 16.3596 16.5344C16.216 16.3906 16.1442 16.2125 16.1442 16V7.80381Z" fill="#212534"/>
                    </svg>                    
                  </h3>
                </div>
              </div>
            </Link>
          </div>
          <!-- Trending Right -->
          <div class="col-md-6">
            <div class="trending-child-wrap">
              <!-- Trending Child Single -->
              <Link :href="route('blog_details', { slug: latest.slug})" class="trending-child-link" v-for="latest in latest_three" :key="latest.id">
                <div class="trending-child-single d-flex">
                  <div class="trending-child-banner">
                    <img :src=" $page.props.base.url + '/public/uploads/blog/thumbnail_image/' + latest.thumbnail" alt="banner">
                  </div>
                  <div class="trending-child-details">
                    <p class="text-15">{{ formatDate(latest.created_at) }}</p>
                    <h2 class="text-20">{{ latest.title.length < 62 ? latest.title : latest.title.slice(0, 62)+'...' }}</h2>
                    <div class="blog-read-more">
                      <h4 class="d-flex align-items-center text-15">
                        <span>Read More</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.1442 7.80381L6.81147 17.1269C6.673 17.2654 6.49897 17.333 6.28937 17.3298C6.07975 17.3266 5.90572 17.2558 5.76727 17.1173C5.6288 16.9788 5.55957 16.8064 5.55957 16.6C5.55957 16.3936 5.6288 16.2212 5.76727 16.0827L15.0904 6.74998H6.89417C6.68167 6.74998 6.50355 6.67808 6.3598 6.53428C6.21606 6.39046 6.1442 6.21226 6.1442 5.99968C6.1442 5.78708 6.21606 5.60899 6.3598 5.46541C6.50355 5.32182 6.68167 5.25003 6.89417 5.25003H16.7403C16.9964 5.25003 17.2111 5.33665 17.3843 5.50988C17.5575 5.68311 17.6441 5.89777 17.6441 6.15386V16C17.6441 16.2125 17.5722 16.3906 17.4284 16.5344C17.2846 16.6781 17.1064 16.75 16.8938 16.75C16.6812 16.75 16.5032 16.6781 16.3596 16.5344C16.216 16.3906 16.1442 16.2125 16.1442 16V7.80381Z" fill="#212534"/>
                        </svg>                    
                      </h4>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Blog Trending Section -->

    <!-- Start Featured Section -->
    <section>
      <div class="container">
        <div class="row pb-60 justify-content-center">
          <div class="col-md-12">
            <div class="featured-title">
              <h2 class="text-24">Featured Topic</h2>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-8" v-for="featured in featured_blogs" :key="featured.id">
            <Link :href="route('blog_details', { slug: featured.slug})" class="featured-single-link">
              <div class="featured-single">
                <div class="featured-single-banner">
                  <img :src=" $page.props.base.url + '/public/uploads/blog/thumbnail_image/' + featured.thumbnail" alt="banner">
                </div>
                <div class="featured-single-details">
                  <div class="d-flex align-items-center justify-content-between featured-single-date">
                    <p class="text-15">{{ formatDate(featured.created_at) }}</p>
                    <p class="text-15">{{ featured.read_time }} Min read</p>
                  </div>
                  <h2 class="text-20">{{ featured.title.length < 65 ? featured.title : featured.title.slice(0, 65)+'...' }}</h2>
                  <p class="blog-p">{{ displayExcerpt(featured.excerpt) }}</p>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-12">
            <div class="see-more-blog d-flex justify-content-center">
              <a href="#" class="more-blog-btn">See More Blogs</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Featured Section -->


    <Footer :elementCategories="element_categories"/>
</template>