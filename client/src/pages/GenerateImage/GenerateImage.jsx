import React from 'react'
import Search from '../../components/Search'
const GenerateImage = () => {
  return (
    <div className='generate-image'> 
        <div className="max-w-[90%] mx-auto mt-40">
          <Search/>
        </div>
        <div className='flex flex-wrap justify-center gap-4 h-fit max-w-[90%] mx-auto mt-4 p-4 border border-solid border-[#e6ebf4] rounded'>
          <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='max-w-xs max-h-80 rounded-sm object-cover object-center'/>
          <img src="https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className='max-w-xs max-h-80 rounded-sm object-cover object-center'/>
          <img src="https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className='max-w-xs max-h-80 rounded-sm object-cover object-center'/>
          <img src="https://images.unsplash.com/photo-1517511620798-cec17d428bc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className='max-w-xs max-h-80 rounded-sm object-cover object-center'/>
        </div>
    </div>
  )
}

export default GenerateImage