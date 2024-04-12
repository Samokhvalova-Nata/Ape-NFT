import { FooterContainer, FooterText } from './Footer.styled';
import footer from 'data/footer.json';


export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>{footer.text}</FooterText>
    </FooterContainer>
  );
};
