import { Logo } from 'components/Header/Logo';
import { BurgerMenu } from 'components/Header/BurgerMenu';
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
