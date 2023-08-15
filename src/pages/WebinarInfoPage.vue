<template>
  <div class="bg-primary">
    <div class="max-w-[1050px] mx-auto py-10 text-white">
      <div class="flex">
        <div class="w-[60%] pr-10 flex flex-col gap-y-8">
          <div class="flex items-center gap-x-2">
            <img src="@/assets/icons/webinar.svg" width="30" alt="" /> Webinar
          </div>
          <div class="text-5xl font-semibold font-aneklatin">
            {{ webinar.title }}
          </div>
          <div class="flex items-center gap-x-2">
            <img src="@/assets/icons/clock.svg" width="30" alt="" />
            {{ webinar.start_time }}
          </div>
          <div class="text-xl">{{ webinar.desc }}</div>
        </div>
        <div
          class="w-[40%] flex flex-col gap-y-4 bg-white rounded-lg px-4 py-8"
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

<style lang="scss" scoped></style>
