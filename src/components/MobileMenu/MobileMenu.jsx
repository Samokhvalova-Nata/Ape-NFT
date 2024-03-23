import { LogoMenuWrap, MobileMenuContainer, MobileMenuContent, MobileMenuElement, MobileMenuNav, MobileMenuText, MobileMenuWrap, NavLink } from './MobileMenu.styled';
import { Logo } from 'components/Logo';
import { BurgerMenuList } from 'components/BurgerMenuList';
import { createPortal } from 'react-dom';

const mobileRoot = document.getElementById('mobile-root');

export const MobileMenu = ({ isOpened, onClick }) => {
  return createPortal(
    <MobileMenuContainer>
      <MobileMenuWrap>
        <MobileMenuContent>
          <LogoMenuWrap>
            <Logo mobile={true} />
            <BurgerMenuList onClick={onClick} isOpened={isOpened} mobile={true}/>
          </LogoMenuWrap>
          <nav>
          <MobileMenuNav>
            <MobileMenuElement>
              <NavLink to="mind" smooth={true} duration={500} onClick={onClick}>{'MINT'}</NavLink>
            </MobileMenuElement>
            <MobileMenuElement>
              <NavLink to="arts" smooth={true} duration={500} onClick={onClick}>{'ARTS'}</NavLink>
            </MobileMenuElement>
            <MobileMenuElement>
              <NavLink to="faq" smooth={true} duration={500} onClick={onClick}>{'Faq'}</NavLink>
            </MobileMenuElement>
            <MobileMenuElement>
              <NavLink to="mind" smooth={true} duration={500} onClick={onClick}>{'M-map'}</NavLink>
            </MobileMenuElement>
            <MobileMenuElement>
              <NavLink to="about" smooth={true} duration={500} onClick={onClick}>{'ABOUT'}</NavLink>
            </MobileMenuElement>
        </MobileMenuNav>
          </nav>
        </MobileMenuContent>
        <MobileMenuText>© Yacht ape 2024 all rights reserved</MobileMenuText>
      </MobileMenuWrap>
    </MobileMenuContainer>,
    mobileRoot,
  )
};
