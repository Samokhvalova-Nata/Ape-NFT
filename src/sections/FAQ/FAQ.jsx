import React, { useState } from 'react';
import {fagElements} from 'data/faqElements';
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
        {fagElements.map(({ id, text, title, src, alt }, index) => (
          <FAQItem
            key={id}
            text={text}
            title={title}
            src={src}
            alt={alt}
            index={index}
            openIndex={openIndex}
            toggleFAQ={toggleFAQ}
            isOpen={index === openIndex}
            />
        ))}
      </ul>
      
    </FAQContainer>
  );
};
