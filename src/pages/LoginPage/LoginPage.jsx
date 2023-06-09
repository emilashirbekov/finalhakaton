import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./LoginPage.css";
import { useMediaQuery } from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useAuth } from "../../context/AuthContextProvider";
import { admins } from "../../helpers/const";
import { useNavigate } from "react-router-dom";

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
        express.kg
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Введите ваш адрес электронной почты"),
  password: Yup.string()
    .min(6, "Пароль должен содержать минимум 6 символов")
    .required("Введите ваш пароль"),
});

export default function LoginPage() {
  const { login } = useAuth();
  const isSmallScreen = useMediaQuery("(max-width: 425px)");
  const admin = admins;
  console.log(admin);
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      login(values);
    },
  });
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const navigate = useNavigate();
  return (
    <div className="login-page">
      <ThemeProvider theme={defaultTheme}>
        <Container
          className="title"
          component="main"
          maxWidth="sm"
          sx={{
            width: isSmallScreen ? "40rem" : "50rem",
          }}
        >
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
              onClick={(e) => {
                let obj = {
                  email,
                  password,
                };
                localStorage.setItem("user", obj);
                let d;
                for (let i = 0; i < admin.length; i++) {
                  if (
                    obj.email == admin[i].email &&
                    obj.password == admin[i].password
                  )
                    d = true;
                }
                if (d === true) {
                  navigate("/admin");
                }
              }}
            >
              Вход
            </Typography>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <label htmlFor="email"></label>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                InputLabelProps={{
                  style: {
                    fontSize: "1.6rem",
                  },
                }}
                value={formik.values.email}
                onChange={(e) => {
                  formik.handleChange(e);
                  handleEmailChange(e);
                }}
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
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                InputLabelProps={{
                  style: {
                    fontSize: "1.6rem",
                  },
                }}
                value={formik.values.password}
                onChange={(e) => {
                  handlePasswordChange(e);
                  formik.handleChange(e);
                }}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password && (
                <div className="error-message">{formik.errors.password}</div>
              )}
              <FormControlLabel
                className="checkbox"
                control={
                  <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 24 } }} />
                }
                label="Remember me"
              />
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
                onClick={(e) => {
                  let obj = {
                    email,
                    password,
                  };
                  let d;
                  localStorage.setItem("user", JSON.stringify(obj));
                  for (let i = 0; i < admin.length; i++) {
                    if (
                      obj.email == admin[i].email &&
                      obj.password == admin[i].password
                    )
                      d = true;
                  }
                  if (d === true) {
                    navigate("/admin");
                  }
                }}
              >
                Вход
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    className="pass"
                    href="#"
                    variant="body2"
                    sx={{
                      color: "#57607b",
                      textDecoration: "underline",
                    }}
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <span style={{ fontSize: "1.4rem", color: "#57607b" }}>
                    Don't have an account?
                  </span>
                  <Link
                    href="/register"
                    variant="body2"
                    sx={{
                      fontSize: "1.4rem",
                      color: "#57607b",
                      textDecoration: "underline",
                    }}
                  >
                    <span style={{ marginLeft: "1rem" }}>{"Sign Up"}</span>
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
