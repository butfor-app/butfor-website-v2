<template>
  <div id="slider_wrapper">
    <!-- :autoplay="4000" -->
    <Carousel
      :items-to-show="2.5"
      :wrap-around="true"
      :snapAlign="'center'"
      class="w-[1200px] h-[280px]"
      v-model="currentSlide"
    >
      <slide v-for="(solution, index) in solutions" :key="index">
        <SolutionsCard
          :name="solution.name"
          :desc="solution.desc"
          :icon="solution.icon"
        />
      </slide>
    </Carousel>
    <div id="pagination">
      <template v-for="(page, index) in solutions" :key="index">
        <div
          :class="currentSlide === index ? 'active' : ''"
          @click="currentSlide = index"
        ></div>
      </template>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import SolutionsCard from "@/components/SolutionsCard.vue";

const props = defineProps({
  solutions: {
    type: Array,
    required: true,
  },
});

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
