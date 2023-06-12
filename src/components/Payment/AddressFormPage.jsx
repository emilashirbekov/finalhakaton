import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import "./Form.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { TextareaAutosize } from "@mui/base";
import { useOrder } from "../../context/OrderContextProvider";

export default function AddressForm() {
  const { addOrder } = useOrder();

  const validationSchema = Yup.object().shape({
    fname: Yup.string().required("Введите ваше имя"),
    lname: Yup.string().required("Введите вашу фамилию"),
    from: Yup.string().required("Введите ваш адрес"),
    to: Yup.string().required("Введите адрес куда доставить"),
  });

  const formik = useFormik({
    initialValues: {
      phoneSender: "",
      addressSender: "",
      addressReceiever: "",
      description: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      addOrder(values);
      console.log(values);
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
            id="phoneSender"
            name="phoneSender"
            label="Ваш номер телефона"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={formik.values.phoneSender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.phoneSender && formik.touched.phoneSender && (
            <div className="error-message">{formik.errors.phoneSender}</div>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="addressSender"
            name="addressSender"
            label="Введите адресс куда нужно доставить"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={formik.values.addressSender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.addressSender && formik.touched.addressSender && (
            <div className="error-message">{formik.errors.addressSender}</div>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="addressReceiever"
            name="addressReceiever"
            label="Введите ваш адресс"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={formik.values.addressReceiever}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.addressReceiever &&
            formik.touched.addressReceiever && (
              <div className="error-message">
                {formik.errors.addressReceiever}
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
