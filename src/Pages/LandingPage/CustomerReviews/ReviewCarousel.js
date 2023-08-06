import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import CustomerReviewsData from "./CustomerReviewsData";
import CustomerReviewItem from "./CustomerReviewItem";
import "swiper/css";
import "./styles/ReviewCarousel.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ReviewCarousel() {
  const swiperRef = useRef();
  const [nextSlide, setNextSlide] = useState();

  const items = CustomerReviewsData.map(
      review => <SwiperSlide key={review.id}>
        <CustomerReviewItem
          content={review.content}
          avatar={review.avatar}
        />
      </SwiperSlide>
  )

  return (
    <div className="cuppa-carousel-wrapper">
    <OpenQuote/>
    <Swiper
      modules={[Navigation, Pagination]}
      loop={true}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }}
      ref={swiperRef}>
        {items}
      <div className="swiper-button-prev" onClick={() => swiperRef.current.swiper.slidePrev}></div>
      <div className="swiper-button-next" onClick={() => {
        //console.log(swiperRef.current.swiper.slideNext())
        setNextSlide(swiperRef.current.swiper.realIndex);
        //console.log(swiperRef.current.swiper.activeIndex)
        console.log(nextSlide)
        //swiperRef.current.swiper.slideNext()
      }}></div>
    </Swiper>
    <ClosingQuote/>
    </div>
  )
}

function OpenQuote() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" className="svg open-quote"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/></svg>
  )
}

function ClosingQuote() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" className="svg close-quote"><path d="M11 9.275c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275zm13 0c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275z"/></svg>
  )
}

export default ReviewCarousel
