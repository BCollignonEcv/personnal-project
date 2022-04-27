<template>
  <section :class="classObject">
      <slot name="content"></slot>
      <slot></slot>
  </section>
</template>

<script>
export default {
    props: {
        backgroundColor: {
            type: String,
            default: 'Default'
        },
    },
    data () {
        return {
            allowedClass: {
                backgroundColor: ['Default', 'primary', 'secondary'],
            }
        }
    },
    computed: {
        classObject() {
            let customClassObject = [];
            for(const [key, value] of Object.entries(this.$props)) {
                if(value != "Default"){
                    if(this.allowedClass[key] && this.allowedClass[key].includes(value)){
                        customClassObject.push(value);
                    }
                }
            }
            return customClassObject;
        }
    },
}
</script>

<style>

</style>