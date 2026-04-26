<template>
  <HeroSection :bg="HeroBG" />

  <section class="mx-auto max-w-7xl px-4 py-10 text-[#8F8F8F]">
    <div>
      <h2 class="uppercase">
        claim preparation <br />
        with a simple subscription
      </h2>
      <div class="flex flex-col lg:flex-row">
        <div class="flex h-fit w-full flex-col gap-4 lg:w-1/2">
          <div>
            For a small monthly subscription, your business interruption claim
            is fully prepared in the event of a loss. Think of it as a fee that
            covers our fees.
          </div>
          <div>
            If your business interruption insurance doesn’t cover claim
            preparation, or if your current prep coverage is under $100k, you
            will be responsible for paying a significant amount to have it
            compiled. Our software allows for us to charge significantly less
            while providing error-free and speedy claim preparation.
          </div>
          <div>
            Not familiar with your exact coverage? No problem! Upload your
            commercial liability policy by clicking below and our tool
            automatically emails you an overview of your business interruption
            coverage & any suggestions our claims robot has. If you want more
            information about how policies are typically structured,
            <RouterLink to="/webinars" class="!inline !border-0 !p-0">
              click here
            </RouterLink>
            to watch our webinar.
          </div>
          <RouterLink
            to="/policy-analyzer"
            class="mx-auto !bg-primary !text-white"
          >
            Policy Analyzer</RouterLink
          >
        </div>
        <div class="mx-auto w-1/2 lg:h-[400px] lg:-translate-y-1/4">
          <img
            class="h-full w-full object-contain"
            :src="subscription_1"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-4 py-10 text-[#8F8F8F]">
    <div>
      <div class="flex flex-col lg:flex-row">
        <div class="mx-auto w-1/2 lg:h-[400px]">
          <img
            class="h-full w-full object-contain"
            :src="subscription_2"
            alt=""
          />
        </div>
        <div class="flex h-fit w-full flex-col gap-4 lg:w-1/2">
          <h2 class="uppercase">WHY a subscription?</h2>
          <div>
            Traditional claim preparation services often involve reactive
            measures, engaged only after a loss event. ButFor Claim Prep offers
            a proactive approach through a subscription model.
          </div>
          <ul class="flex list-disc flex-col gap-3 pl-6">
            <li>
              <span class="font-semibold"> Predictable Budgeting: </span>
              Consistent monthly payments for ongoing protection.
            </li>
            <li>
              <span class="font-semibold"> Immediate Access to Support: </span>
              Round-the-clock assistance in case of an unexpected event.
            </li>
            <li>
              <span class="font-semibold"> Peace of Mind: </span>

              Knowing you're prepared for any potential business interruption.
            </li>
            <li>
              <span class="font-semibold"> Cost Savings: </span>
              Subscription prep coverage costs the average business 1% of what
              they would pay without it.
            </li>
          </ul>
          <div class="flex justify-between">
            <RouterLink to="/pricing" class="mx-auto">
              Subscription Pricing
            </RouterLink>
            <button @click="scrollToContactForm" class="mx-auto">
              I Have Questions
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-4 py-10 text-[#8F8F8F]">
    <div>
      <h2 class="uppercase">How our subscription differs</h2>
      <div class="flex flex-col lg:flex-row">
        <div class="flex h-fit w-full flex-col gap-4 lg:w-1/2">
          <div>
            By choosing ButFor Claim Prep, businesses gain a strategic advantage
            in mitigating the financial impact of disruptions. Our subscription
            model ensures they are always prepared, protected, and supported.
          </div>
          <ul class="flex list-disc flex-col gap-3 pl-6">
            <li>
              Prevention Focus: Unlike one-time claim preparation services, we
              emphasize proactive risk management
            </li>
            <li>
              Expert Team: Our subscribers have access to a dedicated team of
              experts for ongoing support and guidance.
            </li>
            <li>
              Data-Driven Insights: We provide valuable data to optimize claim
              preparation and potential recovery.
            </li>
            <li>
              Scalability: Our subscription model accommodates businesses of all
              sizes, offering a variety of plans.
            </li>
          </ul>

          <RouterLink
            to="/cost-saving-estimator"
            class="mx-auto !bg-primary !text-white"
          >
            Cost Savings Estimator</RouterLink
          >
        </div>
        <div class="mx-auto w-1/2 lg:h-[400px]">
          <img
            class="h-full w-full object-contain"
            :src="subscription_3"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  <section class="mx-auto max-w-7xl">
    <GetStarted />
  </section>
  <section class="mx-auto max-w-7xl py-10">
    <h2 class="py-4 !text-center">See what else Butfor can do</h2>
    <SolutionsSlider
      class="mb-10 overflow-x-hidden"
      :solutions="solution_cards_data"
    />
  </section>
  <ButForForm formId="8af69b0c-9b23-45c8-8608-a178a1ad3c99" pageName="Subscription" />
</template>
<script setup>
import { ref } from "vue";
import HeroBG from "@/assets/images/subscription-hero.png";
import subscription_1 from "@/assets/images/subscription_1.png";
import subscription_2 from "@/assets/images/subscription_2.png";
import subscription_3 from "@/assets/images/subscription_3.png";
import HeroSection from "@/components/HeroSection.vue";
import GetStarted from "@/components/GetStarted.vue";
import SolutionsSlider from "@/components/SolutionsSlider.vue";
import { useGeneralData } from "@/stores/useGeneralData";
import ButForForm from "@/components/ButForForm.vue";
import { RouterLink } from "vue-router";

const generalData = useGeneralData();

const solution_cards_data = ref({});
solution_cards_data.value = generalData.solutionsByClaimType;
const scrollToContactForm = () => {
  const contact_form = document.querySelector("#contact_form");
  if (contact_form)
    contact_form.scrollIntoView({ behavior: "smooth", block: "start" });
};
</script>
<style scoped>
h2 {
  @apply mb-6 text-center text-[35px] font-bold uppercase leading-[1] text-black lg:text-left;
}
a,
button {
  @apply block w-fit px-4 py-3 font-semibold text-primary;
  @apply rounded-2xl font-medium;
  @apply outline-none;
  @apply border border-[#D9D9D9] focus-within:outline focus-within:outline-[#D9D9D9];
}
</style>
