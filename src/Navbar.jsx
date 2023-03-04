import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <h4 className="spaceTxt">Nft World</h4>
      <div className="navRight">
        <ul className="navLinks">
          <li>
            <a href="#">Market Place</a>
          </li>
          <li>
            <a href="#">Create Wallet</a>
          </li>
          <li>
            <a href="#">Rankings</a>
          </li>
        </ul>
        <div className="navButtons">
          <a href="#">Login</a>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
