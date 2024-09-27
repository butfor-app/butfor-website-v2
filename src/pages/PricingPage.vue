<template>
  <!-- HERO -->
  <section class="relative">
    <div class="relative z-[1] mx-auto max-w-7xl">
      <h1 class="text-center !text-4xl">
        Comprehensive Coverage, Clear Pricing: <br />
        Protect Your Business with Confidence
      </h1>
      <div class="flex flex-col px-4 py-10 lg:flex-row">
        <div class="flex flex-col gap-4 lg:w-1/2">
          <div class="flex items-start gap-3">
            <div class="h-6 w-6">
              <img
                class="h-full w-full object-contain"
                src="/src/assets/icons/question.png"
                alt=""
              />
            </div>
            <div class="flex-1">
              Are you an organization that has business interruption coverage
              without claim preparation fee coverage?
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="h-6 w-6">
              <img
                class="h-full w-full object-contain"
                src="/src/assets/icons/question.png"
                alt=""
              />
            </div>
            <div class="flex-1">
              Do you have prep coverage that is not sufficient?
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="h-6 w-6">
              <img
                class="h-full w-full object-contain"
                src="/src/assets/icons/question.png"
                alt=""
              />
            </div>
            <div class="flex-1">
              Are you an organization that has business interruption coverage
              without claim preparation fee coverage?
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4 pt-20 lg:w-1/2">
          <h2 class="text-center text-[33px] font-semibold leading-[1]">
            Our guess? <br />
            You probably don’t even know.
          </h2>
          <div class="text-end">
            Based on your organization size, click below to sign up for coverage
            in the event of an emergency or business income loss. In the event
            you need to file a claim, we will prepare your claim free of cost
            using our innovative software and team of consultants.
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute left-0 top-0 z-0 flex h-full w-full flex-col justify-end"
    >
      <svg
        class="object-contain"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#12455910"
          d="M0,256L48,245.3C96,235,192,213,288,181.3C384,149,480,107,576,117.3C672,128,768,192,864,186.7C960,181,1056,107,1152,74.7C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  </section>

  <!-- PRICING -->
  <section class="bg-[#12455910]">
    <div
      class="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-8 gap-y-20 px-4 py-10 font-aneklatin lg:grid-cols-5"
    >
      <div class="col-span-1 text-center">
        <div class="mb-3 text-2xl font-medium text-[#32524C]">BOUTIQUE</div>

        <div class="rounded-2xl shadow-lg shadow-gray-400">
          <div
            class="mx-auto w-full rounded-xl bg-[#C1D8D4] px-10 py-4 text-white shadow-md shadow-gray-400"
          >
            <div class="text-5xl">
              $100<span class="text-2xl font-normal">/MO</span>
            </div>
          </div>
          <div class="flex flex-col gap-y-10 px-2 py-10">
            <div class="text-2xl font-medium">
              FOR BUSINESSES <br />
              UNDER <br />

              <span class="text-3xl font-bold"> $1M </span>
              <br />
              IN ANNUAL REVENUE
            </div>

            <div class="mx-auto h-1 w-1/4 bg-primary"></div>

            <div class="text-[27px] font-extrabold uppercase leading-[1]">
              BOUTIQUE <br />
              STATISTICS
            </div>

            <div class="text-xl font-medium">
              The Average Claim Size For Boutique Businesses is $100,000
            </div>

            <div class="text-xl font-medium">
              The Average Claim Prep Cost For Boutique Businesses is $50,000
            </div>

            <a
              href="#"
              class="mx-auto w-fit rounded-2xl bg-[#C1D8D4] px-14 py-3 font-sourcesanspro font-semibold text-white"
              >Sign Up</a
            >
          </div>
        </div>
      </div>
      <div class="col-span-1 text-center">
        <div class="mb-3 text-2xl font-medium text-[#32524C]">SMB</div>

        <div class="rounded-2xl shadow-lg shadow-gray-400">
          <div
            class="mx-auto w-full rounded-xl bg-[#98C1B9] px-10 py-4 text-white shadow-md shadow-gray-400"
          >
            <div class="text-5xl">
              $300<span class="text-2xl font-normal">/MO</span>
            </div>
          </div>
          <div class="flex flex-col gap-y-10 px-2 py-10">
            <div class="text-2xl font-medium">
              FOR BUSINESSES <br />
              BETWEEN <br />

              <span class="text-3xl font-bold">$1M & $10M </span>
              <br />
              IN ANNUAL REVENUE
            </div>

            <div class="mx-auto h-1 w-1/4 bg-primary"></div>

            <div class="text-[27px] font-extrabold uppercase leading-[1]">
              SMB <br />
              STATISTICS
            </div>

            <div class="text-xl font-medium">
              The Average Claim <br />
              Size FOR SMB’s <br />
              Is $500,000
            </div>

            <div class="text-xl font-medium">
              The Average Claim Prep <br />
              Cost For SMB's <br />
              is $100,000
            </div>

            <a
              href="#"
              class="mx-auto w-fit rounded-2xl bg-[#98C1B9] px-14 py-3 font-sourcesanspro font-semibold text-white"
              >Sign Up</a
            >
          </div>
        </div>
      </div>
      <div class="col-span-1 text-center">
        <div class="mb-3 text-2xl font-medium text-[#32524C]">MID-MARKET</div>

        <div class="rounded-2xl shadow-lg shadow-gray-400">
          <div
            class="mx-auto w-full rounded-xl bg-[#62A89A] px-10 py-4 text-white shadow-md shadow-gray-400"
          >
            <div class="text-5xl">
              $800<span class="text-2xl font-normal">/MO</span>
            </div>
          </div>
          <div class="flex flex-col gap-y-10 px-2 py-10">
            <div class="text-2xl font-medium">
              FOR BUSINESSES <br />
              BETWEEN <br />

              <span class="text-3xl font-bold">$10M & $100M</span>
              <br />
              IN ANNUAL REVENUE
            </div>

            <div class="mx-auto h-1 w-1/4 bg-primary"></div>

            <div class="text-[27px] font-extrabold uppercase leading-[1]">
              MID-MARKET <br />
              STATISTICS
            </div>

            <div class="text-xl font-medium">
              The Average Claim <br />
              Size For Mid-Market<br />
              Is $1,000,000
            </div>

            <div class="text-xl font-medium">
              The Average Claim Prep <br />
              Cost For Mid-Market<br />
              is $200,000
            </div>

            <a
              href="#"
              class="mx-auto w-fit rounded-2xl bg-[#62A89A] px-14 py-3 font-sourcesanspro font-semibold text-white"
              >Sign Up</a
            >
          </div>
        </div>
      </div>
      <div class="col-span-1 text-center">
        <div class="mb-3 text-2xl font-medium text-[#32524C]">LARGE</div>

        <div class="rounded-2xl shadow-lg shadow-gray-400">
          <div
            class="mx-auto w-full rounded-xl bg-[#3D7E72] px-10 py-4 text-white shadow-md shadow-gray-400"
          >
            <div class="text-5xl">
              $1,500<span class="text-2xl font-normal">/MO</span>
            </div>
          </div>
          <div class="flex flex-col gap-y-10 px-2 py-10">
            <div class="text-2xl font-medium">
              FOR BUSINESSES <br />
              BETWEEN <br />

              <span class="text-3xl font-bold">$100M & $1B</span>
              <br />
              IN ANNUAL REVENUE
            </div>

            <div class="mx-auto h-1 w-1/4 bg-primary"></div>

            <div class="text-[27px] font-extrabold uppercase leading-[1]">
              LARGE BUSINESS <br />
              STATISTICS
            </div>

            <div class="text-xl font-medium">
              The Average Claim <br />
              Size For Large Businesses Is<br />
              between $2M and $5M
            </div>

            <div class="text-xl font-medium">
              The Average Claim Prep <br />
              Cost For Large Businesses<br />
              is $500,000
            </div>

            <a
              href="#"
              class="mx-auto w-fit rounded-2xl bg-[#3D7E72] px-14 py-3 font-sourcesanspro font-semibold text-white"
              >Sign Up</a
            >
          </div>
        </div>
      </div>
      <div class="col-span-1 text-center">
        <div class="mb-3 text-2xl font-medium text-[#32524C]">ENTERPRISE</div>

        <div class="rounded-2xl shadow-lg shadow-gray-400">
          <div
            class="mx-auto w-full rounded-xl bg-[#32524C] px-10 py-4 text-white shadow-md shadow-gray-400"
          >
            <div class="text-5xl">
              $2,500<span class="text-2xl font-normal">/MO</span>
            </div>
          </div>
          <div class="flex flex-col gap-y-10 px-2 py-10">
            <div class="text-2xl font-medium">
              FOR BUSINESSES <br />
              OVER <br />

              <span class="text-3xl font-bold">$1B</span>
              <br />
              IN ANNUAL REVENUE
            </div>

            <div class="mx-auto h-1 w-1/4 bg-primary"></div>

            <div class="text-[27px] font-extrabold uppercase leading-[1]">
              ENTERPRISE <br />
              STATISTICS
            </div>

            <div class="text-xl font-medium">
              The Average Claim <br />
              Size For Enterprise’s <br />
              Is Over $5M
            </div>

            <div class="text-xl font-medium">
              The Average Claim Prep <br />
              Cost For Enterprise’s Is<br />
              Over $1M
            </div>

            <a
              href="#"
              class="mx-auto w-fit rounded-2xl bg-[#32524C] px-14 py-3 font-sourcesanspro font-semibold text-white"
              >Sign Up</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-4 py-10 lg:py-20">
    <h2 class="!mb-16 !text-left text-[33px] font-semibold leading-[1]">
      Why Should We Consider Claim Prep Expenses?
    </h2>

    <p class="mb-4 w-full lg:w-3/5">
      Insurance companies make the insurance buying process difficult, and
      having specific coverage can be nearly impossible without the proper
      knowledge.
    </p>
    <p class="mb-4 w-full lg:w-3/5">
      We feel like there is an easier way. We provide claim preparation coverage
      for business interruption claims at a price much cheaper price than any
      insurance company would offer, without the hassle.
    </p>
    <p class="mb-4 w-full lg:w-3/5">
      We are the first and only company that provides claim preparation coverage
      outside of standard insurance policies. Most companies are not even
      offered this coverage when they shop for insurance policies, and those
      that do often pay high premiums.
    </p>
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
</style>
