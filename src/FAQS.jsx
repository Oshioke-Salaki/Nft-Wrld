import React from 'react';
import FAQ from './FAQ';
import './FAQS.css';
import SectionHeader from './SectionHeader';

export default function FAQS() {
  return (
    <div className="faqSection">
      <SectionHeader text="FAQS" subText="Checkout Common Questions" />
      <div className="faqss">
        <div className="faqCol">
          <FAQ question="How to find NFT in the NFTWorld marketplace?" />
          <FAQ question="How to create NFT in the NFTWorld Marketplace?" />
          <FAQ question="How to create NFT in the NFTWorld Marketplace?" />
        </div>
        <div className="faqCol">
          <FAQ question="How do i deposit NFT?" />
          <FAQ question="How do i deposit NFT?" />
          <FAQ question="How do i deposit NFT?" />
        </div>
      </div>
    </div>
  );
}
