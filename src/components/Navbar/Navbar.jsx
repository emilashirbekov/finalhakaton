import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import { Badge } from "@mui/base";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

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

  return (
    <>
      <header>
        <nav className="navbar">
          <h3 className="logo">jetkirKG</h3>
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
                  onClick={handleOpenUserMenu}
                  sx={{ padding: 0, margin: 0 }}
                >
                  <Avatar
                    alt="photo"
                    // src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                  />
                </IconButton>
              </Tooltip>
            </li>
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
