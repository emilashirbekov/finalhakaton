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

export default function AddressForm() {
  const [formValue, setFormValue] = React.useState({
    fname: "",
    lname: "",
    from: "",
    to: "",
  });

  const validationSchema = Yup.object().shape({
    fname: Yup.string().required("Введите ваше имя"),
    lname: Yup.string().required("Введите вашу фамилию"),
    from: Yup.string().required("Введите ваш адрес"),
    to: Yup.string().required("Введите адрес куда доставить"),
  });

  const formik = useFormik({
    initialValues: {
      fname: formValue.fname,
      lname: formValue.lname,
      from: formValue.from,
      to: formValue.to,
    },
    validationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("name", values.fname);
      formData.append("name", values.lname);
      formData.append("name", values.from);
      formData.append("name", values.to);
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
            id="fname"
            name="fname"
            label="Имя"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={formik.values.fname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.fname && formik.touched.fname && (
            <div className="error-message">{formik.errors.fname}</div>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lname"
            name="lname"
            label="Фамилия"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={formik.values.lname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.lname && formik.touched.lname && (
            <div className="error-message">{formik.errors.lname}</div>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="from"
            name="from"
            label="Откуда"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={formik.values.from}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.from && formik.touched.from && (
            <div className="error-message">{formik.errors.from}</div>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="to"
            name="to"
            label="Куда"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value={formik.values.to}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.to && formik.touched.to && (
            <div className="error-message">{formik.errors.to}</div>
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
