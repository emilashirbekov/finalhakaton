import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../LoginPage/LoginPage.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../context/AuthContextProvider";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const validationSchema = Yup.object({
  email: Yup.string().required("Введите ваш адрес электронной почты"),
  password: Yup.string()
    .min(6, "Пароль должен содержать минимум 6 символов")
    .required("Введите ваш пароль"),
  repeatPassword: Yup.string()
    .min(6, "Подтвердите пароль")
    .required("Введите ваш пароль"),
});

const defaultTheme = createTheme();

export default function RegisterPage() {
  const { register } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await register(values);
      console.log(values);
    },
  });

  return (
    <div className="login-page">
      <ThemeProvider theme={defaultTheme}>
        <Container className="title" component="main" maxWidth="sm">
          <CssBaseline />
          <Box
            sx={{
              margin: 7,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              sx={{
                color: "#14145a",
                fontSize: "5rem",
                fontWeight: "bold",
              }}
            >
              Регистрация
            </Typography>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Почта"
                type="email"
                id="email"
                autoComplete="email"
                InputLabelProps={{
                  style: {
                    fontSize: "1.6rem",
                  },
                }}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email && (
                <div className="error-message">{formik.errors.email}</div>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
                InputLabelProps={{
                  style: {
                    fontSize: "1.6rem",
                  },
                }}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password && (
                <div className="error-message">{formik.errors.password}</div>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                name="repeatPassword"
                label="Повторите пароль"
                type="password"
                id="repeatPassword"
                autoComplete="current-password"
                InputLabelProps={{
                  style: {
                    fontSize: "1.6rem",
                  },
                }}
                value={formik.values.repeatPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.repeatPassword &&
                formik.touched.repeatPassword && (
                  <div className="error-message">
                    {formik.errors.repeatPassword}
                  </div>
                )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                  mb: 2,
                  background: "#f03855",
                  padding: "1.4rem",
                  fontSize: "1.4rem",
                  "&:hover": {
                    background: "#f03850",
                  },
                }}
              >
                Зарегестрироваться
              </Button>
              <Grid container>
                <Grid item>
                  <Link
                    href="/login"
                    variant="body2"
                    sx={{
                      fontSize: "1.4rem",
                      color: "#57607b",
                      textDecoration: "underline",
                    }}
                  >
                    {"Есть учетная запись ? Войти"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright
            sx={{
              mt: 4,
              mb: 4,
              fontSize: "1rem",
              color: "#57607b",
            }}
          />
        </Container>
      </ThemeProvider>
    </div>
  );
}
