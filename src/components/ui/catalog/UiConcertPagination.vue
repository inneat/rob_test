<script setup>
import BtnRound from "@/components/ui/buttons/BtnRound.vue";
import IcArrow from "@/components/ui/icons/IcArrow.vue";

// DATA ===================================================
const props = defineProps({
    isActive: {
        type: Boolean,
        default: true
    },
    type: String,
    coast: Number,
    coastSale: Number
})

// METHOD =================================================

// COMPUTED ===============================================

// ONMOUNT ================================================

// WATCH ==================================================

</script>

<template>
    <div class="c--gallery_pagination">
        <BtnRound :is-active="false"><IcArrow :orientation="90"/></BtnRound>
            <form class="frm--pagination">
                <input class="inp--pagination" type="text" value="0"/>
                <BtnRound :class="'ic--btn, --in_form'"><IcArrow :orientation="-90"/></BtnRound>
                <span>из</span><span>100</span>
            </form>
        <BtnRound><IcArrow :orientation="-90"/></BtnRound>
    </div>
</template>

<style scoped>

</style>