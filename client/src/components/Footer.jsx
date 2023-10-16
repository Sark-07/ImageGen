import React from 'react'
import {FaReact} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full h-[8vh] flex justify-center items-center mt-auto bg-[#1a1a1a] text-slate-100'>
        <p className='flex items-center gap-2'>
          Made with <span className='text-red-600'>&#x2764;</span> & <FaReact style={{color: '#61DBFB'}}/>
        </p>
    </div>
  )
}

export default Footer