<script setup>
// DATA ===================================================
const props = defineProps({
    className: {
        type: [],
        default: ['ic--btn']
    },
    orientation: Number
})

// METHOD =================================================

// COMPUTED ===============================================

// ONMOUNT ================================================

// WATCH ==================================================

</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" class="--otl_08" :class="props.className" :style="`transform: rotateZ(${props.orientation}deg)`" viewBox="0 0 200 200" role="presentation">
        <path d="M12,56l88,88L188,56" />
    </svg>
</template>

<style scoped>

</style>