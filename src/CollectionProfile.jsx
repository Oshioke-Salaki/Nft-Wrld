import React from 'react';
import './CollectionProfile.css';
// import main from './assets/porfolioMain1.jpg';
// import sub1 from './assets/portfolioSub11.jpg';
// import sub2 from './assets/portfolioSub12.jpg';
import owner from './assets/portfolioOwnerImg.png';

export default function CollectionProfile(props) {
  return (
    <div className="collectionProfile">
      <img src={props.main} alt="" className="portfolioMainImg" />
      <div className="subImgs">
        <img src={props.sub1} alt="" />
        <img src={props.sub2} alt="" />
      </div>
      <h3>{props.portfolioName}</h3>
      <h4>
        <img src={owner} alt="" /> {props.portfolioOwner}
      </h4>
    </div>
  );
}
