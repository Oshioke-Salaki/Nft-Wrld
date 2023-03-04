import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import './TrendColl1.css';
import rArrow from './assets/rArrow.png';
import chain from './assets/bnb.png';
import eth from './assets/eth.png';
import CollectionCard from './CollectionCard';
import { collectionItems } from './collectionItems';

export default function TrendColl1() {
  const [filterCrypto, setFilterCrypto] = useState('ALL');
  return (
    <div className="trendColl1">
      <SectionHeader
        text="Trending Collections"
        subText="Check out our daily trending collections"
      />

      <div className="collNav">
        <div className="collFilter">
          <button className="btnPrimary">24H</button>
          <button className="btnPrimary">7D</button>
          <button className="btnPrimary">All Time</button>
        </div>
        <div className="cryptoBtns">
          <button
            className={
              filterCrypto === 'ALL' ? 'activeCryptoFilter' : 'cryptoBtn'
            }
            onClick={() => {
              setFilterCrypto('ALL');
            }}
          >
            All
          </button>
          <button
            className={
              filterCrypto === 'BNB' ? 'activeCryptoFilter' : 'cryptoBtn'
            }
            onClick={() => {
              setFilterCrypto('BNB');
            }}
          >
            BNB Chain <img src={chain} alt="" />
          </button>
          <button
            className={
              filterCrypto === 'ETH' ? 'activeCryptoFilter' : 'cryptoBtn'
            }
            onClick={() => {
              setFilterCrypto('ETH');
            }}
          >
            Etherum <img src={eth} alt="" />
          </button>
          <button className="moreBtn btnPrimary">
            More <img src={rArrow} alt="" style={{ width: '2.4rem' }} />
          </button>
        </div>
      </div>
      <div className="collectionItems">
        {(filterCrypto === 'ALL' &&
          collectionItems.map((item) => (
            <CollectionCard
              name={item.name}
              img={item.img}
              owner={item.owner}
              crypto={item.crypto}
              price={item.price}
            />
          ))) ||
          (filterCrypto === 'ETH' &&
            collectionItems
              .filter((item) => item.crypto === 'ETH')
              .map((item) => (
                <CollectionCard
                  name={item.name}
                  img={item.img}
                  owner={item.owner}
                  crypto={item.crypto}
                  price={item.price}
                />
              ))) ||
          (filterCrypto === 'BNB' &&
            collectionItems
              .filter((item) => item.crypto === 'BNB')
              .map((item) => (
                <CollectionCard
                  name={item.name}
                  img={item.img}
                  owner={item.owner}
                  crypto={item.crypto}
                  price={item.price}
                />
              )))}
      </div>
    </div>
  );
}
