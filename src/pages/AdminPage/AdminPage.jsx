import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import "./AdminPage.css";

import DeliveriesPage from "../DeliveriesPage/DeliveriesPage";
import Deliveriers from "../DeliveriesPage/Deliveriers";
import CouriersPage from "../DeliveriesPage/CouriersPage";
import AppsIcon from "@mui/icons-material/Apps";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import { useAdmin } from "../../context/AdminContextProvider";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import GroupRemoveIcon from "@mui/icons-material/GroupRemove";
import { useAuth } from "../../context/AuthContextProvider";
const pages = ["deliveries", "couriers", "chat"];
const settings = ["Profile", "Logout"];

function AdminPage() {
  const { logout } = useAuth();
  const [pageState, setStatePage] = React.useState(1);
  const [menu, setMenu] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  // const links = document.querySelectorAll(".animated-link");

  // function animateLinks() {
  //   links.forEach((link, index) => {
  //     setTimeout(() => {
  //       link.classList.add("animate");
  //     }, index * 500); // Задержка в полсекунды между каждой ссылкой
  //   });
  // }

  return (
    <div className="Wrapper">
      <div
        className="Menu"
        style={
          menu
            ? { transform: "translate(0%)" }
            : { transform: "translate(-100%)" }
        }
      >
        <nav className="Meny-list">
          <a
            onClick={() => {
              setMenu(!menu);
              setStatePage(1);
            }}
            class="animated-link"
          >
            Deliveries
            <UnarchiveIcon sx={{ fontSize: "large" }}></UnarchiveIcon>
          </a>
          <a
            onClick={() => {
              setMenu(!menu);
              setStatePage(2);
            }}
            class="animated-link"
          >
            Couriers{" "}
            <TransferWithinAStationIcon
              sx={{ fontSize: "large" }}
            ></TransferWithinAStationIcon>
          </a>
          <a class="animated-link">Admin chat</a>
          <a class="animated-link">Profile</a>
          <a class="animated-link" onClick={() => logout()}>
            Logout{" "}
            <GroupRemoveIcon sx={{ fontSize: "large" }}></GroupRemoveIcon>
          </a>

          <a class="animated-link" href="/">
            Home page{" "}
            <CallReceivedIcon sx={{ fontSize: "large" }}></CallReceivedIcon>
          </a>
        </nav>
      </div>
      <div
        style={
          menu
            ? {
                transition: "0.5s",

                transform: "translate(15%)",
              }
            : {
                transition: "0.5s",
              }
        }
      >
        <AppBar
          className="MainContainer"
          position="static"
          sx={{
            background: "linear-gradient(to right, #b4b4f5, #b4b4f5)",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
              <IconButton
                sx={{ color: "white" }}
                onClick={() => {
                  // if (menu) {
                  // } else {
                  //   animateLinks();
                  // }
                  setMenu(!menu);
                }}
              >
                <AppsIcon fontSize="large"></AppsIcon>
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                ADMIN PANEL
              </Typography>

              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                ADMIN PANEL
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button
                  className=""
                  onClick={() => {
                    handleCloseNavMenu();
                    setStatePage(1);
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Deliveries
                </Button>
                <Button
                  onClick={() => {
                    handleCloseNavMenu();
                    setStatePage(2);
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Couriers
                </Button>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <DeliveriesPage></DeliveriesPage>
        {pageState == 1 ? <Deliveriers /> : <CouriersPage></CouriersPage>}
      </div>
    </div>
  );
}
export default AdminPage;
