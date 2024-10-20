"use client";

import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import Image from "next/image";

const Element = ({ imageUrl, Tittle, txt }) => {
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
      className="aspect-square w-full max-w-[500px] items-center justify-center bg-gray-100 relative"
      onMouseLeave={handleMouseLeave} // Закрываем шторку и меняем цвет текста при уходе курсора
    >
      {/* Контейнер для кнопки и шторки */}
      <div className="w-full h-full flex flex-col relative p-2 ">
        <div className="p-4">
          <h2 className="text-xl md:text-lg font-bold">{Tittle}</h2>
          <p className="text-xs">{txt}</p>
        </div>
        <Image
          src={imageUrl}
          alt={Tittle}
          className="w-full h-auto max-w-max aspect-square"
          fill
        />
      </div>
    </div>
  );
};

export default Element;
