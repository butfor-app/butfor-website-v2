<template>
  <HeroSection
    name="butfor works where you do"
    desc="Integrate with your existing tools to sync compensation information and workflows. Changes made in one place seamlessly appear in all."
    :bg="integrations_bg_new"
  >
    <div
      class="absolute bottom-1/2 left-1/2 right-1/2 top-1/2 z-10 h-full w-full max-w-6xl -translate-x-1/2 -translate-y-1/2 py-10"
    >
      <div class="flex h-full w-full flex-col justify-between">
        <div class="flex justify-center">
          <div class="bg_logos">
            <div>
              <img src="/integration_logos/clear-books.png" alt="" />
            </div>
          </div>
        </div>
        <div class="flex justify-evenly">
          <div class="bg_logos">
            <div>
              <img src="/integration_logos/dynamics-365.png" alt="" />
            </div>
          </div>
          <div class="bg_logos">
            <div>
              <img src="/integration_logos/freeagent.png" alt="" />
            </div>
          </div>
        </div>
        <div class="flex justify-between px-10">
          <div class="bg_logos">
            <div>
              <img src="/integration_logos/freshbooks.svg" alt="" />
            </div>
          </div>
          <div class="bg_logos">
            <div>
              <img src="/integration_logos/intacct.png" alt="" />
            </div>
          </div>
        </div>
        <div class="flex justify-between px-10">
          <div class="bg_logos">
            <div>
              <img src="/integration_logos/moneybird.webp" alt="" />
            </div>
          </div>
          <div class="bg_logos">
            <div>
              <img src="/integration_logos/oracle-erp.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="flex justify-evenly">
          <div class="bg_logos">
            <div>
              <img src="/integration_logos/oracle-netsuite.png" alt="" />
            </div>
          </div>
          <div class="bg_logos">
            <div>
              <img src="/integration_logos/quickbooks.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="flex justify-around">
          <div class="bg_logos">
            <div>
              <img src="/integration_logos/sap.png" alt="" />
            </div>
          </div>
          <div class="bg_logos">
            <div>
              <img src="/integration_logos/xero.svg" alt="" />
            </div>
          </div>
          <div class="bg_logos">
            <div>
              <img src="/integration_logos/zoho.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </HeroSection>
  <ContactForm />
</template>
<script setup>
import HeroSection from "@/components/HeroSection.vue";
import ContactForm from "@/components/ContactForm.vue";
import integrations_bg from "@/assets/images/integrations_bg.png";
import integrations_bg_new from "@/assets/images/integrations_bg_new.png";
</script>
<style lang="postcss" scoped>
.bg_logos {
  @apply rounded-full bg-white p-2;
  > div {
    @apply h-8 w-8 lg:h-14 lg:w-14;
    > img {
      @apply h-full w-full object-contain;
    }
  }
}
</style>
