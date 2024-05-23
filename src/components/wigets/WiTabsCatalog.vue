<script setup>

import {apiGetAllEvents} from "@/components/api/api_request.js";

// Ниже представлен Виджет с Табами UiTabs
//
// Что нужно:
//
// 1) получаем с бека данные. Функция apiGetAllEvents()  import {apiGetAllEvents} from "@/components/api/api_request.js";\
// в ответ придет вот такой массив со списком мероприятий:
//     [
//         {
//             "date": "2021-11-22T01:25:36+03:00",
//             "title": "pellentesque",
//             "sub_title": "Осень 2021",
//             "image_url": "http://theatlantic.com/aliquam/lacus/morbi/quis/tortor/id.xml?dapibus=duis&nulla=bibendum&suscipit=felis&ligula=sed",
//             "event_id": 1
//         },
//         {
//             "date": "2023-11-13T18:29:38+03:00",
//             "title": "porta",
//             "sub_title": "Осень 2023",
//             "image_url": "http://harvard.edu/nibh/quisque/id/justo.jpg?ut=vestibulum&tellus=ante&nulla=ipsum&ut=primis&erat=in&id=faucibus&mauris=orci&vulputate=luctus&elementum=et&nullam=ultrices&varius=posuere&nulla=cubilia&",
//             "event_id": 2
//         },
//
//         ... И далее аналогичные объекты ...
//     ]
//
// 2) обрабатываем данные и формируем из них табы. В отдельном Табе Группируются все мерпоприятия по одному году, В заголовке каждого таба, наименование года. Внутри таба отображаются карточки с мероприятиями <UiTabsCard/>
//
// 3) Добавить 2 анимации:
//     -- При замене активного таба (изменение его высоты относительно контента)
//     -- При появлении карточек меропрития.
//
// 4) доп. Вызов функции в родителе, изнутри дочернего компонента

import {ref} from "vue";
import UiTabs from "@/components/ui/lists/tabs/UiTabs.vue";
import UiTabsCard from "@/components/ui/lists/tabs/UiTabsCard.vue";
import UiPreloader from "@/components/ui/static_content/UiPreloader.vue";


// DATA ===================================================

const isLoading = ref(true)

// METHOD =================================================

// ONMOUNT ================================================


</script>

<template>
        <UiPreloader v-if="!isLoading"/>
        <UiTabs v-else :tabs-array="tabsTitle" >
            <template v-for="(item, index) in tabsContent" :key="index" v-slot:[index]>
                <UiTabsCard v-for="(concert, index) in item.events" :key="index"
                            :eventId="concert.event_id"
                            :index="index"
                            :title="concert.title"
                            :sub_title="concert.sub_title"
                            :data-value="concert.event_id"
                            :image="concert.image_url" />
            </template>
        </UiTabs>
</template>

<style scoped>

</style>