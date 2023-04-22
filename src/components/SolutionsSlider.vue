<template>
  <div id="slider_wrapper">
    <!-- :autoplay="4000" -->
    <Carousel
      :items-to-show="4"
      :wrap-around="true"
      :snapAlign="'center'"
      class="w-[2000px] h-[280px]"
      v-model="currentSlide"
    >
      <slide v-for="slide in 10" :key="slide">
        <SolutionsCard />
      </slide>
    </Carousel>
    <div id="pagination">
      <template v-for="page in 10" :key="logo">
        <div
          :class="currentSlide + 1 === page ? 'active' : ''"
          @click="currentSlide = page - 1"
        ></div>
      </template>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import SolutionsCard from "@/components/SolutionsCard.vue";

const currentSlide = ref(0);
</script>
<style lang="postcss" scoped>
#slider_wrapper {
  @apply flex flex-col items-center gap-x-4;
  @apply overscroll-none;
  .carousel__track {
    /* @apply gap-x-10; */
  }
  > #pagination {
    @apply flex justify-center;
    @apply mt-4;
    > div {
      @apply w-3 h-3 mx-1;
      @apply bg-gray-400 rounded-full cursor-pointer;
    }
    > .active {
      @apply w-8 bg-primary text-white;
    }
  }
}
</style>
