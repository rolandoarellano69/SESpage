import React from 'react'
//icons
import { RiCheckboxBlankCircleFill, RiCloseLine, RiMenu3Fill} from "react-icons/ri";
const Header = () => {
  return (
  <header className='flex w-full items-center h-[10vh] p-4'>
    <div className=' w-1/6 text-center'>
      <a href="#" className='text-2xl font-bold relative tracking-widest	 bg-white p-1'>SES
      <span className='text-5xl text-primary'>.</span>
      <RiCheckboxBlankCircleFill className=' absolute text-primary -left-3 -bottom-3 -z-10'/>
      </a>
    </div>
    <nav className='fixed  w-full h-full right-0 top-0 xl:static flex-1 text-center flex flex-col lx:flex-row items-center justify-center gap-10'>
      <button><RiCloseLine/></button>
    <a href="" className=''>Inicio</a>
    <a href="">Nosotros</a>
    <a href="">Servicios </a>
    </nav>
    <button><RiMenu3Fill/></button>
  </header>
  )
}

export default Header