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
            <Typography gutterBottom variant="h4" component="div">
              Order Nº1
            </Typography>
            <Box className="info" sx={{ display: "flex" }}>
              <Box sx={{ margin: "0 10px" }}>
                <Typography sx={{ fontSize: "14px" }} color="text.secondary">
                  PhoneNumber:
                </Typography>
                <Typography sx={{ fontSize: "14px" }} color="text.secondary">
                  Weight:
                </Typography>
              </Box>
              <Box sx={{ margin: "0 10px" }}>
                <Typography sx={{ fontSize: "14px" }} color="text.secondary">
                  Price:
                </Typography>
                <Typography sx={{ fontSize: "14px" }} color="text.secondary">
                  Address:
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
