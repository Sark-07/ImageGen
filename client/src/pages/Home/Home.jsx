import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import ImageGrid from '../../components/ImageGrid';
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import Footer from '../../components/Footer';
const url = 'http://localhost:8080/api/v1/get-generations'
const Home = () => {
  const {data: {data}, loading} = useFetch(url)
  // data && console.log(data.data);
  return (
    <>
     <Header/>
    <div className='w-fit mx-auto sm:mt-20 mt-10 md:px-8 px-4'>

      {loading ? <Loader/> : <ImageGrid data={data.data} />}
    
    </div>
    <Footer/>
    </>
  );
};

export default Home;
