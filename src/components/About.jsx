import J2 from "~assets/J2.png"
import SectionTitle from "~/components/SectionTitle"
import {
  FaBrain,
  FaCogs,
  FaRegAddressCard,
  FaTrophy
} from "react-icons/fa"
import { FaPersonRays } from "react-icons/fa6"

const About = () => {
  return (
    <section className='py-28' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16 text-lg md:text-2xl'>
        <div>
          <img
            src={J2}
            className=''
            alt='Picture of Jonathan looking at a mountain'
          />
        </div>
        <article>
          <SectionTitle text='About' />
          <p className='text-slate-50 mt-8 leading-loose text-md md:text-xl'>
            <FaBrain className='inline-block text-pink-500' />
            <br />
            Aspiring to become a full-stack developer, I am fueled by
            the dynamic nature of web development and the boundless
            possibilities it offers. I thrive on collaborating with
            like-minded professionals to brainstorm innovative
            features and discover robust solutions.
          </p>
          <p className='text-slate-50 mt-8 leading-loose text-md md:text-xl'>
            <FaCogs className='inline-block text-blue-300' />
            <br />I specialize in front-end development, crafting
            pixel-perfect UIs that not only look good but also
            features that elevate user experiences.
          </p>
          <p className='text-slate-50 mt-8 leading-loose text-md md:text-xl'>
            <FaTrophy className='inline-block text-yellow-500' />
            <br />
            One noteworthy achievement includes my award-winning work
            for ANWB for Traffic Verkeer, where I represented{" "}
            <span className='italic'>'iO'</span> & collaborated with
            JavaScript consultancy{" "}
            <span className='italic'>'Passionate People'</span> to
            tackle a complex re brand strategy.
          </p>
          <p className='text-slate-50 mt-8 leading-loose text-md md:text-xl'>
            <FaRegAddressCard className='inline-block text-green-500' />
            <br />I have legal right to work within the United Kingdom
            and The Netherlands . I'm open to explore opportunities
            beyond these regions however a visa sponsorship will be
            required.
          </p>
          <p className='text-slate-50 mt-8 leading-loose text-md md:text-xl'>
            <FaPersonRays className='inline-block text-amber-700' />
            <br />
            Beyond coding, I'm a dance and travel enthusiast.
            Exploring diverse cultures fuels my creativity, enriching
            my approach to web development.
          </p>
        </article>
      </div>
    </section>
  )
}
export default About
