import React from 'react';
import './TopSellerCard.css';
// import sellerImg from './assets/se'
// import sellerImg from './assets/seller1.png';
import eth from './assets/eth.png';

export default function TopSellerCard(props) {
  return (
    <div className="topSellerCard">
      <h4
        className={
          props.projection.slice(0, 1)[0] === '+' ? 'increase' : 'decrease'
        }
      >
        {props.projection}
      </h4>
      <img src={props.sellerImg} alt="" className="sellerImg" />
      <div className="sellerDetails">
        <h2>{props.name}</h2>
        <h5>
          <img src={eth} alt="" />
          {props.value}
        </h5>
      </div>
    </div>
  );
}
