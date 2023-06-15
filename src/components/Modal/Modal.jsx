import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import lottie from "lottie-web";
import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  const handleNavigate = () => {
    setIsExiting(true);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <div className={`modal ${isOpen ? "show" : ""}`}>
      <div
        className={`modal-content ${isExiting ? "exiting" : ""}`}
        onAnimationEnd={() => setIsExiting(false)}
      >
        <div className="close" onClick={onClose}>
          &times;
        </div>
        <iframe
          width="400"
          height="250"
          frameBorder="0"
          allowFullScreen
          src="https://embed.lottiefiles.com/animation/96295"
        ></iframe>
        <h2 style={{ marginBottom: "2rem" }}>
          Ваша заявка была принята, вам позвонят или <br /> отправят сообщение
          на почту
        </h2>
        <button onClick={handleNavigate} className="btn-modal">
          Вернуться на главную
        </button>
      </div>
    </div>
  );
};

export default Modal;
