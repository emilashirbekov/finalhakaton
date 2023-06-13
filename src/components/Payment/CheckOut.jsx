import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./AddressFormPage";
import PaymentForm from "./Payment";
import Review from "./Review";
import { Paper } from "@mui/material";
import "./Form.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";

function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { users } = useAuth();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      {isLoggedIn && (
        <ThemeProvider theme={createTheme()}>
          <CssBaseline />
          <Container
            className="my-form"
            id="form"
            component="main"
            maxWidth="sm"
            sx={{ mb: 4 }}
          >
            <Paper
              variant="outlined"
              sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
              style={{ fontSize: "1.6rem" }}
            >
              <Typography component="h1" variant="h4" align="center">
                Оформить доставку
              </Typography>
              <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                <Step>
                  <StepLabel>Адрес доставки</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Оплата</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Просмотр заказа</StepLabel>
                </Step>
              </Stepper>
              {activeStep === 3 ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Спасибо за ваш заказ
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order
                    confirmation, and will send you an update when your order
                    has shipped.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {activeStep === 0 && <AddressForm />}
                  {activeStep === 1 && <PaymentForm />}
                  {activeStep === 2 && <Review />}
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Назад
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      type="submit"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      {activeStep === 2 ? "Заказать" : "Далее"}
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </Paper>
          </Container>
        </ThemeProvider>
      )}

      {!isLoggedIn && (
        <div
          id="form"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "2.4rem", marginBottom: "2rem" }}>
            Перед тем как сделать заказ авторизируйтесь
          </h1>
          <Link
            style={{
              marginBottom: "5rem",
            }}
            to="/login"
            className="btn btn--full margin--right-sm"
          >
            Войти
          </Link>
        </div>
      )}
    </>
  );
}

export default Checkout;
