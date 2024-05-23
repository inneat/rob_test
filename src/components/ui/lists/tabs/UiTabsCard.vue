<script setup>
defineProps({
    eventId: Number,
    title: String,
    sub_title: String,
    image: String,
    index: Number
})
</script>

<template>
    <div class="itm--tabs_concert" @click="$router.push(`/event_timeline/${eventId}`)" :style="{transitionDelay: `${50 * index}ms`}">
        <div class="img--concert" :style="{backgroundImage:`url(${image})`}"></div>

        <div class="itm--title">
            <h3>{{ title }}</h3>
            <span> {{ sub_title }}</span>
            <slot></slot>
        </div>
        <div class="btn--round_concert">
            <svg class="ic--btn --otl_08" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <path d="M20,100H180m-66,66l66-66L114,34"/>
            </svg>
        </div>
    </div>
</template>

<style scoped>


</style>