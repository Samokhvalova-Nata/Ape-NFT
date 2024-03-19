import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
display: flex;
padding: 8px;
justify-content: space-between;
align-items: center;
position: absolute;
width: 100%;
// top: 8px;


    @media screen and (min-width: 768px) {
      padding: 12px;
    }    

    @media screen and (min-width: 1280px) {
      padding: 24px 96px 0px 96px;
    }


`;

export const Link = styled.a`
  
  &:hover > svg,
  &:focus > svg {
      fill: var(--accent-color);
    }
  > svg {
    width: 48px;
    height: 32px;
    fill: var(--secondary-text-color);
    transition: fill var(--transition);

    @media screen and (min-width: 1280px) {
      width: 72px;
      height: 50px;
    }
  }
`;

// export const Logo = styled.svg`
//   width: 48px;
//   height: 32px;
//   fill: var(--secondary-text-color);

//   transition: fill var(--transition);
//   .a:hover + & {
//     fill: #DC3B5A;
//   }

//   @media screen and (min-width: 1280px) {
//     width: 72px;
//     height: 50px;
//   }
// `;      