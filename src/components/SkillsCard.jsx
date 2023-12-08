import { FaCss3, FaPlus } from "react-icons/fa";

const SkillsCard = ({ icon, title, text }) => {
  if (title === "HTML & CSS") {
    return (
      <article>
        <div className='flex animate-pulse items-center'>
          <span>{icon}</span>{" "}
          <span>
            <FaPlus className='text-slate-50 mr-2' />
          </span>
          <span>
            <FaCss3 className='h-11 w-11 md:h-16 md:w-16 text-blue-500' />
          </span>
        </div>

        <h3 className='mt-6 font-bold text-indigo-500'>{title}</h3>
        <p className='mt-2 text-slate-50 text-md md:text-xl'>
          {text}
        </p>
      </article>
    );
  }
  return (
    <article>
      <span>{icon}</span>
      <h3 className='mt-6 font-bold text-indigo-500'>{title}</h3>
      <p className='mt-2 text-slate-50 text-md md:text-xl'>{text}</p>
    </article>
  );
};
export default SkillsCard;
