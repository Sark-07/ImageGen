import React from 'react'
import Header from '../../components/Header'
import Search from '../../components/Search'
import ImageGrid from '../../components/ImageGrid'

const Home = () => {
  return (
    <div className='home'> 
    <Header/>
        <div className="max-w-[90%] mx-auto mt-40">
          <Search/>
          <ImageGrid/>
        </div>
    </div>
  )
}

export default Home