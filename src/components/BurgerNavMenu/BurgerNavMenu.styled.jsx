import styled from '@emotion/styled';
import { Link } from 'react-scroll';


export const BurgerNavMenuContainer = styled.ul`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  background: rgba(30, 30, 30, 0.10);

  @media screen and (min-width: 1280px) {
    // gap: 16px;
  }
`;

export const NavMenuElement = styled.li`
  width: 50px;
  height: 50px;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover > button,
  &:focus > button,
  &:hover > a,
  &:focus > a {
    color: var(--primary-text-color);
    text-decoration: underline;
  }

  @media screen and (min-width: 1280px) {
    width: 80px;
    height: 80px;
  }
`;

export const NavMenuButton = styled.button`
  background-color: transparent;
  color: var(--secondary-text-color);
  font-size: 12px;
  line-height: 1.16;
  font-weight: 600;
  text-transform: uppercase;
  transition: color var(--transition), text-decoration var(--transition);

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.18; 
  }
`;

export const NavLink = styled(Link)`
  background-color: transparent;
  color: var(--secondary-text-color);
  font-weight: 600;
  text-transform: uppercase;
  transition: color var(--transition), text-decoration var(--transition);
  white-space: nowrap;

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.18; 
  }
  
`;


// @media screen and (min-width: 768px) {
//   }

//   @media screen and (min-width: 1280px) {
//   }