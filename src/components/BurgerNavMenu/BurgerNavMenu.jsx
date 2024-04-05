import { useMediaQuery } from 'react-responsive';
import { MobileMenu } from 'components/MobileMenu';
import { BurgerNavMenuContainer, NavLink, NavMenuButton, NavMenuElement } from './BurgerNavMenu.styled';
import { navLinks } from 'data';

export const BurgerNavMenu = ({ isOpened, onClick }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  
  return (
    <>
      {isMobile ?
        <MobileMenu onClick={onClick} isOpened={isOpened} />
        : 
        <nav>
          <BurgerNavMenuContainer>
            <NavMenuElement>
              <NavMenuButton
                type='button'
                onClick={onClick}>
                {!isOpened ? 'Menu' : 'Close'}
              </NavMenuButton>
            </NavMenuElement>
            {navLinks.map(({to, children}) =>
              <NavMenuElement key={to}>
                <NavLink
                  to={to}
                  smooth={true}
                  duration={500}>
                  {children}
                </NavLink>
              </NavMenuElement>
            )}
          </BurgerNavMenuContainer>
        </nav>
      }
    </>
  );
};
