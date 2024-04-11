import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  width: 100%;
  position: absolute;
  z-index: 1;
`;

export const HeaderWrap = styled.div`
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 62px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  } 

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 28px;
    padding-right: 28px;
    margin-top: 66px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1440px;
    padding-left: 112px;
    padding-right: 112px;
    margin-top: 40px;
  }
`;
