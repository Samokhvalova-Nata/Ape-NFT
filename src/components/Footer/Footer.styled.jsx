import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  margin-top: 60px;

  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-top: 80px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 120px;
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