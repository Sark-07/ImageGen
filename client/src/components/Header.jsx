import React from 'react'
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from "../assets/svg/logo.svg";
const Header = () => {
  return (
    <nav className='w-full h-[8vh] px-16 flex items-center justify-between bg-white border-b border-b-[#e6ebf4]'>

    <Link to='/' className="py-2 flex items-center justify-center gap-1">
    <Logo/>
    <p className='font-inter font-medium'>Doppo</p>
    </Link>
    <Link to='/generate' className="font-inter font-medium py-1 px-4 bg-[#3fb950] text-white rounded-[5px] cursor-pointer hover:scale-[1.02] transition ease-in-out duration-200">Generate Image</Link>
    </nav>
  )
}

export default Header