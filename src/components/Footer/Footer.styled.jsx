import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  margin-top: 60px;
  padding-bottom: 24px;
  display: flex;
  justify-content: center;
  // outline: 2px solid blue;


  @media screen and (min-width: 768px) {
    margin-top: 80px;
    padding-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 120px;
    padding-top: 16px;
  }
`;

export const FooterText = styled.p`
  width: 216px;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.18;
  }
`;