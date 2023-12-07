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
            <FaCss3 className='h-16 w-16 text-blue-500' />
          </span>
        </div>

        <h4 className='mt-6 font-bold text-indigo-500'>{title}</h4>
        <p className='mt-2 text-slate-50 text-lg'>{text}</p>
      </article>
    );
  }
  return (
    <article>
      <span>{icon}</span>
      <h4 className='mt-6 font-bold text-indigo-500'>{title}</h4>
      <p className='mt-2 text-slate-50 text-lg'>{text}</p>
    </article>
  );
};
export default SkillsCard;
