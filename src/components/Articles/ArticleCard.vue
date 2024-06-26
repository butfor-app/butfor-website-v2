<template>
  <div class="w-[calc(50%-16px)] bg-white shadow-lg">
    <div>
      <img class="max-h-60 h-60 mx-auto" :src="getImage()" alt="" />
    </div>
    <div class="p-6">
      <div class="text-[28px] font-semibold mb-4">{{ values.title }}</div>
      <div class="text-lg text-gray-500 font-medium mb-6 font-aneklatin;">
        {{ trimDesc(values.description) }}
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
import useStrapi from "@/composables/useStrapi";
const { getImageUrl } = useStrapi();

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  values: {
    type: Object,
    required: true,
  },
  thumbnail: {
    default: new URL("@/assets/images/event_1.png", import.meta.url).href,
  },
});
const trimDesc = (desc) => {
  return desc.length > 40 ? desc.slice(0, 40) + "..." : desc;
};
const getImage = () => {
  if (props.values.thumbnail.data) {
    return getImageUrl(props.values.thumbnail.data.attributes.url);
  }
  return new URL("@/assets/images/event_1.png", import.meta.url).href;
};
</script>
<style lang="postcss" scoped></style>
