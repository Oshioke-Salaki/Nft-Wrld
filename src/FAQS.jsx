import React from 'react';
import FAQ from './FAQ';
import './FAQS.css';
import SectionHeader from './SectionHeader';

export default function FAQS() {
  return (
    <div className="faqSection">
      <SectionHeader text="FAQS" subText="Checkout Common Questions" />
      <div className="faqRow">
        <FAQ />
        <FAQ />
        <FAQ />
        <FAQ />
        <FAQ />
        <FAQ />
      </div>
    </div>
  );
}
