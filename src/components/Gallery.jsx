"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Gallery() {
  const images = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
  ];

  return (
    <div className="w-full">
      <h2 className="text-center text-lg font-semibold mb-2">📷 웨딩 갤러리</h2>
      <Swiper spaceBetween={10} slidesPerView={1}>
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Wedding ${index}`}
              className="rounded-lg w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
