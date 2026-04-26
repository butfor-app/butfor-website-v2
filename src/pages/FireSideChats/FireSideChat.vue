<template>
  <template v-if="!fireSideChat_id || fireSideChat == null">
    <div
      class="flex flex-col items-center gap-4 py-20 text-center text-xl font-medium"
    >
      <div>
        FireSide Chat does not exist. <br />
        Please check the URL or try searching for it
      </div>
      <RouterLink
        to="/fireside-chats"
        class="w-full max-w-xs rounded bg-primary px-2 py-1 text-sm text-white"
      >
        Go back to FireSide Chats
      </RouterLink>
    </div>
  </template>
  <template v-else>
    <div
      class="flex w-full flex-col items-center py-10"
      v-if="Object.keys(fireSideChat).length == 0"
    >
      <!-- Loading... -->
      <Spinner />
    </div>
    <div v-else class="bg-primary px-4">
      <div class="mx-auto max-w-[1050px] py-10 text-white">
        <div class="flex flex-col gap-y-10 lg:flex-row">
          <div class="flex flex-col gap-y-8 pr-10 lg:w-[60%]">
            <div class="flex items-center gap-x-2">
              <img src="@/assets/icons/webinar.svg" width="30" alt="" />
              FireSide Chat
            </div>
            <div class="font-aneklatin text-5xl font-semibold">
              {{ fireSideChat.attributes.title }}
            </div>
            <div class="flex items-center gap-x-2">
              <img src="@/assets/icons/clock.svg" width="30" alt="" />
              {{ getTime(fireSideChat.attributes.start_time) }} -
              {{ fireSideChat.attributes.timezone }}
            </div>
            <div class="text-xl">{{ fireSideChat.attributes.description }}</div>
          </div>
          <div
            class="flex flex-col gap-y-4 rounded-lg bg-white px-4 py-8 lg:w-[40%]"
          >
            <div class="text-center text-3xl font-semibold text-black">
              Register Now!
            </div>
            <img
              class="mx-auto h-72 w-full rounded-lg object-contain"
              :src="getImage()"
              alt=""
            />
            <ContentRegistrationForm
              v-if="fireSideChat.attributes.hubspot_form_id"
              :formId="fireSideChat.attributes.hubspot_form_id"
              :pageName="'Fireside Chat - ' + fireSideChat.attributes.title"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup>
import ContentRegistrationForm from "@/components/ContentRegistrationForm.vue";
import Spinner from "@/components/General/Spinner.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import useStrapi from "@/composables/useStrapi";
import { useHead } from "@vueuse/head";

const route = useRoute();
const fireSideChat = ref({});

const { getFireSideChat, getImageUrl } = useStrapi();

const fireSideChat_id = route.params.fireSideChat_id;
// console.log(fireSideChat_id);

getFireSideChat(fireSideChat_id).then((resp) => {
  if (resp.attributes.meta_tags.title) {
    useHead({
      title: resp.attributes.meta_tags.title,
    });
  }
  if (resp.attributes.meta_tags.description) {
    useHead({
      meta: [
        {
          name: "description",
          content: resp.attributes.meta_tags.description,
        },
      ],
    });
  }
  fireSideChat.value = resp;
});
const getImage = () => {
  if (fireSideChat.value.attributes.thumbnail.data) {
    return getImageUrl(
      fireSideChat.value.attributes.thumbnail.data.attributes.url,
    );
  }
  return new URL("@/assets/images/event_1.png", import.meta.url).href;
};
const getTime = (time) => {
  const date = new Date(time);
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
    { hour12: true },
  );
};
</script>

<style lang="scss" scoped></style>
