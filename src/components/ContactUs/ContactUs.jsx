import React from 'react';
import { ContactUsContainer, ContactUsText, ContactUsTextWrap, ContactUsTitle } from './ContactUs.styled';
import { Form } from 'components/Form';
import icon from '../../images/icons/sprite-icons.svg';

export const ContactUs = () => {
  return (
    <ContactUsContainer>
      <ContactUsTitle>Are you in?</ContactUsTitle>
      <ContactUsTextWrap>
        <svg>
          <use href={`${icon}#addsharp`}></use>
        </svg>
        <ContactUsText>
          Join the YACHT APE community to be one of the first to receive our limited edition NFT
        </ContactUsText>
      </ContactUsTextWrap>
      <Form />
    </ContactUsContainer>
  );
};
