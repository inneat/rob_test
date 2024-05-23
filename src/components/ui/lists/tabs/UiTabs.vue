<script setup>
import UiTabSelector from "@/components/ui/lists/tabs/UiTabSelector.vue";
import {onMounted, reactive, ref, watch} from "vue";

// DATA ===================================================
    const props = defineProps({tabsArray: Array})
    const activeTab = ref(0);

// METHOD =================================================

//ONMOUNT =================================================

// WATCH ==================================================


</script>

<template>
    <div class="s--tabs">
        <div class="lst--tabs_selectors">
            <UiTabSelector v-for="(item, index) in tabsOptions" :key="index" :text="item.tabName.toString()" :class="{ '-active-' : tabsOptions[index].isActive }" @click="activeTab.value = index" />
        </div>
        <div class="lst--tabs_content" :style="{'height': boxHeight}">
            <div class="itm--tab_content" v-for="(item, index) in tabsOptions" :key="index"
                 :class="{ '-active-' : tabsOptions[index].isActive, '-hide-' : serviceMode}"
                 :style="{ 'display': tabsOptions[index].tabDisplay }"
                 :data-tab-id="`${index}`">
                <slot :name="`${index}`"></slot>
            </div>
        </div>
    </div>
</template>



<style scoped>



</style>