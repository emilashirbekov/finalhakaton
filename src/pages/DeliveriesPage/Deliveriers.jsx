import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useAdmin } from "../../context/AdminContextProvider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Deliveriers = () => {
  const { getDeliveries, deliveries } = useAdmin();
  useEffect(() => {
    getDeliveries();
  }, []);
  console.log(deliveries);
  return (
    <div style={{ width: "90%", marginLeft: "5%", marginTop: "20px" }}>
      <Typography component="h1">Заказы</Typography>
      <Grid
        container
        spacing={2}
        sx={{ border: "1px solid #b4b4f5", marginTop: "20px" }}
      >
        {deliveries.map((item) => (
          <Grid
            item
            xs={6}
            key={item.id}
            sx={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
          >
            <Box
              sx={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="subtitle1">Кто заказал:</Typography>
              <Typography variant="subtitle1">Сумма заказа:</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1">
                {item.name} {item.surname}
              </Typography>
              <Typography variant="body1">$800</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "60%",
                alignItems: "center",
              }}
            >
              <Typography variant="body1">От: {item.form}</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ArrowForwardIosIcon />
                <ArrowForwardIosIcon />
                <ArrowForwardIosIcon />
                <ArrowForwardIosIcon />
                <ArrowForwardIosIcon />
                <ArrowForwardIosIcon />
              </Box>
              <Typography variant="body1">В: {item.to}</Typography>
            </Box>
            <Box>
              <Button variant="contained" color="primary">
                Принять
              </Button>
              <Button variant="contained" color="secondary">
                Отклонить
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Deliveriers;
