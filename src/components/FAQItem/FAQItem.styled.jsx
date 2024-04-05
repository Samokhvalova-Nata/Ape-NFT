import styled from '@emotion/styled';

export const FAQItemContainer = styled.li`
  width: 216px;
  border-radius: 12px;
  padding: 8px 8px 10px 8px;
  background-color: ${props => (props.active ? '#1E1E1E' : 'transparent')};

  display: flex;
  gap: 8px;
  position: relative;

  > span {
    width: 31px;
    color: ${props => (props.active ? '#FFFFFF' : '#DC3B5A')};
    font-family: "Biro Script Plus";
    line-height: 1.66;
    transition: color var(--transition);
  }

  &:hover > span,
  &:focus > span {
    color: var(--primary-text-color);
  }

  @media screen and (min-width: 768px) {
    width: 592px;
    border-radius: 16px;
    padding: 18px 16px 23px 16px;
    justify-content: flex-end;
    gap: 21px;

    > span {
      font-size: 16px;
      line-height: 1.68;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 1032px;
    border-radius: 24px;
    padding: 24px;
    gap: 27px;

    > span {
      width: 49px;
      font-size: 24px;
      line-height: 1.66;
    }
  }
`;

export const FAQTitleWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  > h3 {
    color: ${props => (!props.active ? '#FFFFFF' : '#DC3B5A')};
    font-family: "Right Grotesk";
    font-size: 20px;
    font-weight: 900;
    line-height: 1;
    text-transform: uppercase;
    transition: color var(--transition);
  }

  > p {
    text-transform: uppercase;
  }

  &:hover > h3,
  &:focus > h3 {
    color: var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    width: 318px;

    > h3 {
      font-size: 32px;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 635px;
    gap: 36px;

    > h3 {
      font-size: 64px;
    }

    > p {
      font-size: 16px;
      line-height: 1.18;
    }
  }
`;

export const FAQImage = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    width: 182.613px;
    height: 183px;
    border-radius: 16px;

    transform: rotate(-16deg);
    position: absolute;
    top: -9.5%;
    left: 3%;
  }

  @media screen and (min-width: 1280px) {
    width: 270px;
    height: 281.999px;

    transform: rotate(-8deg);
    left: 1%;
  }
`;
