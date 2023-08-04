import React from 'react'
//icons
import { RiCheckboxBlankCircleFill} from "react-icons/ri";
const Header = () => {
  return (
  <header className='flex w-full items-center  p-4'>
    <div className=' w-1/6 text-center'>
      <span className='text-2xl font-bold relative tracking-widest	 bg-white p-1'>SES
      <span className='text-5xl text-primary'>.</span>
      <RiCheckboxBlankCircleFill className=' absolute text-primary -left-3 -bottom-3 -z-10'/>
      </span>
    </div>
    <nav className='flex-1 text-center'>
      <h1>nav</h1>
    </nav>
  </header>
  )
}

export default Header