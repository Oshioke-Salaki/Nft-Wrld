import React from 'react';
import SectionHeader from './SectionHeader';
import TopSellerCard from './TopSellerCard';
import './TopSellers.css';
import { sellers } from './collectionItems';
export default function TopSellers() {
  return (
    <div>
      <SectionHeader
        text="Top Sellers"
        subText="Our Top Sellers in the NFT Community"
      />
      <div className="sellerContainer">
        {sellers.map((seller) => (
          <TopSellerCard
            projection={seller.projection}
            sellerImg={seller.sellerImg}
            name={seller.name}
            crypto={seller.crypto}
            value={seller.value}
          />
        ))}
      </div>
    </div>
  );
}
