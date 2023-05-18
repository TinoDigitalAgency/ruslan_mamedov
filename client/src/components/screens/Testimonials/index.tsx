import React, { useRef, useState } from "react";
import styled from "styled-components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

const StyledSwiper = styled(Swiper)`
  height: 396px;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  background-position: center;
  background-size: cover;
  position: relative;
`;

const StyledImg = styled.img`
  display: block;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledLabelContainer = styled.div`
  position: relative;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const PaginationDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#333" : "#999")};
  margin: 0 5px;
  cursor: pointer;
`;

const Testemonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  const handlePaginationClick = (index) => {
    setActiveSlide(index);
    swiperRef.current.slideTo(index);
  };

  const slides = [
    {
      image: 'main_slide_1.jpg',
      text: 'Text above slide 1',
    },
    {
      image: 'main_slide_2.jpg',
      text: 'Text above slide 2',
    },
    {
      image: 'main_slide_2.jpg',
      text: 'Text above slide 2',
    },
    {
      image: 'main_slide_2.jpg',
      text: 'Text above slide 2',
    },
    // Add more slides as needed
  ];

  return (
    <>
      <StyledSwiper
        spaceBetween={30}
        effect={"fade"}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <StyledSwiperSlide onChange={handleSlideChange} itemRef={swiperRef}>
          <StyledImg src="https://swiperjs.com/demos/images/nature-1.jpg" />
          <StyledLabelContainer>Some text for example</StyledLabelContainer>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <StyledImg src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <StyledImg src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <StyledImg src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </StyledSwiperSlide>
      </StyledSwiper>
      <PaginationContainer>
        {slides.map((slide, index) => (
          <PaginationDot
            key={index}
            active={index === activeSlide}
            onClick={() => handlePaginationClick(index)}
          />
        ))}
      </PaginationContainer>
    </>
  );
};

export default Testemonials;
