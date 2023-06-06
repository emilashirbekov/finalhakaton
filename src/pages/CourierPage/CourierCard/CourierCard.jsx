import { IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import "./CourierCard.css";
const CourierCard = () => {
  return (
    <div className="card_container">
      <div className="card">
        <div className="cardContent">
          <div className="description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
            maxime?
          </div>
          <h5 className="price"></h5>
          <IconButton>
            Accept
            <CheckIcon />
          </IconButton>
        </div>
      </div>
      <div className="card">
        <div className="cardContent">
          <div className="description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
            maxime?
          </div>
          <h5 className="price"></h5>
          <IconButton>
            Accept
            <CheckIcon />
          </IconButton>
        </div>
      </div>{" "}
      <div className="card">
        <div className="cardContent">
          <div className="description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
            maxime?
          </div>
          <h5 className="price"></h5>
          <IconButton>
            Accept
            <CheckIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default CourierCard;
