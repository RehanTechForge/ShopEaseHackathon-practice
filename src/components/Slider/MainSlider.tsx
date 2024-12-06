"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import SliderButton from "./SliderButton";

const slides = [
  {
    title: "iPhone 14 Series",
    subtitle: "Up to 10% off Voucher",
    imageSrc: "/images/slider/slide1.png",
  },
  {
    title: "Samsung Galaxy S23",
    subtitle: "Exclusive Deals Available",
    imageSrc: "/images/slider/slide2.png",
  },
  {
    title: "Google Pixel 7",
    subtitle: "Get Yours Now with 5% off",
    imageSrc: "/images/slider/slide3.png",
  },
];

const MainSlider = () => {
  return (
    <div className="col-span-11 lg:col-span-9 p-2 sm:p-4">
      <Swiper
        loop={true} // Enable looping
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="bg-button">
            <div className="grid grid-cols-2">
              <div className="flex flex-col items-start gap-2 justify-center px-2 py-4  md:px-12">
                <p className="text-base sm:text-lg">{slide.title}</p>
                <p className="font-semibold text-lg text-left sm:text-2xl lg:text-4xl">
                  {slide.subtitle}
                </p>
                <SliderButton />
              </div>
              <div className="flex justify-center sm:justify-end">
                <Image
                  src={slide.imageSrc}
                  alt={`slide ${index + 1}`}
                  height={300}
                  width={800}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSlider;
