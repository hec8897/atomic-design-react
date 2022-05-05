import React from 'react';
import { Routes, Route, NavLink } from "react-router-dom";
import './App.scss';
import AtomsPage from './pages/atoms';

function App() {
  return (
    <div className="App">
      <ul className='flex justify-center gap-3'>
        <li className='text-red-500 font-bold text-2xl'>
          <NavLink to='/'>home</NavLink>
        </li>
        <li className='text-red-500 font-bold text-2xl'>
          <NavLink to='/sendbox'>sendbox</NavLink>
        </li>
        <li className='text-red-500 font-bold text-2xl'>
          <NavLink to='/molecules'>molecules</NavLink>
        </li>
        <li className='text-red-500 font-bold text-2xl'>
          <NavLink to='/organisms'>organisms</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="sendbox" element={<AtomsPage/>} />
        <Route path="molecules" element={<div>molecules</div>} />
        <Route path="organisms" element={<div>organisms</div>} />
      </Routes>
    </div>
  );
}

export default App;
