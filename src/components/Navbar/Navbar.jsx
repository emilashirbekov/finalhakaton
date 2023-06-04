import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <header className="">
        <nav className="navbar">
          <h3 className="logo">Logo</h3>
          <ul
            className={Mobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setMobile(false)}
          >
            <Link to="/" className="home">
              <li>Главная</li>
            </Link>
            <Link to="/" className="about">
              <li>Как заказать</li>
            </Link>
            <Link to="/" className="services">
              <li>О доставке</li>
            </Link>
            <Link to="/" className="skills">
              <li>Стоимость</li>
            </Link>
            <Link to="/login" className="home">
              <li>Войти</li>
            </Link>
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
