import styled from '@emotion/styled';

export const ContactUsContainer = styled.section`
  margin-top: 60px;
  padding: 0px 72px 0px 72px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-top: 80px;
    padding: 0px 88px 0px 88px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 100px;
    padding: 0px 204px 0px 204px;
  }
`;

export const ContactUsTitle = styled.h2`
  font-family: "Right Grotesk";
  font-size: 44px;
  line-height: 0.9;
  text-transform: uppercase;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 80px;
    line-height: 1;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 160px;
    margin-bottom: 80px;
  }
`;

export const ContactUsTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > svg {
      width: 36px;
      height: 36px;
      fill: var(--primary-text-color);
  }
`;

export const ContactUsText = styled.p`
  width: 216px;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 16px;
  text-transform: uppercase;

  // &::before {
  //   content: "";
  //   display: inline-block;
  //   width: 36px;
  // height: 36px;
  // background-image: url("../../images/icons/add-sharp.png");
  // background-size: contain;
  // }

  @media screen and (min-width: 768px) {
    width: 397px;
    margin-top: 24px;
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 1.18;
  }

  @media screen and (min-width: 1280px) {
    width: 581px;
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 1.2;
  }
`;