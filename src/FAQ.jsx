import React, { useState } from 'react';
import up from './assets/upArrow.png';
import down from './assets/downArrow.png';
import './FAQ.css';

export default function FAQ({ question }) {
  const [opened, setOpened] = useState(false);
  return (
    <div className={opened ? 'faq openedFaq' : 'faq closedFaq'}>
      <h3
        className={opened ? 'opened' : 'closed'}
        onClick={() => {
          setOpened(!opened);
        }}
      >
        {question} <img src={opened ? up : down} alt="" />
      </h3>
      <ul className={opened ? 'faqAnswer openedAnswer' : 'faqAnswer'}>
        <li>
          1. On the top left corner of the page, you will see a search bar. Type
          in the name of the NFT you are looking for, or any keywords related to
          the NFT.
        </li>
        <li>
          2. Press enter or click on the search icon to initiate the search.
        </li>
        <li>
          3. You will be taken to a results page where you can browse through
          the available NFTs that match your search query.
        </li>
      </ul>
    </div>
  );
}
