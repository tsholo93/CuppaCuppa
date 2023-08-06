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

  const items = CustomerReviewsData.map(
      review => <SwiperSlide key={review.id}>
        <CustomerReviewItem
          content={review.content}
          avatar={review.avatar}
        />
      </SwiperSlide>
  )

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next"
      }}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15
        }
      }}
      ref={swiperRef}>
        {items}
      <div className="swiper-button-prev" onClick={() => swiperRef.current.swiper.slidePrev}></div>
      <div className="swiper-button-next" onClick={() => swiperRef.current.swiper.slideNext}></div>
    </Swiper>

  )
}

export default ReviewCarousel
