import React, { useState } from "react";
import bannerImage from "/banner_image_1.jpg"
import bannerImage2 from "/banner_image_2.jpg"
import bannerImage3 from "/banner_image_3.jpg"
import bannerImage4 from "/banner_image_4.jpg"

const images = [
  bannerImage,
  bannerImage2,
  bannerImage3,
  bannerImage4
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-fit">
      <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg">
        {/* Carousel Images */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full flex-shrink-0 max-h-[403px]"
            />
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-0.5 rounded-full hover:bg-gray-600"
        >
          <div className='w-10 h-10 rounded-full bg-white relative'>
            <div className="w-0 h-0 
            border-t-[8px] border-t-transparent
            border-r-[14px] border-r-black
            border-b-[8px] border-b-transparent absolute top-[28%] left-[27%]">
            </div>
          </div>
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-0.5 rounded-full hover:bg-gray-600"
        >
          <div className='w-10 h-10 rounded-full bg-white relative'>
            <div className="w-0 h-0 
            border-t-[8px] border-t-transparent
            border-l-[14px] border-l-black
            border-b-[8px] border-b-transparent absolute top-[28%] left-[35%]">
            </div>
          </div>
        </button>
      </div>
      {/* Dots */}
      <div className="absolute -bottom-20 left-[28%] transform -translate-x-1/2 flex space-x-2">
        {images.map((image, index) => (
          <div key={index} className="max-w-24 max-h-16">
            <img onClick={() => setCurrentIndex(index)} src={image} alt="" className="rounded border-2 border-white hover:border-green-500 w-full h-full"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
