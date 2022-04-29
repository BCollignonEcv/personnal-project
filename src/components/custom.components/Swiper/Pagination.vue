<template>
    <div class="pagination">
        <template v-for="section in sections" :key="section.title">
            <PaginationItems :title="section.title" :subtitles="section.pages"></PaginationItems>
        </template>
    </div>
</template>

<script>

import PaginationItems from './PaginationItems.vue'

export default {
    components: {
        PaginationItems
    },
    props: {
        sections: {
            type: Object,
            required: true
        }
    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.pagination {
    width: 100%;
    height: calc(100vh - $header-height);
    margin: $margin-medium;
}
</style>