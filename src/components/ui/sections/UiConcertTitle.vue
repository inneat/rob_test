<script setup >
// DATA ===================================================
    const props = defineProps({
        title: String,
        time: String,
        groups: Array
    })

// METHOD =================================================

// COMPUTED ===============================================

// ONMOUNT ================================================

// WATCH ==================================================

</script>

<template>
    <div class="s--page_title">
        <div class="t--link">назад</div>
        <div class="c--flex_gor">
            <h1 v-if="props.title" class="t--main_title --short">{{ props.title }}</h1>
            <div class="c--event_time --title">{{ props.time }}</div>
        </div>
    </div>
    <ul class="lst--text --title">
        <li class="itm--text" v-for="(group, index) in props.groups" :key="index">{{ group }}</li>
    </ul>

</template>

<style scoped>

</style>