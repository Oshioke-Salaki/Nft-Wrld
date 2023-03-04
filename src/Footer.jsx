import React, { useState } from 'react';
import './Footer.css';
import twitter from './assets/twitter.png';
import instagram from './assets/instagram.png';
import youtube from './assets/youtube.png';

export default function Footer() {
  const [formEmail, setFormEmail] = useState('');
  return (
    <div className="footer">
      <div className="footerLeft">
        <h1 className="spaceTxt">
          Nft <span> World</span>
        </h1>
        <p className="footerText">
          come and Securely Own Unique Digital Art with Peace
          <br /> of Mind on our Trusted NFT Marketplace
        </p>
        <p className="footerText">Join Our Community</p>
        <div className="socials">
          <img src={youtube} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
      <div className="footerCenter">
        <h3 className="footerHead">Explore</h3>
        <h4 className="footerText">Marketplace</h4>
        <h4 className="footerText">Rankings</h4>
        <h4 className="footerText">Connect & Wallet</h4>
      </div>
      <div className="footerRight">
        <h3 className="footerHead">Join Our Weekly digest</h3>
        <p className="footerText">
          {' '}
          Get exclusive promotions & updates
          <br /> straight to your inbox
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Enter Your Email"
            value={formEmail}
            onChange={(e) => {
              setFormEmail(e.target.value);
            }}
          />
          <button className="footerText" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
