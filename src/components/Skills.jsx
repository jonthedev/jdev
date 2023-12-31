import { skills } from "~/data/skills"
import SectionTitle from "~/components/SectionTitle"
import SkillsCard from "~/components/SkillsCard"

const Skills = () => {
  return (
    <section className='py-28 align-element ' id='skills'>
      <SectionTitle text='tech stack' />
      <div className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {skills.map(skill => {
          return <SkillsCard key={skill.id} {...skill} />
        })}
      </div>
    </section>
  )
}
export default Skills
