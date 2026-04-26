<template>
  <template v-if="!whitePaperId || whitePaper == null">
    <div
      class="flex flex-col items-center gap-4 py-20 text-center text-xl font-medium"
    >
      <div>
        White paper does not exist. <br />
        Please check the URL or try searching for the white paper
      </div>
      <RouterLink
        to="/white-papers"
        class="w-full max-w-xs rounded bg-primary px-2 py-1 text-sm text-white"
        >Go back to White Papers</RouterLink
      >
    </div>
  </template>
  <template v-else>
    <div
      class="flex w-full flex-col items-center py-10"
      v-if="Object.keys(whitePaper).length == 0"
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
              White Paper
            </div>
            <div class="font-aneklatin text-5xl font-semibold">
              {{ whitePaper.attributes.title }}
            </div>
            <!-- <div class="flex items-center gap-x-2"> -->
            <!-- <img src="@/assets/icons/clock.svg" width="30" alt="" /> -->
            <!-- {{ getTime(whitePaper.attributes.start_time) }} - -->
            <!-- {{ whitePaper.attributes.timezone }} -->
            <!-- </div> -->
            <div class="text-xl" v-html="whitePaper.attributes.body"></div>
          </div>
          <div
            class="flex flex-col gap-y-4 rounded-lg bg-white px-4 py-8 lg:w-[40%]"
          >
            <div class="text-center text-3xl font-semibold text-black">
              Fill Out to Receive the White Paper
            </div>
            <img
              class="mx-auto h-72 w-full rounded-lg object-contain"
              :src="
                getImageUrl(whitePaper.attributes.thumbnail.data.attributes.url)
              "
              alt=""
            />
            <ContentRegistrationForm
              :formId="whitePaper.attributes.hubspot_form_id || '32e9d6a5-21fe-49b1-af99-0b06119c032d'"
              :pageName="'White Paper - ' + whitePaper.attributes.title"
              buttonText="Download Whitepaper"
              downloadUrl="https://butfor.co/strapi/uploads/White_Papers_How_to_File_a_Business_Interruption_Claim_red_be0d4db01e.pdf"
              sendDocumentUrl="https://butfor.co/strapi/api/white-paper/send-document"
              redirectTo="/thankyou?type=whitepaper"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useHead } from "@vueuse/head";
import ContentRegistrationForm from "@/components/ContentRegistrationForm.vue";
import Spinner from "@/components/General/Spinner.vue";
import useStrapi from "@/composables/useStrapi";

const route = useRoute();
const whitePaperId = route.params.whitePaperId;

const { getWhitePaper, getImageUrl } = useStrapi();

const whitePaper = ref({});

getWhitePaper(whitePaperId).then((resp) => {
  // console.log(resp);
  if (resp.attributes.meta_tags?.title) {
    useHead({
      title: resp.attributes.meta_tags.title,
    });
  }
  if (resp.attributes.meta_tags?.description) {
    useHead({
      meta: [
        {
          name: "description",
          content: resp.attributes.meta_tags.description,
        },
      ],
    });
  }
  whitePaper.value = resp;
});
</script>
