import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { useOrder } from "../../context/OrderContextProvider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function KorzinaPage() {
  const { allorders, getOrders } = useOrder();
  React.useEffect(() => {
    getOrders();
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <h1>Все заказы от принятых до доставленных</h1>
          {allorders.map((item) => (
            <Box
              sx={{
                width: "100%",
                padding: "4%",
                border: "2px solid black",
                marginTop: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "90%",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="subtitle1" sx={{ marginBottom: "10px" }}>
                  Номер кто заказал:
                </Typography>
                <Typography variant="subtitle1" sx={{ marginBottom: "10px" }}>
                  Сумма заказа:
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "90%",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                  {item.phone_sender}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                  $ {item.price}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "90%",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                  От: {item.address_sender}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ArrowForwardIosIcon />
                  <ArrowForwardIosIcon />
                  <ArrowForwardIosIcon />
                  <ArrowForwardIosIcon />
                  <ArrowForwardIosIcon />
                  <ArrowForwardIosIcon />
                  <ArrowForwardIosIcon />
                  <ArrowForwardIosIcon />
                  <ArrowForwardIosIcon />
                </Box>
                <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                  В: {item.address_receiver}
                </Typography>
              </Box>
              <h3>
                Cтатус :{" "}
                {item.adopted == "false" ? (
                  <span>не принят (ожидание)</span>
                ) : (
                  <span>Принят </span>
                )}
              </h3>
            </Box>
          ))}
        </Box>
      </Container>
    </React.Fragment>
  );
}
