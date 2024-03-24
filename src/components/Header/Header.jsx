import { BurgerMenu } from 'components/BurgerMenu';
import { Logo } from 'components/Logo';
import { HeaderContainer, HeaderWrap } from './Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrap>
        <Logo/>
        <BurgerMenu/>
      </HeaderWrap>
    </HeaderContainer>
  );
};
