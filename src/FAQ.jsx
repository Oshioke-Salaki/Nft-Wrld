import React from 'react';
import up from './assets/upArrow.png';
import down from './assets/downArrow.png';
import './FAQ.css';

export default function FAQ() {
  return (
    <div className="faq">
      <h3>
        How to find NFT in the NFTWorld marketplace? <img src={down} alt="" />
      </h3>
      <ol className="faqAnswer">
        <li></li>
        <li></li>
        <li></li>
      </ol>
    </div>
  );
}
