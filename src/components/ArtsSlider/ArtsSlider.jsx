import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { artsList } from 'data';
import { ArtsImage } from './ArtsSlider.styled';


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
