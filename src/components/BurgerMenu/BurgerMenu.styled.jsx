import styled from '@emotion/styled';

export const BurgerMenuContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  gap: 8px;

  @media screen and (min-width: 1280px) {
    gap: 16px;
  }
`;