<template>
    <!-- <CustomPagination :sections="templateStore.getSections" /> -->
    <Swiper :direction="'vertical'" :keyboard="true" :pagination="true" :mousewheel="{ forceToAxis: true }"
        :modules="modules">

        <template v-for="section in templateStore.getSections" :key="section.name">
            <SwiperSlide>{{ section.title }}</SwiperSlide>
            <template v-for="page in section.pages" :key="section.name + page.title">
                <SwiperSlide>{{ section.title }} - {{ page.title }}</SwiperSlide>
            </template>
        </template>
    </Swiper>
</template>

<script>
import { useTemplateStore } from '@/stores/Template.store'
import { Pagination as CustomPagination } from '@/components/custom.components/Swiper'
import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel, Keyboard, Pagination } from "swiper";


export default {
    components: {
        Swiper, SwiperSlide,
        CustomPagination
    },
    setup() {
        const templateStore = useTemplateStore();
        return {
            templateStore, modules: [Mousewheel, Keyboard, Pagination]
        }
    },
}
</script>

<style lang="scss" scoped>
.container {
    @include container;
}

.swiper {
    width: 100%;
    height: 100%;

    .swiper-slide {
        text-align: center;
        width: 100%;
        height: 100%;

        & img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>