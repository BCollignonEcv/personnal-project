<template>
    <div class="pagination_items" @mouseover="show = true" @mouseleave="show = false">
        <div class="pagination_bar">
        </div>
        <div class="pagination_titles">
            <h4 class="pagination_title">{{ title }}</h4>
            <template v-for="subtitle in subtitles" :key="subtitle.title">
                <p class="pagination_title">{{ subtitle.title }}</p>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        subtitles: Object,
    },
    data() {
        return {
            show: false,
        }
    }
}
</script>

<style lang="scss" scoped>
.pagination_items {
    @include container;
    align-items: stretch;
    margin-bottom: $margin-medium;
    cursor: pointer;

    .pagination_bar {
        width: $margin-xxsmall;
        margin-right: $margin-medium;
        border-radius: calc($margin-xxsmall /2);
        background-color: var(--c-1-100);
    }

    .pagination_titles {
        padding: $margin-xsmall 0;

        .pagination_title {
            padding: $margin-xxsmall 0;
            transition: all .2s ease-in;

            &:hover {
                padding-left: $margin-xxsmall;
                color: var(--c-2-100);
            }
        }
    }
}
</style>