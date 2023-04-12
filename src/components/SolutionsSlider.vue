<template>
  <div id="slider_wrapper">
    <SolutionsCard />
    <SolutionsCard />
    <SolutionsCard />
    <SolutionsCard />
  </div>
</template>
<script setup>
import SolutionsCard from "@/components/SolutionsCard.vue";
</script>
<style lang="postcss" scoped>
#slider_wrapper {
  @apply flex gap-x-4;
  @apply overscroll-none;
}
</style>
