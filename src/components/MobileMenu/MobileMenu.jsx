import { createPortal } from 'react-dom';
import { navLinks } from 'data';
import { Logo } from 'components/Header/Logo';
import { BurgerMenuList } from 'components/Header/BurgerMenuList';
import { LogoMenuWrap, MobileMenuContainer, MobileMenuContent, MobileMenuElement, MobileMenuNav, MobileMenuText, MobileMenuWrap, NavLink } from './MobileMenu.styled';

const mobileRoot = document.getElementById('mobile-root');

export const MobileMenu = ({ isOpened, onClick }) => {
  return createPortal(
    <MobileMenuContainer isOpened={isOpened}>
      <MobileMenuWrap>
        <MobileMenuContent>
          <LogoMenuWrap>
            <Logo mobile={true} />
            <BurgerMenuList onClick={onClick} isOpened={isOpened} mobile={true}/>
          </LogoMenuWrap>

          <nav>
            <MobileMenuNav>
              {navLinks.map(({to, children}) =>
                <MobileMenuElement key={to}>
                  <NavLink
                    to={to}
                    smooth={true}
                    duration={500}
                    onClick={onClick}>
                    {children}
                  </NavLink>
                </MobileMenuElement>
              )}
            </MobileMenuNav>
          </nav>

        </MobileMenuContent>
        <MobileMenuText>© Yacht ape 2024 all rights reserved</MobileMenuText>
      </MobileMenuWrap>
    </MobileMenuContainer>,
    mobileRoot,
  )
};
