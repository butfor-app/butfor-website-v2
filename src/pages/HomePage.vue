<template>
  <div id="app_wrapper">
    <NavBar />
    <div id="heading">
      <div id="content">
        <div id="heading">SIMPLIFYING COMPLEX CLAIMS</div>
        <div id="subheading">
          Tueri automates business interruption insurance claims.<br />
          Calculate your losses & build comprehensive reports in a fraction of
          the time.
        </div>
        <div id="buttons">
          <button id="productVid">See Product Video</button>
          <button id="demo">Book Demo</button>
        </div>
      </div>
    </div>
    <div id="clients">
      <div id="heading">Solving compensation for leading brands</div>

      <CompaniesSlider />
    </div>
    <div id="solutions">
      <div id="heading">OUR SOLUTIONS</div>
      <div class="solution_category">
        <div id="heading">BY COMPANY TYPE</div>
        <SolutionsSlider />
        <button>View All</button>
      </div>
      <div class="solution_category">
        <div id="heading">BY ROLE</div>
        <SolutionsSlider />
        <button>View All</button>
      </div>
      <div class="solution_category">
        <div id="heading">BY CLAIM TYPE</div>
        <SolutionsSlider />
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
      <div id="faq_wrapper">
        <FaqDisclosure />
      </div>
      <div id="btn">
        <button>View All</button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import CompaniesSlider from "@/components/CompaniesSlider.vue";
import SolutionsSlider from "@/components/SolutionsSlider.vue";
import FeatureRow from "@/components/FeatureRow.vue";
import FaqDisclosure from "@/components/FaqDisclosure.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
const features = [
  {
    heading: "Automate file transfers and retrieval",
    desc: "File acquisition process: It eliminates the amount of work client is required and time client needs to spend pulling data and spend on the case. Making clients time more efficient. Saving client time.",
    icon: "help-1",
    rtl: true,
  },
  {
    heading: "Save Time & Effort",
    desc: "From file transfers to running advanced calculations, our tool automates the most tedious and time consuming aspects of the claims process.",
    icon: "help-2",
    rtl: false,
  },
  {
    heading: "Minimize Human Error",
    desc: "Claims traditionally require manual reviews of thousands of rows of data and a significant number of complex calculations with mistakes being inevitable; we solve for this using machine learning and software automation.",
    icon: "help-3",
    rtl: true,
  },
  {
    heading: "Run Multiple Scenarios",
    desc: "Our tool can find data trends and process various claim scenarios, presenting the best possible outcome in a more efficient manner.",
    icon: "help-4",
    rtl: false,
  },
  {
    heading: "Automate Claims Approval Process",
    desc: "Centralize claim data & build custom approval chains to assist in the submission process.",
    icon: "help-5",
    rtl: true,
  },
  {
    heading: "Reducing Discrepancy Between Parties",
    desc: "Our tool can find data trends and process various claim scenarios, presenting the best possible outcome in a more efficient manner.",
    icon: "help-6",
    rtl: false,
  },
  {
    heading: "Security & Centralizing of Data",
    desc: "Data is secure on our servers, not living on desktops and in insecure places like excel.",
    icon: "help-7",
    rtl: true,
  },
];
</script>

<style lang="postcss" scoped>
#app_wrapper {
  > #heading {
    @apply w-full h-screen flex items-center justify-center;
    @apply bg-[url('@/assets/images/hero-bg.png')] bg-no-repeat	bg-cover bg-center;
    > #content {
      @apply w-full h-full;
      @apply flex items-center justify-center flex-col;
      > #heading {
        @apply text-[46px] text-center font-extrabold text-white;
      }
      > #subheading {
        @apply text-white text-center;
        @apply px-2 mt-6 mb-9;
        @apply font-medium;
      }
      > #buttons {
        @apply flex items-center gap-x-8;

        > button {
          @apply h-11 w-[168px] font-medium rounded-full;
          @apply font-sourcesanspro cursor-pointer px-6 py-2;
        }
        > #productVid {
          @apply bg-primary text-white;
        }
        > #demo {
          @apply bg-white text-primary;
        }
      }
    }
  }
  > #clients {
    @apply h-[260px] py-16;
    > #heading {
      @apply text-black text-center font-semibold text-2xl mb-9;
    }
  }
  > #solutions {
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
  > #features {
    @apply hidden;
    @screen lg {
      @apply py-16 flex flex-col items-center max-w-[1440px] mx-auto;
      > #header {
        @apply text-black text-center font-extrabold text-[46px] mb-9;
      }
    }
  }
  > #about {
    @screen lg {
      @apply h-[634px] pt-56 px-48;
    }
    @apply w-full relative p-20 px-2;
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
        @apply px-2 mt-6 mb-9;
        @apply font-medium;
      }
    }
  }
  > #faq {
    > #heading {
      @apply text-center  font-extrabold text-[46px] mb-16;
    }
    > #faq_wrapper {
      /* @apply px-18; */
    }
    > #btn {
      @apply w-full flex items-center justify-center mt-9 mb-16;
      > button {
        @apply text-primary text-base font-medium h-11 w-[168px] rounded-full border border-primary;
        @apply cursor-pointer;
      }
    }
  }
}
</style>
