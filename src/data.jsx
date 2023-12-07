/* eslint-disable react/jsx-key */
import { nanoid } from "nanoid";
import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact
} from "react-icons/fa";
import {
  SiChakraui,
  SiStorybook,
  SiStyledcomponents
} from "react-icons/si";
import {
  TbBrandBlender,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandThreejs,
  TbBrandTypescript
} from "react-icons/tb";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" }
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML & CSS",
    icon: (
      <FaHtml5
        className='h-16 w-16 text-orange-700'
        title='HTML and CSS'
      />
    ),
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences."
  },
  {
    id: nanoid(),
    title: "JavaScript",
    icon: (
      <FaJs
        className='h-16 w-16 text-yellow-500 animate-bounce'
        title='JavaScript'
      />
    ),
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality."
  },
  {
    id: nanoid(),
    title: "React",
    icon: (
      <FaReact
        className='h-16 w-16 text-cyan-400 animate-spin'
        title='React'
      />
    ),
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture."
  },
  {
    id: nanoid(),
    title: "TypeScript",
    icon: (
      <TbBrandTypescript
        className='h-16 w-16 text-blue-600 animate-pulse'
        title='TypeScript'
      />
    ),
    text: "A proficient TypeScript developer, I specialize in building robust and scalable applications, ensuring type safety and enhanced code maintainability."
  },
  {
    id: nanoid(),
    title: "Github",
    icon: (
      <FaGithub
        className='h-16 w-16 text-slate-50 animate-bounce'
        title='Github'
      />
    ),
    text: "Utilizing GitHub as a central hub for seamless collaboration, I leverage its powerful version control features to push forward the evolution of front-end projects."
  },
  {
    id: nanoid(),
    title: "ThreeJs",
    icon: (
      <TbBrandThreejs
        className='h-16 w-16 text-slate-50 animate-spin'
        title='Three JS'
      />
    ),
    text: "My expertise extends to the world of 3D graphics, where I harness the power of Three.js to bring dynamic and visually captivating elements to the web."
  },
  {
    id: nanoid(),
    title: "Blender",
    icon: (
      <TbBrandBlender
        className='h-16 w-16 text-orange-700 animate-pulse'
        title='Blender'
      />
    ),
    text: "With a flair for creativity, I've delved into the realm of 3D modeling using Blender, seamlessly integrating artistic expression with technical finesse."
  },
  {
    id: nanoid(),
    title: "CSS Frameworks",
    icon: (
      <TbBrandTailwind
        className='h-16 w-16 text-cyan-400 animate-bounce'
        title='Tailwind CSS'
      />
    ),
    text: "I use CSS frameworks like tailwind to quickly deploy things like responsive grids, themes, styled forms, buttons, or other important UI elements on web pages and apps."
  }
];

export const clients = [
  {
    id: nanoid(),
    img: "./src/assets/anwb.svg"
  },
  {
    id: nanoid(),
    img: "./src/assets/van-lanschot-kempen.svg"
  }
];

export const projects = [
  {
    id: nanoid(),
    img: "./src/assets/anwb-traffic-verkeer.png",
    url: "https://www.anwb.nl/verkeer",
    github: null,
    title: "Traffic Verkeer",
    text: "Award winning web application for ANWB that displays live traffic information to millions of users.",
    tech: [
      <TbBrandTypescript
        className='h-7 w-7 text-blue-600'
        title='TypeScript'
      />,
      <TbBrandNextjs
        className='h-7 w-7 text-slate-50'
        title='Next JS'
      />,
      <SiStyledcomponents
        className='h-7 w-7 text-pink-300'
        title='Styled Components'
      />
    ]
  },
  {
    id: nanoid(),
    img: "./src/assets/project-van-lan-schot.png",
    url: "https://www.vanlanschotkempen.com/en-nl",
    github: null,
    title: "Vanlanschot Kempen",
    text: "Component library for prestigious Dutch bank Vanlanschot Kempen investment banking solutions.",
    tech: [
      <TbBrandTypescript
        className='h-7 w-7 text-blue-600'
        title='TypeScript'
      />,
      <TbBrandNextjs
        className='h-7 w-7 text-slate-50'
        title='Next JS'
      />,
      <SiChakraui
        className='h-7 w-7 text-sky-300'
        title='Chakra UI'
      />,
      <SiStorybook
        className='h-7 w-7 text-pink-500'
        title='Story Book'
      />
    ]
  },
  {
    id: nanoid(),
    img: "./src/assets/stay-in-the-circle.png",
    url: "https://reverent-fermi-0b8273.netlify.app/",
    github: "https://github.com/jonthedev/stay-in-the-circle",
    title: "Stay in The circle",
    text: "A fun interactive game where the user must stay within the circle or deal with the infamous Mr.T.",
    tech: [
      <FaCss3 className='h-7 w-7 text-blue-500' title='CSS' />,
      <FaReact className='h-7 w-7 text-cyan-400' title='React' />
    ]
  }
];
