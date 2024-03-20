import React from 'react';
import icon from '../../images/icons/sprite-icons.svg';
import { HeaderContainer, Link } from './Header.styled';
import { BurgerMenu } from 'components/BurgerMenu';

export const Header = () => {
  return (
    <HeaderContainer>
      {/* <HeaderWrap> */}
        <Link href='/'>
        <svg>
          <use href={`${icon}#logo`}></use>
        </svg>
      </Link>
      <BurgerMenu/>
      {/* </HeaderWrap> */}
      
    </HeaderContainer>
  );
};
