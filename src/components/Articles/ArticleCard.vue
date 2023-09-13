<template>
  <RouterLink :to="link" class="w-[calc(50%-16px)]">
    <img class="max-h-60 mx-auto mb-6" :src="image" alt="" />
    <div class="px-4 shadow-2xl pb-6">
      <div class="text-[28px] font-semibold mb-4">{{ name }}</div>
      <div class="text-lg text-gray-500 font-medium mb-6 font-aneklatin;">
        {{ desc }}
      </div>
      <!-- :href="link" -->
      <button
        class="border border-primaryLight px-3 py-2 rounded hover:bg-primaryLight hover:text-white"
      >
        Watch Now
      </button>
    </div>
  </RouterLink>
</template>
<script setup>
const props = defineProps({
  image: {
    type: String,
    default: new URL("@/assets/images/event_1.png", import.meta.url).href,
  },
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: "/articles",
  },
});
</script>
<style lang="postcss" scoped></style>
