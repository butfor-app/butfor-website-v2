<template>
  <div id="hero_section">
    <div id="heading" ref="headerRef" class="h-[200px] md:h-auto">
      Simplifying Complex Claims
    </div>
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
    <div id="video" class="px-4 py-8">
      <video class="mx-auto w-full rounded-lg lg:w-1/2" autoplay muted controls>
        <source
          src="http://localhost:5173/videos/butfor.mp4"
          type="video/mp4"
        />
        Video not supported in your browser
      </video>
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
  title:
    "Butfor - Complex & Catastrophic Business Interruption Claim Preparation",
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
  @apply py-14 text-center;
  @apply bg-[url('@/assets/images/hero-bg.png')] bg-cover bg-center bg-no-repeat;
  @screen md {
    /* @apply h-[calc(100vh_-_144px)]; */
  }
  @apply flex flex-col items-center justify-center overflow-hidden;
  > #heading {
    @apply mb-10 text-[46px] font-extrabold uppercase text-white;
  }
  > #subheading {
    @apply mb-9 flex flex-wrap justify-center gap-x-1 font-aneklatin text-xl font-medium text-white;
  }
  > #buttons {
    @apply flex flex-col items-center gap-x-8 gap-y-4;
    @screen sm {
      @apply flex-row;
    }
    > a {
      @apply h-11 w-44 rounded-full bg-white;
      @apply flex items-center justify-center font-aneklatin font-semibold text-primary;
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
  @apply flex flex-col items-center justify-center overflow-x-hidden bg-[#5983921A];
  @apply pt-16;
  > #heading {
    @apply mb-9 text-center text-[46px] font-extrabold text-black;
  }
  > .solution_category {
    @apply mb-14 flex flex-col items-center justify-center text-center text-2xl font-semibold text-black;
    > #heading {
      @apply mb-12 text-2xl font-semibold;
    }
    > button {
      @apply h-11 w-[168px] rounded-full border border-primary text-base font-medium text-primary;
      @apply mt-9 cursor-pointer;
    }
  }
}
#features {
  /* @apply hidden; */
  @apply flex flex-col items-center gap-y-10 py-16;
  @screen lg {
    @apply mx-auto max-w-[1440px] gap-y-0;
  }
  > #header {
    @apply mb-9 text-center text-[46px] font-extrabold text-black;
  }
}
#about {
  @screen lg {
    @apply h-[634px] px-48 pt-56;
  }
  @apply relative w-full p-20 px-2;
  @screen lg {
    @apply pt-40;
  }
  > #bg {
    @apply absolute left-0 top-0 -z-20 w-full;
    > img {
    }
  }
  > #gradient {
    @apply absolute left-0 top-0 -z-10 h-full w-full;
    @apply bg-primary opacity-70;
  }
  > #content {
    > #heading {
      @apply text-center text-[46px] font-extrabold text-white;
    }
    > #desc {
      @apply text-center font-aneklatin text-xl text-white;
      @apply mx-auto mb-9 mt-6 px-6;
      @apply font-medium;
      @screen lg {
        @apply w-[1000px];
      }
    }
  }
}
#faq {
  @apply mx-auto max-w-[1200px];
  > #heading {
    @apply mb-16 mt-12 text-center text-[46px] font-extrabold;
  }
  > #btn {
    @apply mb-16 mt-9 flex w-full items-center justify-center;
    > button {
      @apply h-11 w-[168px] rounded-full border border-primary text-base font-medium text-primary;
      @apply cursor-pointer;
    }
  }
}
/* } */
</style>
