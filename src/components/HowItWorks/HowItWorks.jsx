import React from "react";
import "./HowItWorks.css";
import FirstStep from "../../assets/images/step1.png";
import SecondStep from "../../assets/images/step2.png";
import ThirdStep from "../../assets/images/step3.png";

const HowItWorks = () => {
  return (
    <>
      <section className="section-how" id="how">
        <div className="container">
          <span className="subheading">Как заказать доставку?</span>
          <h2 className="heading-secondary">
            Выполните три простых шага, чтобы заказать доставку
          </h2>
        </div>
        <div className="container grid grid--2col grid-centered--v">
          <div className="step-box">
            <p className="step-number">01</p>
            <h3 className="heading-teritary">Регистрация</h3>
            <p className="step-description">
              Чтобы оформить доставку вам нужно будет зарегестрироваться, чтобы
              иметь доступ к форме доставки
            </p>
          </div>
          <div className="step-img-box">
            <img src={FirstStep} className="step-img" alt="Step 1" />
          </div>
          <div className="step-img-box">
            <img
              src={SecondStep}
              className="step-img"
              alt="iPhone App references selection screen"
            />
          </div>
          <div className="step-box">
            <p className="step-number">02</p>
            <h3 className="heading-teritary">Нажмите кнопку отправить</h3>
            <p className="step-description">
              После того как вы введете все данные нажмите кнопку отправить и
              ждите ответа. Учтите что сумма и окончательная цена будет зависеть
              от веса вашего товара
            </p>
          </div>

          <div className="step-box">
            <p className="step-number">03</p>
            <h3 className="heading-teritary">Ожидайте ответа</h3>
            <p className="step-description">
              После того как вы нажмете кнопку отправить, этот заказ пойдет на
              осмотрение курьеру, который вам обязательно напишет или перезвонит
            </p>
          </div>
          <div className="step-img-box">
            <img
              src={ThirdStep}
              className="step-img"
              alt="iPhone App delivery screen"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
