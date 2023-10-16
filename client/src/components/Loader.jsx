import React from 'react'

const Loader = () => {
  return (
    <div className='w-full h-80 overflow-hidden grid place-items-center'>
        <img src="loader.gif" alt="loader" className='w-8 h-8 object-cover object-center'/>
    </div>
  )
}

export default Loader