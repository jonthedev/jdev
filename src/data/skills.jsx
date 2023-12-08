import { nanoid } from "nanoid";
import { FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import {
  TbBrandBlender,
  TbBrandTailwind,
  TbBrandThreejs,
  TbBrandTypescript
} from "react-icons/tb";

export const skills = [
  {
    id: nanoid(),
    title: "HTML & CSS",
    icon: (
      <FaHtml5
        className='h-11 w-11 md:h-16 md:w-16 text-orange-700'
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
        className='h-11 w-11 md:h-16 md:w-16 text-yellow-500 animate-bounce'
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
        className='h-11 w-11 md:h-16 md:w-16 text-cyan-400 animate-spin'
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
        className='h-11 w-11 md:h-16 md:w-16 text-blue-600 animate-pulse'
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
        className='h-11 w-11 md:h-16 md:w-16 text-slate-50 animate-bounce'
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
        className='h-11 w-11 md:h-16 md:w-16 text-slate-50 animate-spin'
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
        className='h-11 w-11 md:h-16 md:w-16 text-orange-700 animate-pulse'
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
        className='h-11 w-11 md:h-16 md:w-16 text-cyan-400 animate-bounce'
        title='Tailwind CSS'
      />
    ),
    text: "I use CSS frameworks like tailwind to quickly deploy things like responsive grids, themes, styled forms, buttons, or other important UI elements on web pages and apps."
  }
];
