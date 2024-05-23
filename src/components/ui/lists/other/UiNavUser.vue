<script setup>
// DATA ===================================================
import {ref} from "vue";

const isOpen = ref(false)

// METHOD =================================================
function openMenu() {
    isOpen.value = !isOpen.value
}
// COMPUTED ===============================================

// ONMOUNT ================================================

// WATCH ==================================================

</script>

<template>
    <div class="c--user_nav">
        <div class="btn--round --nav" @click="openMenu()">
            <svg class="ic--btn --otl_08" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <circle cx="100" cy="62.5" r="43.832"/>
                <path d="M175,181.332c0-41.421-33.579-75-75-75S25,139.911,25,181.332"/>
            </svg>
        </div>
        <div class="lst--user_nav" :class="{'-open-' : isOpen}">
            <div class="itm--user_nav">Мой профиль</div>
            <div class="itm--user_nav">Выйти</div>
        </div>
    </div>
</template>

<style scoped>

</style>