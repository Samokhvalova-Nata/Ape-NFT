import styled from '@emotion/styled';
import imgMobile1x from '../../images/pic/hero-mobile-1x.png';
import imgMobile2x from '../../images/pic/hero-mobile-2x.png';
import imgTablet1x from '../../images/pic/hero-tablet-1x.png';
import imgTablet2x from '../../images/pic/hero-tablet-2x.png';
import imgDesktop1x from '../../images/pic/hero-desktop-1x.png';
import imgDesktop2x from '../../images/pic/hero-desktop-2x.png';

export const HeroContainer = styled.section`
  max-width: 100%;
  height: 542px;
  border-radius: 12px;
  margin-top: 54px;
  padding: 36px 0px 19px 0px;


  @media screen and (min-width: 480px) {
    max-width: 480px;
  } 

  @media screen and (min-width: 768px) {
    max-width: 768px;
    height: 421px;
    border-radius: 16px;
    padding: 124px 72px 35px 72px;
  }    

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    height: 677px;
    border-radius: 24px;
    margin-top: 16px;
    padding: 197px 195px 81px 194px;
  }

  margin-left: auto;
  margin-right: auto;
  text-align: center;
  background-color: var(--accent-color);

  background-image: url(${imgMobile1x});
    background-repeat: no-repeat;
    // background-origin: content-box;
    background-position: center;
    background-size: 216px 284px;

    @media (min-device-pixel-ratio: 2),
            (-webkit-min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
                background-image: url(${imgMobile2x});
            }
      
  @media screen and (min-width: 480px) {
    background-image: url(${imgTablet1x});
    
    
    @media (min-device-pixel-ratio: 2),
            (-webkit-min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
                background-image: url(${imgTablet2x});
            }
  } 

  @media screen and (min-width: 768px) {
    background-image: url(${imgDesktop1x});
    background-size: 283px 386px;
    background-position: bottom;
    @media (min-device-pixel-ratio: 2),
            (-webkit-min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
                background-image: url(${imgDesktop2x});
            }
  }

  @media screen and (min-width: 1280px) {
    background-size: 463px 612px;
  }
`;

export const HeroText = styled.p`
  color: var(--secondary-text-color);
  font-family: "Biro Script Plus Bold US";
  font-size: 16px;
  line-height: 1.68;

@media screen and (min-width: 768px) {
      font-size: 20px;
      line-height: 1.65;
      text-align: left;
    }    

    @media screen and (min-width: 1280px) {

    }
`;

export const HeroTitle = styled.h1`
    color: var(--secondary-text-color);
font-family: "Right Grotesk";
font-size: 44px;
font-style: normal;
font-weight: 900;
line-height: 1;
letter-spacing: 0.44px;
`;