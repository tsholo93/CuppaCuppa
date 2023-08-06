import $ from 'jquery';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let swiperOptions = {
  loop: true,
  speed: 1000,
  parallax: true,
  autoplay: {
    delay: 6500,
    disableOnInteraction: false
  },
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    snapOnRelease: true,
    horizontalClass: 'swiper-scrollbar-horizontal',
    dragClass: 'swiper-scrollbar-drag',
  }
}

let swiper = new Swiper('.hero-swiper', swiperOptions);


const testimonialSwiper = new Swiper('.test-swiper', {
  allowTouchMove: true,
  slidesPerView: 1,
  effect: 'slide',
  navigation: {
    nextEl: '.swiper-test-btn-next',
    prevEl: '.swiper-test-btn-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  }
})

