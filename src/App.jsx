import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import QurbaniLanding from './pages/QurbaniLanding';

function Portfolio_() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio_ />} />
        <Route path="/qurbani" element={<QurbaniLanding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;