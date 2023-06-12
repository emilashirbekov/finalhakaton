import React, { useState } from "react";
import "./Profile.css";
import ProfileForm from "./ProfileForm";

const ProfilePage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return <div style={{ maxWidth: "130rem", margin: "0 auto" }}></div>;
};

export default ProfilePage;
