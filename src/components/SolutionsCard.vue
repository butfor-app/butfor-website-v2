<template>
  <div
    id="solution_card"
    class="h-[300px] w-[334px] cursor-grab rounded-2xl bg-primary px-4 pb-7 pt-8 font-aneklatin text-white shadow-lg lg:h-[276px] lg:w-[354px] lg:px-6"
  >
    <div class="flex flex-col items-center justify-start">
      <div class="h-12 w-12">
        <img class="h-full w-full" :src="image" alt="" />
      </div>
      <div class="mb-2 text-2xl font-bold">{{ name }}</div>
      <div class="text-center text-base font-normal leading-[1.1]">
        {{ desc }}
      </div>
    </div>
    <RouterLink
      :to="'/solutions/' + routeSlug"
      class="mx-auto mt-4 block w-fit rounded-full border border-white px-2 text-sm"
      >Learn More</RouterLink
    >
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  routeSlug: {
    type: String,
    required: true,
  },
});
const image = new URL(
  `/src/assets/icons/${props.icon}-large.svg`,
  import.meta.url,
).href;
</script>
<style lang="postcss" scoped>
#solution_card {
}
</style>
