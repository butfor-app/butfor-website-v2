<template>
  <section class="mx-auto max-w-5xl px-4 pb-10 text-[#8F8F8F]">
    <div class="flex flex-col-reverse gap-4 lg:flex-row">
      <div class="flex w-full flex-col justify-center lg:w-1/2">
        <div class="mb-10">
          By choosing ButFor Claim Prep, businesses gain a strategic advantage
          in mitigating the financial impact of disruptions. Our subscription
          model ensures they are always prepared, protected, and supported.
        </div>
        <ul class="flex list-disc flex-col gap-4 pl-8">
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
      </div>
      <div class="w-full lg:w-1/2">
        <h1 class="font-extrabold uppercase">
          <span class="text-[35px] leading-[1] text-black">
            Business interruption
          </span>
          <br />
          <span class="text-[46px] leading-[1]"> Policy Analysis </span>
        </h1>
        <form
          @submit.prevent="handleSubmit"
          class="flex flex-col gap-4 px-2 py-10"
        >
          <input
            v-model="policy_data.name"
            type="text"
            name="fullname"
            placeholder="Full Name"
          />
          <input
            v-model="policy_data.email"
            type="text"
            name="email"
            placeholder="Email"
          />
          <input
            v-model="policy_data.phone"
            type="text"
            name="phone"
            placeholder="Phone (Optional)"
          />
          <input
            v-model="policy_data.company_name"
            type="text"
            name="compnayname"
            placeholder="Company Name (Optional)"
          />
          <input
            v-model="policy_data.company_website"
            type="text"
            name="compnaywebsite"
            placeholder="Company Website (Optional)"
          />
          <div>
            <div class="flex">
              <div class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <rect
                    width="48"
                    height="48"
                    fill="url(#pattern0_2857_7745)"
                    fill-opacity="0.49"
                  />
                  <defs>
                    <pattern
                      id="pattern0_2857_7745"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlink:href="#image0_2857_7745"
                        transform="scale(0.00444444)"
                      />
                    </pattern>
                    <image
                      id="image0_2857_7745"
                      width="225"
                      height="225"
                      xlink:href="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </div>
              <div class="flex flex-col">
                <div class="font-medium">
                  Upload policy as .pdf, .png, .jpg or .docx*
                </div>
                <div class="text-xs">
                  *you can upload a portion of the policy that focuses on
                  business interruption or your entire policy
                </div>
              </div>
            </div>
            <input
              @change="(e) => (policy_data.policy_file = e.target.files[0])"
              type="file"
              name="policy_file"
              id="policy_file"
              required
              :disabled="has_no_file"
            />
          </div>
          <div class="font-bold">OR</div>
          <div class="flex items-center gap-6">
            <input v-model="has_no_file" type="checkbox" class="!h-6 !w-6" />
            <textarea
              v-model="policy_data.policy_details"
              type="textarea"
              class="min-h-24"
              placeholder="click here to enter policy details manually(copy/paste)Please check box to the left for this option"
            />
          </div>
          <input
            type="submit"
            class="!w-fit bg-[#124559] !px-10 text-white"
            placeholder="Submit"
          />
        </form>
      </div>
    </div>
  </section>
  <section
    class="relative mx-auto max-w-7xl bg-[#12455913] px-10 py-10 pb-20 text-[#8F8F8F]"
  >
    <h2>We understand your privacy</h2>
    <div class="relative z-10 ml-auto flex max-w-4xl flex-col gap-4">
      <div>
        We understand that your business interruption insurance policy is a
        confidential document. You may be hesitant to upload it to our Policy
        Analyzer. However, we want to assure you that we take data security very
        seriously:
      </div>
      <ul class="flex list-disc flex-col gap-4 pl-8">
        <li>
          Secure File Upload: We utilize secure file upload protocols and
          industry-standard data encryption practices.
        </li>
        <li>
          Focus on Data Points: Our tool analyzes your policy only to extract
          relevant details about your coverage, not for identification.
        </li>
        <li>
          Your Data, Your Control: Data is automatically deleted at the end of
          the day it was uploaded, and never permanently stored.
        </li>
      </ul>
      <div>
        While we offer a manual input option, uploading your policy provides a
        more precise analysis. Our
        <span class="font-medium"> manual input </span>
        option allows for you to enter key details like coverage limits and
        deductibles. While it might not be as precise, it can still provide a
        helpful overview.
      </div>
      <ul class="flex list-disc flex-col gap-4 pl-8">
        <li>
          Deeper Insights: By accessing the full text of your policy, we can
          provide a more comprehensive breakdown of your coverage.
        </li>
        <li>
          Tailored Recommendations: A more precise understanding of your policy
          allows us to offer targeted coverage recommendations.
        </li>
      </ul>
    </div>
    <div class="absolute bottom-0 left-0 z-0 w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,96L48,122.7C96,149,192,203,288,234.7C384,267,480,277,576,282.7C672,288,768,288,864,256C960,224,1056,160,1152,154.7C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  </section>
  <section class="mx-auto max-w-7xl px-4 py-10 text-[#8F8F8F]">
    <h2 class="!mb-10 !text-left">What will my results look like?</h2>
    <div class="flex flex-col gap-y-8 lg:flex-row">
      <div class="w-full lg:w-1/2">
        <div class="mb-4 font-semibold">Overall Claim Preparation Rating</div>
        <ul class="flex list-decimal flex-col gap-4 pl-8">
          <li>
            (Poor): No specific services outlined for claim preparation
            assistance.
          </li>
          <li>
            (Fair): Basic services offered, such as document review or
            assistance.
          </li>
          <li>
            (Good): Services include expert guidance on claim preparation steps,
            document gathering assistance, and negotiation support.
          </li>
          <li>
            (Very Good): The policy offers access to dedicated claim preparation
            specialists and loss adjusters to navigate complex claims.
          </li>
          <li>
            (Great): Comprehensive services covering all aspects of claim
            preparation, including forensic accounting, legal consultations, and
            industry-specific expertise for complex loss scenarios.
          </li>
        </ul>
        <button
          class="mx-auto mt-6 block !w-fit rounded-xl bg-[#124559] px-6 py-2 text-white"
        >
          View Example Results
        </button>
      </div>
      <div class="w-full lg:w-1/2">
        <div class="mb-4 font-semibold">
          Additional Factors Leading to Higher Ratings
        </div>
        <ul class="flex list-disc flex-col gap-4 pl-8">
          <li>
            Deductible Structure: Lower deductibles specifically for claim
            preparation costs.
          </li>
          <li>
            Claims Process Efficiency: Policies outlining a streamlined process
            with clear timelines and communication protocols.
          </li>
          <li>
            Dispute Resolution Mechanisms: Policies offering alternative dispute
            resolution options like mediation or arbitration can be
            advantageous.
          </li>
          <li>
            Coverage Extensions: Policies that extend coverage to specific
            situations like contingent business interruption or civil authority
            orders.
          </li>
          <li>
            Period of Indemnity: A longer or flexible period of indemnity
            ensures that your business is covered for a complete period of
            restoration.
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="mx-auto max-w-7xl">
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

const has_no_file = ref(false);

const policy_data = {
  name: "",
  email: "",
  phone: "",
  company_name: "",
  company_website: "",
  policy_file: "",
  policy_details: "",
};

const handleSubmit = async () => {
  const formData = new FormData();

  formData.append("name", policy_data.name);
  formData.append("email", policy_data.email);
  formData.append("phone", policy_data.phone);
  formData.append("company_name", policy_data.company_name);
  formData.append("company_website", policy_data.company_website);
  formData.append("policy_file", policy_data.policy_file);
  formData.append("policy_details", policy_data.policy_details);

  if (has_no_file.value == true) {
    formData.delete("policy_file");
  }

  const resp = await fetch("http://localhost:3001/policy-analyzer", {
    method: "POST",
    body: formData,
  });
  console.log(resp);
};
</script>
<style lang="postcss" scoped>
h2 {
  @apply mb-6 text-center text-[35px] font-bold uppercase leading-[1] text-black;
}
input,
textarea {
  @apply w-full px-4 py-3;
  @apply rounded-2xl font-medium;
  @apply outline-none;
  @apply border border-[#D9D9D9] focus-within:outline focus-within:outline-[#D9D9D9];
}
</style>
