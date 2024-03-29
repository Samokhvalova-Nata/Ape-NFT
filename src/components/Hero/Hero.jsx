import { Link } from 'react-scroll';
import { Button } from 'components/Button';
import { HeroContainer, HeroImage, HeroText, HeroTitle, HeroTitleText, HeroWrap } from './Hero.styled';
import imgMobile1x from '../../images/pic/hero-mobile-1x.png';
import imgMobile2x from '../../images/pic/hero-mobile-2x.png';
import imgTablet1x from '../../images/pic/hero-tablet-1x.png';
import imgTablet2x from '../../images/pic/hero-tablet-2x.png';
import imgDesktop1x from '../../images/pic/hero-desktop-1x.png';
import imgDesktop2x from '../../images/pic/hero-desktop-2x.png';


export const Hero = () => {
  return (
    <HeroContainer>
      <HeroImage src={imgMobile1x} alt='hero-image'
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
          <HeroTitleText>diD yOu seE iT ?</HeroTitleText>
          <HeroTitle>
            <p>YACHT</p>
            <p>APES</p>
          </HeroTitle>
          <HeroTitleText>Apes aRe eveRywhere</HeroTitleText>
        </div>
        <div>
          <Button>
            <Link to="mind" smooth={true} duration={500}>{'MEET APES'}</Link>
          </Button>
          <HeroText>Yacht Ape is a collection of unique digital apes that you can own in NFT format</HeroText>
        </div>
      </HeroWrap>
    </HeroContainer>
  );
};
