import React from 'react'
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from "../assets/svg/logo.svg";
const Header = ({path}) => {
  return (
    <nav className='w-full h-[8vh] xs:px-16 px-8 flex items-center justify-between bg-white border-b border-b-[#e6ebf4]'>

    <Link to='/' className="py-2 flex items-center justify-center gap-1">
    <Logo/>
    <p className='font-inter font-medium'>Doppo</p>
    </Link>
    <Link to={path == '/generate' ? '/' : '/generate' } className="font-inter font-medium py-1 px-4 bg-[#3fb950] text-white rounded-[5px] cursor-pointer hover:scale-[1.02] transition ease-in-out duration-200">{path == '/generate' ? 'Library' : 'Generate Image' }</Link>
    </nav>
  )
}

export default Header