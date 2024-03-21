import styled from '@emotion/styled';

export const HeroContainer = styled.section`
  max-width: 100%;
  height: 542px;

  border-radius: 12px;
  padding: 36px 0px 19px 0px;
  margin-left: 8px;
  margin-right: 8px;
  text-align: center;
  background-color: var(--accent-color);
  position: relative;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  } 

  @media screen and (min-width: 768px) {
    max-width: 768px;
    height: 421px;
    border-radius: 16px;
    margin-left: 16px;
    margin-right: 16px;
    padding: 124px 72px 35px 72px;
  }    

  @media screen and (min-width: 1280px) {
    max-width: 1440px;
    height: 677px;
    border-radius: 24px;
    padding: 197px 195px 81px 194px;
  }
`;

export const HeroWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 286px;
  position: relative;

  @media screen and (min-width: 768px) {
    gap: 0px;
    align-items: flex-end;
    & div:last-child {
      display: flex;
      flex-direction: column-reverse;
      gap: 16px;
      width: 190px;
      position: absolute;
      transform: translateY(150px);
      z-index: 20;
    }
  }

  @media screen and (min-width: 1280px) {
    & div:first-child {
      display: flex;
      flex-direction: column;
    }
    & div:last-child {
      gap: 28px;
      width: 337px;
      transform: translateY(250px);
    }
  }
`;

export const HeroImage = styled.img`
  width: 216px;
  height: 284px;
  position: absolute;
  z-index: 15;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 768px) {
    width: 283px;
    height: 386px;
    top: 54.2%;
    left: 47%;
  }

  @media screen and (min-width: 1280px) {
    width: 463px;
    height: 612px;
    top: 54.8%;
    left: 48%;
  }
`;

export const HeroTitleText = styled.p`
  color: var(--secondary-text-color);
  font-family: "Biro Script Plus Bold US";
  font-size: 16px;
  line-height: 1.68;
  &:nth-of-type(2) {
    margin-bottom: 6px;
    @media screen and (min-width: 768px) {
      margin-bottom: 0px;
    }
    @media screen and (min-width: 1280px) {
      margin-left: 110px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.65;
    text-align: left;
  }    

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: 1.67;
  }
`;

export const HeroTitle = styled.h1`
    color: var(--secondary-text-color);
    font-family: "Right Grotesk";
    font-size: 44px;
    font-weight: 900;
    line-height: 1;
    letter-spacing: 0.44px;
    padding-bottom: 8px;

    display: flex;
    justify-content: center;
    gap: 10px;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    font-size: 92px;
    letter-spacing: 0.92px;
    padding-bottom: 16px;
    width: 591px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 164px;
    padding-bottom: 30px; 
    width: 1019px;
  } 
`;

export const HeroText = styled.p`
  color: var(--secondary-text-color);
  width: 217px;
  text-align: center;
  text-transform: uppercase;
  margin-top: 12px;

  @media screen and (min-width: 768px) {
    text-align: end;
    margin-top: 0px;
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.18;
  }
`;