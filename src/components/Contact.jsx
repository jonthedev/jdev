import { FaInfo, FaLinkedin, FaPhone } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { TbMail } from "react-icons/tb";

const Contact = () => {
  return (
    <section className='py-20 align-element' id='projects'>
      <SectionTitle text='Contact' />
      <p className='text-xl text-slate-50 mt-8 tracking-wide flex flex-col md:flex-row md:items-center'>
        <FaInfo className='mr-4 inline-block text-blue-300 mb-2 md:mb-0' />
        Jonathan has legal right to work within the UK and The
        Netherlands.
      </p>
      <p className='text-xl text-slate-50 mt-8 tracking-wide mb-2 flex flex-col md:flex-row md:items-center'>
        <FaPhone className='mr-4 inline-block' />
        🇬🇧 +447729268750 | 🇳🇱 +31645170103
      </p>
    </section>
  );
};

export default Contact;
