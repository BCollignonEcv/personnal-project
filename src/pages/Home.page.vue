<template>
    <Swiper 
    :direction="'vertical'"
    :keyboard="true"
    :pagination="true"
    :mousewheel="{forceToAxis: true}"
    :modules="modules">
        <template v-for="date in dataStore.getTimeline" :key="date.name">
            <SwiperSlide>{{ date.name }}</SwiperSlide>
        </template>
    </Swiper>
</template>

<script>
import { useDataStore } from '@/stores/Data.store'

import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel, Keyboard, Pagination } from "swiper";


export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const dataStore = useDataStore();
        return {
            dataStore, modules: [Mousewheel, Keyboard, Pagination] 
        }
    },
}
</script>

<style>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    width: 100%;
    height: 100%;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>