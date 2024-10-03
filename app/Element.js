"use client";

import React, { useState } from "react";
import ToggleButton from "./ToggleButton";

const Element = ({ bgClass, Tittle, txt }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false); // Оверлей
  const [isAnimating, setIsAnimating] = useState(false); // Анимация оверлея
  const [textColor, setTextColor] = useState("text-gray-500"); // Цвет текста
  const [isWhite, setIsWhite] = useState(true);
  const [isActive, setIsActive] = useState(true); // Состояние кнопки
  const [isOpacity, setIsOpacity] = useState(true); // Прозрачность кнопки

  const toggleOverlay = () => {
    if (isOverlayVisible) {
      // Если оверлей открыт, запускаем анимацию закрытия
      setIsAnimating(false);
      setTextColor("text-gray-500");
      setTimeout(() => {
        setIsOverlayVisible(false);
      }, 700);
    } else {
      // Открываем оверлей
      setIsOverlayVisible(true);
      setTimeout(() => {
        setIsAnimating(true);
        setTextColor("text-white");
      }, 10);
    }
    setIsWhite(!isWhite);
    setIsActive(!isActive);
    setIsOpacity(!isOpacity);
  };

  // Закрываем оверлей, если курсор уходит с элемента, и возвращаем черный цвет текста
  const handleMouseLeave = () => {
    if (isOverlayVisible) {
      setIsAnimating(false);
      setTextColor("text-gray-500");
      setIsActive(true);
      setIsOpacity(true);
      setTimeout(() => {
        setIsOverlayVisible(false);
      }, 700);
    }
  };

  return (
    <div
      className="w-full aspect-square md:w-1/2 md:h-1/2 mx-4 my-4 items-center md:p-0 md:m-0 bg-gray-100 relative"
      onMouseLeave={handleMouseLeave} // Закрываем шторку и меняем цвет текста при уходе курсора
    >
      {/* Контейнер для кнопки и шторки */}
      <div className="w-full h-full flex flex-col relative">
        {/* Кнопка */}
        <div className="w-full h-[20%] relative">
          <ToggleButton
            isActive={isActive}
            bgBtn={isOpacity ? "bg-opacity-100" : "bg-opacity-0"}
            onClick={toggleOverlay}
          />
          {/* Текст в правом верхнем углу */}
          <div
            className={`${textColor} text-center mt-4 md:mt-0 md:text-right md:top-4 md:right-5 md:absolute z-50`}
          >
            <h2 className="text-xl md:text-lg font-bold">{Tittle}</h2>
            <p className="text-xs">{txt}</p>
          </div>
        </div>
        {/* Основной контент */}
        <div className={`w-full h-[80%] ${bgClass} bg-no-repeat relative`} />

        {/* Шторка */}
        {isOverlayVisible && (
          <div
            key="overlay"
            className={`absolute inset-0 z-10 p-4 bg-grin/75 transition-all duration-700 ease-in-out transform ${
              isAnimating
                ? "opacity-100 scale-100 origin-top-left"
                : "opacity-0 scale-0 origin-top-left"
            } flex items-center justify-center`}
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
        )}
      </div>
    </div>
  );
};

export default Element;
