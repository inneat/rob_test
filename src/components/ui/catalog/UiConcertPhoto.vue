<script setup>
// DATA ===================================================
import IcBase from "@/components/ui/icons/IcBase.vue";
import IcSale from "@/components/ui/icons/IcSale.vue";
import IcCart from "@/components/ui/icons/IcCart.vue";

const props = defineProps({
    id: Number,
    isVertical: Boolean,
    coast: Number,
    coastSale: Number
})


// METHOD =================================================

// COMPUTED ===============================================

// ONMOUNT ================================================

// WATCH ==================================================

</script>

<template>
    <div class="itm--grid_gallery" :class="{ '--x2': props.isVertical }">
        <div class="btn--photo_coast" v-if="!props.coastSale">
            <div class="t--photo_coast">{{props.coast}} ₽</div>
            <IcBase :class="['ic--coast']"/>
        </div>
        <div class="btn--photo_coast --sale" v-if="props.coastSale">
            <div class="t--photo_coast">{{props.coastSale}} ₽</div>
            <IcSale :class="['ic--coast']" />
        </div>
    </div>
</template>

<style scoped>

</style>