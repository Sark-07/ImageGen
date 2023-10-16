import React, { useEffect, useMemo, useState } from 'react';
import { FiDownloadCloud } from 'react-icons/fi';
import { downloadImage } from '../utils/downloadImage';
import Loader from './Loader';

const Cards = ({ data, search }) => {
  const [filteredData, setFilteredData] = useState(data);

  // debounce for filtering
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (search) {
        const results = data.filter(
          (item) =>
            item.userName.toLowerCase().includes(search.toLowerCase()) ||
            item.prompt.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredData(results);
        console.log(search, filteredData, results);
      } else {
        setFilteredData(data);
      }
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [search]);

  return (
    <div className='grid grid-cols-custom gap-2'>
      {!filteredData ? (
        <Loader />
      ) : (
        filteredData.map((items, index) => {
          return (
            <div
              key={index}
              className='overflow-hidden group rounded-lg relative shadow-card hover:shadow-cardhover'
            >
              <img
                src={items.url}
                alt=''
                className='w-full h-auto object-cover object-center'
              />
              <div className='absolute hidden transition-all ease-in-out duration-200 bottom-0 left-0 w-full max-h-[92%] bg-[#10131fd9] group-hover:flex flex-col gap-2 px-4 py-2'>
                <p className='text-slate-100 text-sm font-light'>
                  {items.prompt}
                </p>
                <div className='flex justify-between items-center'>
                  <span className='flex justify-between gap-4 items-center'>
                    <span className='w-8 h-8 rounded-[50%] text-slate-100 bg-green-400 grid place-items-center'>
                      {items.userName[0].toUpperCase()}
                    </span>
                    <p className='text-slate-100'>{items.userName}</p>
                  </span>
                  <FiDownloadCloud
                    onClick={() =>
                      downloadImage(items.url, `Generation-${items.userName}`)
                    }
                    className='text-lg text-slate-100 hover:scale-110 transition-all ease-in-out duration-200 cursor-pointer'
                  />
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Cards;
