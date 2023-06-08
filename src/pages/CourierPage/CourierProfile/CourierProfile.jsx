import React from "react";
import CourierNavbar from "../CourierNavbar";
import { Box, CardMedia, Typography } from "@mui/material";
import "./CourierProfile.css";

const CourierProfile = () => {
  return (
    <div>
      <CourierNavbar />
      <div className="profile_container">
        <div className="profile">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/274px-Joe_Biden_presidential_portrait.jpg"
            alt="Profile_img"
            width={"20%"}
            className="profile_img"
          />
          <Box className="information">
            <Typography variant="h5">Name:Linda</Typography>
            <Typography variant="h5">SurName: Martin</Typography>
            <Typography variant="h5">Age:49</Typography>
            <Typography variant="h5">Email:Linda@Martin</Typography>
            <Typography variant="h5">PhoneNumber:08888</Typography>
            <Typography variant="h5" sx={{ display: "block" }}>
              Transport:
            </Typography>
            <img
              src="https://make-your-byke.myshopify.com/cdn/shop/products/lotus-c-01-superbike_100457597_l_large.jpg?v=1442385149"
              alt="Transport"
              width={"50%"}
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default CourierProfile;
