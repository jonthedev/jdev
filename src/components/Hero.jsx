import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Hacker } from "./Hacker"

const Hero = () => {
  return (
    <div className='py-24'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-5xl md:text-7xl font-bold tracking-wider text-slate-50'>
            I'm Jonathan
          </h1>
          <p className='mt-4 text-2xl md:text-3xl text-slate-50 capitalize tracking-wide'>
            Web / Creative Developer
          </p>
          <p className='mt-4 text-lg md:text-2xl text-slate-50 capitalize tracking-wide'>
            London{" "}
            <span role='img' aria-label='Union Jack Flag'>
              🇬🇧{" "}
            </span>
            {""}/ Amsterdam{" "}
            <span role='img' aria-label='Netherlands Flag'>
              🇳🇱
            </span>
          </p>
          <p className='mt-2 text-md md:text-lg text-slate-50 capitalize tracking-wide'>
            turning ideas into interactive reality
          </p>
          <div className='flex gap-x-4 mt-4 items-center'>
            <a
              href='https://github.com/jonthedev'
              target='_blank'
              rel='noreferrer'>
              <FaGithub
                className='h-8 w-8 text-slate-50 hover:text-neutral-500 duration-300'
                title='Github'
              />
            </a>
            <a
              href='https://www.linkedin.com/in/jonathan-kaonga-5a04871b5/'
              target='_blank'
              rel='noreferrer'
              className=' bg-slate-5'>
              <FaLinkedin
                className='h-8 w-8 text-blue-500 hover:text-neutral-500 duration-300'
                title='LinkedIn'
              />
            </a>
          </div>
        </article>
        <article className='hidden md:block'>
          <Hacker />
        </article>
      </div>
    </div>
  )
}
export default Hero
