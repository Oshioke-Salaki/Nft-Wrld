import React from 'react';
import FAQ from './FAQ';
import './FAQS.css';
import SectionHeader from './SectionHeader';

export default function FAQS() {
  return (
    <div className="faqSection">
      <SectionHeader text="FAQS" subText="Checkout Common Questions" />
      <div className="faqRow">
        <FAQ question="How to find NFT in the NFTWorld marketplace?" />
        <FAQ question="How to create NFT in the NFTWorld Marketplace?" />
        <FAQ question="How to create NFT in the NFTWorld Marketplace?" />
        <FAQ question="How do i deposit NFT?" />
        <FAQ question="How do i deposit NFT?" />
        <FAQ question="How do i deposit NFT?" />
      </div>
    </div>
  );
}
