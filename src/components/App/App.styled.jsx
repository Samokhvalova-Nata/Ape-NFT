import styled from '@emotion/styled';

export const Container = styled.div`
    width: 100%;
    padding-top: 54px;
    padding-bottom: 24px;
    margin-left: auto;
    margin-right: auto;
    outline: 2px solid tomato;
    position: relative;

    @media screen and (min-width: 480px) {
      max-width: 480px;
    } 

    @media screen and (min-width: 768px) {
      max-width: 768px;
      padding-bottom: 40px;
    }    

    @media screen and (min-width: 1280px) {
      max-width: 1440px;
      padding-top: 16px;
    }
`;
