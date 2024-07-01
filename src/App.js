import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Careers from './components/Careers';
import ContactUs from './components/ContactUs';
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/career" element={<Careers/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
      <Footer />
  
    </BrowserRouter>
  );
};

export default App;
