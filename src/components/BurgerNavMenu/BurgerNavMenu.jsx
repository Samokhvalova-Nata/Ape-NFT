import React from 'react';
import { BurgerNavMenuContainer, NavLink, NavMenuButton, NavMenuElement } from './BurgerNavMenu.styled';
import { useMediaQuery } from 'react-responsive';
import { MobileMenu } from 'components/MobileMenu';


export const BurgerNavMenu = ({ isOpened, onClick }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  
  return (
    <>
      {isMobile ? <MobileMenu onClick={onClick} isOpened={isOpened} /> : 
      <nav>
      <BurgerNavMenuContainer>
        <NavMenuElement>
          <NavMenuButton onClick={onClick}>{!isOpened ? 'Menu' : 'Close'}</NavMenuButton>
        </NavMenuElement>
        <NavMenuElement>
          <NavLink to="mind" smooth={true} duration={500}>{'MINT'}</NavLink>
        </NavMenuElement>
        <NavMenuElement>
          <NavLink to="arts" smooth={true} duration={500}>{'ARTS'}</NavLink>
        </NavMenuElement>
        <NavMenuElement>
          <NavLink to="faq" smooth={true} duration={500}>{'Faq'}</NavLink>
        </NavMenuElement>
        <NavMenuElement>
          <NavLink to="mind" smooth={true} duration={500}>{'M-map'}</NavLink>
        </NavMenuElement>
        <NavMenuElement>
          <NavLink to="about" smooth={true} duration={500}>{'ABOUT'}</NavLink>
        </NavMenuElement>
      </BurgerNavMenuContainer>
      </nav>
    }
    </>
  );
};

