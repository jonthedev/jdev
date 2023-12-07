import developerImg from "../assets/developer.svg";
import hacker from "src/assets/hacker.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='py-24 font-kanit'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-bold tracking-wider text-slate-50'>
            I'm Jonathan
          </h1>
          <p className='mt-4 text-3xl text-slate-50 capitalize tracking-wide'>
            Web / Creative Developer
          </p>
          <p className='mt-4 text-2xl text-slate-50 capitalize tracking-wide'>
            London{" "}
            <span role='img' aria-label='Union Jack Flag'>
              🇬🇧{" "}
            </span>
            {""}/ Amsterdam{" "}
            <span role='img' aria-label='Netherlands Flag'>
              🇳🇱
            </span>
          </p>
          <p className='mt-2 text-lg text-slate-50 capitalize tracking-wide'>
            turning ideas into interactive reality
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a
              href='https://github.com/jonthedev'
              target='_blank'
              rel='noreferrer'>
              <FaGithubSquare
                className='h-8 w-8 text-slate-50 hover:text-neutral-500'
                title='Github'
              />
            </a>
            <a
              href='https://www.linkedin.com/in/jonathan-kaonga-5a04871b5/'
              target='_blank'
              rel='noreferrer'>
              <FaLinkedin
                className='h-8 w-8 rounded-md text-blue-600 bg-slate-50 hover:text-neutral-500'
                title='LinkedIn'
              />
            </a>
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={hacker} />
        </article>
      </div>
    </div>
  );
};
export default Hero;
