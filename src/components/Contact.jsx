import { FaCopyright, FaLinkedin } from "react-icons/fa"
import SectionTitle from "~/components/SectionTitle"

const Contact = () => {
  return (
    <footer>
      <section className='align-element pt-20 pb-9' id='contact'>
        <SectionTitle text='Contact' />
        <div className='flex flex-col items-start mt-4'>
          <span className='text-sm md:text-xl text-slate-50 tracking-wide'>
            🇬🇧 +447729268750
          </span>
          <span className='text-sm md:text-xl text-slate-50 tracking-wide'>
            🇳🇱 +31645170103
          </span>
          <a
            href='https://www.linkedin.com/in/jonathan-kaonga-5a04871b5/'
            target='_blank'
            rel='noreferrer'>
            <FaLinkedin
              className='h-4 w-4 md:h-6 md:w-6 md:mt-2 text-blue-600 bg-slate-50 hover:text-neutral-500'
              title='LinkedIn'
            />
          </a>
        </div>
        <div className='flex items-center justify-center text-sm md:text-md text-slate-50 tracking-wide pt-4'>
          <FaCopyright />{" "}
          <span className='ml-2'>
            {new Date().getFullYear()} J Dev.
          </span>
        </div>
      </section>
    </footer>
  )
}

export default Contact
