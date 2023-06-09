import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import { Badge } from "@mui/base";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const [open, setIsOpen] = useState(false);

  const handleIconHover = () => {
    setIsOpen(true);
  };
  const handleIconNotHover = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <Link to="/">
            <h3 style={{ cursor: "pointer" }} className="logo">
              jetkirKG
            </h3>
          </Link>
          <ul
            className={Mobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setMobile(false)}
          >
            <li>
              <Link
                className="home"
                onClick={(e) => handleLinkClick(e, "hero")}
              >
                Главная
              </Link>
            </li>
            <li>
              <Link className="how" onClick={(e) => handleLinkClick(e, "how")}>
                Как заказать
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="about"
                onClick={(e) => handleLinkClick(e, "about")}
              >
                О доставке
              </Link>
            </li>
            <li>
              <Link to="#" onClick={(e) => handleLinkClick(e, "form")}>
                Стоимость
              </Link>
            </li>
            <li>
              <Link to="/deliver" className="deliver">
                Стать курьером
              </Link>
            </li>
            <li>
              <Tooltip title="bag">
                <IconButton
                  size="large"
                  sx={{ padding: 0, margin: 0 }}
                  aria-label="show 17 new notifications"
                >
                  <Badge badgeContent={0} component={Link} to="/bag">
                    <ShoppingBagIcon sx={{ color: "#fff" }} fontSize="large" />
                  </Badge>
                </IconButton>
              </Tooltip>
            </li>
            <li style={{ padding: 0, margin: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  sx={{ padding: 0, margin: 0 }}
                  onMouseEnter={handleIconHover}
                >
                  <Avatar
                    alt="photo"
                    // src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                  />
                </IconButton>
              </Tooltip>
            </li>
            <div
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconNotHover}
              className={`sub-menu-wrap ${open ? "" : "show"}`}
            >
              <div className="sub-menu">
                <div className="user-info">
                  <Avatar sx={{ marginRight: "2rem" }} />
                  <h2>Username</h2>
                </div>
                <hr />
                <Link to="/user" className="sub-menu-link">
                  <div className="edit-body">
                    <PersonIcon
                      sx={{
                        width: "2.4rem",
                        height: "auto",
                        marginRight: "1rem",
                      }}
                    />
                    <p>Edit profile</p>
                  </div>
                  <span>
                    <ArrowForwardIosIcon />
                  </span>
                </Link>
              </div>
            </div>
            <li>
              <Link to="/login" className="login">
                Войти
              </Link>
            </li>
          </ul>

          <button
            className="mobile-menu-icon"
            onClick={() => setMobile(!Mobile)}
          >
            {Mobile ? <ClearIcon /> : <MenuIcon />}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
