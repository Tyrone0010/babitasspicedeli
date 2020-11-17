import React from 'react';
import Slides from '../components/Slides';
import About from '../components/About';
import Quote from '../components/Quote';

const Home = () => {
  return(
    <React.Fragment>
      <Slides />
      <About />
      <Quote />
    </React.Fragment>
  )
}

export default Home;
