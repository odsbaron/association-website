"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Slide {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
}

const slides: Slide[] = [
  {
    image: "/images/hero/picture1.png",
    title: "北京大学金融科技协会",
    subtitle: "Peking University FinTech Association",
    description: "高效学术，开源宣传，动态联合",
  },
  {
    image: "/images/hero/picture2.png",
    title: "学术研究",
    subtitle: "Academic Research",
    description: "深耕金融科技前沿领域",
  },
  {
    image: "/images/hero/picture3.png",
    title: "技术创新",
    subtitle: "Technical Innovation",
    description: "推动开源技术发展",
  },
  {
    image: "/images/hero/picture4.png",
    title: "加入我们",
    subtitle: "Join Us",
    description: "与优秀的人一起成长",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />

          {/* Content */}
          <div className="relative z-20 h-full flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <p className="text-xl md:text-2xl mb-4 opacity-90 drop-shadow-md">
                  {slide.subtitle}
                </p>
              )}
              {slide.description && (
                <p className="text-lg md:text-xl mb-8 opacity-90 drop-shadow-md">
                  {slide.description}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        aria-label="上一张"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        aria-label="下一张"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-white"
                : "w-3 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`切换到第 ${index + 1} 张`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30">
        <div
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{
            width: isAutoPlaying ? "100%" : "0%",
            animation: isAutoPlaying ? "progress 5s linear" : "none",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
