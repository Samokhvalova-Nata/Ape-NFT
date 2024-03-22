import React from 'react';
import { ArtsImage } from './ArtsSlider.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';
import 'swiper/css';
import 'swiper/css/navigation';

import arts1_mob_1x from '../../images/pic/arts1-mobile-1x.png';
import arts1_mob_2x from '../../images/pic/arts1-mobile-2x.png';
import arts1_desk_1x from '../../images/pic/arts1-desktop-1x.png';
import arts1_desk_2x from '../../images/pic/arts1-desktop-2x.png';
import arts2_mob_1x from '../../images/pic/arts2-mobile-1x.png';
import arts2_mob_2x from '../../images/pic/arts2-mobile-2x.png';
import arts2_desk_1x from '../../images/pic/arts2-desktop-1x.png';
import arts2_desk_2x from '../../images/pic/arts2-desktop-2x.png';
import arts3_mob_1x from '../../images/pic/arts3-mobile-1x.png';
import arts3_mob_2x from '../../images/pic/arts3-mobile-2x.png';
import arts3_desk_1x from '../../images/pic/arts3-desktop-1x.png';
import arts3_desk_2x from '../../images/pic/arts3-desktop-2x.png';
import arts4_mob_1x from '../../images/pic/arts4-mobile-1x.png';
import arts4_mob_2x from '../../images/pic/arts4-mobile-2x.png';
import arts4_desk_1x from '../../images/pic/arts4-desktop-1x.png';
import arts4_desk_2x from '../../images/pic/arts4-desktop-2x.png';
import arts5_mob_1x from '../../images/pic/arts5-mobile-1x.png';
import arts5_mob_2x from '../../images/pic/arts5-mobile-2x.png';
import arts5_desk_1x from '../../images/pic/arts5-desktop-1x.png';
import arts5_desk_2x from '../../images/pic/arts5-desktop-2x.png';
import arts6_mob_1x from '../../images/pic/arts6-mobile-1x.png';
import arts6_mob_2x from '../../images/pic/arts6-mobile-2x.png';
import arts6_desk_1x from '../../images/pic/arts6-desktop-1x.png';
import arts6_desk_2x from '../../images/pic/arts6-desktop-2x.png';
import arts7_mob_1x from '../../images/pic/arts7-mobile-1x.png';
import arts7_mob_2x from '../../images/pic/arts7-mobile-2x.png';
import arts7_desk_1x from '../../images/pic/arts7-desktop-1x.png';
import arts7_desk_2x from '../../images/pic/arts7-desktop-2x.png';
import arts8_mob_1x from '../../images/pic/arts8-mobile-1x.png';
import arts8_mob_2x from '../../images/pic/arts8-mobile-2x.png';
import arts8_desk_1x from '../../images/pic/arts8-desktop-1x.png';
import arts8_desk_2x from '../../images/pic/arts8-desktop-2x.png';
import arts9_mob_1x from '../../images/pic/arts9-mobile-1x.png';
import arts9_mob_2x from '../../images/pic/arts9-mobile-2x.png';
import arts9_desk_1x from '../../images/pic/arts9-desktop-1x.png';
import arts9_desk_2x from '../../images/pic/arts9-desktop-2x.png';
import arts10_mob_1x from '../../images/pic/arts10-mobile-1x.png';
import arts10_mob_2x from '../../images/pic/arts10-mobile-2x.png';
import arts10_desk_1x from '../../images/pic/arts10-desktop-1x.png';
import arts10_desk_2x from '../../images/pic/arts10-desktop-2x.png';


const artsList = [
  [arts1_mob_1x, arts1_mob_2x, arts1_desk_1x, arts1_desk_2x],
  [arts2_mob_1x, arts2_mob_2x, arts2_desk_1x, arts2_desk_2x],
  [arts3_mob_1x, arts3_mob_2x, arts3_desk_1x, arts3_desk_2x],
  [arts4_mob_1x, arts4_mob_2x, arts4_desk_1x, arts4_desk_2x],
  [arts5_mob_1x, arts5_mob_2x, arts5_desk_1x, arts5_desk_2x],
  [arts6_mob_1x, arts6_mob_2x, arts6_desk_1x, arts6_desk_2x],
  [arts7_mob_1x, arts7_mob_2x, arts7_desk_1x, arts7_desk_2x],
  [arts8_mob_1x, arts8_mob_2x, arts8_desk_1x, arts8_desk_2x],
  [arts9_mob_1x, arts9_mob_2x, arts9_desk_1x, arts9_desk_2x],
  [arts10_mob_1x, arts10_mob_2x, arts10_desk_1x, arts10_desk_2x]
];

export const ArtsSlider = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });

  let slidesPerView = 4;

  if (isMobile) {
    slidesPerView = 1;
  } else if (isTablet) {
    slidesPerView = 2;
  }

  return (
    <Swiper slidesPerView={slidesPerView} spaceBetween={24} navigation={true} modules={[Navigation]}>
      {artsList.map((el, index) => (
        <SwiperSlide key={index}>
            <ArtsImage
              src={el[0]} alt='Arts element' loading='lazy'
              srcSet={`${el[0]} 284w,
                      ${el[1]} 568w,
                      ${el[2]} 1185w,
                      ${el[3]} 2370w,`}
              sizes="(max-width: 1279px) 284px, 1185px"
            />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
