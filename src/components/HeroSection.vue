<template>
  <div id="hero_section" ref="heroSec" :style="hero_bg_style">
    <div id="heading">{{ name }}</div>
    <div id="sub_heading">
      {{ desc }}
    </div>
    <button>Learn More</button>
  </div>
</template>
<script setup>
import { defineProps, ref } from "vue";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },

  bg: {
    type: String,
    required: true,
  },
});

const heroSec = ref(null);
const hero_bg_url = new URL(props.bg, import.meta.url).href;
const hero_bg_style = "background-image: url('" + hero_bg_url + "');";
</script>
<style lang="postcss" scoped>
#hero_section {
  @apply flex flex-col items-center justify-center;
  @apply py-4 h-[calc(100vh)] text-center;
  @screen md {
    @apply h-[calc(100vh_-_144px)];
  }
  @apply bg-no-repeat	bg-cover  bg-top;
  > #heading {
    @apply mb-10 text-[46px] font-extrabold text-white;
  }
  > #sub_heading {
    @apply mb-9 max-w-[70%] text-xl font-medium font-aneklatin text-white;
  }
  > button {
    @apply w-44 h-11 bg-white rounded-full;
    @apply text-primary  font-semibold font-aneklatin;
  }
}
</style>
