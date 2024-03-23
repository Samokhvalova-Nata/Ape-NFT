import React from 'react';
import { ArtsContainer, ArtsTitle } from './Arts.styled';
import { ArtsSlider } from 'components/ArtsSlider/ArtsSlider';


export const Arts = () => {
  return (
    <ArtsContainer id="arts">
      <ArtsTitle>COLLECTION</ArtsTitle>
      <ArtsSlider/>
    </ArtsContainer>
  );
};
