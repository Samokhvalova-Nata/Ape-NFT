import styled from '@emotion/styled';

export const BannerContainer = styled.div`
  height: 52px;
  display: flex;
  overflow: hidden;

  background: var(--accent-color);

  @media screen and (min-width: 1280px) {
    height: 86px;
    gap: 36px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  animation: moveText 10s linear infinite alternate;
  @keyframes moveText {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @media screen and (min-width: 1280px) {
    gap: 36px;
  }

  > svg {
    width: 36px;
    height: 36px;
    fill: var(--primary-text-color);
  }

  > p {
    font-family: "Right Grotesk";
    font-size: 36px;
    line-height: 1;
    text-transform: uppercase;
    white-space: nowrap;

    @media screen and (min-width: 1280px) {
      font-size: 64px;
    }
  }
`;