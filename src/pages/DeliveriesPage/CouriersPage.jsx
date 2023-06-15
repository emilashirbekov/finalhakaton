import React, { useEffect, useState } from "react";
import { useAdmin } from "../../context/AdminContextProvider";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

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
    changeCouriers,
  } = useAdmin();
  useEffect(() => {
    getCouriers();
  }, []);
  function handlechange(obj) {
    obj.adopted = "true";
    return obj;
  }
  const [value, setValue] = useState("");

  // filter
  const filteredCouries = couriers.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });
  // filter
  const [idCouriers, setIdCouriers] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [salary, setSalary] = useState();
  const [photoAuto, setPhotoAuto] = useState();
  const [techPass, settexPasport] = useState();
  const [pass, setPass] = useState();
  function handleChange(obj) {
    obj.salary = salary;
    obj.email = email;
    obj.phoneNumber = phoneNumber;
    obj.techPass = techPass;
    obj.name = name;
    obj.pass = pass;
    return obj;
  }

  return (
    <div style={{ width: "90%", marginLeft: "5%", marginTop: "20px" }}>
      <Box>
        <h2 style={{}}>Курьеры JetkirKG</h2>
        <Typography>Сортировка сотрудников</Typography>
        <Box sx={{ display: "flex" }}>
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
          <TextField
            label="Ищите по названию"
            onChange={(e) => setValue(e.target.value)}
          ></TextField>
        </Box>
      </Box>
      {filteredCouries.map((item) => {
        return item.id == idCouriers ? (
          <Card
            key={item.id}
            sx={{
              display: "flex",
              border: "1px solid black",
              marginTop: "20px",
            }}
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
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    value={name}
                    label="name"
                    onChange={(e) => setName(e.target.value)}
                  ></TextField>
                </TableCell>
                <TableCell sx={{ width: "50%" }}>
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    label="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  ></TextField>{" "}
                </TableCell>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <TextField
                  sx={{ marginTop: "2%", width: "20%", marginLeft: "3%" }}
                  required
                  id="outlined-required"
                  label="salary"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                ></TextField>{" "}
                <TextField
                  sx={{ marginTop: "2%", width: "20%" }}
                  required
                  id="outlined-required"
                  label="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></TextField>
                <TextField
                  sx={{ marginTop: "2%", width: "20%" }}
                  required
                  id="outlined-required"
                  label="texpasport"
                  value={techPass}
                  onChange={(e) => settexPasport(e.target.value)}
                ></TextField>
                <TextField
                  sx={{ marginTop: "2%", width: "20%" }}
                  required
                  id="outlined-required"
                  label="texpasport"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                ></TextField>
                <Button
                  sx={{ width: "50%", margin: "auto", color: "gray" }}
                  onClick={(e) => {
                    setIdCouriers("");

                    changeCouriers(item.id, handleChange(item));
                  }}
                >
                  Coхранить изменения курьера
                </Button>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151, height: "150" }}
              image={item.photoUser}
              alt="курьер не оставил фото"
            />
            {item.adopted == "true" ? (
              <Button
                sx={{ color: "red" }}
                onClick={(e) => deleteCouriers(item.id)}
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
                  onClick={(e) => deleteCouriers(item.id)}
                  sx={{ color: "red", height: "50%", width: "100%" }}
                >
                  Отклонить
                </Button>
              </Box>
            )}
          </Card>
        ) : (
          <Card
            key={item.id}
            sx={{
              display: "flex",
              border: "1px solid black",
              marginTop: "20px",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 151, height: "150" }}
              image={item.photoAuto}
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
                  <Typography
                    id="standard-basic"
                    variant="standard"
                    value={item.name}
                  >
                    {item.name}
                  </Typography>
                </TableCell>
                <TableCell sx={{ width: "50%" }}>
                  Номер телефона :{" "}
                  <Typography id="standard-basic" variant="standard">
                    {item.phoneNumber}
                  </Typography>{" "}
                </TableCell>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{ marginTop: "2%", width: "20%", marginLeft: "3%" }}
                  required
                  id="outlined-required"
                >
                  Заработная плата: ${item.salary}
                </Typography>{" "}
                <Typography
                  sx={{ marginTop: "2%", width: "20%" }}
                  required
                  id="outlined-required"
                >
                  Email : {item.email}
                </Typography>
                {item.adopted == "true" ? (
                  <Button
                    sx={{ width: "50%", margin: "auto", color: "gray" }}
                    onClick={(e) => {
                      setIdCouriers(item.id);
                      setName(item.name);
                      setEmail(item.email);
                      setPhoneNumber(item.phoneNumber);
                      setSalary(item.salary);
                      settexPasport(item.techPass);
                      setPass(item.pass);
                    }}
                  >
                    Изменить курьера
                  </Button>
                ) : null}
              </Box>
            </Box>

            {item.adopted == "true" ? (
              <Button
                sx={{ color: "red" }}
                onClick={(e) => deleteCouriers(item.id)}
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
                  onClick={(e) => deleteCouriers(item.id)}
                  sx={{ color: "red", height: "50%", width: "100%" }}
                >
                  Отклонить
                </Button>
              </Box>
            )}
          </Card>
        );
      })}
    </div>
  );
};

export default CouriersPage;
