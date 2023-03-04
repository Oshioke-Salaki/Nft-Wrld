import React, { useState } from 'react';
import up from './assets/upArrow.png';
import down from './assets/downArrow.png';
import './FAQ.css';

export default function FAQ() {
  return (
    <div className="faq">
      <h3 className="opened">
        How to find NFT in the NFTWorld marketplace? <img src={down} alt="" />
      </h3>
      <ol className="faqAnswer">
        <li>
          On the top left corner of the page, you will see a search bar. Type in
          the name of the NFT you are looking for, or any keywords related to
          the NFT.
        </li>
        <li>Press enter or click on the search icon to initiate the search.</li>
        <li>
          You will be taken to a results page where you can browse through the
          available NFTs that match your search query.
        </li>
      </ol>
    </div>
  );
}
