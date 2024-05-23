<script setup>
import UiConcertPhoto from "@/components/ui/catalog/UiConcertPhoto.vue";

const concertRowData = [
    {
        photoId: 1,
        previewURL: '...domain/assets/img.jpg',
        isVertical: false,
        photoCoast: 300,
        photoSaleCoast: 199,
    },
    {
        photoId: 2,
        previewURL: '...domain/assets/img.jpg',
        isVertical: true,
        photoCoast: 300,
        photoSaleCoast: 199,
    },
    {
        photoId: 3,
        previewURL: '...domain/assets/img.jpg',
        isVertical: false,
        photoCoast: 300,
        photoSaleCoast: null
    },
    {
        photoId: 4,
        previewURL: '...domain/assets/img.jpg',
        isVertical: true,
        photoCoast: 300,
        photoSaleCoast: null
    },

]

// DATA ===================================================

// METHOD =================================================

// COMPUTED ===============================================

// ONMOUNT ================================================

// WATCH ==================================================

</script>

<template>
    <div class="s--concert">
        <div class="c--grid_gallery">
            <UiConcertPhoto v-for="(photo, index) in concertRowData"
                            :key="index" :id="photo.photoId"
                            :isVertical="photo.isVertical"
                            :coast="photo.photoCoast"
                            :coastSale="photo.photoSaleCoast"/>
        </div>
    </div>
</template>

<style scoped>

</style>