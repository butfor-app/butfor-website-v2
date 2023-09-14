<template>
  <div class="bg-primary px-4">
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
            {{ getTime(webinar.time) }}
          </div>
          <div class="text-xl">{{ webinar.desc }}</div>
        </div>
        <div
          class="w-[40%] flex flex-col gap-y-4 bg-white rounded-lg px-4 py-8"
        >
          <div class="text-3xl text-center text-black font-semibold">
            Register Now!
          </div>
          <!-- :src="'https://placehold.co/470x280'"  -->
          <img
            class="mx-auto h-72 w-full rounded-lg"
            :src="
              webinar.image ? webinar.image.url : 'https://placehold.co/470x280'
            "
            alt=""
          />
          <HubspotFormBare :formId="webinar?.form_id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HubspotFormBare from "@/components/HubspotFormBare.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { getWebinar } from "@/composables/useHubspot";

const route = useRoute();
const webinar = ref({});

const webinar_id = route.params.webinar_id;
console.log(webinar_id);
// getWebinar(webinar_id).then((resp) => {
//   webinar.value = resp.values;
//   console.log(webinar.value);
// });

const resp = await getWebinar(webinar_id);
webinar.value = resp.values;
console.log(webinar.value);

const getTime = (time) => {
  const date = new Date(webinar.value.time);
  return date.toLocaleTimeString(
    navigator.language,
    {
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      day: "numeric",
      month: "short",
      year: "numeric",
    },
    { hour12: true }
  );
};
</script>

<style lang="scss" scoped></style>
