import React, { useState } from 'react';
import { FAQContainer, FAQTitle } from './FAQ.styled';
import { FAQItem } from 'components/FAQItem';
import FAQimg1_1x from '../../images/pic/FAQ-img1-1x.png';
import FAQimg1_2x from '../../images/pic/FAQ-img1-2x.png';
import FAQimg2_1x from '../../images/pic/FAQ-img2-1x.png';
import FAQimg2_2x from '../../images/pic/FAQ-img2-2x.png';
import FAQimg3_1x from '../../images/pic/FAQ-img3-1x.png';
import FAQimg3_2x from '../../images/pic/FAQ-img3-2x.png';
import FAQimg4_1x from '../../images/pic/FAQ-img4-1x.png';
import FAQimg4_2x from '../../images/pic/FAQ-img4-2x.png';


const FAQlist = [
  {
    text: 'An NFT collection is a group of unique digital assets, each represented by a non-fungible token, typically created around a specific theme or style.',
    title: 'WHAT IS AN NFT COLLECTION?',
    src: [FAQimg1_1x, FAQimg1_2x]
  },
  {
    text: 'To purchase nfts from a collection, you typically need to use cryptocurrency on a blockchain0based marketplace.',
    title: 'HOW DO I PURCHASE NFTS FROM A COLLECTION?',
    src: [FAQimg2_1x, FAQimg2_2x]
  },
  {
    text: 'Yes, you can sell or trade NFTs from a collection like you would other digital assets.',
    title: 'CAN I SELL OR TRADE NFTS FROM A COLLECTION?',
    src: [FAQimg3_1x, FAQimg3_2x]
  },
  {
    text: 'As an NFT owner, you can own, transfer, potentially access exclusive content, resell, but do not automatically get copyright or intellectual property rights.',
    title: 'WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?',
    src: [FAQimg4_1x, FAQimg4_2x]
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <FAQContainer id="faq">
      <FAQTitle>FAQ</FAQTitle>
      {FAQlist.map(({ text, title, src }, index) => (
        <FAQItem
          key={title}
          text={text}
          title={title}
          index={index}
          openIndex={openIndex}
          toggleFAQ={toggleFAQ}
          isOpen={index === openIndex}
          src={src}
        />
      ))}
    </FAQContainer>
  );
};
