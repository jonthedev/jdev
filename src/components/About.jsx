import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className='py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16 text-2xl'>
        <img src={aboutSvg} className='w-full h-64' />
        <article className='font-kanit'>
          <SectionTitle text='About' />
          <p className='text-slate-50 mt-8 leading-loose'>
            With a solid foundation built over 4 years, I specialize
            in <span className='text-orange-700'>HTML</span>,{" "}
            <span className='text-blue-500'>CSS</span>,{" "}
            <span className='text-yellow-500'>JavaScript</span>,{" "}
            <spam className='text-cyan-400'>React</spam>, and{" "}
            <span className='text-blue-600'>TypeScript</span>,
            bringing web interfaces to life with seamless
            interactivity.
          </p>
          <p className='text-slate-50 mt-8 leading-loose'>
            Always hungry for creative challenges, I've recently
            delved into the captivating worlds of{" "}
            <span className='text-orange-700'>Blender</span> and{" "}
            <span className='text-neutral-500'>ThreeJs</span>. These
            tools have become my playground for pushing the boundaries
            of web development, allowing me to fuse my love for coding
            with the magic of animations.
          </p>
          <p className='text-slate-50 mt-8 leading-loose'>
            Whether it's crafting pixel-perfect UIs or orchestrating
            captivating 3D visuals, I thrive on the intersection of
            technology and creativity.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
