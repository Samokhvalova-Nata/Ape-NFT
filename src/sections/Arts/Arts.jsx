import { ArtsSlider } from 'components/ArtsSlider/ArtsSlider';
import { ArtsContainer, ArtsTitle } from './Arts.styled';

export const Arts = () => {
  return (
    <ArtsContainer id="arts">
      <ArtsTitle>COLLECTION</ArtsTitle>
      <ArtsSlider/>
    </ArtsContainer>
  );
};
