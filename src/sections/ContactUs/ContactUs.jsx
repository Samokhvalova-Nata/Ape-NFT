import icon from 'images/icons/sprite-icons.svg';
import data from 'data/contactUsData.json';
import { Form } from 'components/Form';
import { ContactUsContainer, ContactUsText, ContactUsTextWrap, ContactUsTitle } from './ContactUs.styled';


export const ContactUs = () => {
  return (
    <ContactUsContainer id="mint">
      <ContactUsTitle>{data.title}</ContactUsTitle>
      <ContactUsTextWrap>
        <svg>
          <use href={`${icon}#addsharp`}></use>
        </svg>
        <ContactUsText>{data.text}</ContactUsText>
      </ContactUsTextWrap>
      <Form />
    </ContactUsContainer>
  );
};
