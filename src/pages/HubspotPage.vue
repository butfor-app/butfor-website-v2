<template>
  <ButForForm :formId="formId" :title="title" pageName="Contact / Demo" />
</template>
<script setup>
import ButForForm from "@/components/ButForForm.vue";
import { useHead } from "@vueuse/head";
useHead({ title: "ButFor - Contact" });

const props = defineProps({
  title: {
    type: String,
    default: "LET'S GO",
  },
  formId: {
    type: String,
    // required: true,
    default: "59064d76-68b4-4930-a737-1d258c0b3cce",
  },
});
</script>
