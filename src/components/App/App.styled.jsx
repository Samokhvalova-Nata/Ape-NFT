import styled from '@emotion/styled';

export const Container = styled.div`
    width: 100%;
    padding-left: 8px;
    padding-right: 8px;
    margin-left: auto;
    margin-right: auto;
    outline: 2px solid tomato;
    position: relative;

    @media screen and (min-width: 480px) {
      max-width: 480px;
    } 

    @media screen and (min-width: 768px) {
      max-width: 768px;
      padding-left: 16px;
      padding-right: 16px;
    }    

    @media screen and (min-width: 1280px) {
      max-width: 1280px;
    }
`;
