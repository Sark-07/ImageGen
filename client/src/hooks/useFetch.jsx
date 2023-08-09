import { useEffect, useState } from 'react';
import axios from 'axios'

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    
    const response = await axios.get(url);
    setLoading(false);
    setData(response);
  };

  useEffect(() => {
    getData();
  }, [url]);


  return {loading, data}
};