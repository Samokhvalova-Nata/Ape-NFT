import React from 'react';
import icon from '../../images/icons/sprite-icons.svg';
import { BurgerMenuWrap, Link, MenuButton, MenuElement } from './BurgerMenuList.styled'
import { useMediaQuery } from 'react-responsive';

export const BurgerMenuList = ({ isOpened, onClick, mobile = false }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <BurgerMenuWrap>
      {(!isOpened || isMobile) && 
        <MenuElement mobile={mobile}>
          <MenuButton onClick={onClick} mobile={mobile}>{!isOpened ? 'Menu' : 'Close'}</MenuButton>
        </MenuElement>}
      
        <MenuElement mobile={mobile}>
          <Link href="https://discord.com/" aria-label="Discord link" target="_blank" rel="noopener noreferrer" mobile={mobile}>
            <svg>
              <use href={`${icon}#discord`}></use>
            </svg>
          </Link>
        </MenuElement>
        <MenuElement mobile={mobile}>
          <Link href="https://logomark.com/" aria-label="Logomark link" target="_blank" rel="noopener noreferrer" mobile={mobile}>
            <svg>
              <use href={`${icon}#logomarkblue`}></use>
            </svg>
          </Link>
        </MenuElement>
        <MenuElement mobile={mobile}>
          <Link href="https://twitter.com/" aria-label="X link" target="_blank" rel="noopener noreferrer" mobile={mobile}>
            <svg>
            <use href={`${icon}#icon-x`}></use>
          </svg>
          </Link>
        </MenuElement>
      </BurgerMenuWrap>
  )
}
