import React from 'react';
import { GridContainer, MindMapContainer, MindMapTitle} from './MindMap.styled';
import { SwiperMobile } from 'components/SwiperMobile';
import { MindMapItem } from 'components/MindMapItem';



const mainMapCards = [
  {
    text: 'All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own',
    title: 'YAPE DROP'
  },
  {
    text: 'Launch of the 2nd YACHT Collection Releasing the first version of the Ape Slam Game',
    title: 'New Collection'
  },
  {
    text: 'Launch your own token, the proceeds of which will go to a global fund to LAUNCH YACHT CLUB AND PROMOTE it',
    title: 'Token'
  },
  {
    text: '',
    title: 'Learn more in mind map'
  }
];

export const MindMap = () => {

  return (
    <MindMapContainer id="mind">
      <MindMapTitle>Mind map</MindMapTitle>
      <SwiperMobile />
      
      <GridContainer>
        {mainMapCards.map(({ text, title }) => (
          <MindMapItem key={title} text={text} title={title}/>
      ))}
      </GridContainer>

    </MindMapContainer>
  );
};
