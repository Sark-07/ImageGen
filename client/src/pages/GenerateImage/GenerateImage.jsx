import React from 'react'
import Header from '../../components/Header'
import Search from '../../components/Search'
const GenerateImage = () => {
  return (
    <div className='generate-image'> 
    <Header/>
        <div className="max-w-[90%] mx-auto mt-40">
          <Search/>
        </div>
        <div className='flex max-w-[90%] mx-auto mt-4 p-4 border border-solid border-slate-800'>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
    </div>
  )
}

export default GenerateImage