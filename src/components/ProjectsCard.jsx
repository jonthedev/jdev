import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectsCard = ({ url, img, github, title, text, tech }) => {
  return (
    <article className='bg-neutral-800 rounded-lg shadow-slate-50 shadow-md hover:shadow-xl duration-300'>
      {img}
      <div className='p-8'>
        <div className='flex items-center justify-between'>
          <h2 className='text-lg tracking-wide font-medium text-indigo-500'>
            {title}
          </h2>
          <div className='flex'>
            {tech.map(({ id, icon }) => (
              <div key={id} className='inline-block'>
                {icon}
              </div>
            ))}
          </div>
        </div>
        <p className='mt-4 text-slate-50 leading-loose'>{text}</p>
        <div className='mt-4 flex gap-x-4'>
          <a
            href={url}
            target='_blank'
            rel='noreferrer'
            className='animate-pulse'
            title={url}>
            <TbWorldWww className='h-8 w-8 text-slate-50 hover:text-neutral-500' />
          </a>
          {github && (
            <a
              href={github}
              target='_blank'
              rel='noreferrer'
              className='animate-pulse'
              title={github}>
              <FaGithubSquare className='h-8 w-8 text-slate-50 hover:text-neutral-500' />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
export default ProjectsCard;
