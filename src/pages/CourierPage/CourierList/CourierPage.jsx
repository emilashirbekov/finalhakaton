import React from "react";
import CourierNavbar from "../CourierNavbar";
import CourierCard from "../CourierCard/CourierCard";

const CourierPage = () => {
  return (
    <div>
      <CourierNavbar />
      <CourierCard />
      <CourierCard /> <CourierCard />
    </div>
  );
};

export default CourierPage;
