import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import GenerateImage from './pages/GenerateImage/GenerateImage';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' index element={<Home/>} />
      <Route path='/community' element={<GenerateImage/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
};

export default App;
