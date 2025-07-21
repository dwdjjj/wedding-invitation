"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { cn } from "@/utils/cn";
import { Section } from "@/components/ui/Section";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import photo0 from "../images/photo0.jpg";
import photo00 from "../images/photo00.jpg";
import photo1 from "../images/photo1.png";
import photo2 from "../images/photo2.png";
import photo3 from "../images/photo3.png";

export default function Gallery() {
  const images = [photo0, photo00, photo1, photo2, photo3];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    const prevIndex = (current + images.length - 1) % images.length;
    setCurrent(prevIndex);
    mainSwiper?.slideToLoop(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = (current + 1) % images.length;
    setCurrent(nextIndex);
    mainSwiper?.slideToLoop(nextIndex);
  };

  return (
    <Section>
      <h2 className={cn("text-xl font-semibold", "mb-4")}>📷 웨딩 갤러리</h2>

      {/* 메인 슬라이드 */}
      <Swiper
        modules={[Navigation, Thumbs]}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        loop={true}
        onSwiper={setMainSwiper}
        onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
        className="mb-4"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              className={cn("relative w-full h-64 cursor-zoom-in")}
              onClick={() => {
                setCurrent(i);
                setIsOpen(true);
              }}
            >
              <Image
                src={img}
                alt={`Gallery ${i}`}
                fill
                className={cn("object-cover rounded-lg")}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 썸네일 슬라이드 */}
      <Swiper
        modules={[Navigation, Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={8}
        slidesPerView={4}
        navigation
        loop
        freeMode
        watchSlidesProgress
        className="mx-auto max-w-xl"
      >
        {images.map((img, i) => (
          <SwiperSlide
            key={i}
            className={cn("opacity-60 hover:opacity-100 cursor-pointer")}
          >
            <div className={cn("relative w-24 h-24")}>
              <Image
                src={img}
                alt={`Thumbnail ${i}`}
                fill
                className={cn("object-cover rounded-lg")}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Tailwind 모달 (클릭 시 확대 + 네비게이션) */}
      {isOpen && (
        <div
          className={cn(
            "fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4"
          )}
        >
          {/* 닫기 버튼 */}
          <button
            className={cn("absolute top-4 right-4 text-white text-3xl")}
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>

          {/* 이전 버튼 */}
          <button
            className={cn(
              "absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
            )}
            onClick={handlePrev}
          >
            &#8592;
          </button>

          {/* 다음 버튼 */}
          <button
            className={cn(
              "absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
            )}
            onClick={handleNext}
          >
            &#8594;
          </button>

          {/* 확대 이미지 */}
          <div className={cn("relative w-full max-w-3xl max-h-full")}>
            <img
              src={images[current].src}
              alt={`Enlarged ${current}`}
              className={cn("w-full h-full object-contain rounded-lg")}
            />
          </div>
        </div>
      )}
    </Section>
  );
}
