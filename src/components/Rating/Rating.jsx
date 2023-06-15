import * as React from "react";
import Rating from "@mui/material/Rating";
import { Stack } from "@mui/material";
import { useAdmin } from "../../context/AdminContextProvider";

export default function HoverRating() {
  const { couriers, addRating, getCouriers } = useAdmin();

  const [ratedCouriers, setRatedCouriers] = React.useState([]);

  React.useEffect(() => {
    getCouriers();
  }, []);

  const handleRate = (courierId) => {
    addRating(courierId);
    setRatedCouriers((couriersRate) => [...couriersRate, courierId]);
  };

  return (
    <>
      <Stack spacing={1}>
        <Rating size="large" onChange={handleRate} />
      </Stack>
      ;
    </>
  );
}
