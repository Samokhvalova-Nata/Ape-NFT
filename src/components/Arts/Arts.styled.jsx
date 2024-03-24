import styled from '@emotion/styled';

export const ArtsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 60px;
  padding: 0px 72px 0px 72px;

  @media screen and (min-width: 768px) {
    margin-top: 80px;
    padding: 0px 88px 0px 88px;
}

  @media screen and (min-width: 1280px) {
    margin-top: 120px;
    padding: 0px 204px 0px 204px;
  }
`;

export const ArtsTitle = styled.h2`
  margin-bottom: 24px;
  font-family: "Right Grotesk";
  font-size: 44px;
  line-height: 0.9;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 80px;
    line-height: 1;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 80px;
    font-size: 160px;
  }
`;
