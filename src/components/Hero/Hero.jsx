import React from "react";
import "./Hero.css";
import third from "../../assets/images/step3.png";

const Hero = () => {
  const handleLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="hero" className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              Быстрая доставка товаров по Бишкеку
            </h1>
            <p className="hero-description">
              Доверьте нам доставку ваших товаров. Чтобы оформить доставку ,
              зарегистрируйтесь на сайте. Заполните форму доставки и ожидайте
              ответа Делаем доставку быстро, надежно и с заботой о посылке.
            </p>
            <a
              href="#cta"
              onClick={(e) => handleLinkClick(e, "form")}
              className="btn btn--full margin--right-sm"
            >
              Заказать доставку
            </a>
          </div>
          <div className="hero-img-box">
            <img src={third} className="img-hero" alt="our delivery img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
