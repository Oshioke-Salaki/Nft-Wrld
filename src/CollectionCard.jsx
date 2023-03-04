import React from 'react';
import './CollectionCard.css';
import colImg from './assets/col-1.jpg';
import ownerImg from './assets/minAvatar.png';
import verified from './assets/verified.png';
import eth from './assets/eth.png';
import bnb from './assets/bnb.png';

export default function CollectionCard(props) {
  return (
    <div className="collectionCard">
      <img src={props.img} alt="" className="colImg" />
      <div className="cardDetails">
        <div className="detailTop">
          <div className="detailTopLeft">
            <h2>{props.name}</h2>
            <h3>
              <img src={ownerImg} alt="" /> {props.owner}{' '}
              <img src={verified} alt="" />
            </h3>
          </div>
          <div className="cryptoBadge">{props.crypto}</div>
        </div>
        <div className="pricing">
          <h3>Price</h3>
          <h3>
            <img
              src={
                (props.crypto === 'ETH' && eth) ||
                (props.crypto === 'BNB' && bnb)
              }
              alt=""
            />
            {props.price}
          </h3>
        </div>
      </div>
    </div>
  );
}
