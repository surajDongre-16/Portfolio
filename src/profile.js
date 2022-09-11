// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Suraj Dongre",
};

const section2title = "About Me";
const about = {
  paragraph:
    "Hi I am Suraj Dongre, A Passionate aspiring Full Stack Developer skilled in MERN stack, moulded and shaped by Masai school’s intensive and immersive learning.  Look forward to joining a company where I will  be able to contribute towards individual and company growth.",
};

const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "MyNetDiary Clone",
    skills: ["NODEJS, EXPRESS, MONGODB, MONGOOSE, REACT, JS, CHAKRA UI"],
    url: "https://github.com/surajDongre-16/sloppy-impulse-7268",
    description:
      "MyNetDiary is an online and mobile (iOS, Android) calorie and exercise tracker with over 15 million members worldwide. The average active member loses 1.4 pounds a week, and about 27 pounds total.  MyNetDiary guides your weight loss journey with accurate calorie counting, weight loss forecasting and personalized daily insights.",
    live: "https://my-net-diary.netlify.app/",
  },
  {
    // Add image in './styles/images.css' in #project1
    id: "project2",
    name: "Urban Company",
    skills: ["REACT, REDUX, JS, CHAKRA UI, HTML, CSS "],
    url: "https://github.com/HemanthKumar-CN/melted-lace-627",
    description:
      "Urban Company (formerly known as Urban Clap) is an Indian gig marketplace that offers home repairs and maintenance services, and home beauty and wellness services. In 2014, the company was founded by Abhiraj Singh Bhal, Varun Khaitan and Raghav Chandra. It was valued at USD 2.8 billion after its employee stock sale programme concluded in December 2021. As of 2021, the company operates in 30+ Indian cities and in the UAE, Singapore, Australia and Saudi Arabia.",
    live: "https://urban-clap-clone.netlify.app/",
  },
  {
    // Add image in './styles/images.css' in #project1
    id: "project3",
    name: "Kimaye Clone",
    skills: ["REACT, REDUX, JS, CHAKRA UI, HTML, CSS "],
    url: "https://github.com/surajDongre-16/Kimaye-Clone",
    description:
      "Kimaye became India's first brand to retail fresh fruits in the USA. Kimaye wants to give you assurance and earn your trust by consistently delivering the safest and highest-quality fruits at your doorstep.",
    live: "  https://kimaye-project.netlify.app",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project4",
    name: "Ssense Clone",
    skills: ["HTML, CSS, JS, Bootstrap"],
    url: "https://github.com/surajDongre-16/Ssense-clone",
    description:
      "SSENSE is a multi-brand retailer based in Montreal, Canada specialising in the sale of designer fashion and high end streetwear. It was founded as an e-commerce platform in 2003 by three brothers: Rami, Bassel and Firas Atallah. The company delivers to 114 countries around the world and operates websites in French, English, Japanese and Korean.",
    live: "https://ssense-6040cb.netlify.app/",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project5",
    name: "Max fasion Clone",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/surajDongre-16/MAX-Fashion-clone-web-17",
    description:
      "Max Fashion is an Indian fashion brand under the banner of the Mumbai based Landmark Group. That was opened by an Indian foreigner in the UAE, Micky Jagtiani The brand was first launched in May 2004, in the Middle East in UAE.Max, at present, is the largest fashion brand in the Middle East, North Africa, South East Asia & India, with over 500 stores encompassing 8.5 million sq.ft., across 20 countries.",
    live: "https://max-fashion-fw17.netlify.app/",
  },
];

const section5Title = "Get in Touch";
const contact = {
  pitch: "Let's connect and design beutiful Web together",
  copyright: "Suraj Dongre",
  contactUrl: "https://formspree.io/f/xbjwendo",
};

const social = {
  github: "https://github.com/surajdongre-16",
  linkedin: "https://linkedin.com/in/suraj-dongre",
  resume:
    "https://drive.google.com/drive/folders/1PZg3v55KYYy2ugblxC_I1QukWxVuqW_G?usp=sharing",
};
// Dont change anything here
export {
  animation,
  header,
  about,
  projects,
  contact,
  social,
  section2title,
  section3Title,
  section5Title,
};
