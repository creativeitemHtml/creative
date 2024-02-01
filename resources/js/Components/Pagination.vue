<script setup>
import { Link } from '@inertiajs/vue3'

const props = defineProps({
  links: [],
});
</script>

<template>
    <nav v-if="links.length > 3">
        <ul class="pagination ci-pagination ci-pagination-1">
            <li class="page-item" v-for="(link, key) in links" :key="link">
                <div v-if="link.url === null" :key="key"  v-html="link.label" />
                <!-- eslint-disable -->
                <Link class="page-link" v-else :key="`link-${key}`" :class="{ 'active': link.active }" :href="link.url" v-html="link.label"></Link>
                <!--eslint-enable-->
            </li>
        </ul>
    </nav>
</template>

