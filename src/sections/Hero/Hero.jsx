import { Link } from 'react-scroll';
import imgMobile1x from 'images/pic/hero-mobile-1x.png';
import imgMobile2x from 'images/pic/hero-mobile-2x.png';
import imgTablet1x from 'images/pic/hero-tablet-1x.png';
import imgTablet2x from 'images/pic/hero-tablet-2x.png';
import imgDesktop1x from 'images/pic/hero-desktop-1x.png';
import imgDesktop2x from 'images/pic/hero-desktop-2x.png';
import data from 'data/heroData.json';
import { Button } from 'components/Button';
import { HeroContainer, HeroImage, HeroText, HeroTitle, HeroTitleText, HeroWrap } from './Hero.styled';


export const Hero = () => {
  return (
    <HeroContainer>
      <HeroImage src={imgMobile1x} alt='NFT monkey in bussiness style'
        srcSet={`${imgMobile1x} 216w,
                ${imgMobile2x} 432w,
                ${imgTablet1x} 283w,
                ${imgTablet2x} 566w,
                ${imgDesktop1x} 463w,
                ${imgDesktop2x} 926w,`}
        sizes='(max-width: 480px) 216px,
            (max-width: 768px) 283px,
            463px' />
      <HeroWrap>
        <div>
          <HeroTitleText>{data.titleUpText}</HeroTitleText>
          <HeroTitle>
            <p>{data.title1}</p>
            <p>{data.title2}</p>
          </HeroTitle>
          <HeroTitleText>{data.titleDownText}</HeroTitleText>
        </div>
        <div>
          <Button>
            <Link to="mint" smooth={true} duration={500}>{'MEET APES'}</Link>
          </Button>
          <HeroText>{data.descroption}</HeroText>
        </div>
      </HeroWrap>
    </HeroContainer>
  );
};
