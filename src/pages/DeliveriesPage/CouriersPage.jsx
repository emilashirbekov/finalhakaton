import React, { useEffect } from "react";
import { useAdmin } from "../../context/AdminContextProvider";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Button, TableCell } from "@mui/material";
import TextField from "@mui/material/TextField";
const CouriersPage = () => {
  const theme = useTheme();
  const { getCouriers, couriers, deleteCouriers } = useAdmin();
  useEffect(() => {
    getCouriers();
  }, []);
  return (
    <div style={{ width: "60%", marginLeft: "5%" }}>
      {couriers.map((item) => (
        <Card
          sx={{ display: "flex", border: "1px solid black", marginTop: "20px" }}
        >
          <CardMedia
            component="img"
            sx={{ width: 151, height: "150" }}
            image={item.photo}
            alt="курьер не оставил фото"
          />
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TableCell
                sx={{
                  width: "50%",
                  borderRight: "1px solid #rgba(224, 224, 224, 1);",
                }}
              >
                Фамилия Имя :
                <TextField
                  id="standard-basic"
                  variant="standard"
                  value={item.FLL}
                ></TextField>
              </TableCell>
              <TableCell sx={{ width: "50%" }}>
                Номер телефона :{" "}
                <TextField
                  id="standard-basic"
                  variant="standard"
                  value={item.phoneNumber}
                ></TextField>{" "}
              </TableCell>
            </Box>

            <Box>
              <TextField
                sx={{ marginTop: "2%" }}
                required
                id="outlined-required"
                label="Salary"
                defaultValue="Hello World"
                value={item.salary}
              />
            </Box>
          </Box>
          {item.adopted == "true" ? (
            <Button
              sx={{ color: "red" }}
              onClick={() => deleteCouriers(item.id)}
            >
              Уволить сотрудника
            </Button>
          ) : (
            <Box>
              <Button sx={{ color: "green", height: "50%", width: "100%" }}>
                Принять
              </Button>
              <Button sx={{ color: "red", height: "50%", width: "100%" }}>
                Отклонить
              </Button>
            </Box>
          )}
        </Card>
      ))}
    </div>
  );
};

export default CouriersPage;
