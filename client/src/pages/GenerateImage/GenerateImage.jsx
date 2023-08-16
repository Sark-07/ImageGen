import React from 'react'
import Search from '../../components/Search'
import Loader from '../../components/Loader'
import GeneratedImagesGrid from '../../components/GeneratedImagesGrid'
const GenerateImage = () => {
  return (
    <div className='generate-image'> 
        <div className="max-w-[90%] mx-auto mt-40">
          <Search/>
        </div>
        <div className='flex flex-wrap justify-center gap-4 h-fit max-w-[90%] mx-auto mt-4 p-4 border border-solid border-[#e6ebf4] rounded'>
          <GeneratedImagesGrid/>
          <Loader/>
        </div>
    </div>
  )
}

export default GenerateImage