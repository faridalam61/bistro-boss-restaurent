import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'



function Categories() {
  return (
    <>
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={false}
      
      pagination={{
        clickable: true,
        dotsWrapperStyle: { marginTop: 200 },
      }}
      modules={[Pagination]}
      className="mySwiper my-10"
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
        <h2 className='text-center uppercase text-2xl -mt-24 mb-10 text-white'>Salad</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
        <h2 className='text-center uppercase text-2xl -mt-24 mb-10 text-white'>Salad</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <h2 className='text-center uppercase text-2xl -mt-24 mb-10 text-white'>Salad</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <h2 className='text-center uppercase text-2xl -mt-24 mb-10 text-white'>Salad</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
        <h2 className='text-center uppercase text-2xl -mt-24 mb-10 text-white'>Salad</h2>
      </SwiperSlide>
    </Swiper>
  </>
  )
}

export default Categories