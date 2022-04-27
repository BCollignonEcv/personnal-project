<template>
    <header>
        <template v-for="date in dataStore.getTimeline" :key="date.name">
            <div v-if="!date.noPagination" class="pagination">
                <h4 class="link link_title">{{ date.name }}</h4>
                <template v-for="page in date.pages" :key="page">
                    <p class="link link_item">
                        {{ page.title }}
                    </p>
                    <!-- <a class="link link_item">____</a> -->
                </template>
            </div>
        </template>
    </header>
</template>

<script>
import { useDataStore } from '@/stores/Data.store'

export default {
    setup() {
        const dataStore = useDataStore();
        return { dataStore }
    },
}
</script>

<style lang="scss" scoped>
header {
    pointer-events: none;
}

h4,
p {
    pointer-events: all;
}

.pagination {
    .link {
        &:hover {
            color: blue;
            cursor: pointer;
            padding-left: 10px;
        }

        &.link_title {
            padding: 20px 0;
        }

        &.link_item {
            width: 30px;
            padding: 20px;
            display: block;

            &:hover {
                color: blue;
            }
        }
    }
}
</style>