<template>
  <div id="hero_section" :style="hero_bg_style">
    <div
      id="heading"
      class="z-20"
      :class="
        addTextShadow
          ? 'shadow-black [text-shadow:_5px_5px_15px_var(--tw-shadow-color)]'
          : ''
      "
      v-html="name"
    ></div>
    <div
      id="sub_heading"
      class="z-20"
      :class="
        addTextShadow
          ? 'shadow-black [text-shadow:_5px_5px_15px_var(--tw-shadow-color)]'
          : ''
      "
      v-html="desc"
    ></div>
    <button @click="scrollToContactForm" class="z-20">Learn More</button>
    <slot />
  </div>
</template>
<script setup>
import { defineProps, ref, watch } from "vue";
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
  addTextShadow: {
    type: Boolean,
    default: false,
  },
});

// const hero_bg_url = ref(new URL(props.bg, import.meta.url).href);
// console.log(hero_bg_url.value);
const hero_bg_style = ref("background-image: url('" + props.bg + "');");
const scrollToContactForm = () => {
  const contact_form = document.querySelector("#contact_form");
  if (contact_form)
    contact_form.scrollIntoView({ behavior: "smooth", block: "start" });
};
watch(
  () => props.bg,
  () => {
    // console.log("bg changed");
    // hero_bg_url.value = new URL(props.bg, import.meta.url).href;
    hero_bg_style.value = "background-image: url('" + props.bg + "');";
  },
);
</script>
<style lang="postcss" scoped>
#hero_section {
  @apply relative flex flex-col items-center justify-center;
  @apply px-4 py-20 text-center lg:h-[calc(100vh)] lg:py-40;
  @screen md {
    @apply h-[calc(100vh_-_144px)];
  }
  @apply bg-cover bg-top bg-no-repeat;
  > #heading {
    @apply mb-10 text-[46px] font-extrabold uppercase leading-[1.20] text-white;
  }
  > #sub_heading {
    @apply mb-9 font-aneklatin text-xl font-medium text-white md:max-w-[590px];
  }
  > button {
    @apply h-11 w-44 rounded-full bg-white;
    @apply font-aneklatin font-semibold text-primary;
  }
}
</style>
