import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Title from './Title/Title';
import Readmore from './Readmore/Readmore';
import Member from './Components/Member/Member';
import ScrollToTop from './ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Title subTitle="Welcome To " title="Team Revanta" />
              <About />
            </>
          } />
          <Route path="/home" element={
            <>
              <Hero />
              <Title subTitle="About" title="Team Revanta" />
              <About />
            </>
          } />
          <Route path="/about" element={<Readmore />} />
          <Route path="/readmore" element={<Readmore />} />
          <Route path="/member" element={<Member />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
