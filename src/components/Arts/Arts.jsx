import React from 'react';
import { ArtsContainer, ArtsTitle } from './Arts.styled';
import { ArtsSlider } from 'components/ArtsSlider/ArtsSlider';


export const Arts = () => {
  return (
    <ArtsContainer>
      <ArtsTitle>COLLECTION</ArtsTitle>
      <ArtsSlider/>
    </ArtsContainer>
  );
};
