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
  @apply h-[276px] w-[314px] bg-primary px-7 pt-10 pb-7 cursor-grab;
  @apply flex flex-col items-center justify-center gap-y-4;
  @apply rounded-2xl;
  @apply shadow-lg text-white font-aneklatin;
  @screen lg {
    @apply h-[276px] w-[414px];
  }
  > #icon {
    @apply w-12 h-12;
    > img {
      @apply w-full h-full;
    }
  }
  > #heading {
    @apply text-[32px] font-bold;
  }
  > #desc {
    @apply text-xl font-medium text-center;
  }
}
</style>
