import { nanoid } from "nanoid";
import {
  SiChakraui,
  SiStorybook,
  SiStyledcomponents
} from "react-icons/si";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";

import ProjectVanlanschot from "~assets/project-vanlanschot.png";
import ProjectANWB from "~assets/project-anwb-traffic-verkeer.png";

export const projects = [
  {
    id: nanoid(),
    img: (
      <img
        src={ProjectANWB}
        alt='Screenshot of the traffic verkeer app'
        className='w-full object-cover rounded-t-lg h-64'
      />
    ),
    url: "https://www.anwb.nl/verkeer",
    github: null,
    title: "Traffic Verkeer",
    text: "Award winning web application for ANWB that displays live traffic information to millions of users.",
    tech: [
      {
        id: nanoid(),
        icon: (
          <TbBrandTypescript
            className='h-7 w-7 text-blue-600'
            title='TypeScript'
          />
        )
      },
      {
        id: nanoid(),
        icon: (
          <TbBrandNextjs
            className='h-7 w-7 text-slate-50'
            title='Next JS'
          />
        )
      },
      {
        id: nanoid(),
        icon: (
          <SiStyledcomponents
            className='h-7 w-7 text-pink-300'
            title='Styled Components'
          />
        )
      }
    ]
  },
  {
    id: nanoid(),
    img: (
      <img
        src={ProjectVanlanschot}
        alt='screenshot of homepage for van lanschot kempen'
        className='w-full object-cover rounded-t-lg h-64'
      />
    ),
    url: "https://www.vanlanschotkempen.com/en-nl",
    github: null,
    title: "Van Lanschot Kempen",
    text: "Built a reusable component library for Van Lanschot Kempen's re-brand strategy.",
    tech: [
      {
        id: nanoid(),
        icon: (
          <TbBrandTypescript
            className='h-7 w-7 text-blue-600'
            title='TypeScript'
          />
        )
      },
      {
        id: nanoid(),
        icon: (
          <TbBrandNextjs
            className='h-7 w-7 text-slate-50'
            title='Next JS'
          />
        )
      },
      {
        id: nanoid(),
        icon: (
          <SiChakraui
            className='h-7 w-7 text-sky-300'
            title='Chakra UI'
          />
        )
      },
      {
        id: nanoid(),
        icon: (
          <SiStorybook
            className='h-7 w-7 text-pink-500'
            title='Story Book'
          />
        )
      }
    ]
  }
  // {
  //   id: nanoid(),
  //   img: (
  //     <img
  //       src={ProjectStayInTheCircle}
  //       className='w-full object-cover rounded-t-lg h-64'
  //     />
  //   ),
  //   url: "https://reverent-fermi-0b8273.netlify.app/",
  //   github: "https://github.com/jonthedev/stay-in-the-circle",
  //   title: "Stay in The circle",
  //   text: "A fun interactive game where the user must stay within the circle or deal with the infamous Mr.T.",
  //   tech: [
  //     {
  //       id: nanoid(),
  //       icon: <FaCss3 className='h-7 w-7 text-blue-500' title='CSS' />
  //     },
  //     {
  //       id: nanoid(),
  //       icon: (
  //         <FaReact className='h-7 w-7 text-cyan-400' title='React' />
  //       )
  //     }
  //   ]
  // }
];
