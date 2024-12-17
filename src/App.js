// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/About us';
import ContactUs from './pages/Contact us';
import Math from './pages/Math';
import Economics from './pages/Economics';
import Accounting from './pages/Accounting';
import BusinessStudies from './pages/BusinessStudies';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} /> {/* Route for About Us */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/math" element={<Math />} />
        <Route path="/economics" element={<Economics />} />
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/business-studies" element={<BusinessStudies />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;