<template>
  <NavBar />
  <div id="hero_section">
    <img id="bg" src="@/assets/images/productpage_hero.png" alt="" />
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
        <!-- <template #slides="{ slideWidth }"> -->
        <Slide
          v-for="(tab, index) in featureSlider_tabs"
          :key="index + 1"
          :class="[currentSlide === index ? 'active_slide' : '']"
        >
          <button @click="currentSlide = index">
            {{ tab }}
          </button>
        </Slide>
        <!-- </template> -->
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
          <!-- {{ slide }} -->
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
        <img src="@/assets/images/feature_2.svg" alt="" />
        <div id="heading">Serve more <br />customers</div>
        <div id="desc">
          By reducing time spent on manual labor and reducing the corresponding
          fees, users are able to take on more claims at a greater benefit to
          their client.
        </div>
      </div>
      <div id="card">
        <img src="@/assets/images/feature_1.svg" alt="" />
        <div id="heading">Reduce email <br />volume by 50%</div>
        <div id="desc">
          Our ERP integration tool minimizes wasteful back and forth with the
          client and lessens the time and effort placed on the client for data
          retrieval.
        </div>
      </div>
      <div id="card">
        <img src="@/assets/images/feature_1.svg" alt="" />
        <div id="heading">Get started in <br />an hour</div>
        <div id="desc">
          We provide an centralized system that allows the user to organize and
          manage multiple claims in once place with limited involvement from the
          client.
        </div>
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
    <img src="@/assets/images/trial.png" alt="" />
    <div id="wrapper">
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
  </div>
  <Footer />
</template>
<script setup>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import { onMounted, ref } from "vue";

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
  @apply flex flex-col items-center;
  @apply h-[690px] relative;
  @apply text-center px-72 py-60;
  > #bg {
    @apply absolute top-0 left-0 -z-20;
  }
  > #bg_gradient {
    @apply w-full h-full absolute top-0 left-0 -z-10 bg-gradient-to-b from-[#01161E90] to-[#59839290];
  }
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
    > #thumbnails {
      @apply mb-10;
      .carousel__viewport {
        .carousel__track {
          .carousel__slide {
            @apply border-b-2 border-[#D9D9D9];
            > button {
              @apply flex items-center justify-center;
              @apply w-full h-10 text-[#4C7281] text-2xl;
            }
          }
          .active_slide {
            @apply border-b-2 border-[#4C7281];
            > button {
              @apply text-[#6D998F]  bg-[#4C728105] font-semibold;
            }
          }
          ..carousel__slide--active {
          }
          .carousel__slide--prev {
          }
          .carousel__slide--next {
          }
        }
      }
    }
    > #gallery {
      /* @apply px-18; */
      .carousel__viewport {
        .carousel__track {
          .carousel__slide {
            > div {
              @apply flex items-center justify-center;
              @apply w-full rounded-lg;
              > div {
                #heading {
                  @apply mb-14 text-4xl font-bold;
                }
                #desc {
                  @apply text-xl font-aneklatin font-medium text-[#4C7281]; 
                }
              }
              img {
                @apply w-1/2;
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
  @apply px-18 py-10 text-center flex flex-col items-center;
  > #heading {
    @apply mb-9 text-[46px] font-bold;
  }
  > #desc {
    @apply mb-16 text-[28px] text-[#6D998F];
  }
  > #wrapper {
    @apply w-full flex gap-x-24  justify-center items-center;
    > #card {
      @apply w-72 text-center flex flex-col justify-center;
      img {
        @apply mb-9;
      }
      > #heading {
        @apply mb-4 text-[28px] font-bold;
      }
      > #desc {
        @apply text-[18px] text-[#6D998F];
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
  @apply flex flex-col items-center p-24;
  > #heading {
    @apply mb-9 text-[46px] font-bold text-center;
  }
  > #desc {
    @apply mb-16 text-[28px] text-[#6D998F];
  }
  > #wrapper {
    @apply w-full flex gap-x-10  justify-center items-center;

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
  @apply h-[520px] px-18 py-32 relative bg-[#EFF3F5];
  > img {
    @apply absolute top-16 right-18;
  }
  > #wrapper {
    @apply w-1/2;
    > #header {
      @apply mb-9 text-[46px] font-bold;
    }
    > #desc {
      @apply mb-11 text-[28px] text-[#6D998F];
    }
    > #input_wrapper {
      @apply flex justify-start items-center;
      > input {
        @apply w-[500px] h-14 px-4 rounded-l-xl;
        @apply border-y-2 border-l-2 border-[#D9D9D9] text-[#D9D9D9];
        @apply font-medium font-aneklatin;
      }
      > button {
        @apply w-24 h-14 bg-[#6D998F] rounded-r-xl;
        @apply text-white  font-semibold font-aneklatin;
      }
    }
  }
}
</style>
