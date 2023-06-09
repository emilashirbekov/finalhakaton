import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./Form.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { TextareaAutosize } from "@mui/base";
import { useOrder } from "../../context/OrderContextProvider";
import { Button, Typography } from "@mui/material";
import Modal from "../Modal/Modal";

export default function AddressFormPage() {
  const { addOrder } = useOrder();

  const [price, setPrice] = useState(0);
  const [open, setOpen] = useState(false);

  const validationSchema = Yup.object().shape({
    phone_sender: Yup.string().required("Введите ваш номер телефона"),
    address_sender: Yup.string().required("Введите ваш адресс"),
    address_receiver: Yup.string().required(
      "Введите адресс куда надо достваить "
    ),
    description: Yup.string().required("Введите адрес куда доставить"),
    cardName: Yup.string().required("Введите название карты"),
    cardNumber: Yup.string().required("Введите номер вашей карты"),
    date: Yup.string().required("Введите текущую дату"),
    CVV: Yup.string().required("Введите последние 3 цифры вашей карты"),
    weight: Yup.string().required("Введите вес вашего товара"),
  });

  const formik = useFormik({
    initialValues: {
      phone_sender: "",
      address_sender: "",
      address_receiver: "",
      description: "",
      cardName: "",
      cardNumber: "",
      date: "",
      CVV: "",
      weight: "",
      adopted: "false",
      price: 0,
    },
    validationSchema,
    onSubmit: async (values) => {
      if (values) {
        addOrder(values);
        setOpen(true);
      } else {
        setOpen(false);
        alert("Что то пошло не так");
      }
    },
  });

  useEffect(() => {
    const weight = parseFloat(formik.values.weight);
    let price = 0;
    if (weight < 10) {
      price = 100;
    } else if (weight >= 10 && weight < 50) {
      price = 500;
    } else if (weight >= 50 && weight < 100) {
      price = 800;
    } else if (weight >= 100 && weight < 200) {
      price = 1000;
    }
    setPrice(price + 200);
    formik.setFieldValue("price", price);
  }, [formik.values.weight]);

  return (
    <React.Fragment>
      <Grid onSubmit={formik.handleSubmit} container spacing={3}>
        <Modal isOpen={open} onClose={() => setOpen(false)} />
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone_sender"
            name="phone_sender"
            label="Ваш номер телефона"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={formik.values.phone_sender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.phone_sender && formik.touched.phone_sender && (
            <div className="error-message">{formik.errors.phone_sender}</div>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address_sender"
            name="address_sender"
            label="Введите адресс куда нужно доставить"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={formik.values.address_sender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.address_sender && formik.touched.address_sender && (
            <div className="error-message">{formik.errors.address_sender}</div>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address_receiver"
            name="address_receiver"
            label="Введите ваш адресс"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={formik.values.address_receiver}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.address_receiver &&
            formik.touched.address_receiver && (
              <div className="error-message">
                {formik.errors.address_receiver}
              </div>
            )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="weight"
            name="weight"
            label="Введите вес вашего товара"
            fullWidth
            autoComplete="shipping"
            variant="standard"
            value={formik.values.weight}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.weight && formik.touched.weight && (
            <div className="error-message">{formik.errors.weight}</div>
          )}
        </Grid>
        <Grid item xs={12}>
          <p>Введите описание вашего товара </p>
          <TextareaAutosize
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "14px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            id="description"
            name="description"
            autoComplete="shipping address-line2"
            minRows={6}
            maxRows={6}
            aria-label="textarea"
            variant="standard"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.description && formik.touched.description && (
            <div className="error-message">{formik.errors.description}</div>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Название карты"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={formik.values.cardName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.cardName && formik.touched.cardName && (
            <div className="error-message">{formik.errors.cardName}</div>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Номер карты"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={formik.values.cardNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.cardNumber && formik.touched.cardNumber && (
            <div className="error-message">{formik.errors.cardNumber}</div>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="date"
            label="Введите дату"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.date && formik.touched.date && (
            <div className="error-message">{formik.errors.date}</div>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="CVV"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            className="helper-text"
            value={formik.values.CVV}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.CVV && formik.touched.CVV && (
            <div className="error-message">{formik.errors.CVV}</div>
          )}
        </Grid>
        <Typography
          onChange={formik.handleChange}
          variant="h2"
          sx={{ marginLeft: "3rem", marginTop: "3rem" }}
        >
          Сумма: {price} сом
        </Typography>
        <Typography
          onChange={formik.handleChange}
          variant="h2"
          sx={{ marginLeft: "3rem", marginTop: "3rem" }}
        >
          Итоговая сумма зависит от веса вашего товара и суммы доставки
        </Typography>
        <Grid item xs={12} sx={{ display: "flex" }}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Используйте этот адрес для платежных реквизитов"
          />
          <Button
            onClick={() => {
              formik.handleSubmit();
            }}
            type="submit"
            sx={{ mt: 3, ml: 1, alignSelf: "flex-end" }}
          >
            Заказать
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
