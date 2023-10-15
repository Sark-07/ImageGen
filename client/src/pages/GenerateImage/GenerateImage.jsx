import React, { useState } from 'react';
import swal from 'sweetalert';
import getRandomPromts from '../../utils/getRandomPromts';
import Search from '../../components/Search';
import Loader from '../../components/Loader';
import GeneratedImagesGrid from '../../components/GeneratedImagesGrid';
import axios from 'axios';
import Header from '../../components/Header';
const generateUrl = 'http://localhost:8080/api/v1/generate';
const storeImageUrl = 'http://localhost:8080/api/v1/posts';
const GenerateImage = () => {
  const [prompt, setPrompt] = useState('');
  const [userName, setUserName] = useState('John Doe');
  const [loading, setLoading] = useState(false);
  const [generations, setGenerations] = useState(null);

  const handleClick = async () => {
    try {
      if (prompt) {
        setLoading(true);
        const { data } = await axios.post(generateUrl, { prompt });
        setLoading(false);
        // console.log(Array(data.output), data.output);
        setGenerations(data.output);
      }
    } catch (error) {
      setLoading(false);
      swal(error.response.data.message, '', 'error', {
        button: 'Close',
      });
      console.log(error);
    }
  };

  const handleStoreImage = async (e) => {
    try {
      if (prompt && generations) {
        const payload = {
          userName: userName,
          images: generations,
          prompt: prompt,
        };

        const { data: response } = await axios.post(storeImageUrl, payload);
        console.log(response);
        if (response.success) {
          swal(response.message, '', 'success', {
            button: 'Close',
          });
        } else {
          swal(response.message, '', 'warning', {
            button: 'Close',
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const path = window.location.pathname;
  return (
    <>
      <Header path={path} />
      <div className='generate-image'>
        <div className='max-w-[90%] mx-auto mt-40 flex flex-col gap-4'>
          {/* Search */}
          <div className='h-fit flex-col overflow-hidden w-full flex items-start gap-2'>
            <label
              htmlFor='User Name'
              className='text-[#777] font-medium text-sm'
            >
              You Name
            </label>
            <input
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder={userName}
              type='text'
              className='py-2 px-4 text-[#777] rounded-md shadow-md bg-clip-border bg-white w-full border outline-none border-solid border-[#e6ebf4]'
            />
          </div>
          <div className='w-full flex flex-col items-start gap-5'>
            <span className='flex items-center justify-center gap-2'>
              <p className='text-[#777] font-medium text-sm'>
                Start with your imagination
              </p>
              <button
                className='hover:opacity-75 transition-[opacity] ease-in-out py-1 px-2 bg-[#ececf1] text-black rounded-md text-sm font-medium'
                onClick={() => setPrompt(getRandomPromts(''))}
              >
                Surprise me
              </button>
            </span>
            <div className='h-fit overflow-hidden pl-4 w-full rounded-md shadow-md bg-clip-border flex justify-between items-center'>
              <input
                required
                value={prompt && `${prompt}`}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder='A stained glass window depicting a hamburger and french fries...'
                type='text'
                className='py-3 px-4 text-black bg-white w-full border-none outline-none'
              />
              <button
                className={`${
                  prompt
                    ? 'bg-black text-white'
                    : 'text-[#777] hover:text-black'
                } py-3 border-l border-l-[#e6ebf4] px-3`}
                onClick={() => handleClick()}
              >
                Generate
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap justify-center gap-4 h-fit max-w-[90%] mx-auto mt-4 p-4 border border-solid border-[#e6ebf4] rounded'>
          {loading ? <Loader /> : <GeneratedImagesGrid data={generations} />}
        </div>
        <div className='max-w-[90%] mx-auto flex flex-col items-center p-4 gap-4 border-solid border-[#e6ebf4] rounded'>
          <p className='text-[#666e75]'>
            Once you have generated your images, you can store them to your
            library.
          </p>
          <button
            onClick={(e) => handleStoreImage(e)}
            className='py-2 bg-[#3fb950] text-white rounded-[4px] w-full hover:bg-[#48bb57]'
          >
            Store to Library
          </button>
        </div>
      </div>
    </>
  );
};

export default GenerateImage;
