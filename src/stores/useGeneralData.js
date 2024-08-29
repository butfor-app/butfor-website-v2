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
        name: "Enterprise",
        desc: "Enterprises can use ButFor to prepare business interruption insurance claims internally.",
        icon: "group",
        type: "company",
        routeName: "enterprise",
      },
      {
        name: "Insurance Companies",
        desc: "We help insurance companies manage and validate all of their claim filings across multiple accounts.",
        icon: "approval_delegation",
        type: "company",
        routeName: "insurance-companies",
      },
      {
        name: "Claim Consultants",
        desc: "We help third party consultants automate the claims process for each individual client in a centralized system.",
        icon: "consultant",
        type: "company",
        routeName: "claim-managers",
      },
      {
        name: "Insurance Brokerages",
        desc: "Providing brokers confidence in claims management software for their clients.",
        icon: "real_estate_agent",
        type: "company",
        routeName: "insurance-brokers",
      },
      {
        name: "Law Firms",
        desc: "ButFor efficiently manages and processes claims for your clients, streamlining the litigation process and reducing costs.",
        icon: "account_balance",
        type: "company",
        routeName: "law-firms",
      },
      {
        name: "Risk & Compliance",
        desc: "BUTFOR gives RM the tools necessary to work on complex claims internally.",
        icon: "fact_check",
        type: "role",
        routeName: "risk-compliance",
      },
      {
        name: "Claims",
        desc: "We help claims managers be more efficient in handling multiple claims",
        icon: "quick_reference",
        type: "role",
        routeName: "claim-managers",
      },
      {
        name: "Finance",
        desc: "Finance professionals use our tool to efficiently process claims, decreasing time spent across the board.",
        icon: "attach_money",
        type: "role",
        routeName: "finance-analysts",
      },
      {
        name: "Forensic Accounting",
        desc: "Our software spots trends in data and makes analysis both less complex and manual.",
        icon: "account_balance",
        type: "role",
        routeName: "forensic-accountants",
      },
      {
        name: "Executive Leadership",
        desc: "Help recoup losses and balance financial sheets more quickly.",
        icon: "group",
        type: "role",
        routeName: "executive-teams",
      },
      {
        name: "Natural Disasters",
        desc: "Natural disasters such as hurricanes, earthquakes, floods, and wildfires can cause widespread damage and disruption to businesses, resulting in significant financial losses",
        icon: "flood",
        type: "claim",
        routeName: "natural-disasters",
      },
      {
        name: "Fire/explosion",
        desc: "Fires can cause severe damage to infrastructure and inventory, disrupt operations, and pose safety risks to employees and customers, leading to significant financial losses for affected businesses.",
        icon: "fire_extinguisher",
        type: "claim",
        routeName: "fire-or-explosion",
      },
      {
        name: "Equipment breakdown",
        desc: "Equipment breakdowns can cause unplanned downtime, interrupt operations, and result in costly repairs or replacement, leading to significant financial losses for businesses that rely heavily on machinery and equipment.",
        icon: "construction",
        type: "claim",
        routeName: "equipment-breakdown",
      },
      {
        name: "Cyber-attacks",
        desc: "Cyber attacks can cause data breaches, system failures, and business interruption, leading to significant financial losses, reputational damage, and regulatory fines for affected businesses.",
        icon: "cyberattacks",
        type: "claim",
        routeName: "cyber-attacks",
      },
      {
        name: "Power outages",
        desc: "Power outages can disrupt operations, damage electrical equipment, and result in data loss or corruption, leading to significant financial losses for businesses that rely heavily on electricity.",
        icon: "power_off",
        type: "claim",
        routeName: "power-outages",
      },
      {
        name: "City shutdowns",
        desc: "City shutdowns, such as those caused by public health emergencies or civil unrest, can lead to business interruption, supply chain disruptions, and financial losses for affected businesses.",
        icon: "city_shutdown",
        type: "claim",
        routeName: "city-shutdowns",
      },
      {
        name: "Pandemic",
        desc: "Pandemics can cause widespread illness, social distancing measures, and labor disruptions, leading to significant financial losses and operational challenges for businesses of all sizes and industries",
        icon: "pandemics",
        type: "claim",
        routeName: "pandemics",
      },
      {
        name: "Construction/renovation",
        desc: "Faulty construction can cause property damage, safety hazards, and business interruption, resulting in significant financial losses and reputational damage for property owners and tenants.",
        icon: "foundation",
        type: "claim",
        routeName: "faulty-construction",
      },
    ],
    solutionPages: [
      //by claim type
      {
        routeName: "natural-disasters",
        title: "Natural Disasters",
        desc: "Natural disasters can cause business interruption by damaging physical property, disrupting supply chains, and causing employee displacement. This can lead to temporary or permanent closures and loss of revenue for affected businesses.",
        bg: new URL(
          "/src/assets/images/solutions/natural-disasters-hero-bg.png",
          import.meta.url,
        ).href,
        type: "claim",
        hubspot_form_id: "83efaaa1-4ea3-4a48-b759-c2f345c5a1e3",
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
        bg: new URL(
          "/src/assets/images/solutions/fire-hero-bg.png",
          import.meta.url,
        ).href,
        type: "claim",
        hubspot_form_id: "3a05470c-a725-465f-8d47-737f1a841504",
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
        bg: new URL(
          "/src/assets/images/solutions/equiptment-hero-bg.png",
          import.meta.url,
        ).href,
        type: "claim",
        hubspot_form_id: "0b3cea9a-c06f-43ba-8fb7-c5b94a6bb7f3",
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
        bg: new URL(
          "/src/assets/images/solutions/power-hero-bg.png",
          import.meta.url,
        ).href,
        type: "claim",
        hubspot_form_id: "09d5a574-e92d-4d37-8ef2-82334b6e5dd5",
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
        bg: new URL(
          "/src/assets/images/solutions/faulty-hero-bg.png",
          import.meta.url,
        ).href,
        type: "claim",
        hubspot_form_id: "1588984d-7eec-4d96-b966-2ee70a48fae1",
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
        bg: new URL(
          "/src/assets/images/solutions/cyber-hero-bg.png",
          import.meta.url,
        ).href,
        type: "claim",
        hubspot_form_id: "d63f9ec2-b081-4914-94f5-5f28d7f7bac7",
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
        bg: new URL(
          "/src/assets/images/solutions/city-hero-bg.png",
          import.meta.url,
        ).href,
        type: "claim",
        hubspot_form_id: "f8073077-c91d-4516-a2ab-6ebcd2068461",
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
        bg: new URL(
          "/src/assets/images/solutions/city-hero-bg.png",
          import.meta.url,
        ).href,
        type: "claim",
        hubspot_form_id: "728467d7-908e-447e-bca7-33d08af82b5e",
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
      // By company type
      {
        routeName: "enterprise",
        title: "Enterprise",
        desc: "Enterprises can use our software to automate and streamline insurance claim preparation internally. By using analytics and machine learning algorithms, our software can help businesses make more informed decisions and optimize their insurance claims and associated costs without a need for external consultants.",
        bg: new URL(
          "/src/assets/images/solutions/enterprise-hero-bg.png",
          import.meta.url,
        ).href,
        type: "company",
        hubspot_form_id: "6114c0b8-ac35-43c7-bd6e-864e5f09c3ea",
        features: [
          {
            heading: "manage claims in-house",
            desc: "Whether your claim is large or small, ButFor’s software is equipped to handle any size business interruption. Whether you employ analysts or have solely outsourced in the past, look at ButFor as an extension to your team or as a new claims unit entirely.",
            img: "feature-1.png",
          },
          {
            heading: "optimize claim amount & time spent",
            desc: "Our tool runs virtually limitless scenarios with the click of a button and offers suggestions on what the best outcomes will be for your company. Help with choosing pre-loss baselines, automatically updating financial information straight from your ERP, and visualizing adjustments with supporting documentation are just a few of the differentiating features that set us apart from conventional Excel-based and manual calculations.",
            img: "feature-2.png",
          },
          {
            heading: "substantially decrease claim prep cost",
            desc: "Billable hours are a thing of the past with ButFor. Our industry-changing software automates the most tedious and time consuming tasks internally and your outsourced consultants, saving you thousands (if not hundreds of thousands) of dollars. Whether it’s by paying on a claim-by-claim basis or decreasing your claim preparation insurance coverage, our solution offers flexible pricing options tailored for enterprise clients.. Learn more about our pricing options for the enterprise here.",
            img: "feature-3.png",
          },
        ],
      },
      {
        routeName: "insurance-companies",
        title: "insurance companies",
        desc: "Improve claims processing efficiency and accuracy, reduce work load, and enhance customer satisfaction. By leveraging advanced technologies such as AI and machine learning,our software can help make data-driven decisions, reduce operational costs, and provide faster and more personalized services to your customers.",
        bg: new URL(
          "/src/assets/images/solutions/insurance-companies-hero-bg.png",
          import.meta.url,
        ).href,
        type: "company",
        hubspot_form_id: "9a6b2149-b3a1-44fd-8997-fc18b5c92692",
        features: [
          {
            heading: "ERROR REDUCTION",
            desc: "ButFor was built on the premise of making claim prep as efficient as possible, which includes the removal of manual calculation checks & approximations. We are making the process quantitative rather than qualitative with formulas built into the entire process, allowing you to run as many analyses as you’d like in an instant.",
            img: "feature-1.png",
          },
          {
            heading: "time savings + instant results",
            desc: "ButFor's capability to automate the process of constructing a business interruption claim, incorporating defensible calculations, empowers your team to effortlessly handle the most laborious tasks. With the ability to run multiple pre-loss baselines, analyze post-loss adjustments, and swiftly make informed decisions, valuable time is saved, enabling efficient progress within a fraction of the usual timeframe.",
            img: "feature-2.png",
          },
          {
            heading: "approval chains & claim management",
            desc: "Our platform provides insurance companies and analysts with the capability to handle multiple claims simultaneously, while also offering an integrated approval chain system for the claims process. This system enables seamless assignment of appropriate staff members to submit, modify, or edit claims automatically, ensuring smooth workflow management.",
            img: "feature-3.png",
          },
        ],
      },
      {
        routeName: "insurance-brokers",
        title: "insurance brokers",
        desc: "Streamline claims processing, automate routine tasks, and gain deeper insights into your clients' risk profiles, thus providing more personalized and efficient service, while also reducing costs and increasing revenue opportunities. By leveraging the advanced analytics and data-driven insights, brokers can optimize their operations, improve customer satisfaction, and gain a competitive advantage in the marketplace.",
        bg: new URL(
          "/src/assets/images/solutions/brokers-hero-bg.png",
          import.meta.url,
        ).href,
        type: "company",
        hubspot_form_id: "41ee5de6-75b4-4f11-848e-4cae6ce61329",
        features: [
          {
            heading: "reduce premiums for clients",
            desc: "Our software reduces both claim preparation time and associated expenses, leading to reduced coverage costs for your clients. This cost-saving advantage is particularly significant for clients who do not have these specific provisions included in their policy, offering them reassurance that claims can be efficiently managed at a lower overall cost.",
            img: "feature-1.png",
          },
          {
            heading: "Ensure your clients are covered",
            desc: "It is estimated only 30-40% of small business owners carry business interruption insurance. Our goal is to increase that number of all businesses at a lower premium cost. Although these claims are rare and unexpected, ensure that your clients are fully covered without the stress of higher costs.",
            img: "feature-2.png",
          },
          {
            heading: "Add butfor as a third party vendor",
            desc: "Consider ButFor as a third-party vendor for all business interruption claims. Knowing that our claims will be completed in a timely manner will give your clients confidence their coverage is sufficient and there will be little to no out-of-pocket costs.",
            img: "feature-3.png",
          },
        ],
      },
      {
        routeName: "consulting-firms",
        title: "Consulting firms",
        desc: "Conduct investigations and analyze financial data related to insurance claims. By leveraging the advanced analytics and data-driven insights provided by our tools, forensic accountants can help optimize their claims processes and reduce fees for their clients.",
        bg: new URL(
          "/src/assets/images/solutions/consulting-hero-bg.png",
          import.meta.url,
        ).href,
        type: "company",
        hubspot_form_id: "d77fddf7-b7f0-439e-8d70-09f29a842cdd",
        features: [
          {
            heading: "ERROR REDUCTION",
            desc: "ButFor was built on the premise of making claim prep as efficient as possible, which includes the removal of manual calculation checks & approximations. We are making the process quantitative rather than qualitative with formulas built into the entire process, allowing you to run as many analyses as you’d like in an instant.",
            img: "feature-1.png",
          },
          {
            heading: "time savings + instant results",
            desc: "ButFor's capability to automate the process of constructing a business interruption claim, incorporating defensible calculations, empowers your team to effortlessly handle the most laborious tasks. With the ability to run multiple pre-loss baselines, analyze post-loss adjustments, and swiftly make informed decisions, valuable time is saved, enabling efficient progress within a fraction of the usual timeframe.",
            img: "feature-2.png",
          },
          {
            heading: "approval chains & claim management",
            desc: "Our platform provides your firm and analysts with the capability to handle multiple claims simultaneously, while also offering an integrated approval chain system for the claims process. This system enables seamless assignment of appropriate staff members to submit, modify, or edit claims automatically, ensuring smooth workflow management.",
            img: "feature-3.png",
          },
        ],
      },
      {
        routeName: "law-firms",
        title: "Law firms",
        desc: "Allow our software to efficiently manage and process claims for your clients, streamlining the litigation process and reducing costs. The software's analytics and automation features can help insurance lawyers make better use of their time and resources, ultimately leading to more efficient and cost-effective legal representation.",
        bg: new URL(
          "/src/assets/images/solutions/brokers-hero-bg.png",
          import.meta.url,
        ).href,
        type: "company",
        hubspot_form_id: "c3b30e79-7e11-4d87-b711-41c426181e03",
        features: [
          {
            heading: "Reduce your firm’s third-party costs",
            desc: "Mitigate costly claim preparation expenses associated with engaging external vendors. Our commitment is to effectively reduce claim costs, enabling all involved parties to fulfill their responsibilities in managing insurance and litigation matters efficiently.",
            img: "feature-1.png",
          },
          {
            heading: "Have confidence in your defense",
            desc: "Our software transforms the claims process from a qualitative to a quantitative approach, strengthening the factual basis and enhancing defensibility. By significantly reducing human error and minimizing missteps, you can have confidence in presenting a robust defense during trial. This transition to a more data-driven and precise methodology reinforces the reliability of your case, bolstering your position in legal proceedings.",
            img: "feature-2.png",
          },
          {
            heading: "Add butfor as a third party vendor",
            desc: "Consider ButFor as a third-party vendor for insurance and litigation matters. Knowing that our claims will be completed in a timely manner will give your clients confidence their case is in good hands and there will be little to no out-of-pocket costs.",
            img: "feature-3.png",
          },
        ],
      },
      //By role type
      {
        routeName: "risk-compliance",
        title: "risk & compliance",
        desc: "Identify potential risks, assess impact, and develop effective risk mitigation strategies, leveraging advanced analytics, data visualization, and machine learning capabilities to enhance the accuracy and speed of your analyses. By integrating our tools into their workflows, risk analysts can improve their ability to manage risks, reduce losses, and create more value for their organizations.",
        bg: new URL(
          "/src/assets/images/solutions/risk-hero-bg.png",
          import.meta.url,
        ).href,
        type: "role",
        hubspot_form_id: "2735b308-0b67-4a72-8517-6c286d3c8a3d",
        features: [
          {
            heading: "Automated claims analysis",
            desc: "Our software offers a streamlined solution to simplify the claims process for you and your team, significantly reducing the time allocated to manual calculations and retrieving data. By automating these tasks, you can allocate more time to your routine day-to-day activities and allocate fewer resources towards unexpected claims, ensuring smoother operations and enhanced productivity.",
            img: "feature-1.png",
          },
          {
            heading: "Decrease Claim Costs",
            desc: "Establish and manage claims without the necessity of additional resources. By reducing reliance on outsourced work, our solution minimizes the expenditure of time, finances, and dependency, allowing you to take full control of internal claims management. This enables cost savings, heightened operational efficiency, and enhanced oversight over the claims process.",
            img: "feature-2.png",
          },
          {
            heading: "Contribute to Risk Assessments",
            desc: "Perform comprehensive risk assessments pertaining to business interruptions, facilitating the identification of potential risks, vulnerabilities, and mitigation strategies that could impact the claims handling process. By conducting these assessments, valuable insights are gained, enabling proactive risk management and informed decision-making to optimize the efficiency and effectiveness of claims handling operations.",
            img: "feature-3.png",
          },
        ],
      },
      {
        routeName: "claim-managers",
        title: "claim managers",
        desc: "Automate claims processing, streamline workflows, and enhance the accuracy and speed of operations, leveraging our  machine learning, natural language processing, and robotic process automation to improve decision-making, reduce fraud, and improve customer experience. By integrating our tools, claims managers can improve efficiency, reduce costs, and create a more seamless and responsive claims handling process for their customers.",
        bg: new URL(
          "/src/assets/images/solutions/claims-hero-bg.png",
          import.meta.url,
        ).href,
        type: "role",
        hubspot_form_id: "016d2e61-9261-4bbe-885e-b3a67317d440",
        features: [
          {
            heading: "Decrease claim costs",
            desc: "Establish and manage claims without the necessity of additional resources. By reducing reliance on outsourced work, our solution minimizes the expenditure of time, finances, and dependency, allowing you to take full control of internal claims management. This enables cost savings, heightened operational efficiency, and enhanced oversight over the claims process.",
            img: "feature-1.png",
          },
          {
            heading: "Automated claims analysis",
            desc: "Our software offers a streamlined solution to simplify the claims process for you and your team, significantly reducing the time allocated to manual calculations and retrieving data. By automating these tasks, you can allocate more time to your routine day-to-day activities and allocate fewer resources towards unexpected claims, ensuring smoother operations and enhanced productivity.",
            img: "feature-2.png",
          },
          {
            heading: "data driven decision making",
            desc: "Leverage data straight from ERP systems regarding claim assessment, coverage determination, and settlement negotiation. Our software enables claims managers to analyze and interpret complex data, enhancing decision-making and optimizing claim outcomes.",
            img: "feature-3.png",
          },
        ],
      },
      {
        routeName: "finance-analysts",
        title: "Finance Analysts",
        desc: "Analyze financial data related to claims, identify patterns and trends, and develop insights that can inform pricing, underwriting, and risk management decisions, leveraging advanced analytics, data visualization, and machine learning capabilities to optimize analyses and predictions. By integrating our software, finance analysts can improve their ability to manage risk, enhance profitability, and create more value for their organizations.",
        bg: new URL(
          "/src/assets/images/solutions/finance-hero-bg.png",
          import.meta.url,
        ).href,
        type: "role",
        hubspot_form_id: "5291e0cb-7381-43da-8832-a6671e9e6f4b",
        features: [
          {
            heading: "Quantitative claims preparation",
            desc: "Assess the monetary implications of disruptions, including revenue loss, additional expenses, and potential recovery values. Our software provides sophisticated modeling and machine learning tools to quantify the financial consequences accurately, aiding in strategic decision-making and reporting.",
            img: "feature-1.png",
          },
          {
            heading: "Financial Reporting",
            desc: "Generate accurate and timely reports related to business interruptions. ButFor streamlines data collection, automates calculations, and enables efficient reporting of financial impacts to all relevant parties. This enhances transparency and facilitates effective communication of financial information throughout the organization.",
            img: "feature-2.png",
          },
          {
            heading: "Streamlined analyses",
            desc: "Conduct numerous analyses utilizing integrated financial data sourced from the ERP system. Perform multiple scenario assessments, thoroughly evaluating the impact of claims and their correlation to the financial health of the organization. By leveraging these analytical capabilities, finance professionals can gain comprehensive insights into the financial ramifications of claims, facilitating strategic decision-making and ensuring the financial well-being of the company.",
            img: "feature-3.png",
          },
        ],
      },
      {
        routeName: "forensic-accountants",
        title: "Forensic accountants",
        desc: "Analyze claims data, identify fraud, and provide expert testimony, leveraging our tools to detect anomalies, patterns, and trends that may indicate BI loss. By integrating these software tools, forensic accountants can improve their ability to investigate claims, reduce losses, and protect their organizations against financial loss.",
        bg: new URL(
          "/src/assets/images/solutions/forensic-hero-bg.png",
          import.meta.url,
        ).href,
        type: "role",
        hubspot_form_id: "35e79602-9dc4-4677-a26f-3a4bc8576505",
        features: [
          {
            heading: "reduce time gathering data",
            desc: "Our ERP integration tool effectively addresses the challenge of awaiting data from clients, alleviating this pain point significantly. Once integrated, the need for back-and-forth communication diminishes, eliminating the necessity for additional data requests and monthly reminders. As a result, the time spent on the claim process is notably reduced, enabling a more streamlined and efficient workflow.",
            img: "feature-1.png",
          },
          {
            heading: "analyze trends and spot outliers",
            desc: "Streamline your data analysis process with our tool's ability to identify outliers and detect trends within your data. This feature enables you to pinpoint critical areas for analysis, ensuring a focused approach that yields optimal results. By running alternate scenarios more efficiently and validating assumptions, you can make informed decisions and gain deeper insights into your data, enhancing the overall accuracy and effectiveness of your analyses.",
            img: "feature-2.png",
          },
          {
            heading: "confidence in your results",
            desc: "Whether acting as claim representatives for insurance purposes or serving as expert witnesses in litigation, rest assured that your results are supported by AI and machine learning software. By eliminating all potential human errors and logic flaws, our software ensures the utmost accuracy and reliability of your findings. This empowers you in negotiations, depositions, and other legal proceedings, bolstering your confidence and strengthening your position with a robust and defensible analytical foundation.",
            img: "feature-3.png",
          },
        ],
      },
      {
        routeName: "executive-teams",
        title: "Executive teams",
        desc: "Executive teams can  gain visibility into their organization's claims data, identify emerging risks, and make data-driven decisions, leveraging our tools to monitor performance, optimize processes, and reduce costs. By integrating these software tools into their workflows, executive teams can improve their ability to manage risk, enhance profitability, and drive business growth, while ensuring that their organizations are well-positioned to respond to changing market conditions and customer needs.",
        bg: new URL(
          "/src/assets/images/solutions/executive-teams-hero-bg.png",
          import.meta.url,
        ).href,
        type: "role",
        hubspot_form_id: "ee5f94d8-adfb-4840-b787-7a36a9c3bf82",
        features: [
          {
            heading: "Assess overall loss",
            desc: "Business interruption claims can pose significant challenges and impose stress on business operations and financial stability. Our tool alleviates this burden by providing a simplified and intuitive representation of the cause-and-effect relationships involved. With our software, you can effortlessly comprehend the impact of business interruptions without the need to navigate through intricate accounting reports.",
            img: "feature-1.png",
          },
          {
            heading: "be more involved in the claims process",
            desc: "By offering a user-friendly interface and visualized insights, our tool enhances clarity and facilitates informed decision-making. As a result, you can stay closely aligned with your team throughout the complex process of handling business interruption claims.",
            img: "feature-2.png",
          },
          {
            heading: "be apart of the decision making process",
            desc: "Make more informed business-related decisions at every stage, leveraging the comprehensive understanding and actionable insights provided by our tool. By promoting collaboration and empowering you with valuable information, our software enhances your ability to navigate the intricacies of business interruption claims and make strategic decisions that drive favorable outcomes.",
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
    webinars: [
      {
        slug: "how-to-prepare-for-a-business-interruption-claim",
        title: "How to Prepare for a Business Interruption Claim",
        desc: "Learn how to prepare for a business interruption claim and how to use ButFor to streamline the process.",
        start_time: "Monday, September 21st at 4:30PM PT / 7:30PM ET",
        already_happened: true,
        youtube_link: "https://www.youtube.com/embed/qL9p4xWqLaA",
        cover_image: "https://placehold.co/300x180",
      },
      {
        slug: "test-webinar",
        title: "Test webinar",
        desc: "Dummy_text Dummy_text Dummy_text Dummy_text Dummy_text Dummy_text Dummy_text Dummy_text Dummy_text Dummy_text Dummy_text Dummy_text Dummy_text Dummy_text Dummy_text Dummy_text Dummy_text Dummy_text Dummy_text Dummy_text Dummy_text Dummy_text Dummy_text Dummy_text Dummy_text Dummy_text Dummy_text Dummy_text Dummy_text",
        start_time: "2022-06-24T17:00:00.000Z",
        already_happened: true,
        youtube_link: "https://www.youtube.com/embed/_XspQUK22-U",
        cover_image: "https://placehold.co/300x180",
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
