<template>
  <div id="event_cart">
    <img class="h-48 w-96" :src="getImage()" alt="" />
    <div id="title">{{ values.title }}</div>
    <div id="desc">{{ trimDesc(values.description) }}</div>
    <RouterLink
      :to="'/webinars/' + id"
      class="border border-primaryLight px-3 py-2 hover:bg-primaryLight hover:text-white"
    >
      Register
    </RouterLink>
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
// const generatePermaLink = (title) => {
//   return title
//     .toLowerCase()
//     .replace(/ /g, "-")
//     .replace(/[^\w-]+/g, "");
// };
</script>
<style lang="postcss" scoped>
#event_cart {
  @apply flex flex-col items-center justify-center text-center;
  > img {
    @apply max-h-72 mb-6;
  }
  > #title {
    @apply text-[24px] font-semibold mb-4;
  }
  > #desc {
    @apply text-lg text-gray-500 font-medium mb-6 font-aneklatin;
  }
}
</style>
