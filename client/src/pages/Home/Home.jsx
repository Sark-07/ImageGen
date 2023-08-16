import React from 'react';
import ImageGrid from '../../components/ImageGrid';
import Header from '../../components/Header'

const Home = () => {
  return (
    <>
     <Header/>
    <div className='max-w-[90%] mx-auto mt-20'>
      <ImageGrid />
    </div>
    </>
  );
};

export default Home;
