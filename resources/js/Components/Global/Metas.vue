<script setup>
import { Head } from '@inertiajs/vue3'

const props = defineProps({
  seo: Object,
});

</script>

<template>
    <Head>
        <title>{{ seo.meta_title }}</title>
        <meta name="description" :content="seo.meta_description">
    </Head>
</template>