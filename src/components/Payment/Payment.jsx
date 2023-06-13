import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./Form.css";
import * as Yup from "yup";
import { useFormik } from "formik";

export default function PaymentForm() {
  const validationSchema = Yup.object().shape({
    cardName: Yup.string().required("Введите название карты"),
    cardNumber: Yup.string().required("Введите номер вашей карты"),
    date: Yup.string().required("Введите текущую дату"),
    CVV: Yup.string().required("Введите последние 3 цифры вашей карты"),
  });

  const formik = useFormik({
    initialValues: {
      cardName: "",
      cardNumber: "",
      date: "",
      CVV: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <React.Fragment>
      <Grid container spacing={3}>
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
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Запомнить мой выбор для следующего раза"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
