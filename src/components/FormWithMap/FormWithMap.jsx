import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import "./Form.css";
import "../HowItWorks/HowItWorks.css";
import { useOrder } from "../../context/OrderContextProvider";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Введите ваше имя"),
  phoneNumber: Yup.string().required("Введите ваш номер телефона"),
  from: Yup.string().required("Введите адрес откуда доставить"),
  to: Yup.string().required("Введите адрес куда доставить"),
  email: Yup.string().required("Введите ваш адрес электронной почты"),
  weight: Yup.string()
    .max("Вес должен быть меньше 100кг")
    .required("Введите вес вашего товара"),
});

const FormWithMap = () => {
  const { addOrder } = useOrder();

  const [formValue, setFormValue] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    from: "",
    to: "",
    weight: "",
  });

  const formik = useFormik({
    initialValues: {
      fullName: formValue.fullName,
      phoneNumber: formValue.fullName,
      from: formValue.from,
      to: formValue.to,
      email: formValue.email,
      weight: formValue.weight,
    },
    validationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("fullName", values.fullName);
      formData.append("phoneNumber", values.phoneNumber);
      formData.append("from", values.from);
      formData.append("to", values.to);
      formData.append("email", values.email);
      formData.append("weight", values.weight);

      addOrder(formData);
    },

    handleChange: (e) => {
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
    },
  });

  return (
    <>
      <div id="form" className="step-box-2 bg">
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
              <form
                className="cta-form"
                action="#"
                onSubmit={formik.handleSubmit}
              >
                <div>
                  <label htmlFor="fullName">Фамилия и Имя</label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="John Smith"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.fullName && formik.touched.fullName && (
                    <div className="error-message">
                      {formik.errors.fullName}
                    </div>
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
                    id="phoneNumber"
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
                  <label htmlFor="from">Адрес</label>
                  <input
                    id="from"
                    type="text"
                    placeholder="Куда"
                    value={formik.values.from}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.from && formik.touched.from && (
                    <div className="error-message">{formik.errors.from}</div>
                  )}
                </div>
                <div>
                  <label htmlFor="to">Адрес</label>
                  <input
                    id="to"
                    type="text"
                    placeholder="Откуда"
                    value={formik.values.to}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.to && formik.touched.to && (
                    <div className="error-message">{formik.errors.to}</div>
                  )}
                </div>
                <div>
                  <label htmlFor="weight">Вес товара</label>
                  <input
                    id="weight"
                    type="number"
                    placeholder="20кг"
                    value={formik.values.weight}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.weight && formik.touched.weight && (
                    <div className="error-message">{formik.errors.weight}</div>
                  )}
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
