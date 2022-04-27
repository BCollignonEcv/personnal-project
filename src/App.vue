<script>
import { RouterView } from 'vue-router'
import { useDataStore } from '@/stores/Data.store'
import { Header, Footer} from '@/components/global.components'

export default {
    name: 'App',
    components: {
      RouterView, Header, Footer
    },
    props: {},
    data(){
      return {}
    },
    setup() {
      const dataStore = useDataStore();
      return { dataStore }
    },
    methods: {}
}
</script>

<template>
    <!-- <Header></Header> -->
    <main>
      <RouterView />
    </main>
    <Footer></Footer>
</template>

<style lang="scss">
@import '@/styles/reset.scss';
@import '@/styles/main.scss';

</style>
