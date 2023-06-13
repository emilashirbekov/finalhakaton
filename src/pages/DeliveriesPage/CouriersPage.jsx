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
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
const CouriersPage = () => {
  const theme = useTheme();
  const {
    getCouriers,
    couriers,
    deleteCouriers,
    changeAdopted,
    sortUbiv,
    sortUVozr,
  } = useAdmin();
  useEffect(() => {
    getCouriers();
  }, []);
  function handlechange(obj) {
    obj.adopted = "true";
    return obj;
  }
  return (
    <div style={{ width: "90%", marginLeft: "5%", marginTop: "20px" }}>
      <Box>
        <h2 style={{}}>Курьеры JetkirKG</h2>
        <Typography>Сортировка сотрудников</Typography>
        <Box sx={{ display: "flex" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Года</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={10}>По возрастанию</MenuItem>
              <MenuItem value={20}>По убыванию</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Зарплата</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="salary"
            >
              <MenuItem
                value={10}
                onClick={(e) => {
                  sortUVozr(couriers);
                }}
              >
                По возрастанию
              </MenuItem>
              <MenuItem
                value={20}
                onClick={(e) => {
                  sortUbiv(couriers);
                }}
              >
                По убыванию
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      {couriers.map((item) => (
        <Card
          key={item.id}
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

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <TextField
                sx={{ marginTop: "2%", width: "20%" }}
                required
                id="outlined-required"
                label="Salary"
                defaultValue="Hello World"
                value={item.salary}
              />
              <Button sx={{ width: "50%", margin: "auto", color: "gray" }}>
                Изменить курьера
              </Button>
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
              <Button
                onClick={(e) => changeAdopted(item.id, handlechange(item))}
                sx={{ color: "green", height: "50%", width: "100%" }}
              >
                Принять
              </Button>
              <Button
                onClick={deleteCouriers()}
                sx={{ color: "red", height: "50%", width: "100%" }}
              >
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
