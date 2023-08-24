import React, { useState } from 'react';
import prevBtn from '../../../assets/icons/icon-carousel-left-arrow.svg';
import nextBtn from '../../../assets/icons/icon-carousel-right-arrow.svg';
import IMAGE1 from '../../../assets/images/carousel-img-01.jpg';
import IMAGE2 from '../../../assets/images/carousel-img-02.jpg';
import IMAGE3 from '../../../assets/images/carousel-img-03.jpg';
import IMAGE4 from '../../../assets/images/carousel-img-04.jpg';
import { CarouselStyle, Wrapper, Image, Chapter, PrevButton, NextButton } from './CarouselStyle';

const Carousel = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const images = [IMAGE1, IMAGE2, IMAGE3, IMAGE4];

  const handlePrev = () => {
    setCurrentIdx(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <CarouselStyle>
      <Wrapper>
        <Image>
          <img src={images[currentIdx]} alt={`슬라이드 ${currentIdx + 1}`} />
        </Image>
      </Wrapper>
      <Chapter>{`${currentIdx + 1} / ${images.length}`}</Chapter>
      <PrevButton onClick={handlePrev}>
        <img src={prevBtn} alt="이전 슬라이드로 이동" />
      </PrevButton>
      <NextButton onClick={handleNext}>
        <img src={nextBtn} alt="다음 슬라이드로 이동" />
      </NextButton>
    </CarouselStyle>
  );
};

export default Carousel;
