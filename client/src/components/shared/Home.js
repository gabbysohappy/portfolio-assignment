import React from 'react';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Work from './Work';
import Contact from './Contact';

const Home = () => (
  <>
    <div className='contact-about-section'>
    <About />
    <Contact />
    </div>

    <Skills />

    <Work />

    <Portfolio />
  </>
)

export default Home;