import React, { useState } from 'react';
import { FAQlist } from 'data';
import { FAQItem } from 'components/FAQItem';
import { FAQContainer, FAQTitle } from './FAQ.styled';


export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <FAQContainer id="faq">
      <FAQTitle>FAQ</FAQTitle>
      <ul>
        {FAQlist.map(({ text, title, src }, index) => (
          <FAQItem
            key={title}
            text={text}
            title={title}
            index={index}
            openIndex={openIndex}
            toggleFAQ={toggleFAQ}
            isOpen={index === openIndex}
            src={src}/>
        ))}
      </ul>
      
    </FAQContainer>
  );
};
