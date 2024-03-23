import styled from '@emotion/styled';


export const Wrap = styled.div`
  width: 216px;
  height: 242px;
  padding: 24px 12px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // align-items: flex-end;

  border-radius: 12px;
  background: ${props => (props.active ? '#DC3B5A' : '#1E1E1E')};

  &:hover > a,
  &:focus > a {
    &> svg {
      right: 2px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 284px;
    height: 242px;
    padding: 24px;
    border-radius: 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 504px;
    height: 480px;
    border-radius: 24px;
  }
`;

export const Link = styled.a`
  position: relative;
  display: inline-block;

  > svg {
    position: absolute;
    right: 10px;
    width: 24px;
    height: 24px;
    fill: var(--primary-text-color);
    transition: right var(--transition);

    @media screen and (min-width: 1280px) {
      width: 39.54px;
      height: 39.54px;
    }
  }
`;

export const Text = styled.p`
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
      width: 128px;
      align-self: flex-end;
    }

  @media screen and (min-width: 1280px) {
    width: 228px;
    font-size: 24px;
    line-height: 1.2; 
  }
`;

export const Title = styled.h3`
  font-family: "Right Grotesk";
  font-size: 32px;
  line-height: 1;
  text-transform: uppercase;

  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }

`;