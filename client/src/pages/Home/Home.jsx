import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import ImageGrid from '../../components/ImageGrid';
import Header from '../../components/Header'
import Loader from '../../components/Loader'
const url = 'http://localhost:8080/api/v1/get-generations'
const Home = () => {
  const {data: {data}, loading} = useFetch(url)
  data && console.log(data.data);
  return (
    <>
     <Header/>
    <div className='max-w-fit mx-auto mt-20'>

      {loading ? <Loader/> : <ImageGrid data={data.data.reverse()} />}
    
    </div>
    </>
  );
};

export default Home;
