import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./CourierHistory.css";
import CourierNavbar from "../CourierNavbar";

export default function CourierHistory() {
  return (
    <>
      <div className="hisory">
        <Card
          sx={{
            display: "flex",
            bgcolor: "#E0FFFF",
            margin: "5px",
          }}
          className="card"
        >
          <CardActionArea>
            <CardContent className="card_content">
              <Typography gutterBottom variant="h4" component="div">
                Order Nº1
              </Typography>
              <Typography variant="h5" color="text.secondary">
                Date:
              </Typography>
              <Typography variant="h5" color="text.secondary">
                Price:
              </Typography>
              <Typography variant="h5" color="text.secondary">
                Address:
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
}
