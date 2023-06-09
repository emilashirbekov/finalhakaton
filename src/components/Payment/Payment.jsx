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
  const [formValue, setFormValue] = React.useState({
    cardName: "",
    cardNumber: "",
    date: "",
    cvv: "",
  });

  const validationSchema = Yup.object().shape({
    cardName: Yup.string().required("Введите название карты"),
    cardNumber: Yup.string().required("Введите номер карты"),
    date: Yup.string().required("Введите дату"),
    cvv: Yup.string().required("Последние три цифры на полоске для подписи"),
  });

  const formik = useFormik({
    initialValues: {
      cardName: formValue.cardName,
      cardNumber: formValue.cardNumber,
      date: formValue.date,
      cvv: formValue.cvv,
    },
    validationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("name", values.cardName);
      formData.append("name", values.cardNumber);
      formData.append("name", values.date);
      formData.append("name", values.cvv);
    },

    handleChange: (e) => {
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
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
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            className="helper-text"
            value={formik.values.cvv}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.cvv && formik.touched.cvv && (
            <div className="error-message">{formik.errors.cvv}</div>
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
