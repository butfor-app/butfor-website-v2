<template>
  <div id="hero_section">
    <div id="bg_gradient"></div>
    <div id="heading">FireSide Chats</div>
    <div id="sub_heading">
      Join us as we hosts the industry's most prominent insurtech, risk &
      disaster recovery leaders. Want to be hosted by ButFor? We'd love to hear
      from you.
    </div>
    <button>Learn More</button>
  </div>
  <div id="event_history">
    <!-- <div id="heading">Previous Events & Webinars</div> -->
    <div id="slider_wrapper">
      <Carousel
        :items-to-show="1"
        :wrap-around="groupedEvents.length > 4"
        :snapAlign="'center'"
        class="h-auto w-screen max-w-[1200px]"
        v-model="currentSlide"
      >
        <slide v-for="(slideGroup, index) in groupedEvents" :key="index">
          <div
            id="slide_wrapper"
            class="flex h-full flex-col flex-nowrap items-start justify-around gap-y-6 xl:flex-row xl:flex-wrap xl:justify-between"
          >
            <FireSideCard
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
      Want to know when we host our next webinar with a risk, claims & insurtech
      leader?
    </div>
    <div class="w-full max-w-lg px-2">
      <ButForForm formId="32e9d6a5-21fe-49b1-af99-0b06119c032d" pageName="Fireside Chats" :bare="true" />
    </div>
  </div>
  <div id="view_demo">
    <div id="heading">Want to see ButFor in action?</div>
    <div id="sub_heading">
      ButFor automates business interruption claim preparation.
    </div>
    <div id="wrapper">
      <button id="demo_btn">
        <a href="https://www.butfor.co/book_demo">View Demo</a>
      </button>
      <button id="team_btn">
        <a href="https://www.butfor.co/book_demo">Speak to Our Team</a>
      </button>
      <button id="learn_btn">
        <a href="https://www.butfor.co/book_demo">Learn More</a>
      </button>
    </div>
  </div>
  <ContactForm />
</template>
<script setup>
import { useHead } from "@vueuse/head";
import { computed, ref } from "vue";
import { useGeneralData } from "@/stores/useGeneralData";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import FireSideCard from "@/components/FireSideCard.vue";
import ContactForm from "@/components/ContactForm.vue";
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

const { getFireSideChats } = useStrapi();

const fireSideChats = ref([]);
// const resp = await getFireSideChats();
// webinars.value = resp.results;
// console.log(webinars.value);

getFireSideChats().then((resp) => {
  fireSideChats.value = resp;
  // console.log(fireSideChats.value);
});

const currentSlide = ref(0);

const groupedEvents = computed(() => {
  const grouped = [];
  for (let i = 0; i < fireSideChats.value.length; i += 4) {
    grouped.push(fireSideChats.value.slice(i, i + 4));
  }
  return grouped;
});
// console.log(groupedEvents.value);
</script>
<style lang="postcss" scoped>
#hero_section {
  @apply flex flex-col items-center justify-center;
  @apply h-[calc(100vh)] py-4 text-center;
  @screen md {
    @apply h-[calc(100vh_-_144px)];
  }
  @apply bg-[url('@/assets/images/webinars-hero-bg.png')] bg-cover bg-top bg-no-repeat;
  > #heading {
    @apply mb-10 text-[46px] font-extrabold text-white;
  }
  > #sub_heading {
    @apply mb-9 w-2/4 font-aneklatin text-xl font-medium text-white;
  }
  > button {
    @apply h-11 w-44 rounded-full bg-white;
    @apply font-aneklatin font-semibold text-primary;
  }
}
#event_history {
  @apply flex flex-col py-16;
  > #heading {
    @apply mb-16 text-center text-[46px] font-extrabold;
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
        @apply mx-1 h-3 w-3;
        @apply cursor-pointer rounded-full bg-gray-400;
      }
      > .active {
        @apply w-8 bg-primary text-white;
      }
    }
  }
}
#reminder {
  @apply flex flex-col items-center;
  @apply bg-[#EFF3F5] py-16;
  > #heading {
    @apply mb-16 max-w-4xl text-center text-[46px] font-extrabold uppercase;
  }
}
#view_demo {
  @apply flex flex-col items-center;
  @apply py-16;

  > #heading {
    @apply mb-9 max-w-4xl text-center text-[46px] font-extrabold uppercase;
  }
  > #sub_heading {
    @apply mb-16 max-w-6xl text-center text-[28px] uppercase text-[#6D998F];
  }
  > #wrapper {
    @apply flex flex-col gap-y-6;
    @apply font-aneklatin font-medium;

    > button {
      @apply mx-auto h-14 w-48 cursor-pointer rounded-full;
    }
    > #demo_btn {
      @apply bg-[#6D998F] text-white;
    }
    > #team_btn {
      @apply bg-primary text-white;
    }
    > #learn_btn {
      @apply border border-primaryDark bg-white text-primaryDark;
    }
  }
}
</style>
