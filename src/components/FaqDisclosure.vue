<template>
  <div id="wrapper">
    <template v-for="faq in faqs">
      <Disclosure v-slot="{ open }">
        <div class="faq" :class="open ? 'bg-[#59839205]' : 'bg-[#598392]'">
          <DisclosureButton
            class="disclosure-button"
            :class="open ? 'border-b-2' : ''"
          >
            <span class="question" :class="open ? 'text-black' : ''">{{
              faq.question
            }}</span>

            <img v-if="open" src="@/assets/icons/minus.svg" alt="" />
            <img v-else src="@/assets/icons/plus.svg" alt="" />
          </DisclosureButton>
          <DisclosurePanel id="disclosure-panel">
            {{ faq.answer }}
          </DisclosurePanel>
        </div>
      </Disclosure>
    </template>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

const faqs = [
  {
    question: "What is ButFor?",
    answer:
      "ButFor is a software tool designed to automate the process of filing business interruption insurance claims. It uses advanced algorithms and machine learning technology to calculate your losses and provide comprehensive reports in minutes.",
  },
  {
    question: "How does ButFor work?",
    answer:
      "Simply upload your financial data into the software and [Product Name] will do the rest. It will automatically calculate your losses based on a range of factors, including revenue, expenses, and payroll. You can then generate detailed reports that you can use to file your claim with your insurance provider.",
  },
  {
    question: "Do I need any special software or hardware to use ButFor?",
    answer:
      "No, ButForis a cloud-based software tool that can be accessed from any internet-connected device, including computers, tablets, and smartphones.",
  },
  {
    question: "Is ButFor easy to use?",
    answer:
      "Yes, ButFor is designed to be user-friendly and intuitive. You don't need any special technical knowledge or training to use it.",
  },
  {
    question: "How accurate are the calculations provided by ButFor?",
    answer:
      "ButFor uses advanced algorithms and machine learning technology to ensure that its calculations are as accurate as possible. However, it's important to note that the accuracy of the results will depend on the accuracy of the data you input into the software.",
  },
  {
    question: "How much does ButFor cost?",
    answer:
      "Pricing for ButFor varies depending on your needs and the size of your business. Contact us for a customized quote.",
  },
  {
    question: "How long does it take to generate reports with ButFor?",
    answer:
      "Reports can be generated in just a few minutes, allowing you to quickly and efficiently file your claim with your insurance provider.",
  },
  {
    question: "Can ButFor be integrated with other software tools?",
    answer:
      "Yes, ButFor can be integrated with a range of other software tools, including accounting software and payroll systems.",
  },
  {
    question: "Is my data secure with ButFor?",
    answer:
      "Yes, ButFor takes data security very seriously. We use state-of-the-art encryption and security protocols to ensure that your data is always safe and secure.",
  },
  {
    question: "What kind of support does ButFor offer?",
    answer:
      "ButFor offers a range of support options, including email and phone support, as well as comprehensive online resources and tutorials. Our team is always available to answer your questions and provide assistance whenever you need it.",
  },
  {
    question: "What if I use an ERP not listed on the website?**",
    answer:
      "No problem. Simply manually upload your ERP/financial data and match it to the appropriate category. You will have to do this manually each month over the duration of the claim (not to worry, we will send you automated reminders!) and the system will process it just like we would process an integrated system’s data.",
  },
];
</script>
<style lang="postcss" scoped>
#wrapper {
  @apply flex flex-col w-full rounded-2xl bg-white;
  @apply px-4;

  @screen lg {
    @apply px-18;
  }
  > .faq {
    @apply px-4  mb-6 rounded-3xl;
    @screen lg {
      @apply px-9;
    }
    > .disclosure-button {
      @apply flex justify-between items-center w-full h-18 rounded-lg   focus:outline-none focus-visible:ring focus-visible:ring-opacity-75;
      @apply text-white;
      @screen lg {
        @apply h-20;
      }
      .question {
        @apply text-xl text-left font-semibold font-aneklatin;
        @screen lg {
          @apply text-[28px];
        }
      }
    }
    #disclosure-panel {
      @apply text-[#598392] text-sm py-6;
    }
  }
}
</style>
