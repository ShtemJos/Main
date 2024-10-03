import { useState, useEffect, useRef } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsVisible(true);
    }, 10);
  };

  const closeModal = () => {
    setIsVisible(false); // Плавная анимация закрытия
    setTimeout(() => {
      setIsOpen(false); // Удаление модального окна после завершения анимации
    }, 300); // Длительность анимации должна соответствовать Tailwind-классам transition
  };

  // Закрытие по клавише "Escape"
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Закрытие при клике вне окна
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <button
        className="text-white bg-grin text-center px-5 py-0.5 rounded"
        onClick={openModal}
      >
        SEE MORE PROJECTS
      </button>
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            ref={modalRef}
            className={`w-3/4 md:w-1/4 flex justify-center items-center transform transition-transform duration-300 ${
              isVisible ? "scale-100" : "scale-90"
            }`}
          >
            <div className="bg-gray-400 w-full p-5 shadow-lg relative">
              {/* Кнопка для закрытия окна */}
              <button
                onClick={closeModal}
                className="text-white font-bold text-2xl hover:text-gray-700 rounded-full absolute top-5 right-5"
              >
                X
              </button>
              <h2 className="text-white text-2xl font-bold mb-4">
                Contact Form
              </h2>
              <form>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-md mb-4 h-10 pl-2 focus:placeholder-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded-md h-10 mb-4 pl-2 focus:placeholder-transparent"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Contact Number"
                    className="w-full rounded-md mb-4 h-10 pl-2 focus:placeholder-transparent"
                  />
                </div>
                <div>
                  <textarea
                    rows="5"
                    className="w-full rounded-md mb-8 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="rounded-md bg-white hover:bg-gray-700 hover:text-white text-gray-400 text-bold absolute text-lg p-0.5 bottom-2 right-5"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
