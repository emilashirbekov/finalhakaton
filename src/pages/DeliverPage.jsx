import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import "../components/FormWithMap/Form.css";
import "../components/Hero/Hero.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Введите ваше имя"),
  email: Yup.string()
    .email("Введите действительный адрес электронной почты")
    .required("Введите ваш адрес электронной почты"),
  password: Yup.string()
    .min(6, "Пароль должен содержать минимум 6 символов")
    .required("Введите ваш пароль"),
});

const DeliverPage = () => {
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
                Стать курьером <br />
                <span
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: "400",
                    paddingTop: "-20px",
                  }}
                ></span>
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
                  <label htmlFor="pass">Пасспорт</label>
                  <input id="text" type="text" placeholder="" />
                </div>
                <div>
                  <label htmlFor="techPass">Тех Пасспорт</label>
                  <input id="text" type="text" placeholder="" />
                </div>
                <div>
                  <label htmlFor="phoneNumber">Фото транспорта</label>
                  <input id="photo" type="file" />
                </div>
                <button className="btn btn--form">Отправить заявку</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DeliverPage;
