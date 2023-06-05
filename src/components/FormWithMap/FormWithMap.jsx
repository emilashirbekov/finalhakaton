import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import "./Form.css";
import "../HowItWorks/HowItWorks.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Введите ваше имя"),
  email: Yup.string()
    .email("Введите действительный адрес электронной почты")
    .required("Введите ваш адрес электронной почты"),
  password: Yup.string()
    .min(6, "Пароль должен содержать минимум 6 символов")
    .required("Введите ваш пароль"),
});

const FormWithMap = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div className="step-box-2 bg">
        <section className="section-cta" id="cta">
          <div className="cta">
            <div className="cta-text-box">
              <h3 className="heading-secondary">
                Оформить доставку <br />
                <span
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: "400",
                    paddingTop: "-20px",
                  }}
                >
                  Итоговая стоимость будет зависеть от массы товара
                </span>
              </h3>
              <form className="cta-form" action="#">
                <div>
                  <label htmlFor="full-name">Фамилия и Имя</label>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Ваша почта</label>
                  <input id="email" type="email" placeholder="me@example.com" />
                </div>
                <div>
                  <label htmlFor="phoneNumber">Номер телефона</label>
                  <input id="number" type="number" placeholder="0709465239" />
                </div>
                <div>
                  <label htmlFor="phoneNumber">Адрес</label>
                  <input id="text" type="text" placeholder="Куда" />
                </div>
                <div>
                  <label htmlFor="phoneNumber">Адрес</label>
                  <input id="text" type="text" placeholder="Откуда" />
                </div>
                <div>
                  <label htmlFor="phoneNumber">Вес товара</label>
                  <input id="number" type="number" placeholder="20кг" />
                </div>
                <div></div>
                <p className="price">Сумма:</p>
                <button className="btn btn--form">Отправить</button>
              </form>
            </div>
          </div>
        </section>
        {/* <div className="step-img-box">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.0580301731543!2d74.58434701181304!3d42.87161930250894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec8241b52669f%3A0xb8b43841ad54c50b!2s29%20Ulitsa%20Tabyshaliyeva%2C%20Bishkek!5e0!3m2!1sen!2skg!4v1685879963548!5m2!1sen!2skg"
              width="700"
              height="420"
              loading="lazy"
              title="map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default FormWithMap;
