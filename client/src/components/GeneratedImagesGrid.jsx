import React from 'react'

const GeneratedImagesGrid= ({data}) => {  
  return (
    <>
    {
      data ? data.map((item, index) => {

        return <img src={item} alt={index} key={index} className='max-w-xs max-h-80 rounded-sm object-cover object-center'/>
      }) : <div className='w-full h-40 text-[#9b9b9b] grid place-items-center text-5xl'>Your results will display here.</div>
    }
    {/* <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='max-w-xs max-h-80 rounded-sm object-cover object-center'/>
    <img src="https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className='max-w-xs max-h-80 rounded-sm object-cover object-center'/>
    <img src="https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className='max-w-xs max-h-80 rounded-sm object-cover object-center'/>
    <img src="https://images.unsplash.com/photo-1517511620798-cec17d428bc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className='max-w-xs max-h-80 rounded-sm object-cover object-center'/> */}

    
    
    </>
  )
}

export default GeneratedImagesGrid