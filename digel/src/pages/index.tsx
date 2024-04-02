import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Features from '../components/Features';
//import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
//import MainHero from '../components/MainHero';
//import MainHeroImage from '../components/MainHeroImage';
import Pricing from '../components/Pricing';
import Product from '../components/Product';
import Title from '../components/Title';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <Title/>
      <LazyShow>
        <>
          <Product />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <Pricing />
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <About />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
