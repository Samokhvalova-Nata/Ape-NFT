import styled from '@emotion/styled';


export const BurgerMenuWrap = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 1280px) {
    gap: 16px;
  }
`;

export const MenuElement = styled.li`
  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  backdrop-filter: blur(6px);
  background: ${props => ( props.mobile ? 'rgba(255, 255, 255, 0.10)' : 'rgba(30, 30, 30, 0.10)')};

  &:hover > button,
  &:focus > button {
    color: ${props => ( props.mobile ? 'var(--accent-color)' : 'var(--primary-text-color)')};
    text-decoration: underline;
  }

  @media screen and (min-width: 768px) {
    border-radius: 12px;
  }

  @media screen and (min-width: 1280px) {
    width: 80px;
    height: 80px;
  }
`;

export const MenuButton = styled.button`
  background-color: transparent;
  color: ${props => ( props.mobile ? 'var(--primary-text-color)' : 'var(--secondary-text-color)')};
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

export const Link = styled.a`
  padding: 10px;
  &:hover > svg,
  &:focus > svg {
    fill: ${props => ( props.mobile ? 'var(--accent-color)' : '#F0F0F0')};
    }

  & > svg {
    width: 16px;
    height: 16px;
    fill: ${props => ( props.mobile ? 'var(--primary-text-color)' : 'var(--secondary-text-color)')};
    transition: fill var(--transition);

    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`;
