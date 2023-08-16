import React, { useState } from 'react';
import getRandomPromts from '../utils/getRandomPromts';
import axios from 'axios';
const url = 'http://localhost:8080/api/v1/generate';
const Search = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false)
  const handleClick = async () => {
    try {
      setLoading(true)
      const response = await axios.post(url, { search });
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-full flex flex-col items-start gap-5'>
      <span className='flex items-center justify-center gap-2'>
        <p className='text-[#777] font-medium text-sm'>
          Start with your imagination
        </p>
        <button
          className='hover:opacity-75 transition-[opacity] ease-in-out py-1 px-2 bg-[#ececf1] text-black rounded-md text-sm font-medium'
          onClick={() => setSearch(getRandomPromts(''))}
        >
          Surprise me
        </button>
      </span>
      <div className='h-fit overflow-hidden pl-4 w-full rounded-md shadow-md bg-clip-border flex justify-between items-center'>
        <input
          required
          value={search && `${search}`}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='A stained glass window depicting a hamburger and french fries...'
          type='text'
          className='py-3 px-4 text-black bg-white w-full border-none outline-none'
        />
        <button
          className={`${
            search ? 'bg-black text-white' : 'text-[#777] hover:text-black'
          } py-3 border-l border-l-[#e6ebf4] px-3`}
          onClick={() => handleClick()}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Search;
