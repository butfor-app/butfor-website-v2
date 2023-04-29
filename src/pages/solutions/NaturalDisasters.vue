<template>
    <div id="hero_section">
      <div id="bg_gradient"></div>
      <div id="heading">Get to know the ButFor platform</div>
      <div id="sub_heading">
        Preparing a business interruption claim has never been easier.
      </div>
      <button>Learn More</button>
    </div>
  </template>
  <script setup>
  import { useHead } from "@vueuse/head";
  useHead({
    title: "Butfor - Solutions",
    meta: [
      {
        name: "description",
        content:
          "Butfor is a tool that automates business interruption insurance claims. Calculate your losses & build comprehensive reports in a fraction of the time.",
      },
    ],
  });
  </script>
  <style lang="postcss" scoped>
  #hero_section {
    @apply flex flex-col items-center justify-center;
    @apply py-4 h-[calc(100vh)] text-center;
    @screen md {
      @apply h-[calc(100vh_-_171px)];
    }
    @apply bg-[url('@/assets/images/productpage_hero.png')] bg-no-repeat	bg-cover  bg-top;
    > #heading {
      @apply mb-10 text-[46px] font-extrabold text-white;
    }
    > #sub_heading {
      @apply mb-9 text-xl font-medium font-aneklatin text-white;
    }
    > button {
      @apply w-44 h-11 bg-white rounded-full;
      @apply text-primary  font-semibold font-aneklatin;
    }
  }
  </style>
  