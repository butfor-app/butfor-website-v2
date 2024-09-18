<template>
  <div class="w-full bg-white shadow-lg lg:w-[calc(50%-16px)]">
    <div>
      <img
        class="mx-auto h-60 max-h-60 object-contain"
        :src="getImage()"
        alt=""
      />
    </div>
    <div class="p-3 lg:p-6">
      <div class="mb-4 text-xl font-semibold lg:text-[28px]">
        {{ values.title }}
      </div>
      <div
        class="mb-6 font-aneklatin text-sm font-medium text-gray-500 lg:text-lg"
      >
        {{ trimDesc(values.description) }}
      </div>
      <RouterLink
        :to="`/article/${id}`"
        class="block w-fit rounded border border-primaryLight px-3 py-2 text-sm hover:bg-primaryLight hover:text-white lg:text-lg"
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
