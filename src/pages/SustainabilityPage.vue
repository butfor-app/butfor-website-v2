<template>
  <HeroSection
    name="Climate Change and Disaster Recovery: <br> A Complex Relationship"
    desc="The Climate Crisis is here. ButFor helps businesses recover faster. Our innovative software automates the claim preparation process, saving businesses valuable time and resources in the aftermath of a disaster."
    bg="/imgs/sus_hero.png"
  />

  <section
    class="mx-auto flex max-w-7xl items-center gap-y-4 px-4 pt-10 lg:flex-row"
  >
    <div class="lg:w-1/2">
      <div class="flex items-center">
        <h2 class="w-1/2 !text-start lg:w-full">
          How Climate Change Increases Natural Disasters
        </h2>
        <div class="block w-1/2 lg:hidden">
          <img
            class="mx-auto object-contain"
            src="/src/assets/images/sus_i_1.png"
            alt=""
          />
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <div>
          Warming Temperatures: Higher temperatures lead to increased
          evaporation, which in turn leads to more moisture in the atmosphere.
          This excess moisture can fuel more intense storms, such as hurricanes
          and typhoons.
        </div>
        <div>
          Rising Sea Levels: As the planet warms, glaciers and ice sheets melt,
          causing sea levels to rise. This increases the risk of coastal
          flooding and storm surges, particularly during hurricanes and
          typhoons.
        </div>

        <div>
          Extreme Weather Events: Climate change can also lead to more frequent
          and severe droughts, heatwaves, wildfires, and winter storms. These
          events can cause significant damage to businesses and infrastructure,
          leading to business interruptions and increased insurance claims.
        </div>
      </div>
    </div>
    <div class="hidden w-1/2 lg:block">
      <img
        class="mx-auto w-2/3 object-contain"
        src="/src/assets/images/sus_i_1.png"
        alt=""
      />
    </div>
  </section>

  <section class="relative px-4 pt-10">
    <div
      class="absolute left-0 top-0 z-0 flex h-full w-full flex-col justify-end"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#12455910"
          fill-opacity="1"
          d="M0,64L40,69.3C80,75,160,85,240,90.7C320,96,400,96,480,85.3C560,75,640,53,720,64C800,75,880,117,960,122.7C1040,128,1120,96,1200,74.7C1280,53,1360,43,1400,37.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
    <div class="relative z-10 mx-auto flex max-w-7xl">
      <div class="hidden w-1/2 lg:block">
        <img
          class="mx-auto object-contain"
          src="/src/assets/images/sus_i_3.png"
          alt=""
        />
      </div>

      <div class="lg:w-1/2">
        <div class="flex items-center">
          <h2 class="w-1/2 !text-start lg:w-full">
            butfor is changing the game. here’s how we help
          </h2>
          <div class="block w-1/2 lg:hidden">
            <img
              class="mx-auto w-3/4 object-contain"
              src="/src/assets/images/sus_i_3.png"
              alt=""
            />
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <div>
            Faster Claims Processing: Our AI-powered platform guides businesses
            through the claim process efficiently, minimizing delays and getting
            critical funds into their hands faster. This is crucial in the
            aftermath of natural disasters, as businesses often need immediate
            financial support to resume operations and avoid further losses.
          </div>
          <div>
            Improved Resilience: By expediting the recovery process, ButFor
            empowers businesses to bounce back from disruptions quicker,
            ensuring long-term sustainability. This is essential for businesses
            operating in regions prone to natural disasters, as it allows them
            to withstand future shocks and maintain their operations.
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mx-auto flex max-w-7xl px-4 pt-10">
    <div class="lg:w-1/2">
      <div class="flex items-center">
        <h2 class="w-2/3 !text-start lg:w-full">
          Streamlining Business Interruption Claims for a More Resilient Future
        </h2>
        <div class="block w-1/3 lg:hidden">
          <img
            class="mx-auto w-full object-contain"
            src="/src/assets/images/sus_i_2.png"
            alt=""
          />
        </div>
      </div>

      <div class="flex flex-col gap-6">
        <div>
          Climate change is a defining challenge of our time. With rising sea
          levels, extreme weather events, and natural disasters becoming more
          frequent and intense, businesses face a growing risk of disruption.
          When disaster strikes, recovering quickly is essential. But
          traditional business interruption claim preparation is slow, complex,
          and costly.
        </div>
        <div>
          ButFor is a critical tool for businesses facing the challenges of
          climate change. By streamlining the business interruption claim
          process, ButFor helps businesses recover faster and more efficiently,
          ensuring their long-term sustainability. As the frequency and
          intensity of natural disasters continue to rise, ButFor's solution
          becomes even more essential for businesses looking to build resilience
          and thrive in a changing world.
        </div>
      </div>
    </div>
    <div class="hidden w-1/2 lg:block">
      <img
        class="mx-auto w-2/3 object-contain"
        src="/src/assets/images/sus_i_2.png"
        alt=""
      />
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
  <ButForForm formId="8e21c90c-31c9-45c6-aebd-826a9f69a0be" pageName="Sustainability" />
</template>

<script setup>
import { ref } from "vue";
import GetStarted from "@/components/GetStarted.vue";
import SolutionsSlider from "@/components/SolutionsSlider.vue";
import { useGeneralData } from "@/stores/useGeneralData";
import ButForForm from "@/components/ButForForm.vue";
import HeroSection from "@/components/HeroSection.vue";
import { useHead } from "@vueuse/head";
useHead({ title: "ButFor - Sustainability" });

const generalData = useGeneralData();

const solution_cards_data = ref({});
solution_cards_data.value = generalData.solutionsByClaimType;
</script>

<style lang="postcss" scoped>
h2 {
  @apply mb-6 text-center text-[35px] font-bold uppercase leading-[1] text-black;
}
div {
  @apply font-aneklatin font-medium text-[#00000080];
}
</style>
