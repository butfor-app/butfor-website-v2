<template>
  <div id="hero_section">
    <div id="heading" ref="headerRef">Simplifying Complex Claims</div>
    <div id="subheading">
      Butfor helps
      <div class="w-[100px]">
        <span ref="headerDescSlotOneRef">consultants</span>
      </div>
      create and manage
      <div class="w-[156px]">
        <span ref="headerDescSlotTwoRef">many client claims</span>
      </div>
      in one place
    </div>
    <div id="buttons">
    <!--- <a href="#" id="productVid">See Product Video</a> --->
      <RouterLink to="/book_demo" id="demo">Book Demo</RouterLink>
    </div>
  </div>
  <CompaniesSlider />
  <div id="solutions">
    <div id="heading">OUR SOLUTIONS</div>
    <div class="solution_category">
      <div id="heading">BY COMPANY TYPE</div>
      <SolutionsSlider :solutions="solutionsByCompanyType" />
    </div>
    <div class="solution_category">
      <div id="heading">BY ROLE</div>
      <SolutionsSlider :solutions="generalData.solutionsByRole" />
    </div>
    <div class="solution_category">
      <div id="heading">BY CLAIM TYPE</div>
      <SolutionsSlider :solutions="generalData.solutionsByClaimType" />
    </div>
  </div>
  <div id="features">
    <div id="header">BUTFOR HELPS YOU</div>
    <FeatureRow
      v-for="feature in generalData.features"
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
        The revolutionary software tool that optimizes the process of filing
        business interruption insurance claims. Our software eliminates the need
        for manual calculations using Excel spreadsheets or expensive
        consultants to evaluate losses. With ButFor, you can efficiently
        calculate your business interruption losses and obtain detailed and
        precise reports within minutes. Our software guarantees timely and
        accurate claims processing, enabling you to focus on your core business
        operations. Experience the benefits of ButFor today and discover how it
        can enhance your productivity, save you money, and minimize
        complications.
      </div>
    </div>
  </div>
  <div id="faq" ref="faqRef">
    <div id="heading">FAQS</div>
    <FaqDisclosure />
  </div>
</template>

<script setup>
import { useHead } from "unhead";
import CompaniesSlider from "@/components/CompaniesSlider.vue";
import SolutionsSlider from "@/components/SolutionsSlider.vue";
import FeatureRow from "@/components/FeatureRow.vue";
import FaqDisclosure from "@/components/FaqDisclosure.vue";
import { useGeneralData } from "@/stores/useGeneralData";
import { ref, onMounted } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
const generalData = useGeneralData();
const route = useRoute();
const faqRef = ref(null);
// const features = generalData.features;
const solutionsByCompanyType = generalData.solutionsByCompanyType;
const headerRef = ref(null);
const headerDescSlotOneRef = ref(null);
const headerDescSlotTwoRef = ref(null);
const headerValues = [
  "Simplifying Complex Claims",
  "Assisting by Automating",
  "Eliminating Human Error",
];
onBeforeRouteUpdate((to, from, next) => {
  if ("faq" in to.query) {
    // console.log("faq");
    faqRef.value.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  next();
});
onMounted(() => {
  if ("faq" in route.query) {
    // console.log("faq");
    faqRef.value.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  let index = 0;
  const heading = headerRef.value;
  heading.innerHTML = headerValues[index];

  setInterval(() => {
    heading.classList.remove("animate-slide-in");
    heading.classList.add("animate-slide-out");
    setTimeout(() => {
      heading.innerHTML = headerValues[index];
      heading.classList.remove("animate-slide-out");
      heading.classList.add("animate-slide-in");
      index++;
      if (index >= headerValues.length) index = 0;
    }, 1000);
  }, 3500);

  const headerDescSlotOne = headerDescSlotOneRef.value;
  const headerDescSlotTwo = headerDescSlotTwoRef.value;

  setInterval(() => {
    headerDescSlotOne.classList.add("animate-fade-out");
    headerDescSlotTwo.classList.add("animate-fade-out");
    setTimeout(() => {
      headerDescSlotOne.innerHTML =
        headerDescSlotOne.innerHTML == "consultants"
          ? "enterprises"
          : "consultants";
      headerDescSlotTwo.innerHTML =
        headerDescSlotTwo.innerHTML == "many client claims"
          ? "in-house claims"
          : "many client claims";

      headerDescSlotOne.classList.remove("animate-fade-out");
      headerDescSlotTwo.classList.remove("animate-fade-out");
      headerDescSlotOne.classList.add("animate-fade-in");
      headerDescSlotTwo.classList.add("animate-fade-in");
      setTimeout(() => {
        headerDescSlotOne.classList.remove("animate-fade-in");
        headerDescSlotTwo.classList.remove("animate-fade-in");
      }, 1000);
    }, 1000);
  }, 5000);
});
useHead({
  title: "Butfor - Complex & Catastrophic Business Interruption Claim Preparation",
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
#hero_section {
  @apply flex flex-col items-center justify-center;
  @apply py-4 h-[calc(100vh)] text-center;
  @apply bg-[url('@/assets/images/hero-bg.png')] bg-no-repeat	bg-cover bg-center;
  @screen md {
    @apply h-[calc(100vh_-_144px)];
  }
  @apply flex items-center justify-center flex-col overflow-hidden;
  > #heading {
    @apply mb-10 text-[46px] font-extrabold text-white uppercase;
  }
  > #subheading {
    @apply mb-9 flex flex-wrap justify-center gap-x-1 text-xl font-medium font-aneklatin text-white;
  }
  > #buttons {
    @apply flex flex-col items-center gap-x-8 gap-y-4;
    @screen sm {
      @apply flex-row;
    }
    > a {
      @apply w-44 h-11 bg-white rounded-full;
      @apply flex justify-center items-center text-primary  font-semibold font-aneklatin;
    }
    > #productVid {
      @apply bg-primary text-white;
    }
    > #demo {
      @apply bg-white text-primary;
    }
  }
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
    }
  }
  > #gradient {
    @apply h-full w-full -z-10 absolute top-0 left-0;
    @apply bg-primary opacity-70;
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
    @apply text-center  font-extrabold text-[46px] mt-12 mb-16;
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