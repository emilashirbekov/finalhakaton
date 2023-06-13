import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import { Badge } from "@mui/base";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useAuth } from "../../context/AuthContextProvider";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  const [open, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { users, logout } = useAuth();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleIconHover = () => {
    setIsOpen(true);
  };
  const handleIconNotHover = () => {
    setIsOpen(false);
  };

  const handleLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
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
            {isLoggedIn && (
              <li>
                <Link to="/deliver" className="deliver">
                  Стать курьером
                </Link>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <Link to="/orders">
                  <Tooltip title="bag">
                    <IconButton
                      size="large"
                      sx={{ padding: 0, margin: 0 }}
                      aria-label="show 17 new notifications"
                    >
                      <Badge badgeContent={0} component={Link} to="/bag">
                        <ShoppingBagIcon
                          sx={{ color: "#fff" }}
                          fontSize="large"
                        />
                      </Badge>
                    </IconButton>
                  </Tooltip>
                </Link>
              </li>
            )}
            {isLoggedIn && (
              <li className="user-icon" style={{ padding: 0, margin: 0 }}>
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
                    <Link
                      onClick={() => logout()}
                      to="/"
                      className="sub-menu-link"
                    >
                      <div className="edit-body">
                        <LogoutIcon
                          sx={{
                            width: "2.4rem",
                            height: "auto",
                            marginRight: "1rem",
                          }}
                        />
                        <p>Exit</p>
                      </div>

                      <span>
                        <ArrowForwardIosIcon />
                      </span>
                    </Link>
                  </div>
                </div>
              </li>
            )}

            {!isLoggedIn && (
              <li>
                <Link to="/login" className="login">
                  Войти
                </Link>
              </li>
            )}
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
