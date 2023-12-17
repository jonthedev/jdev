import { FaGithubSquare } from "react-icons/fa"
import { TbWorldWww } from "react-icons/tb"

const ProjectsCard = ({ url, img, github, title, text, tech }) => {
  return (
    <article className='text-blue-950 rounded-lg shadow-slate-50 shadow-md hover:shadow-xl duration-300'>
      <div className='rounded-lg h-full flex flex-col'>
        {img}
        <div className='flex items-center justify-between my-4 px-4'>
          <h2 className='text-lg tracking-wide font-medium text-amber-600 italic'>
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
        <p className='mt-4 text-slate-50 leading-loose flex-grow px-4'>
          {text}
        </p>
        <div className='my-4 flex gap-x-4 px-4'>
          <a
            href={url}
            target='_blank'
            rel='noreferrer'
            className='animate-pulse'
            title={url}>
            <TbWorldWww className='h-8 w-8 text-slate-50 hover:text-neutral-500 duration-300' />
          </a>
          {github && (
            <a
              href={github}
              target='_blank'
              rel='noreferrer'
              className='animate-pulse'
              title={github}>
              <FaGithubSquare className='h-8 w-8 text-slate-50 hover:text-neutral-500 duration-300' />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
export default ProjectsCard
