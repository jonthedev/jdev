import ProjectsCard from "~/components/ProjectsCard"
import { projects } from "~/data/projects"
import SectionTitle from "~/components/SectionTitle"

const Projects = () => {
  return (
    <section className='py-20 align-element' id='projects'>
      <SectionTitle text='Projects & Work' />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {projects.map(project => {
          return <ProjectsCard key={project.id} {...project} />
        })}
      </div>
    </section>
  )
}
export default Projects
