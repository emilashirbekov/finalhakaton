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
import { useMediaQuery } from "@mui/material";

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

const defaultTheme = createTheme();

export default function RegisterPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

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
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="fname"
                label="Имя"
                name="fname"
                autoComplete="fname"
                autoFocus
                InputLabelProps={{
                  style: {
                    fontSize: "1.6rem", // Увеличение размера плейсхолдера
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="lname"
                label="Фамилия"
                type="text"
                id="lname"
                autoComplete="lname"
                InputLabelProps={{
                  style: {
                    fontSize: "1.6rem",
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="phoneNumber"
                label="Номер телефона"
                type="number"
                id="phoneNumber"
                autoComplete="current-password"
                InputLabelProps={{
                  style: {
                    fontSize: "1.6rem",
                  },
                }}
              />
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
              />
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
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Повторите пароль"
                type="password"
                id="password"
                autoComplete="current-password"
                InputLabelProps={{
                  style: {
                    fontSize: "1.6rem",
                  },
                }}
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
              >
                Вход
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
