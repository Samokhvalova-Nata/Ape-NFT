import styled from '@emotion/styled';

export const Container = styled.main`
  width: 100%;
  padding-top: 54px;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  } 

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }    

  @media screen and (min-width: 1280px) {
    max-width: 1440px;
    padding-top: 16px;
  }
`;
