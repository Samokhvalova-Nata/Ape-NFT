import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { MindMapItem } from 'components/MindMapItem';

const mainMapCards = [
  {
    text: 'All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own',
    title: 'Yape drop'
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
