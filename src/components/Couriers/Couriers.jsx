import React, { useEffect, useState } from "react";
import "./Couriers.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "../Rating/Rating";
import { IconButton } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import { useAdmin } from "../../context/AdminContextProvider";

const Couriers = () => {
  const { getCouriers, couriersTrue, incrementLikes } = useAdmin();
  const [likedCouriers, setLikedCouriers] = useState([]);

  useEffect(() => {
    getCouriers();
  }, []);

  const handleLike = (courierId) => {
    incrementLikes(courierId);
    setLikedCouriers((prevLikedCouriers) => [...prevLikedCouriers, courierId]);
  };

  const isCourierLiked = (courierId) => likedCouriers.includes(courierId);

  return (
    <>
      <div className="row">
        <h1>Наши Курьеры</h1>
      </div>
      <div className="row">
        {couriersTrue.map((courier) => (
          <div className="column" key={courier.id}>
            <div className="card">
              <div className="img-container">
                <img src={courier.userPhoto} alt="Courier" />
              </div>
              <h3>{courier.FLL}</h3>
              <p>Контакты {courier.phoneNumber}</p>
              <div className="icons">
                <IconButton onClick={() => handleLike(courier.id)}>
                  <FavoriteIcon
                    sx={{
                      width: "2.4rem",
                      height: "2.4rem",
                      color: isCourierLiked(courier.id) ? "red" : "inherit",
                    }}
                  />
                  <p>{courier.likes}</p>
                </IconButton>
                <Rating />
                <CommentIcon sx={{ width: "2rem", height: "2rem" }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Couriers;
