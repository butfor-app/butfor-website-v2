<template>
  <div id="hero_section">
    <div id="heading" ref="header">Simplifying Complex Claims</div>
    <div id="subheading">
      Butfor automates business interruption insurance claims.<br />
      Calculate your losses & build comprehensive reports in a fraction of the
      time.
    </div>
    <div id="buttons">
      <button id="productVid">See Product Video</button>
      <button id="demo">Book Demo</button>
    </div>
  </div>
  <CompaniesSlider />
  <div id="solutions">
    <div id="heading">OUR SOLUTIONS</div>
    <div class="solution_category">
      <div id="heading">BY COMPANY TYPE</div>
      <SolutionsSlider :solutions="solutionsByCompanyType" />
      <button>View All</button>
    </div>
    <div class="solution_category">
      <div id="heading">BY ROLE</div>
      <SolutionsSlider :solutions="generalData.solutionsByRole" />
      <button>View All</button>
    </div>
    <div class="solution_category">
      <div id="heading">BY CLAIM TYPE</div>
      <SolutionsSlider :solutions="solutionsByCompanyType" />
      <button>View All</button>
    </div>
  </div>
  <div id="features">
    <div id="header">BUTFOR HELPS YOU</div>
    <FeatureRow
      v-for="feature in features"
      :heading="feature.heading"
      :desc="feature.desc"
      :icon="feature.icon"
      :rtl="feature.rtl"
    />
  </div>
  <div id="about">
    <div id="bg">
      <img src="@/assets/images/about-bg.png" alt="" />
    </div>
    <div id="gradient"></div>
    <div id="content">
      <div id="heading">ABOUT BUTFOR</div>
      <div id="desc">
        Our founder has worked in the world of BI claims for his entire career
        and has spent numerous long nights and countless hours organizing,
        reviewing, and calculating data, fixing mistakes and thinking through
        different scenarios. He felt like there had to be a more efficient way
        to do this. With recent innovations in technology, there was an
        opportunity to integrate computer learning into a previously manual
        process. We were able to marry the two worlds with Butfor
      </div>
    </div>
  </div>
  <div id="faq">
    <div id="heading">FAQS</div>
    <FaqDisclosure />
    <div id="btn">
      <button>View All</button>
    </div>
  </div>
  <!-- </div> -->
</template>

<script setup>
import { useHead } from "unhead";
import CompaniesSlider from "@/components/CompaniesSlider.vue";
import SolutionsSlider from "@/components/SolutionsSlider.vue";
import FeatureRow from "@/components/FeatureRow.vue";
import FaqDisclosure from "@/components/FaqDisclosure.vue";
import { useGeneralData } from "@/stores/useGeneralData";
import { ref, onMounted } from "vue";
const generalData = useGeneralData();
const features = generalData.features;
const solutionsByCompanyType = generalData.solutionsByCompanyType;
const header = ref(null);
const headerValues = [
  "Simplifying Complex Claims",
  "Assisting by Automating",
  "Eliminating Human Error",
];
onMounted(() => {
  let index = 0;
  const heading = header.value;
  heading.innerHTML = headerValues[index];

  setInterval(() => {
    heading.classList.remove("animate-fade-in");
    heading.classList.add("animate-fade-out");
    setTimeout(() => {
      heading.innerHTML = headerValues[index];
      heading.classList.remove("animate-fade-out");
      heading.classList.add("animate-fade-in");
      index++;
      if (index >= headerValues.length) index = 0;
    }, 1000);
  }, 4000);
});
useHead({
  title: "Butfor - Home",
  meta: [
    {
      name: "description",
      content:
        "Butfor is a tool that automates business interruption insurance claims. Calculate your losses & build comprehensive reports in a fraction of the time.",
    },
  ],
});
</script>

<style lang="postcss" scoped>
/* #app_wrapper { */
#hero_section {
  @apply flex flex-col items-center justify-center;
  @apply py-4 h-[calc(100vh)] text-center;
  @apply bg-[url('@/assets/images/hero-bg.png')] bg-no-repeat	bg-cover bg-center;
  @screen md {
    @apply h-[calc(100vh_-_171px)];
  }
  @apply flex items-center justify-center flex-col overflow-hidden;
  > #heading {
    @apply mb-10 text-[46px] font-extrabold text-white uppercase;
  }
  > #subheading {
    @apply mb-9 text-xl font-medium font-aneklatin text-white;
  }
  > #buttons {
    @apply flex flex-col items-center gap-x-8 gap-y-4;
    @screen sm {
      @apply flex-row;
    }
    > button {
      @apply w-44 h-11 bg-white rounded-full;
      @apply text-primary  font-semibold font-aneklatin;
    }
    > #productVid {
      @apply bg-primary text-white;
    }
    > #demo {
      @apply bg-white text-primary;
    }
  }
  /* } */
}

#solutions {
  @apply overflow-x-hidden flex flex-col items-center justify-center bg-[#5983921A];
  @apply pt-16;
  > #heading {
    @apply text-[46px] font-extrabold text-center text-black mb-9;
  }
  > .solution_category {
    @apply flex flex-col justify-center items-center text-black text-center font-semibold text-2xl mb-14;
    > #heading {
      @apply text-2xl font-semibold mb-12;
    }
    > button {
      @apply text-primary text-base font-medium h-11 w-[168px] rounded-full border border-primary;
      @apply cursor-pointer mt-9;
    }
  }
}
#features {
  /* @apply hidden; */
  @apply py-16 flex flex-col gap-y-10 items-center;
  @screen lg {
    @apply gap-y-0 max-w-[1440px] mx-auto;
  }
  > #header {
    @apply text-black text-center font-extrabold text-[46px] mb-9;
  }
}
#about {
  @screen lg {
    @apply h-[634px] pt-56 px-48;
  }
  @apply w-full relative p-20 px-2;
  @screen lg {
    @apply pt-40;
  }
  > #bg {
    @apply w-full -z-20 absolute top-0 left-0;
    > img {
      /* @apply ; */
    }
  }
  > #gradient {
    @apply h-full w-full -z-10 absolute top-0 left-0;
    @apply bg-primary opacity-70;
    /* @apply bg-gradient-to-t from-primary to-primaryDark ; */
  }
  > #content {
    > #heading {
      @apply text-[46px] text-center font-extrabold text-white;
    }
    > #desc {
      @apply text-white text-xl text-center font-aneklatin;
      @apply px-6 mt-6 mb-9 mx-auto;
      @apply font-medium;
      @screen lg {
        @apply w-[1000px];
      }
    }
  }
}
#faq {
  @apply max-w-[1200px] mx-auto;
  > #heading {
    @apply text-center  font-extrabold text-[46px] mb-16;
  }
  > #btn {
    @apply w-full flex items-center justify-center mt-9 mb-16;
    > button {
      @apply text-primary text-base font-medium h-11 w-[168px] rounded-full border border-primary;
      @apply cursor-pointer;
    }
  }
}
/* } */
</style>
