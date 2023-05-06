<template>
  <div id="solution_card">
    <div id="icon">
      <img :src="image" alt="" />
    </div>
    <div id="heading">{{ name }}</div>
    <div id="desc">
      {{ desc }}
    </div>
  </div>
</template>
<script setup>
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
});
const image = new URL(
  `/src/assets/icons/${props.icon}-large.svg`,
  import.meta.url
).href;
</script>
<style lang="postcss" scoped>
#solution_card {
  @apply h-[300px] w-[334px] bg-primary px-4 pt-8 pb-7 cursor-grab;
  @apply flex flex-col items-center justify-start;
  @apply rounded-2xl;
  @apply shadow-lg text-white font-aneklatin;
  @screen lg {
    @apply h-[276px] w-[354px] px-6 pt-10;
  }
  > #icon {
    @apply w-12 h-12 mb-4;
    > img {
      @apply w-full h-full;
    }
  }
  > #heading {
    @apply text-3xl font-bold mb-2;
  }
  > #desc {
    @apply text-base font-medium text-center leading-[1.2];
  }
}
</style>
