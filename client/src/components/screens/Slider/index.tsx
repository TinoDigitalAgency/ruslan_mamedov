import { FC, useState, useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper.min.css";
import styled from "styled-components";

const StyledSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1160px;
  margin: 50px 0 20px;
`;

const StyledSlider = styled.div`
  position: relative;
  width: 100%;
  height: 396px;
  overflow: hidden;
  border-radius: 16px;
`;

const StyledSliderSlide = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const StyledSlideImage = styled.img`
  width: 800px;
`;

const StyledLabel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    86deg,
    rgba(255, 201, 22, 1) 0%,
    rgba(255, 201, 22, 1) 45%,
    rgba(255, 201, 22, 0.39959733893557425) 60%,
    rgba(255, 201, 22, 0.001) 100%
  );

  padding: 130px 0 0 60px;

  * {
    color: rgba(21, 27, 38, 1);
  }

  ::before {
    content: "";
    width: 56px;
    height: 56px;
    background: url("/images/icons/brakes.svg");
    position: absolute;
    left: 56px;
    top: 40px;
  }
`;

const StyledNarative = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  width: 470px;
`;

const StyledAuthor = styled.div`
  margin-top: 32px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

const StyledPosition = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(82, 89, 102, 1);
`;

const TextAbove = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  color: #ffffff;
  font-size: 18px;
  z-index: 1;
`;

const PreviewImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

// const PreviewImage = styled.img`
//   width: 50px;
//   height: 50px;
//   margin: 0 5px;
//   cursor: pointer;
//   opacity: ${(props) => (props.isActive ? 1 : 0.5)};
// `;

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  const slides = [
    {
      image: "/images/versities/img2.webp",
      text: "Text above slide 1",
    },
    {
      image: "/images/versities/img1.webp",
      text: "Text above slide 2",
    },
    {
      image:
        "/images/versities/csm_la-sierra-spring-fall-2021_01_ad2e17cd79.webp",
      text: "Text above slide 2",
    },
    {
      image: "/images/versities/image-6344351.webp",
      text: "Text above slide 2",
    },
  ];

  return (
    <>
      <StyledSliderContainer>
        <StyledSlider>
          <StyledSliderSlide>
            <StyledSlideImage src="/images/versities/csm_la-sierra-spring-fall-2021_01_ad2e17cd79.webp" />
            <StyledLabel>
              <StyledNarative>
                Sparrow has saved our team, students, and parents countless
                hours of headache and stress. It eliminates the guessing game.
                It’s a tested platform we trust.
              </StyledNarative>
              <StyledAuthor>Elina Bascom</StyledAuthor>
              <StyledPosition>
                Director of Student Financial Services, La Sierra University
              </StyledPosition>
            </StyledLabel>
          </StyledSliderSlide>
        </StyledSlider>
      </StyledSliderContainer>
    </>

    // <SliderContainer>
    //   <Swiper
    //     onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
    //     ref={swiperRef}
    //   >
    //     {slides.map((slide, index) => (
    //       <SwiperSlide key={index}>
    //         <SlideImage src={slide.image} alt={`Main Slide ${index + 1}`} />
    //         <TextAbove>{slide.text}</TextAbove>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    //   <PreviewImagesContainer>
    //     {slides.map((slide, index) => (
    //       <PreviewImage
    //         key={index}
    //         src={slide.image}
    //         alt={`Preview Slide ${index + 1}`}
    //         isActive={index === activeSlide}
    //         onClick={() => handlePreviewClick(index)}
    //       />
    //     ))}
    //   </PreviewImagesContainer>
    // </SliderContainer>
  );
};

export default Slider;
