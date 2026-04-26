<template>
  <div id="hero_section">
    <div id="bg_gradient"></div>
    <div id="heading">Events & Webinars</div>
    <div id="sub_heading">
      Join us as we hosts the industry's most prominent insurtech, risk & disaster recovery leaders. Want to be hosted by ButFor? We'd love to hear from you.
    </div>
    <button>Learn More</button>
  </div>
  <div id="event_history">
    <div id="heading">Previous Events & Webinars</div>
    <div id="slider_wrapper">
      <Carousel
        :items-to-show="1"
        :wrap-around="groupedEvents.length > 4"
        :snapAlign="'center'"
        class="w-screen max-w-[1200px] h-auto"
        v-model="currentSlide"
      >
        <slide v-for="(slideGroup, index) in groupedEvents" :key="index">
          <div
            id="slide_wrapper"
            class="h-full flex xl:flex-wrap xl:flex-row flex-col flex-nowrap items-start justify-around xl:justify-between gap-y-6"
          >
            <WebinarCard
              class="w-full xl:w-[49%]"
              v-for="slide in slideGroup"
              :key="slide.id"
              :id="slide.id"
              :values="slide.attributes"
            />
          </div>
        </slide>
      </Carousel>
      <div id="pagination">
        <template v-for="(page, index) in groupedEvents.length" :key="index">
          <div
            :class="currentSlide + 1 === page ? 'active' : ''"
            @click="currentSlide = page - 1"
          ></div>
        </template>
      </div>
    </div>
  </div>
  <div id="reminder">
    <div id="heading">
      Want to know when we host our next webinar with a risk, claims & insurtech leader?
    </div>
  </div>
  <div id="view_demo">
    <div id="heading">Want to see ButFor in action?</div>
    <div id="sub_heading">
      ButFor automates business interruption claim preparation.
    </div>
    <div id="wrapper">
      <button id="demo_btn"><a href="https://www.butfor.co/book_demo">View Demo</a></button>
      <button id="team_btn"><a href="https://www.butfor.co/book_demo">Speak to Our Team</a></button>
      <button id="learn_btn"><a href="https://www.butfor.co/book_demo">Learn More</a></button>
    </div>
  </div>
  <ButForForm formId="ee347165-05ed-4624-ac37-26f820e1545f" pageName="Webinars" />
</template>
<script setup>
import { useHead } from "@vueuse/head";
import { computed, ref } from "vue";
import { useGeneralData } from "@/stores/useGeneralData";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import WebinarCard from "@/components/WebinarCard.vue";
import ButForForm from "@/components/ButForForm.vue";
import useStrapi from "@/composables/useStrapi";

useHead({
  title: "Butfor - Events & Webinars",
  meta: [
    {
      name: "description",
      content:
        "Butfor is a tool that automates business interruption insurance claims. Calculate your losses & build comprehensive reports in a fraction of the time.",
    },
  ],
});

const { getWebinars } = useStrapi();

const webinars = ref([]);
// const resp = await getWebinars();
// webinars.value = resp.results;
// console.log(webinars.value);

getWebinars().then((resp) => {
  webinars.value = resp;
  // console.log(webinars.value);
});

const currentSlide = ref(0);

const groupedEvents = computed(() => {
  const grouped = [];
  for (let i = 0; i < webinars.value.length; i += 4) {
    grouped.push(webinars.value.slice(i, i + 4));
  }
  return grouped;
});
// console.log(groupedEvents.value);
</script>
<style lang="postcss" scoped>
#hero_section {
  @apply flex flex-col items-center justify-center;
  @apply py-4 h-[calc(100vh)] text-center;
  @screen md {
    @apply h-[calc(100vh_-_144px)];
  }
  @apply bg-[url('@/assets/images/webinars-hero-bg.png')] bg-no-repeat	bg-cover  bg-top;
  > #heading {
    @apply mb-10 text-[46px] font-extrabold text-white;
  }
  > #sub_heading {
    @apply mb-9 w-2/4 text-xl font-medium font-aneklatin text-white;
  }
  > button {
    @apply w-44 h-11 bg-white rounded-full;
    @apply text-primary  font-semibold font-aneklatin;
  }
}
#event_history {
  @apply py-16 flex flex-col;
  > #heading {
    @apply mb-16 text-[46px] font-extrabold text-center;
  }
  > #slider_wrapper {
    @apply flex flex-col items-center gap-x-4;
    @apply px-6;
    @apply overscroll-none;
    > .carousel__track {
      /* @apply gap-x-10; */
      /* > .carousel__slide {
        > .slide_wrapper {
          @apply flex flex-wrap;
        }
      } */
    }
    > #pagination {
      @apply flex justify-center;
      @apply mt-10;
      > div {
        @apply w-3 h-3 mx-1;
        @apply bg-gray-400 rounded-full cursor-pointer;
      }
      > .active {
        @apply w-8 bg-primary text-white;
      }
    }
  }
}
#reminder {
  @apply flex flex-col items-center;
  @apply py-16 bg-[#EFF3F5];
  > #heading {
    @apply max-w-4xl mb-16 text-[46px] text-center font-extrabold uppercase;
  }
}
#view_demo {
  @apply flex flex-col items-center;
  @apply py-16;

  > #heading {
    @apply max-w-4xl mb-9 text-[46px] text-center font-extrabold uppercase;
  }
  > #sub_heading {
    @apply max-w-6xl mb-16 text-center text-[28px] text-[#6D998F] uppercase;
  }
  > #wrapper {
    @apply flex flex-col gap-y-6;
    @apply font-aneklatin font-medium;

    > button {
      @apply w-48 h-14 rounded-full mx-auto cursor-pointer;
    }
    > #demo_btn {
      @apply bg-[#6D998F] text-white;
    }
    > #team_btn {
      @apply bg-primary text-white;
    }
    > #learn_btn {
      @apply border bg-white border-primaryDark text-primaryDark;
    }
  }
}
</style>
