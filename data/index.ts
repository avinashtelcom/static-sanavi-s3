export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Accomplishments", link: "#accomplishments" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[70vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/collabration.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I can easily adapt to different time zones for effective communication.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Dashboard for Data Visualization with 1 Million Data Points",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Financial dashboard",
    des: "Explore React, TailwindCSS, TypeScript and NextJS Concepts through Dashboard.",
    img: "/dashboard.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg"],
    link: "https://dashboard-app-nextjs-gamma.vercel.app/dashboard",
  },
  // {
  //   id: 2,
  //   title: "Yoom - Video Conferencing App",
  //   des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
  //   img: "/p2.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
  //   link: "/ui.yoom.com",
  // },
  // {
  //   id: 3,
  //   title: "AI Image SaaS - Canva Application",
  //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   link: "/ui.aiimg.com",
  // },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "/ui.apple.com",
  // },
];

export const accomplishments = [
  {
    quote:
      "Honored Wall of Fame and President Award for outstanding contribution towards achieving business excellence.",
    name: "Ericsson Global India Private Ltd",
    title: "Business Excellence",
  },
  {
    quote:
      "Congratulation on reaching the final Innovation Challenge final this year. You have delivered with Professionalism, Respect, Preseverence and Integrity. I encourage you to continue innovation in the future. Well Done!",
    name: "Ericsson Global India Private Ltd",
    title: "Preseverence and Innovation",
  },
  {
    quote:
      "Visited the Client's Place (USA-SFO) on winning a 45-day challenge to turn around the project for the company.",
    name: "Metric Stream InfoTech",
    title: "Execution",
  },
  {
    quote:
      "I Appreciate the time and effort give to help me in solving queries related to frontend technologies. Your style of working is commendable. Thank you for your guidance and support",
    name: "Ericsson Global India Private Ltd",
    title: "Cooperation and Collaboration",
  },
  {
    quote:
      "Thank you Avinash for an amazing year. I am delighted with how seamlessly you have contributed accross number of new solutions with so many different teams while taking care of your work.",
    name: "Ericsson Global India Private Ltd",
    title: "Cooperation and Collaboration",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Specialist - Ericsson Global India Private Ltd",
    desc: "Discussed with All stakeholders to finalize the E2E process and Tools to be used in the Product and Interacted and coordinated with clients to understand their requirements in detail.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Technical Lead - Metric Stream InfoTech",
    desc: "Generated design & developed workflow diagrams as per the requirement of the client and Participated in CRP (conference room pilot) sessions with clients and the business analyst to highlight the project progress.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Senior Development Lead - Megron Tech Private Ltd",
    desc: "Built RantCell Pro V2 Dashboard from Scratch by switching legacy technologies(angular js and dynamo DB) to New Technologies React, NextJS and AWS RDS resulting in faster development, performance Improvement and new verticle for the product.",    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "Senior Software Engineer - Telibrahma and Stragure",
    desc: "Gathered requirements, and set up the project, development, deployment, support and training for clients. The first employee of the Organization.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    handle: "https://www.linkedin.com/in/avinashtelcom/"
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  // },
  {
    id: 3,
    img: "/link.svg",
    handle: "https://github.com/avinashtelcom"
  },
];
