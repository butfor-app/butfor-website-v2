<template>
  <div class="w-full bg-white rounded-2xl">
    <div id="hubspotForm"></div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
const props = defineProps({
  formId: {
    type: String,
    // required: true,
    default: "83efaaa1-4ea3-4a48-b759-c2f345c5a1e3",
  },
});
onMounted(() => {
  hbspt.forms.create({
    region: "na1",
    portalId: "39510047",
    formId: props.formId,
    target: "#hubspotForm",
  });
});
</script>
<style lang="postcss"></style>
