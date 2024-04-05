import icon from '../../images/icons/sprite-icons.svg';
import imgMobile1x from '../../images/pic/about-mobile-1x.png';
import imgMobile2x from '../../images/pic/about-mobile-2x.png';
import imgTablet1x from '../../images/pic/about-tablet-1x.png';
import imgTablet2x from '../../images/pic/about-tablet-2x.png';
import imgDesktop1x from '../../images/pic/about-desktop-1x.png';
import imgDesktop2x from '../../images/pic/about-desktop-2x.png';
import { Banner } from 'components/Banner';
import { AboutContainer, AboutImage, AboutText, AboutTextWrap, AboutTitle, AboutTitleText, AboutTitleWrap } from './About.styled';


export const About = () => {
  return (
    <>
    <AboutContainer id="about">
      <AboutTitleWrap>
        <AboutTitle>a Story that started with
          <span> one simple ape</span>
        </AboutTitle>
        <AboutTitleText>
          WHO GOT
          FED UP WITH BORING AND HYPOCRITIC   COMMONPLACE THIS IS HOW THE IDEA OF   ESCAPING AND DYNAMIC JOURNEY ON THE YACHT
        </AboutTitleText>
      </AboutTitleWrap>
      <AboutTextWrap>
        <svg>
          <use href={`${icon}#addsharp`}></use>
        </svg>
        <AboutText>
          EACH ARTWORK IN THE COLLECTION TELLS A  STORY OF ONE JOURNEY. ARTS ARE RANDOMLY  GENERATED BY USERS
        </AboutText>
      </AboutTextWrap>
      <AboutImage src={imgMobile1x} alt='NFT monkey in casual style' loading="lazy" 
        srcSet={`${imgMobile1x} 216w,
                ${imgMobile2x} 432w,
                ${imgTablet1x} 313w,
                ${imgTablet2x} 626w,
                ${imgDesktop1x} 492w,
                ${imgDesktop2x} 984w,`}
        sizes='(max-width: 480px) 216px,
            (max-width: 768px) 313px,
            492px' />
      </AboutContainer>
      <Banner/>
    </>
  );
};
