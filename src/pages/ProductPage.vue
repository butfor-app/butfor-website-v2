<template>
  <div id="hero_section">
    <div id="bg_gradient"></div>
    <div id="heading">Get to know the ButFor platform</div>
    <div id="sub_heading">
      Preparing a business interruption claim has never been easier.
    </div>
    <button>Learn More</button>
  </div>
  <div id="slider" ref="featuresRef">
    <div id="heading">THE FEATURES YOU NEED</div>
    <div id="wrapper">
      <!-- Top tabs -->
      <div class="flex items-center justify-between md:mb-10">
        <button @click="goToPreviousSlide" class="px-2 text-primaryLight">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            class="rotate-180"
          >
            <path
              fill="currentColor"
              d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
            />
          </svg>
        </button>
        <div id="thumbnails" class="w-[80%]">
          <Carousel
            :snapAlign="'center'"
            :items-to-show="screenSmallerThanMd ? 1 : 3"
            :wrap-around="false"
            v-model="currentSlide"
            ref="thumbnail_carousel"
          >
            <Slide
              v-for="(tab, index) in featureSlider_tabs"
              :key="index + 1"
              :class="[currentSlide === index ? 'active_slide' : '']"
            >
              <button class="py-1 md:py-2" @click="currentSlide = index">
                {{ tab }}
              </button>
            </Slide>
          </Carousel>
        </div>
        <button @click="goToNextSlide" class="px-2 text-primaryLight">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              fill="currentColor"
              d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
            />
          </svg>
        </button>
      </div>

      <!-- Actual Slides -->
      <Carousel
        id="gallery"
        :transition="300"
        :items-to-show="1"
        :itemsToScroll="1"
        :wrap-around="false"
        :mouseDrag="false"
        :touchDrag="false"
        v-model="currentSlide"
      >
        <Slide v-for="(slide, index) in featureSlider_slides" :key="index + 1">
          <div>
            <div>
              <div id="heading">
                {{ slide.heading }}
              </div>
              <div id="desc">
                {{ slide.desc }}
              </div>
            </div>
            <img :src="slide.img" alt="" />
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
  <div id="features">
    <div id="heading">
       We have a 100% retention rate for<br> repeat client claim preparation
      <br><br>
    </div>
    <!--- <div id="desc">
       Ipsum is simply dummy text of the printing and typesetting industry.
      <br />Lorem Ipsum has been the industry's standard dummy.
    </div> ------->
    <div id="wrapper">
      <div id="card">
        <img
          class="hidden sm:block"
          src="@/assets/images/feature_1.svg"
          alt=""
        />
        <div id="heading">Serve more customers</div>
        <div id="desc">
          By reducing time spent on manual labor and reducing the corresponding
          fees, users are able to take on more claims at a greater benefit to
          their client.
        </div>
        <img class="sm:hidden" src="@/assets/images/feature_1.svg" alt="" />
      </div>
      <div id="card">
        <img
          class="hidden sm:block"
          src="@/assets/images/feature_2.svg"
          alt=""
        />
        <div id="heading">Reduce email volume by 50%</div>
        <div id="desc">
          Our ERP integration tool minimizes wasteful back and forth with the
          client and lessens the time and effort placed on the client for data
          retrieval.
        </div>
        <img class="sm:hidden" src="@/assets/images/feature_2.svg" alt="" />
      </div>
      <div id="card">
        <img
          class="hidden sm:block"
          src="@/assets/images/feature_3.svg"
          alt=""
        />
        <div id="heading">Get started in an hour</div>
        <div id="desc">
          We provide an centralized system that allows the user to organize and
          manage multiple claims in once place with limited involvement from the
          client.
        </div>
        <img class="sm:hidden" src="@/assets/images/feature_3.svg" alt="" />
      </div>
    </div>
  </div>
  <div id="possibilities">
    <div id="header">What you can do with ButFor</div>
    <img src="@/assets/images/possibilities.png" alt="" />
  </div>
  <div id="use_cases">
    <div id="heading">Customer stories and use cases</div>
    <div id="desc" class="text-center">
      See how ButFor has saved clients on average <br />
      hundreds of thousands of dollars on their claims
    </div>
    <div id="wrapper">
      <div class="card">
        <img src="@/assets/images/usecase_placeholder.png" alt="" />
        <div id="header">
          Litigation Attorney Praises Work on Successful Claim Resolution
        </div>
        <div id="desc">
          <i>“Grateful for your <b>swift, high-quality work</b> on the claim filing.
           <br>Your teamwork, quick turnaround &amp; positive attitude made a real impact.<br>Great working with you!”</i>
           <br>Richard S.
        </div>
      </div>
      <div class="card">
        <img src="@/assets/images/usecase_placeholder.png" alt="" />
        <div id="header">
          ButFor Drives Significant Financial Recovery for Resource-Constrained Non-Profit
        </div>
        <div id="desc">
          A non-profit organization had over $500,000 in property damage from a fire. Limited
           financial resources &amp; inadequate insurance coverage hindered the organization's
            ability to navigate the complex claims process.
        </div>
      </div>
      <div class="card">
        <img src="@/assets/images/usecase_placeholder.png" alt="" />
        <div id="header">
          Manufacturing Finance VP Applauds Claim Recovery 50% Above Expectations
        </div>
        <div id="desc">
         <i>”Successfully resolved our insurance claim, <b>recovering 50% more than estimated.</b>
           Exceptional service—would happily work with them again &amp; highly recommend to others.”</i>
           <br>Denny U.
        </div>
      </div>
      <div class="card">
        <img src="@/assets/images/usecase_placeholder.png" alt="" />
        <div id="header">
          ButFor Delivers Speed & Accuracy in International Manufacturing Claim
        </div>
        <div id="desc">
          ButFor reduced labor by over 800 hours &amp; saved hundreds of thousands of dollars
            for a manufacturer facing a fire. Our analysis closely matched the insurers,
             demonstrating our accuracy despite rapid turnaround.
        </div>
      </div>
    </div>
  </div>
  <!-- <HubspotFormBare formId="b20e853b-b330-4419-b345-060788b0c267" /> -->
  <HubspotForm formId="83efaaa1-4ea3-4a48-b759-c2f345c5a1e3" />
</template>
<script setup>
import { useHead } from "@vueuse/head";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import { onMounted, ref } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import HubspotForm from "@/components/HubspotForm.vue";
import HubspotFormBare from "@/components/HubspotFormBare.vue";

useHead({
  title: "Butfor - Product",
  meta: [
    {
      name: "description",
      content:
        "Butfor is a tool that automates business interruption insurance claims. Calculate your losses & build comprehensive reports in a fraction of the time.",
    },
  ],
});
const featuresRef = ref(null);
const currentSlide = ref(0);
const thumbnail_carousel = ref(null);
const route = useRoute();
const screenSmallerThanMd = window.matchMedia("(max-width: 768px)").matches;
onMounted(() => {
  console.log(route.query);
  if ("feature" in route.query) {
    // console.log("scrolling to feature");

    featuresRef.value.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    if (route.query.feature != "" && !isNaN(route.query.feature)) {
      if (route.query.feature > featureSlider_slides.length) {
      } else {
        // console.log("setting current slide");
        currentSlide.value = parseInt(route.query.feature) - 1;
      }
    }
  }
});
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /* or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /* or $(window).width() */
  );
}
onBeforeRouteUpdate((to, from) => {
  // routeName.value = to.params.solutionKey;
  if ("feature" in route.query) {
    // console.log("scrolling to feature");

    if (isElementInViewport(featuresRef.value)) {
      console.log("Already in viewport");
    } else {
      featuresRef.value.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (route.query.feature != "" && !isNaN(route.query.feature)) {
      if (route.query.feature > featureSlider_slides.length) {
      } else {
        // console.log("setting current slide");
        currentSlide.value = parseInt(route.query.feature) - 1;
      }
    }
  }
});

const goToNextSlide = () => {
  if (currentSlide.value < featureSlider_slides.length - 1) {
    currentSlide.value += 1;
  }
};
const goToPreviousSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value -= 1;
  }
};
const featureSlider_tabs = [
  "Customer & Claim Management",
  "Reporting and Analytics",
  "Approval Chains",
  "Claims Customization",
  "Find the Best Baseline",
  "Collaboration",
  "Centralized & Secure",
  "Data Standardization",
];
const featureSlider_slides = [
  {
    heading:
      "Butfor provides users with various tools to make the claims process more efficient",
    desc: "From onboarding to claim submission and all the steps in between,  we provide our clients with the instruments they need for their unique claims process. Manage and organize claims in one place.",
    img: new URL("@/assets/images/product_feature.png", import.meta.url).href,
  },
  {
    heading:
      "Butfor’s machine learning algorithm allows you to run multiple scenarios in seconds",
    desc: "Conduct a comprehensive exploration of multiple hypotheses to yield the most favorable outcome for your assertion, all while minimizing time expenditure and enhancing result precision.",
    img: new URL("@/assets/images/product_feature.png", import.meta.url).href,
  },
  {
    heading:
      "Streamlining Claim Approval with Internal Approval Chains and simple client support",
    desc: "Simplify the cumbersome process of claim approval pre-submission by configuring internal approval chains, enabling seamless transmission of claims to designated approvers at the click of a button.",
    img: new URL("@/assets/images/product_feature.png", import.meta.url).href,
  },
  {
    heading:
      "Tailoring Claims to Your Specific Needs: Custom Formulas and Analyses.",
    desc: "Regardless of whether you operate as an insurance firm or a consultancy, customize each claim in accordance with your unique requirements by responding to a sequence of questions that permit bespoke formulas and analyses to supersede our standard protocol",
    img: new URL("@/assets/images/product_feature.png", import.meta.url).href,
  },
  {
    heading:
      "Optimizing Claim Outcomes through Automated Pre-Loss Determinations and Scenario Analyses.",
    desc: "Our system automates the process of determining the baseline in each claim and conducts multiple scenarios to yield the optimal outcome, supported by comprehensive data and calculations.",
    img: new URL("@/assets/images/product_feature.png", import.meta.url).href,
  },
  {
    heading:
      "Enhancing Collaboration through Streamlined Claim Editing and Analysis",
    desc: "Facilitating seamless collaboration, our tool enables users to conveniently modify, filter, and arrange claim setups and analyses within the system.",
    img: new URL("@/assets/images/product_feature.png", import.meta.url).href,
  },
  {
    heading:
      "butfor provides Secure and Compliant Storage of Claim Data, ensuring client confidentiality.",
    desc: "Eliminating the need for data rooms or servers, we maintain all claim-related data in ButFor, ensuring a secure and compliant storage solution.",
    img: new URL("@/assets/images/product_feature.png", import.meta.url).href,
  },
  {
    heading:
      "Effortless Claim Submission with Standardized Format within butfor and Excel.",
    desc: "Our tool presents the claim in a standardized format, both within the system and as an Excel file, ensuring a seamless submission.",
    img: new URL("@/assets/images/product_feature.png", import.meta.url).href,
  },
];
</script>
<style lang="postcss" scoped>
#hero_section {
  @apply flex flex-col items-center justify-center;
  @apply h-[calc(100vh)] py-4 text-center;
  @screen md {
    @apply h-[calc(100vh_-_144px)];
  }
  @apply bg-[url('@/assets/images/productpage_hero.png')] bg-cover bg-top bg-no-repeat;
  > #heading {
    @apply mb-10 text-[46px] font-extrabold text-white;
  }
  > #sub_heading {
    @apply mb-9 font-aneklatin text-xl font-medium text-white;
  }
  > button {
    @apply h-11 w-44 rounded-full bg-white;
    @apply font-aneklatin font-semibold text-primary;
  }
}
#slider {
  @apply py-24;
  > #heading {
    @apply mb-16 text-center text-[46px] font-bold;
  }
  > #wrapper {
    @apply mx-auto max-w-[1200px];
    > div {
      > #thumbnails {
        /* @apply mb-10; */
        .carousel__viewport {
          .carousel__track {
            .carousel__slide {
              @apply border-b-[1px] border-[#D9D9D9];
              > button {
                @apply flex items-center justify-center;
                @apply w-full px-4 text-lg text-[#4C7281];
                @screen md {
                  @apply px-0 text-2xl;
                }
              }
            }
            .active_slide {
              @apply rounded-t-xl border-b-2 border-[#6D998F] bg-[#4C728105];
              > button {
                @apply font-semibold text-[#6D998F];
              }
            }
          }
        }
      }
    }

    > #gallery {
      .carousel__viewport {
        .carousel__track {
          .carousel__slide {
            > div {
              @apply flex flex-col items-center justify-between;
              @screen md {
                @apply flex-row;
              }
              @apply w-full rounded-lg px-4 text-left;
              > div {
                @apply w-full;
                @screen md {
                  @apply w-1/2;
                }
                #heading {
                  @apply mb-4 text-2xl font-bold uppercase md:text-4xl;
                  @screen md {
                    @apply mb-14;
                  }
                }
                #desc {
                  @apply font-aneklatin text-xl font-medium text-[#4C7281];
                }
              }
              img {
                @apply max-h-80;
                @screen md {
                  @apply max-h-[530px];
                }
              }
            }
          }
          .carousel__slide--active {
          }

          .carousel__slide--prev {
          }
          .carousel__slide--next {
          }
        }
      }
    }
  }
}
#features {
  @apply flex flex-col items-center px-4 py-10 text-center;
  @screen sm {
    @apply px-18;
  }
  > #heading {
    @apply mb-9 text-3xl font-bold;
    @screen sm {
      @apply text-5xl;
    }
  }
  > #desc {
    @apply mb-16 text-lg text-[#6D998F];
    @screen sm {
      @apply text-[28px];
    }
  }
  > #wrapper {
    @apply flex w-full flex-col items-start justify-center gap-x-8;
    @screen sm {
      @apply flex-row;
    }
    @screen md {
      @apply gap-x-24;
    }
    > #card {
      @apply flex flex-col justify-center text-center;
      @screen lg {
        @apply w-72;
      }
      img {
        @apply mb-4 h-52;
        @screen md {
          @apply mb-9 h-64;
        }
      }
      > #heading {
        @apply mb-4 text-[28px] font-bold;
      }
      > #desc {
        @apply mb-4 text-[18px] text-[#6D998F];
        @screen sm {
          @apply mb-0;
        }
      }
    }
  }
}
#possibilities {
  @apply flex flex-col items-center justify-center p-10;

  /* #wrapper {
    @apply w-[882px] h-[882px] relative;
    #circle {
      @apply absolute top-0 left-1/2 -z-10;
    }
  } */
  #header {
    @apply mb-10 pb-10 text-center text-[46px] font-bold;
  }
}
#use_cases {
  @apply flex flex-col items-center p-6;
  @screen lg {
    @apply p-24;
  }
  > #heading {
    @apply mb-9 text-center text-[46px] font-bold;
  }
  > #desc {
    @apply mb-16 text-[28px] text-[#6D998F];
  }
  > #wrapper {
    @apply flex w-full flex-col items-center justify-center gap-x-10;

    @screen sm {
      @apply flex-row;
    }
    .card {
      @apply flex w-72 flex-col items-center justify-center text-center font-aneklatin;
      > img {
        @apply mb-6 w-full;
      }
      > #header {
        @apply mb-4 text-[28px] font-semibold;
      }
      > #desc {
        @apply text-xl text-[#00000080];
      }
    }
  }
}
#trial {
  @apply bg-[#EFF3F5];
  #wrapper {
    @apply mx-auto max-w-[1200px];
    @apply px-4 py-16;
    @apply flex flex-col-reverse items-center justify-between;
    @screen md {
      @apply flex-row px-18 py-32;
    }
    > img {
      @apply mb-8 w-full;
      @screen md {
        @apply m-0 w-1/2;
      }
    }
    > #content_wrapper {
      @apply w-full;
      @screen md {
        @apply w-1/2;
      }
      > #header {
        @apply mb-9 text-[46px] font-bold;
      }
      > #desc {
        @apply mb-11 text-[28px] text-[#6D998F];
      }
      > #input_wrapper {
        @apply flex items-center justify-start;
        > input {
          @apply h-14 w-2/3 rounded-l-xl px-4;
          @apply border-y-2 border-l-2 border-[#D9D9D9] text-[#D9D9D9];
          @apply font-aneklatin font-medium;
        }
        > button {
          @apply h-14 w-32 rounded-r-xl bg-[#6D998F];
          @apply font-aneklatin font-semibold text-white;
        }
      }
    }
  }
}
</style>
