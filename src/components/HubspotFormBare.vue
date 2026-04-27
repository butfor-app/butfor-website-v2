<template>
  <div class="w-full rounded-2xl">
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
  const vidMatch = document.cookie.match(/(?:^|; )bf_vid=([^;]*)/);
  const visitorId = vidMatch ? decodeURIComponent(vidMatch[1]) : '';
  hbspt.forms.create({
    region: "na2",
    portalId: "245822077",
    formId: props.formId,
    target: "#hubspotForm",
    hiddenFieldValues: { visitor_id: visitorId },
  });
});
</script>
<style lang="postcss"></style>
