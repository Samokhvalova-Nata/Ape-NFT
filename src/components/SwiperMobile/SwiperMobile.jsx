import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { MindMapItem } from 'components/MindMapItem';
import { mainMapCards } from 'data';


export const SwiperMobile = () => {
  return (
    <Swiper slidesPerView={1} navigation={true} modules={[Navigation]}>
      {mainMapCards.map(({ text, title }) => (
        <SwiperSlide key={title}>
          <MindMapItem key={title} text={text} title={title}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
