import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { BurgerNavMenu } from 'components/BurgerNavMenu';
import { BurgerMenuList } from 'components/BurgerMenuList';
import { BurgerMenuContainer } from './BurgerMenu.styled';


export const BurgerMenu = () => {
  const [isOpened, setIsOpened] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const toggleMenuOpen = () => {
    setIsOpened(prev => !prev);
    if (isMobile) {
      document.body.style.overflow = isOpened ? 'auto' : 'hidden';
    }
  };

  return (
    <BurgerMenuContainer>
      <BurgerMenuList onClick={toggleMenuOpen} isOpened={isOpened}/>
      {isOpened && <BurgerNavMenu onClick={toggleMenuOpen} isOpened={isOpened}/>}
    </BurgerMenuContainer>
  );
};
