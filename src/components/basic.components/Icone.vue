<template>
    <img :src="`../src/assets/icones/${name}.svg`" :style="sizeStyle" :class="colorClass" class="icone" alt=""
        srcset="">
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: 'Default'
        },
        size: {
            type: Number,
            default: 24
        },
    },
    computed: {
        sizeStyle() {
            return `height: ${this.size}px; width: ${this.size}px;`;
        },
        colorClass() {
            if (this.color != "Default") {
                return [this.color]
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.icone {
    display: inline-block;
    vertical-align: middle;
    margin-right: $margin-xsmall;

    &.primary svg{
        fill: $color-primary;
    }

    &.secondary svg{
        fill: $color-secondary;
    }

    &.error svg{
        fill: $color-error;
    }

    &.success svg path{
        fill: $color-success;
    }

    &.neutral svg{
        fill: $color-neutral;
    }

    &.white svg{
        fill: $color-white;
    }
}
</style>