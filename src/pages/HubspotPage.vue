<template>
  <HubspotForm :formId="formId" :title="title" />
</template>
<script setup>
import HubspotForm from "@/components/HubspotForm.vue";

const props = defineProps({
  title: {
    type: String,
    default: "LET'S GO",
  },
  formId: {
    type: String,
    // required: true,
    default: "39244068-6c38-421b-941e-7122db2e3f22",
  },
});
</script>
