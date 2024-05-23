<script setup>

// DATA ===================================================
    const props = defineProps({
        title: String,
        subTitle: String,
        backBtn: Boolean
})
// METHOD =================================================

// COMPUTED ===============================================

// ONMOUNT ================================================

// WATCH ==================================================

</script>

<template>
    <div class="s--page_title">
        <div v-if="props.backBtn"  class="t--link">назад</div>
        <h1 v-if="props.title" class="t--main_title">{{ props.title }}</h1>
        <h2 v-if="props.subTitle" class="t--subtitle"> {{ props.subTitle }}</h2>
    </div>
</template>

<style scoped>

</style>