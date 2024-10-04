import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home';         
import Blinds from './pages/Blinds';
import Louver from './pages/Louver';
import Pergola from './pages/Pergola';
import Sunroom from './pages/Sunroom';
import WindowsDoors from './pages/WindowsDoors';

const App = () => {
  return (
    <Router>
      <Navbar />   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blinds" element={<Blinds />} />
        <Route path="/louver" element={<Louver />} />
        <Route path="/pergola" element={<Pergola />} />
        <Route path="/sunroom" element={<Sunroom />} />
        <Route path="/windows-doors" element={<WindowsDoors />} />
      </Routes>
      <Footer />  
    </Router>
  );
}

export default App;
