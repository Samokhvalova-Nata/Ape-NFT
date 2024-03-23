import styled from '@emotion/styled';

export const Link = styled.a`
  &:hover > svg,
  &:focus > svg {
    fill: var(--accent-color);
  }

  > svg {
    width: 48px;
    height: 32px;
    fill: ${props => ( props.mobile ? 'var(--primary-text-color)' : 'var(--secondary-text-color)')};
    transition: fill var(--transition);

    @media screen and (min-width: 1280px) {
      width: 72px;
      height: 50px;
    }
  }
`;  
