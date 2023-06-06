import React from "react";
import "./About.css";
import first from "../../assets/images/first.JPG";
import second from "../../assets/images/second.JPG";
import third from "../../assets/images/third.JPG";
import fourth from "../../assets/images/fourth.JPG";

const About = () => {
  return (
    <>
      <div id="about" className="container grid grid--4col about">
        <div className="feature">
          <img src={first} alt="first" />
          <p className="featured-title">По всему Бишкеку</p>
          <p className="featured-text">
            Наша организация работает по всем Бишкеку и по всему Кыргызстану
          </p>
        </div>
        <div className="feature">
          <img src={second} alt="first" />

          <p className="featured-title">Экспресс доставка</p>
          <p className="featured-text">
            Экспресс-доставка от двери до двери, в любую часть Бишкека
          </p>
        </div>
        <div className="feature">
          <img src={third} alt="first" />
          <p className="featured-title">Быстро</p>
          <p className="featured-text">
            Наличие собственного автопарка и филиалов по всему Кыргызстану
          </p>
        </div>
        <div className="feature">
          <img src={fourth} alt="first" />
          <p className="featured-title">Pause anytime</p>
          <p className="featured-text">
            Внедрение IT-технологий и расширение штата
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
