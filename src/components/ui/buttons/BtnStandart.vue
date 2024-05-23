<script setup lang="ts">
defineProps<{
  isRound: boolean
}>()
</script>

<template>
  <div class="itm--nav" :class="{ '--round': isRound }">
    <slot />
  </div>
</template>

<style scoped>

</style>