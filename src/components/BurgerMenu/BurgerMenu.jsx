import React, { useState } from 'react';
import { BurgerMenuContainer } from './BurgerMenu.styled';
import { BurgerNavMenu } from 'components/BurgerNavMenu';
import { BurgerMenuList } from 'components/BurgerMenuList';


export const BurgerMenu = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenuOpen = () => {
    setIsOpened(prev => !prev);
  };

  return (
    <BurgerMenuContainer>
      <BurgerMenuList onClick={toggleMenuOpen} isOpened={isOpened}/>
      {isOpened && <BurgerNavMenu onClick={toggleMenuOpen} isOpened={isOpened}/>}
    </BurgerMenuContainer>
  );
};
