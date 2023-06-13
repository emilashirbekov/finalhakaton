import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./Form.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { TextareaAutosize } from "@mui/base";
import { useOrder } from "../../context/OrderContextProvider";
import { Button } from "@mui/material";

export default function AddressForm() {
  const { addOrder } = useOrder();

  const validationSchema = Yup.object().shape({
    phone_sender: Yup.string().required("Введите ваш номер телефона"),
    address_sender: Yup.string().required("Введите ваш адресс"),
    address_receiver: Yup.string().required(
      "Введите адресс куда надо достваить "
    ),
    description: Yup.string().required("Введите адрес куда доставить"),
  });

  const formik = useFormik({
    initialValues: {
      phone_sender: "",
      address_sender: "",
      address_receiver: "",
      description: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      addOrder(values);
    },
  });

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Адрес доставки
      </Typography>
      <Grid container spacing={3}>
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
        <Grid item xs={12}>
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
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Используйте этот адрес для платежных реквизитов"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
