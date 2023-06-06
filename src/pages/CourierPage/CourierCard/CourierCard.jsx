import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./CourierCard.css";

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
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              amet debitis natus maxime autem aut nisi. Vitae fuga nam et error
              aspernatur ipsum perspiciatis, unde minima consectetur recusandae
              similique aut odit, vel dolores consequatur. Animi similique velit
              perspiciatis, ab accusamus itaque beatae voluptatibus eveniet.
              Pariatur natus molestiae velit quisquam libero?
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Price:
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Address:
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Weight:
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            className="btn_accept"
            sx={{ cursor: "pointer", bgcolor: "#00FF7F", color: "white" }}
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
