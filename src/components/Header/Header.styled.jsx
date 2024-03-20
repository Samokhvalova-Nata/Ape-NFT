import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
display: flex;
padding: 8px;
justify-content: space-between;
align-items: center;
    // gap: 100px;

// background-color: var(--accent-color);

position: absolute;
width: 100%;
z-index: 1;

@media screen and (min-width: 480px) {
    max-width: 480px;
  } 

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 12px;
  }    

  @media screen and (min-width: 1280px) {
      padding: 24px 96px 0px 96px;
      // max-width: 1440px;
  }
`;

export const HeaderWrap = styled.div`
// min-width: 100%;
display: flex;
// justify-content: space-between;
    align-items: center;
    gap: 100px;

    // @media screen and (min-width: 1280px) {
    //   max-width: 1440px;
    // }
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