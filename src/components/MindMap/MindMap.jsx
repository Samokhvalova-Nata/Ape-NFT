import { useMediaQuery } from 'react-responsive';
import { mainMapCards } from 'data';
import { SwiperMobile } from 'components/SwiperMobile';
import { MindMapItem } from 'components/MindMapItem';
import { MindMapContainer, MindMapGrid, MindMapTitle} from './MindMap.styled';


export const MindMap = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <MindMapContainer id="mind">
      <MindMapTitle>Mind map</MindMapTitle>
      {isMobile
        ? <SwiperMobile />
        : <MindMapGrid>
            {mainMapCards.map(({ text, title }) => (
              <MindMapItem key={title} text={text} title={title}/>))}
        </MindMapGrid>
      }
    </MindMapContainer>
  );
};
