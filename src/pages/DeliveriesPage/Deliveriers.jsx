import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useAdmin } from "../../context/AdminContextProvider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Deliveriers = () => {
  const { getDeliveries, deliveries, changeAdoptedDeli, deleteDeliveriers } =
    useAdmin();
  useEffect(() => {
    getDeliveries();
  }, []);
  console.log(deliveries);
  function handlechange(obj) {
    obj.adopted = "true";
    return obj;
  }
  return (
    <div style={{ width: "90%", marginLeft: "5%", marginTop: "20px" }}>
      <Typography sx={{ fontSize: "30px" }}>Заказы JetkirKg</Typography>
      <Grid
        container
        spacing={2}
        sx={{
          borderTop: "2px solid #b4b4f5",
          borderBottom: "2px solid #b4b4f5",
          marginTop: "20px",
          padding: "3%",
        }}
      >
        {deliveries.map((item) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={item.id}
            sx={{ border: "1px solid violet", marginBottom: "10px" }}
          >
            <Box
              sx={{
                display: "flex",
                width: "90%",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="subtitle1" sx={{ marginBottom: "10px" }}>
                номер кто заказал:
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
                $800
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
            <Box sx={{ marginRight: "2.5%" }}>
              <Button
                variant="contained"
                color="success"
                sx={{
                  width: "50%",
                }}
                onClick={(e) => changeAdoptedDeli(item.id, handlechange(item))}
              >
                Принять
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={{ width: "50%" }}
                onClick={(e) => deleteDeliveriers(item.id)}
              >
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
