"use client";

import React, { useState } from "react";
import ToggleButton from "./ToggleButton";

const Element = ({ bgClass, Tittle, txt }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false); // Оверлей

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <div className="w-full aspect-square md:w-1/2 md:h-1/2 mx-4 my-4 items-center md:p-0 md:m-0 bg-gray-100 relative">
      {/* Контейнер для кнопки и шторки */}
      <div className="w-full h-full flex flex-col relative">
        {/* Кнопка */}
        <div className="w-full h-[20%] relative">
          <ToggleButton isActive={isOverlayVisible} onClick={toggleOverlay} />
          {/* Текст в правом верхнем углу */}
          <div
            className={`${
              isOverlayVisible ? "text-black" : "text-gray-500"
            } text-center mt-4 md:mt-0 md:text-right md:top-4 md:right-5 md:absolute z-50`}
          >
            <h2 className="text-xl md:text-lg font-bold">{Tittle}</h2>
            <p className="text-xs">{txt}</p>
          </div>
        </div>
        {/* Основной контент */}
        <div className={`w-full h-[80%] ${bgClass} bg-no-repeat relative`} />

        {/* Шторка */}
        <div
          className={`${
            isOverlayVisible ? "opacity-100" : "opacity-0"
          } absolute inset-0 z-10 p-4 bg-grin/75 ease-in-out transform flex items-center justify-center origin-top-left transition-all duration-300`}
        >
          {/* Текст в оверлее */}
          <div className="text-white text-center">
            <h2 className="text-2xl font-bold">Website design</h2>
            <h2 className="text-2xl font-bold">& code</h2>
          </div>

          {/* Кнопка внизу по центру */}
          <div className="absolute bottom-3">
            <button className="py-1 px-4 text-sm border border-white text-white hover:bg-white hover:text-black transition-colors bg-grin/75 rounded">
              VISIT PROJECT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Element;
