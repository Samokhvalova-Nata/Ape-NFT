import styled from '@emotion/styled';
import { Link } from 'react-scroll';

export const MobileMenuContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 62px 16px 62px 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  background-color: var(--primary-background-color);

  position: fixed;
  z-index: 20;
  top: 0;
`;

export const MobileMenuWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: auto;
`;

export const MobileMenuContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LogoMenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const MobileMenuNav = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

export const MobileMenuElement = styled.li`
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
    color: var(--accent-color);
    text-decoration: underline;
  }

  @media screen and (min-width: 1280px) {
    width: 80px;
    height: 80px;
  }
`;



export const NavLink = styled(Link)`
  background-color: transparent;
  color: var(--primary-text-color);
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2;
  text-transform: uppercase;
  transition: color var(--transition), text-decoration var(--transition);
  white-space: nowrap;

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.18; 
  }

  &:focus {
    outline: grey solid 1px;
  }
`;

export const MobileMenuText = styled.p`
  width: 216px;
  text-align: center;
  text-transform: uppercase;
`;