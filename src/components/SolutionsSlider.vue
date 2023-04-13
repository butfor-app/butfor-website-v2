<template>
  <div id="slider_wrapper">
    <!-- <SolutionsCard />
    <SolutionsCard />
    <SolutionsCard />
    <SolutionsCard /> -->
    <Carousel
      :items-to-show="4"
      :autoplay="2000"
      :wrap-around="true"
      class="w-[2000px] h-[280px]"
    >
      <slide v-for="logo in 10" :key="logo">
        <!-- {{ logo }} -->
        <SolutionsCard />
      </slide>
    </Carousel>
  </div>
</template>
<script setup>
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import SolutionsCard from "@/components/SolutionsCard.vue";
</script>

<style lang="postcss" scoped>
#slider_wrapper {
  @apply flex gap-x-4;
  @apply overscroll-none;
}
</style>
