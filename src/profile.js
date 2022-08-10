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
    name: "Urban Company",
    skills: ["REACT, REDUX, JS, CHAKRA UI, HTML, CSS "],
    url: "https://github.com/HemanthKumar-CN/melted-lace-627",
  },
  {
    // Add image in './styles/images.css' in #project1
    id: "project2",
    name: "Kimaye Clone",
    skills: ["REACT, REDUX, JS, CHAKRA UI, HTML, CSS "],
    url: "https://github.com/surajDongre-16/Kimaye-Clone",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project3",
    name: "Ssense Clone",
    skills: ["HTML, CSS, JS, Bootstrap"],
    url: "https://github.com/surajDongre-16/Ssense-clone",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project4",
    name: "Max fasion Clone",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/surajDongre-16/MAX-Fashion-clone-web-17",
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
    "https://drive.google.com/file/d/1Me8M7Epkb3tWAMI7KJb2BTVafce92v__/view?usp=sharing",
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
