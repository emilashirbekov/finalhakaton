import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);

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
          <h3 className="logo">Logo</h3>
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
