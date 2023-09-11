<template>
  <div class="relative">
    <div class="absolute top-0 -z-10 bg-primary w-full h-1/2"></div>
    <div class="max-w-[1050px] mx-auto py-18 text-white">
      <div class="flex">
        <div class="w-[60%] pr-10 flex flex-col gap-y-8">
          <div class="flex items-center gap-x-2">
            <img src="@/assets/icons/webinar.svg" width="30" alt="" /> Claims
            101
          </div>
          <div class="text-5xl font-semibold font-aneklatin">Claims 101</div>
          <div class="text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloremque, eaque rerum voluptate tenetur blanditiis, consectetur ab
            illo debitis similique illum perferendis qui nisi pariatur laborum
            commodi alias esse perspiciatis tempore.
          </div>
          <div class="box">
            <div class="text-2xl font-bold mb-4">Lesson Content</div>
            <div class="text-sm">
              We’ll be covering content like compensation philosophy and the
              inputs/considerations you should include, job titles, range
              creation & maintenance, best practices, offer & comp cycle
              approaches, strategy for equity as a part of total compensation,
              pay parity & compliance, and more!
            </div>
          </div>
        </div>
        <div
          class="w-[40%] flex flex-col gap-y-4 bg-white rounded-lg px-4 py-8 shadow-lg"
        >
          <div class="text-3xl text-center text-black font-semibold">
            Register Now!
          </div>
          <img src="https://placehold.co/470x280" alt="" />
          <HubspotFormBare />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import WebinarIcon from "@/components/icons/webinar.vue";
import HubspotFormBare from "@/components/HubspotFormBare.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useGeneralData } from "@/stores/useGeneralData";
const { webinars } = useGeneralData();

const route = useRoute();
const webinar_id = ref(route.params.webinar_id);
console.log("Slug: ", webinar_id.value);
console.log("Webinars: ", webinars);
const webinar = webinars.find((w) => w.slug == webinar_id.value);
console.log(webinar);
</script>

<style lang="postcss" scoped>
.box {
  @apply py-6 px-8;
  @apply text-black;
  @apply rounded-lg bg-white shadow-lg;
}
</style>
