"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { motion } from "framer-motion";
import { Home } from "@/types/SanityResults";
import { urlFor } from "@/client";

const Carousel = ({ images }: { images: Home[] }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => handleNextSlide(), 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () =>
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const handlePrevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="relative sm:h-[85vh] w-full" id="#home">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />
      <div className="w-full h-[85vh] flex overflow-hidden relative m-auto">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative w-full h-full"
        >
          {images.map((image, index) => {
            if (index === currentSlide) {
              return (
                <motion.div
                  whileInView={{ x: [-100, -10, 0] }}
                  transition={{ duration: 0.7 }}
                  key={index}
                  animate={"active"}
                  className="relative w-full h-full bg-background"
                >
                  <Image
                    src={urlFor(image.imgUrl).url()}
                    fill
                    alt={image.alt!}
                    className="bg-white dark:bg-white/10 rounded-lg"
                  />
                </motion.div>
              );
            }
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />

      <div className="relative flex justify-center p-2">
        {images.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-4 w-4 bg-gray-700 dark:bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
                  : "h-4 w-4 bg-gray-300 dark:bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
              }
              key={index}
              onClick={() => setCurrentSlide(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
