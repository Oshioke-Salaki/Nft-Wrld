import React from 'react';
import SectionHeader from './SectionHeader';
import './TrendColl2.css';
import rArrow from './assets/rArrow.png';
import CollectionProfile from './CollectionProfile';
import { portfolios } from './collectionItems';
export default function TrendColl2() {
  return (
    <div className="trendColl2">
      <div className="trending2Head">
        <SectionHeader
          text="Trending Collections"
          subText="Check out our daily trending collections"
        />
        <button className="moreBtn btnPrimary">
          More <img src={rArrow} alt="" style={{ width: '2.4rem' }} />
        </button>
      </div>
      <div className="collectionContainer">
        {portfolios.map((item) => (
          <CollectionProfile
            main={item.mainImg}
            sub1={item.subImg1}
            sub2={item.subImg2}
            portfolioName={item.portfolioName}
            portfolioOwner={item.owner}
          />
        ))}
      </div>
    </div>
  );
}
