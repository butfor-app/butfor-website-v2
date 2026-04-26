<template>
  <HeroSection
    name="ButFor works where you do"
    desc="Integrate with your existing tools to sync financial information such as profit/loss statements, production schedules, expenses & other crucial documents. Changes made in one place seamlessly appear in all."
    :bg="integrations_bg_new"
    :addTextShadow="true"
  >
    <div
      class="absolute bottom-1/2 left-1/2 right-1/2 top-1/2 z-10 h-full w-full max-w-6xl -translate-x-1/2 -translate-y-1/2 py-10"
    >
      <div class="flex h-full w-full flex-col justify-between">
        <div class="flex justify-center">
          <div class="bg_logos">
            <div>
              <img src="/integration_logos/clear-books.png" alt="Clear Books accounting software integration" />
            </div>
          </div>
        </div>
        <div class="flex justify-evenly">
          <div class="bg_logos">
            <div>
              <img src="/integration_logos/dynamics-365.png" alt="Microsoft Dynamics 365 integration" />
            </div>
          </div>
          <div class="bg_logos">
            <div>
              <img src="/integration_logos/freeagent.png" alt="FreeAgent accounting software integration" />
            </div>
          </div>
        </div>
        <div class="flex justify-between px-10">
          <div class="bg_logos">
            <div>
              <img src="/integration_logos/freshbooks.svg" alt="FreshBooks accounting software integration" />
            </div>
          </div>
          <div class="bg_logos">
            <div>
              <img src="/integration_logos/intacct.png" alt="Sage Intacct ERP integration" />
            </div>
          </div>
        </div>
        <div class="flex justify-between px-10">
          <div class="bg_logos">
            <div>
              <img src="/integration_logos/moneybird.webp" alt="Moneybird accounting software integration" />
            </div>
          </div>
          <div class="bg_logos">
            <div>
              <img src="/integration_logos/oracle-erp.svg" alt="Oracle ERP Cloud integration" />
            </div>
          </div>
        </div>
        <div class="flex justify-evenly">
          <div class="bg_logos">
            <div>
              <img src="/integration_logos/oracle-netsuite.png" alt="Oracle NetSuite ERP integration" />
            </div>
          </div>
          <div class="bg_logos">
            <div>
              <img src="/integration_logos/quickbooks.svg" alt="QuickBooks accounting software integration" />
            </div>
          </div>
        </div>
        <div class="flex justify-around">
          <div class="bg_logos">
            <div>
              <img src="/integration_logos/sap.png" alt="SAP ERP integration" />
            </div>
          </div>
          <div class="bg_logos">
            <div>
              <img src="/integration_logos/xero.svg" alt="Xero accounting software integration" />
            </div>
          </div>
          <div class="bg_logos">
            <div>
              <img src="/integration_logos/zoho.webp" alt="Zoho Books accounting software integration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </HeroSection>
  <ButForForm formId="cbba7a34-4064-44bd-8695-51e7d6d20456" pageName="Integrations" />
</template>
<script setup>
import HeroSection from "@/components/HeroSection.vue";
import ButForForm from "@/components/ButForForm.vue";
import integrations_bg_new from "@/assets/images/integrations_bg_new.png";
import { useHead } from "@vueuse/head";
useHead({ title: "ButFor - Integrations", meta: [{ name: "description", content: "ButFor integrates with your existing tools and workflows to streamline business interruption claim preparation. See all available integrations." }] });
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
