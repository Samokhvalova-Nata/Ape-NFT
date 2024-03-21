import styled from '@emotion/styled';


export const MindMapContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 354px;

  margin-top: 60px;
  padding: 0px 72px 0px 72px;

  @media screen and (min-width: 768px) {
    margin-top: 80px;
    padding: 0px 88px 0px 88px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 120px;
    padding: 0px 204px 0px 204px;
  }
`;

export const MindMapTitle = styled.h2`
  font-family: "Right Grotesk";
  font-size: 44px;
  line-height: 0.9;
  text-transform: uppercase;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 80px;
    line-height: 1;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 160px;
    margin-bottom: 80px;
  }
`;
