<template>
  <section class="mx-auto max-w-5xl px-4 pb-10 font-aneklatin text-[#8F8F8F]">
    <div class="flex flex-col gap-4 lg:flex-row">
      <div class="w-full lg:w-1/2">
        <h1 class="text-center font-extrabold uppercase">
          <span class="text-[35px] leading-[1]"> subscription </span>
          <br />
          <span class="text-[35px] leading-[1] text-black"> cost savings</span>
          <br />
          <span class="text-[46px] leading-[1]"> estimator </span>
        </h1>
        <form @submit.prevent="" class="flex flex-col gap-4 px-2 py-10">
          <input type="text" name="fullname" placeholder="Full Name" />
          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="phone" placeholder="Phone (Optional)" />
          <input
            type="text"
            name="compnayname"
            placeholder="Company Location (City, State)"
          />
          <input
            type="text"
            name="compnaywebsite"
            placeholder="Do you have Business Interruption Coverage?"
          />
          <input type="text" name="compnaywebsite" placeholder="Company Size" />
          <input type="text" name="compnaywebsite" placeholder="Company Type" />
          <input
            type="text"
            name="compnaywebsite"
            placeholder="Annual Revenue (Optional)"
          />

          <button
            type="submit"
            class="!w-fit bg-[#124559] !px-10 text-white"
            placeholder="Estimate Savings"
          >
            Estimate Savings
          </button>
        </form>
      </div>
      <div class="flex w-full flex-col justify-center lg:w-1/2">
        <h3 class="mb-10 font-aneklatin text-2xl font-semibold">
          Maximize your Savings with our Tailored Business Interruption Claim
          Prep Calculator
        </h3>
        <div class="mb-10">
          Discover your potential savings with ButFor’s subscription service
          based on your unique business profile. Enter a few pieces of
          company-specific information and we will calculate an estimate of how
          much you could be saving in the event of a complex or catastrophic
          business interruption claim that needs to be prepared.
        </div>
        <div class="mb-10">
          Most commercial insurance policies have business interruption
          coverage, but lack preparation coverage for the interruption that must
          be filed with the insurance company. These claims are extremely
          expensive to prepare and done by consultants, traditionally billed
          hourly (at least until now with ButFor claim automation) - and can
          cost a company anywhere from six to seven figures.
        </div>
        <div class="mb-10">
          Check your insurance policy to understand your preparation coverage,
          or simply upload/copy+paste your policy language here in our policy
          analyzer to understand what exactly is covered.
        </div>
      </div>
    </div>
  </section>
  <section
    class="relative mx-auto max-w-7xl bg-[#12455913] px-10 py-10 pt-40 text-[#8F8F8F]"
  >
    <div class="relative z-10">
      <h2 class="!text-left">How are we calculating Estimated savings?</h2>
      <div class="font-semibold">
        Our interactive calculator provides a personalized estimate of how much
        you could potentially save on business interruption claim preparation
        with ButFor
      </div>
      <div class="flex flex-col gap-6 py-10 lg:flex-row">
        <div class="flex w-full flex-col gap-4 lg:w-1/2">
          <div class="mb-6">Here's how it works:</div>
          <ul class="flex list-decimal flex-col gap-4 pl-8">
            <li>
              Company Profile: Tell us about your business by selecting your
              size and industry. This helps us understand the typical complexity
              of claim preparation for businesses like yours.
            </li>
            <li>
              Coverage Details Questions: Knowing if you already have business
              interruption preparation coverage allows us to factor in potential
              efficiencies in the claim process.
            </li>
            <li>
              Revenue (Optional): While not required, providing your estimated
              annual revenue gives us a more precise picture of the potential
              impact of a business interruption and the value of a comprehensive
              claim preparation strategy.
            </li>
          </ul>
        </div>
        <div class="flex w-full flex-col gap-4 lg:w-1/2">
          <div>
            Behind the Scenes:
            <br />
            Our calculator leverages industry data and research on average claim
            preparation costs for businesses of different sizes and industries.
            We then factor in the potential cost reductions achievable through
            ButFor.co's services, such as streamlining document gathering,
            automating claim prep and providing expert negotiation support -

            <span class="font-semibold">
              not to mention, all of this being encompassed in the first
              standalone subscription service for claim preparation coverage.
            </span>
          </div>
          <div>
            The Result:
            <br />
            Based on your input, the tool calculates the estimated dollar amount
            of potential savings you could achieve by utilizing ButFor’s
            subscription service for your business interruption claim
            preparation. You will receive this emailed in a PDF for future
            reference.
          </div>
          <div>
            Remember: This is an estimate, and the actual savings may vary
            depending on the specific details of your claim. However, it
            provides a valuable starting point to understand the potential
            financial benefits of partnering with ButFor.
          </div>
        </div>
      </div>
    </div>
    <div class="absolute left-0 top-0 z-0 w-full rotate-180">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,96L48,122.7C96,149,192,203,288,234.7C384,267,480,277,576,282.7C672,288,768,288,864,256C960,224,1056,160,1152,154.7C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  </section>
  <section class="mx-auto mt-20 max-w-7xl">
    <GetStarted />
  </section>
  <section class="mx-auto max-w-7xl py-10">
    <h2 class="py-4">See what else Butfor can do</h2>
    <SolutionsSlider
      class="mb-10 overflow-x-hidden"
      :solutions="solution_cards_data"
    />
  </section>
  <HubspotForm formId="83efaaa1-4ea3-4a48-b759-c2f345c5a1e3" />
</template>
<script setup>
import { ref } from "vue";
import GetStarted from "@/components/GetStarted.vue";
import SolutionsSlider from "@/components/SolutionsSlider.vue";
import { useGeneralData } from "@/stores/useGeneralData";
import HubspotForm from "@/components/HubspotForm.vue";

const generalData = useGeneralData();

const solution_cards_data = ref({});
solution_cards_data.value = generalData.solutionsByClaimType;
</script>
<style lang="postcss" scoped>
h2 {
  @apply mb-6 text-center text-[35px] font-bold uppercase leading-[1] text-black;
}
input,
textarea,
button[type="submit"] {
  @apply w-full px-4 py-3;
  @apply rounded-2xl font-medium;
  @apply outline-none;
  @apply border border-[#D9D9D9] focus-within:outline focus-within:outline-[#D9D9D9];
}
</style>
