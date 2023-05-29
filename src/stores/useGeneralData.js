import { defineStore } from "pinia";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useGeneralData = defineStore("generaldata", {
  // other options...

  state: () => ({
    solutionCards: [
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
        name: "Risk & Compliance",
        desc: "BUTFOR gives RM the tools necessary to work on complex claims internally.",
        icon: "fact_check",
        type: "role",
      },
      {
        name: "Claims",
        desc: "We help claims managers be more efficient in handling multiple claims",
        icon: "quick_reference",
        type: "role",
      },
      {
        name: "Finance",
        desc: "Finance professionals use our tool to efficiently process claims, decreasing time spent across the board.",
        icon: "attach_money",
        type: "role",
      },
      {
        name: "Forensic Accounting",
        desc: "Our software spots trends in data and makes analysis both less complex and manual.",
        icon: "account_balance",
        type: "role",
      },
      {
        name: "Executive Leadership",
        desc: "Help recoup losses and balance financial sheets more quickly.",
        icon: "group",
        type: "role",
      },
      {
        name: "Natural Disasters",
        desc: "Natural disasters such as hurricanes, earthquakes, floods, and wildfires can cause widespread damage and disruption to businesses, resulting in significant financial losses",
        icon: "flood",
        type: "claim",
      },
      {
        name: "Fire/explosion",
        desc: "Fires can cause severe damage to infrastructure and inventory, disrupt operations, and pose safety risks to employees and customers, leading to significant financial losses for affected businesses.",
        icon: "fire_extinguisher",
        type: "claim",
      },
      {
        name: "Equipment breakdown",
        desc: "Equipment breakdowns can cause unplanned downtime, interrupt operations, and result in costly repairs or replacement, leading to significant financial losses for businesses that rely heavily on machinery and equipment.",
        icon: "construction",
        type: "claim",
      },
      {
        name: "Cyber-attacks",
        desc: "Cyber attacks can cause data breaches, system failures, and business interruption, leading to significant financial losses, reputational damage, and regulatory fines for affected businesses.",
        icon: "cyberattacks",
        type: "claim",
      },
      {
        name: "Power outages",
        desc: "Power outages can disrupt operations, damage electrical equipment, and result in data loss or corruption, leading to significant financial losses for businesses that rely heavily on electricity.",
        icon: "power_off",
        type: "claim",
      },
      {
        name: "City shutdowns",
        desc: "City shutdowns, such as those caused by public health emergencies or civil unrest, can lead to business interruption, supply chain disruptions, and financial losses for affected businesses.",
        icon: "city_shutdown",
        type: "claim",
      },
      {
        name: "Pandemic",
        desc: "Pandemics can cause widespread illness, social distancing measures, and labor disruptions, leading to significant financial losses and operational challenges for businesses of all sizes and industries",
        icon: "pandemics",
        type: "claim",
      },
      {
        name: "Construction/renovation",
        desc: "Faulty construction can cause property damage, safety hazards, and business interruption, resulting in significant financial losses and reputational damage for property owners and tenants.",
        icon: "foundation",
        type: "claim",
      },
    ],
    solutionPages: [
      {
        routeName: "natural-disasters",
        title: "Natural Disasters",
        desc: "Natural disasters can cause business interruption by damaging physical property, disrupting supply chains, and causing employee displacement. This can lead to temporary or permanent closures and loss of revenue for affected businesses.",
        bg: "/src/assets/images/solutions/natural-disasters-hero-bg.png",
        type: "claim",
        features: [
          {
            heading: "Loss of Income & Revenue",
            desc: "Natural disasters can cause physical damage, disrupt supply chains, and displace employees, all of which can lead to a loss of income for businesses due to reduced sales, increased costs, and decreased productivity, potentially resulting in temporary or permanent closures.",
            img: "feature-1.png",
          },
          {
            heading: "Property  Damage & Extra Expenses",
            desc: "Natural disasters can lead to significant increases in expenses for businesses due to repairs, replacement of damaged equipment and inventory, hiring additional staff, and implementing disaster recovery and business continuity plans, all of which can put a strain on the financial resources of affected businesses.",
            img: "feature-2.png",
          },
          {
            heading: "Make-Up Sales and Restoration",
            desc: "The damage period does not end until business reach pre-loss income levels. This period between the date a business resumes “normal” operations and ending when the business reaches pre-loss income levels is referred to as the “Ramp-Up” period. Reasons for this include: loss of customers, a need to recreate infrastructure  to generate sales, and incurring costs at pre-loss levels without an immediate increase in revenue:",
            img: "feature-3.png",
          },
        ],
      },
      {
        routeName: "fire-or-explosion",
        title: "Fire or explosion",
        desc: "Fire and explosions are commonplace in many  manufacturing and industrial industries. The resulting closures, loss of inventory, and damage to reputation can lead to significant financial losses for affected businesses.",
        bg: "/src/assets/images/solutions/fire-hero-bg.png",
        type: "claim",
        features: [
          {
            heading: "Loss of Income & Revenue",
            desc: "Natural disasters can cause physical damage, disrupt supply chains, and displace employees, all of which can lead to a loss of income for businesses due to reduced sales, increased costs, and decreased productivity, potentially resulting in temporary or permanent closures.",
            img: "feature-1.png",
          },
          {
            heading: "Property  Damage & Extra Expenses",
            desc: "Natural disasters can lead to significant increases in expenses for businesses due to repairs, replacement of damaged equipment and inventory, hiring additional staff, and implementing disaster recovery and business continuity plans, all of which can put a strain on the financial resources of affected businesses.",
            img: "feature-2.png",
          },
          {
            heading: "Make-Up Sales and Restoration",
            desc: "The damage period does not end until business reach pre-loss income levels. This period between the date a business resumes “normal” operations and ending when the business reaches pre-loss income levels is referred to as the “Ramp-Up” period. Reasons for this include: loss of customers, a need to recreate infrastructure  to generate sales, and incurring costs at pre-loss levels without an immediate increase in revenue:",
            img: "feature-3.png",
          },
        ],
      },
      {
        routeName: "equipment-breakdown",
        title: "Equipment Breakdown",
        desc: "Equipment and Machinery are vital parts to many businesses and breakdowns are bound to happen. Halting production, delaying orders, and the resulting loss of revenue and decreased productivity are all recoverable assets.",
        bg: "/src/assets/images/solutions/equiptment-hero-bg.png",
        type: "claim",
        features: [
          {
            heading: "Loss of Income & Revenue",
            desc: "Natural disasters can cause physical damage, disrupt supply chains, and displace employees, all of which can lead to a loss of income for businesses due to reduced sales, increased costs, and decreased productivity, potentially resulting in temporary or permanent closures.",
            img: "feature-1.png",
          },
          {
            heading: "Property  Damage & Extra Expenses",
            desc: "Natural disasters can lead to significant increases in expenses for businesses due to repairs, replacement of damaged equipment and inventory, hiring additional staff, and implementing disaster recovery and business continuity plans, all of which can put a strain on the financial resources of affected businesses.",
            img: "feature-2.png",
          },
          {
            heading: "Make-Up Sales and Restoration",
            desc: "The damage period does not end until business reach pre-loss income levels. This period between the date a business resumes “normal” operations and ending when the business reaches pre-loss income levels is referred to as the “Ramp-Up” period. Reasons for this include: loss of customers, a need to recreate infrastructure  to generate sales, and incurring costs at pre-loss levels without an immediate increase in revenue:",
            img: "feature-3.png",
          },
        ],
      },
      {
        routeName: "power-outages",
        title: "Power Outages",
        desc: "Power outages can cause business interruption by halting production, disabling equipment and technology, and disrupting communication and data systems. Whether a few hours or a few days, any small disruption can have a large monetary effect.",
        bg: "/src/assets/images/solutions/power-hero-bg.png",
        type: "claim",
        features: [
          {
            heading: "Loss of Income & Revenue",
            desc: "Power outages can halt production, disrupt supply chains, and displace employees, all of which can lead to a loss of income for businesses due to reduced sales, increased costs, and decreased productivity, potentially resulting in temporary or permanent closures.",
            img: "feature-1.png",
          },
          {
            heading: "Property  Damage & Extra Expenses",
            desc: "Power outages can lead to significant increases in expenses for businesses due to repairs, replacement of damaged equipment and inventory, hiring additional staff, and implementing disaster recovery and business continuity plans, all of which can put a strain on the financial resources of affected businesses.",
            img: "feature-2.png",
          },
          {
            heading: "Make-Up Sales and Restoration",
            desc: "The damage period does not end until business reach pre-loss income levels. This period between the date a business resumes “normal” operations and ending when the business reaches pre-loss income levels is referred to as the “Ramp-Up” period. Reasons for this include: loss of customers, a need to recreate infrastructure  to generate sales, and incurring costs at pre-loss levels without an immediate increase in revenue.",
            img: "feature-3.png",
          },
        ],
      },
      {
        routeName: "faulty-construction",
        title: "FAULTY Construction",
        desc: "Broken pipes, sprinkler systems, structural damage, or electrical malfunctioning are all causes of business interruption for companies that rely on rental and operational units. While such incidents may occur unexpectedly, it is important for businesses to safeguard their operations against potential financial liabilities.",
        bg: "/src/assets/images/solutions/faulty-hero-bg.png",
        type: "claim",
        features: [
          {
            heading: "Loss of Income & Revenue",
            desc: "Faulty construction is usually caused by physical damage and it can disrupt supply chains and displace employees, all of which can lead to a loss of income for businesses due to reduced sales, increased costs, and decreased productivity, potentially resulting in temporary or permanent closures.",
            img: "feature-1.png",
          },
          {
            heading: "Property  Damage & Extra Expenses",
            desc: "Construction & ensuing renovations can lead to significant increases in expenses for businesses due to repairs, replacement of damaged equipment and inventory, hiring additional staff, and implementing disaster recovery and business continuity plans, all of which can put a strain on the financial resources of affected businesses.",
            img: "feature-2.png",
          },
          {
            heading: "Make-Up Sales and Restoration",
            desc: "The damage period does not end until business reach pre-loss income levels. This period between the date a business resumes “normal” operations and ending when the business reaches pre-loss income levels is referred to as the “Ramp-Up” period. Reasons for this include: loss of customers, a need to recreate infrastructure  to generate sales, and incurring costs at pre-loss levels without an immediate increase in revenue.",
            img: "feature-3.png",
          },
        ],
      },
      {
        routeName: "cyber-attacks",
        title: "cyber attacks",
        desc: "Cyber attacks can disrupt critical systems and applications, stealing sensitive data, and compromising business operations, leading to downtime, lost productivity, and financial losses. With the increasing frequency and complexity of cyber attacks, organizations need to implement a comprehensive incident response plan to mitigate the impact of cyber incidents and ensure business continuity.",
        bg: "/src/assets/images/solutions/cyber-hero-bg.png",
        type: "claim",
        features: [
          {
            heading: "Loss of Income & Revenue",
            desc: "Cyber attacks can disrupt critical systems & in turn disrupt supply chains, and displace employees, all of which can lead to a loss of income for businesses due to reduced sales, increased costs, and decreased productivity, potentially resulting in temporary or permanent closures.",
            img: "feature-1.png",
          },
          {
            heading: "Property  Damage & Extra Expenses",
            desc: "Cyber attacks can lead to significant increases in expenses for businesses due to rectifying and restoring business-critical systems, hiring additional staff, and implementing disaster recovery and business continuity plans, all of which can put a strain on the financial resources of affected businesses.",
            img: "feature-2.png",
          },
          {
            heading: "Make-Up Sales and Restoration",
            desc: "The damage period does not end until business reach pre-loss income levels. This period between the date a business resumes “normal” operations and ending when the business reaches pre-loss income levels is referred to as the “Ramp-Up” period. Reasons for this include: loss of customers, a need to recreate infrastructure  to generate sales, and incurring costs at pre-loss levels without an immediate increase in revenue.",
            img: "feature-3.png",
          },
        ],
      },
      {
        routeName: "city-shutdowns",
        title: "city shutdowns",
        desc: "City shutdowns, such as those caused by civil unrest, protests, or security threats, can disrupt transportation, supply chains, and operations, leading to business interruption, lost revenue, and increased costs. To mitigate the impact of city shutdowns, organizations can develop contingency plans, establish alternative supply routes and transportation modes, leverage technology and remote work arrangements, and maintain open communication with employees, customers, and stakeholders.",
        bg: "/src/assets/images/solutions/city-hero-bg.png",
        type: "claim",
        features: [
          {
            heading: "Loss of Income & Revenue",
            desc: "City shutdowns directly disrupt supply chains and displace employees, all of which can lead to a loss of income for businesses due to reduced sales, increased costs, and decreased productivity, potentially resulting in temporary or permanent closures.",
            img: "feature-1.png",
          },
          {
            heading: "Ceased operations & Extra Expenses",
            desc: "City shutdowns can lead to significant increases in expenses for businesses due to operations, supply chain & inventory disruption, hiring additional staff, and implementing disaster recovery and business continuity plans, all of which can put a strain on the financial resources of affected businesses.",
            img: "feature-2.png",
          },
          {
            heading: "Make-Up Sales and Restoration",
            desc: "The damage period does not end until business reach pre-loss income levels. This period between the date a business resumes “normal” operations and ending when the business reaches pre-loss income levels is referred to as the “Ramp-Up” period. Reasons for this include: loss of customers, a need to recreate infrastructure  to generate sales, and incurring costs at pre-loss levels without an immediate increase in revenue.",
            img: "feature-3.png",
          },
        ],
      },
      {
        routeName: "pandemics",
        title: "Pandemics",
        desc: "Pandemics have a great effect on operations, which can be recovered under the proper policy through a business interruption claim. Although we hope to never experience another in our lifetime, ensure your business is prepared for whatever emergencies the world may throw your way.",
        bg: "/src/assets/images/solutions/city-hero-bg.png",
        type: "claim",
        features: [
          {
            heading: "Loss of Income & Revenue",
            desc: "Pandemics can cause major operational disruptions, including supply chains and displace employees, all of which can lead to a loss of income for businesses due to reduced sales, increased costs, and decreased productivity, potentially resulting in temporary or permanent closures.",
            img: "feature-1.png",
          },
          {
            heading: "Operational shutdown & Production halts",
            desc: "Pandemics can lead to significant increases in expenses for businesses due to operations and inventory, displacement, hiring additional staff, and implementing disaster recovery and business continuity plans, all of which can put a strain on the financial resources of affected businesses.",
            img: "feature-2.png",
          },
          {
            heading: "Make-Up Sales and Restoration",
            desc: "The damage period does not end until business reach pre-loss income levels. This period between the date a business resumes “normal” operations and ending when the business reaches pre-loss income levels is referred to as the “Ramp-Up” period. Reasons for this include: loss of customers, a need to recreate infrastructure  to generate sales, and incurring costs at pre-loss levels without an immediate increase in revenue.",
            img: "feature-3.png",
          },
        ],
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
      return state.solutionCards.filter((item) => item.type === "company");
    },
    solutionsByRole: (state) => {
      return state.solutionCards.filter((item) => item.type === "role");
    },
    solutionsByClaimType: (state) => {
      return state.solutionCards.filter((item) => item.type === "claim");
    },
  },
  actions: {
    getSolutionPageData: function (routeName) {
      return this.solutionPages.find((item) => item.routeName === routeName);
    },
  },
});
