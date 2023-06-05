import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import "../components/FormWithMap/Form.css";
import "../components/Hero/Hero.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Введите ваше имя"),
  email: Yup.string().required("Введите ваш адрес электронной почты"),
  phoneNumber: Yup.string().required("Введите ваш номер телефона"),
  pass: Yup.string().required("Введите ваш пасспорт"),
  techPass: Yup.string().required("Введите ваш тех паспорт"),
  photo: Yup.string().required("Укажите ваш транспорт"),
});

const DeliverPage = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    pass: "",
    techPass: "",
    photo: "",
  });

  const formik = useFormik({
    initialValues: {
      name: formValue.name,
      email: formValue.email,
      phoneNumber: formValue.phoneNumber,
      pass: formValue.pass,
      techPass: formValue.techPass,
      photo: formValue.photo,
    },
    validationSchema,
    onSubmit: (event, values) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phoneNumber", values.phoneNumber);
      formData.append("pass", values.pass);
      formData.append("techPass", values.techPass);
      formData.append("photo", values.photo);
    },
    handleChange: (e) => {
      setFormValue(e.target.name, e.target.value);
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
                  <label htmlFor="name">Фамилия и Имя</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Имя"
                    required
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.name && formik.touched.name && (
                    <div className="error-message">{formik.errors.name}</div>
                  )}
                </div>
                <div>
                  <label htmlFor="email">Ваша почта</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="me@example.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <div className="error-message">{formik.errors.email}</div>
                  )}
                </div>
                <div>
                  <label htmlFor="phoneNumber">Номер телефона</label>
                  <input
                    id="number"
                    type="number"
                    placeholder="0709465239"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                    <div className="error-message">
                      {formik.errors.phoneNumber}
                    </div>
                  )}
                </div>
                <div>
                  <label htmlFor="pass">Пасспорт</label>
                  <input
                    id="text"
                    type="text"
                    placeholder=""
                    value={formik.values.pass}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.pass && formik.touched.pass && (
                    <div className="error-message">{formik.errors.pass}</div>
                  )}
                </div>
                <div>
                  <label htmlFor="techPass">Тех Пасспорт</label>
                  <input
                    id="text"
                    type="text"
                    placeholder=""
                    value={formik.values.techPass}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.techPass && formik.touched.techPass && (
                    <div className="error-message">
                      {formik.errors.techPass}
                    </div>
                  )}
                </div>
                <div>
                  <label htmlFor="phoneNumber">Фото транспорта</label>
                  <input
                    id="photo"
                    type="file"
                    value={formik.values.photo}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.photo && formik.touched.photo && (
                    <div className="error-message">{formik.errors.photo}</div>
                  )}
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
