import React from 'react';
// import NFT from './assets/ITEM_PREVIEW1-removebg-preview 1.png';
import nftape from './assets/nftApe.png';
import './NftBanner.css';
export default function NftBanner() {
  return (
    <div className="nftBanner">
      {/* <img src={NFT} alt="" /> */}
      <p className="spaceTxt">NFT</p>
      <img src={nftape} alt="" />
    </div>
  );
}
