import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Modal from "../../components/Modal/Modal";

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
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phoneNumber", values.phoneNumber);
      formData.append("pass", values.pass);
      formData.append("techPass", values.techPass);
      formData.append("photo", values.photo, values.photo.name);

      setOpen(true);
    },

    handleChange: (e) => {
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
    },
  });

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="step-box-2 bg">
        <Modal isOpen={open} onClose={() => setOpen(false)} />
        <section className="section-cta" id="cta">
          <div className="cta">
            <div className="cta-text-box">
              <h3 className="heading-secondary">
                <span
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: "400",
                    paddingTop: "-20px",
                  }}
                ></span>
              </h3>
              <form
                onSubmit={formik.handleSubmit}
                className="cta-form"
                action="#"
              >
                <div>
                  <label htmlFor="name">Фамилия и Имя</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Имя"
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
                    name="email"
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
                    name="phoneNumber"
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
                    id="pass"
                    type="text"
                    name="pass"
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
                    id="techPass"
                    type="text"
                    name="techPass"
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
                  <label htmlFor="photo">Фото транспорта</label>
                  <input
                    id="photo"
                    type="file"
                    name="photo"
                    onChange={(e) => {
                      formik.setFieldValue("photo", e.target.files[0]);
                    }}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.photo && formik.touched.photo && (
                    <div className="error-message">{formik.errors.photo}</div>
                  )}
                </div>

                <button type="submit" className="open-modal-btn btn btn--form">
                  Update
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DeliverPage;
