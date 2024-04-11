import styled from '@emotion/styled';

export const AboutContainer = styled.section`
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 72px 0px 72px;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-top: 80px;
    padding: 0px 88px 0px 88px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 120px;
    padding: 0px 204px 0px 204px;
  }
`;

export const AboutTitleWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 48px;
    margin-bottom: 68px;
  }

  @media screen and (min-width: 1280px) {
    gap: 85px;
  }
`;

export const AboutTitle = styled.h2`
  width: 216px;
  margin-bottom: 16px;

  font-family: "Right Grotesk";
  font-size: 40px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;

  & > span {
    color: var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    width: 269px;
    font-size: 60px;
  }

  @media screen and (min-width: 1280px) {
    width: 538px;
    font-size: 120px;
  }
`;

export const AboutTitleText = styled.p`
  width: 216px;
  margin-bottom: 36px;

  font-size: 16px;
  line-height: 1.18;
  font-weight: 400;
  text-align: right;

  @media screen and (min-width: 768px) {
    width: 275px;
    margin-top: 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 409px;
    font-size: 24px;
    line-height: 1.2;
  }
`;

export const AboutTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    align-self: flex-start;
  }

  > svg {
      width: 24px;
      height: 24px;
      fill: var(--primary-text-color);

    @media screen and (min-width: 1280px) {
      width: 36px;
      height: 36px;
    }}
`;

export const AboutText = styled.p`
  width: 216px;
  margin-top: 16px;
  margin-bottom: 40px;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 269px;
    margin-top: 24px;
    font-size: 16px;
    line-height: 1.18;
  }

  @media screen and (min-width: 1280px) {
    width: 417px;
    margin-top: 36px;
    font-size: 24px;
    line-height: 1.2;
  }
`;

export const AboutImage = styled.img`
  width: 216px;
  height: 292px;

  @media screen and (min-width: 768px) {
    width: 313px;
    height: 422px;

    position: absolute;
    transform: translate(-50%, -50%);
    top: 62.5%;
    left: 70%;
  }

  @media screen and (min-width: 1280px) {
    width: 492px;
    height: 662px;
    top: 63.5%;
  }
`;
