import React from 'react';
import './Hero.css';
import rocket from './assets/rocket.png';
import heroImg from './assets/heroImg.jpg';

export default function Hero() {
  return (
    <div className="hero">
      <div className="heroLeft">
        <h1 className="spaceTxt">
          digital Arts & nft
          <br /> collection in different
          <br /> diversity
        </h1>
        <p>
          come and Securely Own Unique Digital Art with Peace
          <br /> of Mind on our Trusted NFT Marketplace
        </p>
        <button>
          Get Started <img src={rocket} alt="" />
        </button>
        <div className="heroStats">
          <div className="stat">
            <h2 className="spaceTxt">450K+</h2>
            <h3>Total Sale</h3>
          </div>
          <div className="stat">
            <h2 className="spaceTxt">250K+</h2>
            <h3>Auction</h3>
          </div>
          <div className="stat">
            <h2 className="spaceTxt">320K+</h2>
            <h3>Artists</h3>
          </div>
        </div>
      </div>
      <img src={heroImg} alt="" className="heroImg" />
    </div>
  );
}
