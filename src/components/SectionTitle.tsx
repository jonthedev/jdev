import { SectionTitleProps } from "~components/SectionTitle"

const SectionTitle = ({ text }: SectionTitleProps) => {
  return (
    <div className='border-b border-gray-200 pb-5'>
      <h2 className='text-2xl md:text-3xl font-medium tracking-wider capitalize text-slate-50'>
        {text}.
      </h2>
    </div>
  )
}
export default SectionTitle
