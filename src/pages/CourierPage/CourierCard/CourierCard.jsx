import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./CourierCard.css";
import { Box, width } from "@mui/system";

export default function CourierCard() {
  const [isFlyAway, setFlyAway] = React.useState(false);

  const handleFlyAway = () => {
    setFlyAway(true);
  };
  return (
    <div className="container">
      <Card
        sx={{
          maxWidth: "60%",
          display: "flex",
          bgcolor: "#E0FFFF",
          margin: " 0 auto",
        }}
        className={`content ${isFlyAway ? "fly-away" : ""}`}
      >
        <CardActionArea>
          <CardContent>
            <Typography
              sx={{ textAlign: "center" }}
              gutterBottom
              variant="h4"
              component="div"
            >
              Order Nº1
            </Typography>
            <Box className="info" sx={{ display: "flex" }}>
              <Box sx={{ margin: "0 10px" }}>
                <Typography sx={{ fontSize: "14px" }} color="text.secondary">
                  PhoneNumber:777777777
                </Typography>
                <Typography sx={{ fontSize: "14px" }} color="text.secondary">
                  Weight:777
                </Typography>
                <Typography sx={{ fontSize: "14px" }} color="text.secondary">
                  Name:Lucifer
                </Typography>
              </Box>
              <Box sx={{ margin: "0 10px" }}>
                <Typography sx={{ fontSize: "14px" }} color="text.secondary">
                  Price:999
                </Typography>
                <Typography sx={{ fontSize: "14px" }} color="text.secondary">
                  Address:logvinenko 99
                </Typography>
                <Typography sx={{ fontSize: "14px" }} color="text.secondary">
                  From: Restoran Grand hall
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            className="btn_accept"
            sx={{
              cursor: "pointer",
              bgcolor: "#00FF7F",
              color: "white",
              fontSize: "14px",
            }}
            onClick={() => {
              handleFlyAway();
            }}
          >
            Accept
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
