<template>
    <header class="container">
        <h1 class="col-2">Baptiste Collignon</h1>
        <h2 class="col-8">{{ dataStore.getTitle }}</h2>
        <p class="col-2 alignRight">{{ todayDate }}</p>
    </header>
</template>

<script>
import { useDataStore } from '@/stores/Data.store'

export default {
    data() {
        return {
        }
    },
    setup() {
        const dataStore = useDataStore();
        return {
            dataStore
        }
    },
    computed: {
        todayDate: () => {
            let today = new Date();
            return today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        }
    },
}
</script>

<style lang="scss" scoped>
.container {
    @include container;
    justify-content: space-between;
}

header {
    height: $header-height;
    align-items: center;
    z-index: 100;

    h1,
    h2,
    p {
        margin: auto $margin-medium;
        font-size: $font-small;
        line-height: $font-small;
        font-weight: bold;
        text-transform: uppercase;
    }
}
</style>