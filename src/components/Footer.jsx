import { FaCopyright } from "react-icons/fa"

export const Footer = () => {
  return (
    <div className='pb-4'>
      <div className='flex items-center justify-center text-sm md:text-md text-slate-50 mt-4 tracking-wide mb-1'>
        <FaCopyright />{" "}
        <span className='ml-2'>{new Date().getFullYear()} J Dev</span>
      </div>
    </div>
  )
}
