import { defineStore } from "pinia";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useGeneralData = defineStore("generaldata", {
  // other options...

  state: () => ({
    solutions: [
      {
        name: "Insurance Companies",
        desc: "We help insurance companies manage and validate all of their claim filings across multiple accounts.",
        icon: "approval_delegation",
        type: "company",
      },
      {
        name: "Claim Consultants",
        desc: "We help third party consultants automate the claims process for each individual client in a centralized system.",
        icon: "consultant",
        type: "company",
      },
      {
        name: "Insurance Brokerages",
        desc: "Providing brokers confidence in claims management software for their clients.",
        icon: "real_estate_agent",
        type: "company",
      },
      {
        name: "risk & compliance",
        desc: "BUTFOR gives RM the tools necessary to work on complex claims internally.",
        icon: "",
        type: "role",
      },
      {
        name: "Claims",
        desc: "We help claims managers be more efficient in handling multiple claims",
        icon: "",
        type: "role",
      },
      {
        name: "Finance",
        desc: "Finance professionals use our tool to efficiently process claims, decreasing time spent across the board.",
        icon: "",
        type: "role",
      },
      {
        name: "forensic accounting",
        desc: "Our software spots trends in data and makes analysis both less complex and manual.",
        icon: "",
        type: "role",
      },
      {
        name: "executive leadership",
        desc: "Help recoup losses and balance financial sheets more quickly.",
        icon: "",
        type: "role",
      },
      {
        name: "Natural disasters",
        desc: "Don't have anything to write here",
        icon: "",
        type: "claim",
      },
    ],
    features: [
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
    ],
  }),
  getters: {
    solutionsByCompanyType: (state) => {
      return state.solutions.filter((item) => item.type === "company");
    },
    solutionsByRole: (state) => {
      return state.solutions.filter((item) => item.type === "role");
    },
    solutionsByClaimType: (state) => {
      return state.solutions.filter((item) => item.type === "claim");
    },
  },
  actions: {},
});
