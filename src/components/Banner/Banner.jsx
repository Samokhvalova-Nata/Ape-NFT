import React from 'react';
import icon from '../../images/icons/sprite-icons.svg';
import { BannerContainer, Wrapper } from './Banner.styled';

export const Banner = () => {
  return (
    <BannerContainer>
      <Wrapper>
        <svg>
          <use href={`${icon}#addsharp`}></use>
        </svg>
        <p>Destroy stereotypes</p>

        <svg>
          <use href={`${icon}#addsharp`}></use>
        </svg>
        <p>HAVE NO LIMITS</p>

        <svg>
          <use href={`${icon}#addsharp`}></use>
        </svg>
        <p>Break rules</p>
      </Wrapper>
    </BannerContainer>
  );
};
