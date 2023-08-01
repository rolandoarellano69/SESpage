import React from 'react'
//icons
import { RiCheckboxBlankCircleFill} from "react-icons/ri";
const Header = () => {
  return (
  <header className='flex w-full items-center p-4'>
    <div className=' w-1/6 text-centert'>
      <h1 className='text-xl font-bold'><RiCheckboxBlankCircleFill/>SES
      <span className='text-2xl'>.</span>
      </h1>
    </div>
    <nav className='flex-1 text-center'>
      <h1>nav</h1>
    </nav>
  </header>
  )
}

export default Header