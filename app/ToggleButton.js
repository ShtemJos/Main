import { useState } from "react";

const ToggleButton = ({ onClick, isActive, bgBtn }) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`absolute top-2 left-2 z-20 p-2 bg-grin w-16 h-16 md:w-10 md:h-10 text-white font-bold border-hidden ${bgBtn}`}
    >
      {isActive ? "+" : "-"}
    </button>
  );
};

export default ToggleButton;
