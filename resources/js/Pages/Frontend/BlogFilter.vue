<script setup>
import Header from '../../Components/Global/Header.vue';
import Footer from '../../Components/Global/Footer.vue'
// import '../../../../public/assets/js/new-script.js'
import { Link, useForm } from '@inertiajs/vue3';
import { onMounted } from 'vue';

// Define props using the defineProps() function
const props = defineProps({
    selected_blog_category: Object,
    selected_category_slug: Object,
    searched_word: Object,
    blog_categories: Array,
    related_blogs: Array,
    element_categories: Array,
    seo: Object,
});

const form = useForm({
    search: '',
});

onMounted(() => {
  form.search = props.searched_word;

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

const submit = () => {
    form.get(route('blog'));
};

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'short', day: '2-digit' };
  return new Date(date).toLocaleDateString(undefined, options);
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
                    <Link :href="route('blog', { type: 'category', keyword: blog_category.slug})" :class="{ active: selected_category_slug === blog_category.slug }">{{ blog_category.name }}</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Blog Trending Section -->

    <!-- Start Related Section -->
    <section>
      <div class="container">
        <div class="row pb-60 justify-content-center">
          <div class="col-lg-4 col-md-6 col-sm-8" v-for="related in related_blogs" :key="related.id">
            <Link :href="route('blog_details', { slug: related.slug})" class="featured-single-link">
              <div class="featured-single">
                <div class="featured-single-banner">
                  <img :src=" $page.props.base.url + '/public/uploads/blog/thumbnail_image/' + related.thumbnail" alt="banner">
                </div>
                <div class="featured-single-details">
                  <div class="d-flex align-items-center justify-content-between featured-single-date">
                    <p class="text-15">{{ formatDate(related.created_at) }}</p>
                    <p class="text-15">{{ related.read_time }} Min read</p>
                  </div>
                  <h2 class="text-20">{{ related.title }}</h2>
                  <p class="blog-p">{{ related.excerpt }}....</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <!-- End Featured Section -->


    <Footer :elementCategories="element_categories"/>
</template>