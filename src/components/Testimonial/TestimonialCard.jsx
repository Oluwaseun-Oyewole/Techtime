import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from "swiper";
import { testimonialdata } from "../../utils/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const TestimonialCard = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [window.innerWidth, width]);

  return (
    <div className="pt-12 pb-24">
      <Swiper
        centeredSlides={false}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        scrollbar={false}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
        className="mySwiper"
        slidesPerView={width > 700 ? 2 : width > 1200 ? 2 : 1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        spaceBetween={22}
      >
        {testimonialdata?.map((data) => {
          return (
            <SwiperSlide key={data.id}>
              <div
                className="shadow-sm rounded-2xl text-sm bg-white flex flex-col items-start justify-center pl-5 pr-5"
                key={data.id}
              >
                <p className="text-body pt-6 pb-3 text-sm font-medium">
                  {data.info}
                </p>
                <div className="flex items-center justify-center gap-2 pb-3">
                  <img
                    src={data.imgSrc}
                    alt={data.name}
                    className="w-12 mt-3 mb-3"
                  />
                  <div>
                    <p className="font-bold">{data.name}</p>
                    <p className="text-body">{data.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
