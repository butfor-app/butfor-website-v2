<template>
  <div id="hero_section">
    <!-- <img id="bg" src="@/assets/images/productpage_hero.png" alt="" /> -->
    <div id="bg_gradient"></div>
    <div id="heading">Get to know the ButFor platform</div>
    <div id="sub_heading">
      Preparing a business interruption claim has never been easier.
    </div>
    <button>Learn More</button>
  </div>
  <div id="slider">
    <div id="heading">THE FEATURES YOU NEED</div>
    <div id="wrapper">
      <Carousel
        id="thumbnails"
        :snapAlign="'center'"
        :items-to-show="3"
        :wrap-around="false"
        v-model="currentSlide"
        ref="thumbnail_carousel"
      >
        <Slide
          v-for="(tab, index) in featureSlider_tabs"
          :key="index + 1"
          :class="[currentSlide === index ? 'active_slide' : '']"
        >
          <button @click="currentSlide = index">
            {{ tab }}
          </button>
        </Slide>
      </Carousel>
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
      Over 80% of midsize businesses that start<br />with BUTFOR stick around
      for 4 or more years
    </div>
    <div id="desc">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      <br />Lorem Ipsum has been the industry's standard dummy.
    </div>
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
    <!-- <div id="wrapper">
      <img src="@/assets/images/dotted_circle.png" alt="" id="circle" />
    </div> -->
  </div>
  <div id="use_cases">
    <div id="heading">Customer stories and use cases</div>
    <div id="desc">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.<br />
      Lorem Ipsum has been the industry's standard dummy.
    </div>
    <div id="wrapper">
      <div class="card">
        <img src="@/assets/images/usecase_placeholder.png" alt="" />
        <div id="header">
          Lorem Ipsum is simply dummy text of the printing industry.
        </div>
        <div id="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since 1500s.
        </div>
      </div>
      <div class="card">
        <img src="@/assets/images/usecase_placeholder.png" alt="" />
        <div id="header">
          Lorem Ipsum is simply dummy text of the printing industry.
        </div>
        <div id="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since 1500s.
        </div>
      </div>
      <div class="card">
        <img src="@/assets/images/usecase_placeholder.png" alt="" />
        <div id="header">
          Lorem Ipsum is simply dummy text of the printing industry.
        </div>
        <div id="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since 1500s.
        </div>
      </div>
      <div class="card">
        <img src="@/assets/images/usecase_placeholder.png" alt="" />
        <div id="header">
          Lorem Ipsum is simply dummy text of the printing industry.
        </div>
        <div id="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since 1500s.
        </div>
      </div>
    </div>
  </div>
  <div id="trial">
    <div id="wrapper">
      <div id="content_wrapper">
        <div id="header">Try Butfor For free</div>
        <div id="desc">
          Learn the platform in less than an hour.<br />Become a power user in
          less than a day.
        </div>
        <div id="input_wrapper">
          <input type="text" placeholder="Enter your email" />
          <button>Start Trial</button>
        </div>
      </div>
      <img src="@/assets/images/trial.png" alt="" />
    </div>
  </div>
</template>
<script setup>
import { useHead } from "@vueuse/head";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import { onMounted, ref } from "vue";
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

const currentSlide = ref(0);

const slideTo = (val) => {
  currentSlide.value = val;
};
const thumbnail_carousel = ref(null);
// onMounted(() => {
//   // thumbnail_carousel.value.data.slideWidth = 500;
//   thumbnail_carousel.value.data.slideWidth.value = 500;
//   console.log(thumbnail_carousel.value.data);
//   console.log(thumbnail_carousel.value.data.slideWidth.value);
//   // console.log(thumbnail_carousel.value.data.slideWidth);
// });
const featureSlider_tabs = [
  "Customer & Claim Management",
  "Reporting and Analytics",
  "Approval Chains",
  "Claims Customization",
  "Find The Meaning Of Life",
];
const featureSlider_slides = [
  {
    heading:
      "Butfor provides users with various tools to make the claims process more efficient",
    desc: "From onboarding to claim submission and all the steps in between,  we provide our clients with the instruments they need for their unique claims process. ",
    img: new URL("@/assets/images/product_feature.png", import.meta.url).href,
  },
  {
    heading:
      "Butfor provides users with various tools to make the claims process more efficient",
    desc: "From onboarding to claim submission and all the steps in between,  we provide our clients with the instruments they need for their unique claims process. ",
    img: new URL("@/assets/images/product_feature.png", import.meta.url).href,
  },
  {
    heading:
      "Butfor provides users with various tools to make the claims process more efficient",
    desc: "From onboarding to claim submission and all the steps in between,  we provide our clients with the instruments they need for their unique claims process. ",
    img: new URL("@/assets/images/product_feature.png", import.meta.url).href,
  },
  {
    heading:
      "Butfor provides users with various tools to make the claims process more efficient",
    desc: "From onboarding to claim submission and all the steps in between,  we provide our clients with the instruments they need for their unique claims process. ",
    img: new URL("@/assets/images/product_feature.png", import.meta.url).href,
  },
  {
    heading:
      "Butfor provides users with various tools to make the claims process more efficient",
    desc: "From onboarding to claim submission and all the steps in between,  we provide our clients with the instruments they need for their unique claims process. ",
    img: new URL("@/assets/images/product_feature.png", import.meta.url).href,
  },
];
</script>
<style lang="postcss" scoped>
#hero_section {
  @apply flex flex-col items-center justify-center;
  @apply py-4 h-[calc(100vh)] text-center;
  @screen md {
    @apply h-[calc(100vh_-_171px)];
  }
  @apply bg-[url('@/assets/images/productpage_hero.png')] bg-no-repeat	bg-cover  bg-top;
  > #heading {
    @apply mb-10 text-[46px] font-extrabold text-white;
  }
  > #sub_heading {
    @apply mb-9 text-xl font-medium font-aneklatin text-white;
  }
  > button {
    @apply w-44 h-11 bg-white rounded-full;
    @apply text-primary  font-semibold font-aneklatin;
  }
}
#slider {
  @apply py-24;
  > #heading {
    @apply mb-16 text-[46px] font-bold text-center;
  }
  > #wrapper {
    @apply max-w-[1200px] mx-auto;
    > #thumbnails {
      @apply mb-10;
      .carousel__viewport {
        .carousel__track {
          .carousel__slide {
            @apply border-b-[1px] border-[#D9D9D9];
            > button {
              @apply flex items-center justify-center;
              @apply w-full text-[#4C7281] text-lg px-4;
              @screen md{
                @apply text-2xl px-0;
              }
            }
          }
          .active_slide {
            @apply border-b-2 border-[#6D998F];
            > button {
              @apply text-[#6D998F]  bg-[#4C728105] font-semibold;
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
              @apply w-full px-4 rounded-lg text-left;
              > div {
                @apply w-full;
                @screen md {
                  @apply w-1/2;
                }
                #heading {
                  @apply mb-4 text-4xl font-bold;
                  @screen md {
                    @apply mb-14;
                  }
                }
                #desc {
                  @apply text-xl font-aneklatin font-medium text-[#4C7281];
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
  @apply px-4 py-10 text-center flex flex-col items-center;
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
    @apply w-full flex flex-col gap-x-8 justify-center items-start;
    @screen sm {
      @apply flex-row;
    }
    @screen md {
      @apply gap-x-24;
    }
    > #card {
      @apply text-center flex flex-col justify-center;
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
        @apply text-[18px] mb-4 text-[#6D998F];
        @screen sm {
          @apply mb-0;
        }
      }
    }
  }
}
#possibilities {
  @apply p-10 flex flex-col justify-center items-center;

  /* #wrapper {
    @apply w-[882px] h-[882px] relative;
    #circle {
      @apply absolute top-0 left-1/2 -z-10;
    }
  } */
  #header {
    @apply text-[46px] mb-10 pb-10 font-bold text-center;
  }
}
#use_cases {
  @apply flex flex-col items-center p-6;
  @screen lg{
    @apply p-24;
  }
  > #heading {
    @apply mb-9 text-[46px] font-bold text-center;
  }
  > #desc {
    @apply mb-16 text-[28px] text-[#6D998F];
  }
  > #wrapper {
    @apply w-full flex flex-col gap-x-10  justify-center items-center;

    @screen sm {
      @apply flex-row;
    }
    .card {
      @apply w-72 text-center flex flex-col justify-center items-center font-aneklatin;
      > img {
        @apply w-full mb-6;
      }
      > #header {
        @apply mb-4 text-[28px]  font-semibold;
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
    @apply max-w-[1200px] mx-auto;
    @apply px-4 py-16;
    @apply flex flex-col-reverse justify-between items-center;
    @screen md {
      @apply flex-row px-18 py-32;
    }
    > img {
      @apply w-full mb-8;
      @screen md {
        @apply w-1/2 m-0;
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
        @apply flex justify-start items-center;
        > input {
          @apply w-2/3 h-14 px-4 rounded-l-xl;
          @apply border-y-2 border-l-2 border-[#D9D9D9] text-[#D9D9D9];
          @apply font-medium font-aneklatin;
        }
        > button {
          @apply w-32 h-14 bg-[#6D998F] rounded-r-xl;
          @apply text-white  font-semibold font-aneklatin;
        }
      }
    }
  }
}
</style>
