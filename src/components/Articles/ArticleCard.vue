<template>
  <div class="w-[calc(50%-16px)] bg-white shadow-lg">
    <div>
      <img class="max-h-60 h-60 mx-auto" :src="getImage()" alt="" />
    </div>
    <div class="p-6">
      <div class="text-[28px] font-semibold mb-4">{{ values.title }}</div>
      <div class="text-lg text-gray-500 font-medium mb-6 font-aneklatin;">
        {{ values.body }}
      </div>
      <RouterLink
        :to="`/article/${id}`"
        class="w-fit block border border-primaryLight px-3 py-2 rounded hover:bg-primaryLight hover:text-white"
      >
        Read Now
      </RouterLink>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  values: {
    type: Object,
    required: true,
  },
});
// console.log(props);
const getImage = () => {
  if (props.values.image) {
    return props.values.image.url;
  }
  return new URL("@/assets/images/event_1.png", import.meta.url).href;
};
</script>
<style lang="postcss" scoped></style>
