import { useMediaQuery } from 'react-responsive';
import data from 'data/mainMapElements.json';
import { SwiperMobile } from 'components/MindMap/SwiperMobile';
import { MindMapItem } from 'components/MindMap/MindMapItem';
import { MindMapContainer, MindMapGrid, MindMapTitle} from './MindMap.styled';


export const MindMap = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <MindMapContainer id="mind">
      <MindMapTitle>Mind map</MindMapTitle>
      {isMobile
        ? <SwiperMobile />
        : <MindMapGrid>
            {data.map(({ text, title }) => (
              <MindMapItem key={title} text={text} title={title}/>))}
        </MindMapGrid>
      }
    </MindMapContainer>
  );
};
