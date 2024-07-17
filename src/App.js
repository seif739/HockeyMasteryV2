// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import AboutUs from './components/AboutUs';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  return (
    <>
      <Router>
      <div role="region" aria-live="polite" style={{ position: 'absolute', left: '-9999px' }}>
          Screen readers supported.
        </div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/about-us' element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
