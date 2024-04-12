import { Fragment } from 'react';
import icon from 'images/icons/sprite-icons.svg';
import data from 'data/bannerData.json';
import { BannerContainer, Wrapper } from './Banner.styled';


export const Banner = () => {
  return (
    <BannerContainer>
      <Wrapper>
        {data.map(({ id, text }) => 
          <Fragment key={id}>
            <svg>
              <use href={`${icon}#addsharp`}></use>
            </svg>
            <p>{text}</p>
          </Fragment>
        )}
      </Wrapper>
    </BannerContainer>
  );
};
