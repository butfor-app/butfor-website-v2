<template>
  <div id="app_wrapper">
    <div id="navbar">
      <div id="navbar_top">
        <div>
          <button>New</button>
          <div id="msg">
            Automate your California Pay Report with Pequity by March 27 >
          </div>
        </div>
        <div>
          <button id="contact">Contact Sales</button>
          <button id="login">Login</button>
        </div>
      </div>
      <div id="navbar_bottom">
        <div id="left">
          <img id="logo" src="@/assets/BFlogo.png" alt="logo" />
          <div id="popover_group_wrapper">
            <div>Solutions <img src="@/assets/icons/arrow.svg" alt="" /></div>
            <div>Product <img src="@/assets/icons/arrow.svg" alt="" /></div>
            <div>Resources <img src="@/assets/icons/arrow.svg" alt="" /></div>
            <div>
              Integrations <img src="@/assets/icons/arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <button>Book Demo</button>
      </div>
    </div>
    <div id="heading">
      <div id="bg">
        <img src="@/assets/images/laptop.png" alt="" />
      </div>
      <div id="gradient"></div>
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
    <div id="footer">
      <div id="top">
        <div id="left">
          <img id="logo" src="@/assets/BFlogo.png" alt="" />
          <div id="desc">
            Tueri is a software tool designed to automate the process of filing
            business interruption insurance claims. It uses advanced algorithms
            and machine learning technology to calculate your losses and provide
            comprehensive reports in minutes.
          </div>
          <div id="social_media">
            <a href="#"><img src="@/assets/icons/facebook.png" alt="" /></a>
            <a href="#"><img src="@/assets/icons/twiter.png" alt="" /></a>
            <a href="#"><img src="@/assets/icons/instagram.png" alt="" /></a>
          </div>
        </div>
        <div id="right">
          <div class="link_block">
            <a href="#">Help</a>
            <a href="#">Claims 101</a>
            <a href="#">Blogs</a>
            <a href="#">Case Studies</a>
            <a href="#">Claims Resource Hub</a>
          </div>
          <div class="link_block">
            <a href="#">Jobs</a>
            <a href="#">Webinars</a>
            <a href="#">Security/Compliance</a>
            <a href="#">Partnerships</a>
            <a href="#">Contact Us</a>
          </div>
          <div class="link_block">
            <a href="#">Pricing</a>
            <a href="#">Butfor vs Competitor 1</a>
            <a href="#">Butfor vs Competitor 2</a>
            <a href="#">Butfor vs Competitor 3</a>
          </div>
          <div class="link_block">
            <a href="#">View Demo</a>
            <a href="#">Schedule Demo</a>
          </div>
        </div>
      </div>
      <div id="bottom">
        <div>©2023 Tueri. All rights reserved</div>
        <div id="privacy_terms">
          <a href="#">Privacy & Policy</a>
          <a href="#">Terms & Condition</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CompaniesSlider from "@/components/CompaniesSlider.vue";
import SolutionsSlider from "@/components/SolutionsSlider.vue";
import FeatureRow from "@/components/FeatureRow.vue";

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
    heading: "AutomatE Claims Approval Process",
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
  @apply w-[1440px] mx-auto;
  > #navbar {
    > #navbar_top {
      @apply px-18 h-18 bg-primaryDark;
      @apply flex items-center justify-between;
      > :nth-child(1) {
        @apply flex items-center;
        > button {
          @apply h-8 bg-white text-black px-4 rounded-2xl;
          @apply cursor-pointer;
        }
        > #msg {
          @apply text-white;
          @apply px-4;
          @apply cursor-pointer;
        }
      }
      > :nth-child(2) {
        @apply flex items-center gap-x-12;
        > button {
          @apply text-white;
          @apply px-4;
          @apply cursor-pointer;
        }
      }
    }
    > #navbar_bottom {
      @apply h-24 px-18;
      @apply flex items-center justify-between;
      > #left {
        @apply flex items-center justify-start gap-x-12;
        > #logo {
          @apply h-14;
        }
        > #popover_group_wrapper {
          @apply flex items-center gap-x-12;
          > div {
            @apply text-primary font-medium;
            @apply cursor-pointer flex items-center gap-x-2;
            > img {
              @apply h-2 w-4;
            }
          }
        }
      }
      > button {
        @apply h-10 bg-primary text-white text-sm font-medium px-4 rounded-md;
        @apply cursor-pointer;
      }
    }
  }
  > #heading {
    @apply relative w-full h-[690px] pt-56 px-[360px];
    > #bg {
      @apply h-96 -z-20 bg-primary absolute top-0 left-0;
      > img {
        @apply h-[690px];
      }
    }
    > #gradient {
      @apply h-full w-full -z-10 absolute top-0 left-0;
      @apply bg-gradient-to-t from-primary to-primaryDark opacity-60;
    }
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
    @apply py-16 flex flex-col pl-18 pr-44;
    > #header {
      @apply text-black text-center font-extrabold text-[46px] mb-9;
    }
  }
  > #about {
    @apply h-[634px] w-full relative pt-56 px-48;
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
  > #footer {
    @apply h-[480px] bg-black px-[60px] py-20;
    @apply text-white flex flex-col items-center justify-between;
    @apply w-full;
    > #top {
      @apply flex items-center gap-x-16 w-full pb-11;
      @apply border-b-2 border-[#5F5F5F];
      > #left {
        @apply w-[460px] flex flex-col items-start justify-start gap-y-6;

        > #logo {
          @apply h-14;
        }
        > #desc {
          @apply font-medium font-aneklatin;
        }
        > #social_media {
          @apply flex items-center gap-x-5;
          > img {
            @apply h-6;
          }
        }
      }
      > #right {
        @apply h-full flex items-center gap-x-16;
        > .link_block {
          @apply h-full flex flex-col items-start justify-start gap-y-6;
          > a {
            @apply text-white  font-aneklatin;
          }
        }
      }
    }
    > #bottom {
      @apply w-full py-9 flex justify-between items-center;
      > #privacy_terms {
        @apply flex justify-center items-center gap-x-8;
      }
    }
  }
}
</style>
