import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import TrendColl1 from './TrendColl1';
import TrendColl2 from './TrendColl2';
import TopSellers from './TopSellers';
import NftBanner from './NftBanner';
import FAQS from './FAQS';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TrendColl1 />
      <TrendColl2 />
      <TopSellers />
      <NftBanner />
      <FAQS />
    </div>
  );
}

export default App;
