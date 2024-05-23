<script setup>
const props = defineProps({
    isActive: {
        type: Boolean,
        default: true
    },
    type: String,
    coast: Number,
    coastSale: Number
})
// DATA ===================================================

// METHOD =================================================

// COMPUTED ===============================================

// ONMOUNT ================================================

// WATCH ==================================================

</script>

<template>
    <div class="btn--round" :class="{'--light' : props.type === 'light', '-disable-' : !props.isActive}">
        <slot/>
    </div>
</template>

<style scoped>

</style>