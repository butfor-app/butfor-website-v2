<template>
  <div class="flex flex-col gap-4">
    <div v-if="!viewAll" id="slider_wrapper">
      <!-- :autoplay="4000" -->
      <Carousel
        :items-to-show="3"
        :wrap-around="true"
        :snapAlign="'center'"
        class="h-[300px] w-[1200px]"
        v-model="currentSlide"
      >
        <slide v-for="(solution, index) in solutions" :key="index">
          <SolutionsCard
            :name="solution.name"
            :desc="solution.desc"
            :icon="solution.icon"
            :routeSlug="solution.routeName"
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
    <div class="max-w-[1200px]" v-else>
      <div class="flex flex-wrap justify-center gap-10">
        <SolutionsCard
          v-for="(solution, index) in solutions"
          :key="index"
          :name="solution.name"
          :desc="solution.desc"
          :icon="solution.icon"
          :routeSlug="solution.routeName"
        />
      </div>
    </div>
    <button v-if="!viewAll" @click="viewAll = true" class="view_all_button">
      View All
    </button>
    <button v-if="viewAll" @click="viewAll = false" class="view_all_button">
      Hide
    </button>
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
console.log(props.solutions);
const currentSlide = ref(0);
const viewAll = ref(false);
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
      @apply mx-1 h-3 w-3;
      @apply cursor-pointer rounded-full bg-gray-400;
    }
    > .active {
      @apply w-8 bg-primary text-white;
    }
  }
}
.view_all_button {
  @apply h-11 w-[168px] rounded-full border border-primary text-base font-medium text-primary;
  @apply mx-auto mt-9 cursor-pointer;
}
</style>
