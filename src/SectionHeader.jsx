import React from 'react';
import './SectionHeader.css';

export default function SectionHeader(props) {
  return (
    <div className="sectionHeader">
      <h1 className="spaceTxt">{props.text}</h1>
      <h2>{props.subText}</h2>
    </div>
  );
}
