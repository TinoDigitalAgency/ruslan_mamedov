// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Thumbs, FreeMode, Autoplay } from "swiper";

import styled from "styled-components";

// Import Swiper styles
import "swiper/css";
import {  useState } from "react";

const StyledSliderSlide = styled.div`
  width: 100%;
  height: 396px;
  display: flex;
  justify-content: end;
`;

const StyledSlideImage = styled.img`
  height: 100%;
  object-fit: cover;
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

  /* transform: translateX(-100%); */
  /* opacity: 0; */
  transition: 0.8 ease;

  padding: 120px 1px 1px 60px;
  box-sizing: border-box;

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

const Testemonials = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const handleThumbClick = (e: any) => {
    thumbsSwiper.slides[thumbsSwiper.activeIndex].classList.remove(
      "swiper-slide-thumb-active"
    );
    swiper.slideTo(e.clickedIndex);
    thumbsSwiper.slides[e.clickedIndex].classList.add(
      "swiper-slide-thumb-active"
    );
  };

  const handleSlide = (e: any) => {
    thumbsSwiper.slides[thumbsSwiper.activeIndex].classList.remove(
      "swiper-slide-thumb-active"
    );
    e.slides[thumbsSwiper.activeIndex]
      .querySelector(".styled-label")
      .classList.remove("styled-label-active");

    thumbsSwiper.activeIndex = e.activeIndex;
    thumbsSwiper.slides[thumbsSwiper.activeIndex].classList.add(
      "swiper-slide-thumb-active"
    );

    e.slides[e.activeIndex]
      .querySelector(".styled-label")
      .classList.add("styled-label-active");
  };

  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={handleSlide}
        onSwiper={(swiper: any) => {
          return setSwiper(swiper);
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        modules={[EffectFade, Pagination, FreeMode, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <StyledSliderSlide>
            <StyledSlideImage src="/images/versities/csm_la-sierra-spring-fall-2021_01_ad2e17cd79.webp" />
            <StyledLabel>
              <div className="styled-label styled-label-active">
                <StyledNarative>
                  Sparrow has saved our team, students, and parents countless
                  hours of headache and stress. It eliminates the guessing game.
                  It’s a tested platform we trust.
                </StyledNarative>
                <StyledAuthor>Elina Bascom</StyledAuthor>
                <StyledPosition>
                  Director of Student Financial Services, La Sierra University
                </StyledPosition>
              </div>
            </StyledLabel>
          </StyledSliderSlide>
        </SwiperSlide>
        <SwiperSlide>
          <StyledSliderSlide>
            <StyledSlideImage src="/images/versities/image-6344351.webp" />
            <StyledLabel>
              <div className="styled-label">
                <StyledNarative>
                  We now have great confidence that our students will find the
                  most affordable financing options. Sparrow made that possible.
                </StyledNarative>
                <StyledAuthor>Kara Moore</StyledAuthor>
                <StyledPosition>
                  Director of Student Financial Services, La Sierra University
                </StyledPosition>
              </div>
            </StyledLabel>
          </StyledSliderSlide>
        </SwiperSlide>
        <SwiperSlide>
          <StyledSliderSlide>
            <StyledSlideImage src="/images/versities/img1.webp" />
            <StyledLabel>
              <div className="styled-label">
                <StyledNarative>
                  Sparrow has saved our team, students, and parents countless
                  hours of headache and stress. It eliminates the guessing game.
                  It’s a tested platform we trust.
                </StyledNarative>
                <StyledAuthor>Elina Bascom</StyledAuthor>
                <StyledPosition>
                  Director of Student Financial Services, La Sierra University
                </StyledPosition>
              </div>
            </StyledLabel>
          </StyledSliderSlide>
        </SwiperSlide>
        <SwiperSlide>
          <StyledSliderSlide>
            <StyledSlideImage src="/images/versities/img2.webp" />
            <StyledLabel>
              <div className="styled-label">
                <StyledNarative>
                  We now have great confidence that our students will find the
                  most affordable financing options. Sparrow made that possible.
                </StyledNarative>
                <StyledAuthor>Elina Bascom</StyledAuthor>
                <StyledPosition>
                  Director of Student Financial Services, La Sierra University
                </StyledPosition>
              </div>
            </StyledLabel>
          </StyledSliderSlide>
        </SwiperSlide>
      </Swiper>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        onClick={handleThumbClick}
        className="thumbsSlider"
      >
        <SwiperSlide className="swiper-slide-thumb-active">
          <img src="/images/versities/kindpng_270292-1.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/versities/pacific-without-mask.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/versities/pitzer-without-mask.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/versities/wooster-without-mask.webp" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testemonials;
