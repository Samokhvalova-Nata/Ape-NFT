import { HeaderContainer, HeaderWrap } from './Header.styled';
import { BurgerMenu } from 'components/BurgerMenu';
import { Logo } from 'components/Logo';

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
