import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Title from './Title/Title';
import Readmore from './Readmore/Readmore';
import ScrollToTop from './ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar className='containers' />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Title subTitle="About" title="Team Revanta" />
              <About />
            </>
          } />
          <Route path="/readmore" element={<Readmore />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
