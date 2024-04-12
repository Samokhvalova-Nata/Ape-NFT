import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { artsElements } from 'data/artsElements';
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
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={24}
      navigation={true}
      modules={[Navigation]}
    >
      {artsElements.map(({id, src, alt}) => (
        <SwiperSlide key={id}>
            <ArtsImage
              src={src[0]} alt={alt} loading='lazy'
              srcSet={`${src[0]} 284w,
                      ${src[1]} 568w,
                      ${src[2]} 1185w,
                      ${src[3]} 2370w,`}
              sizes="(max-width: 1279px) 284px, 1185px"
            />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
