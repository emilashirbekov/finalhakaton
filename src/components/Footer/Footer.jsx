import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid--footer">
        <div className="logo-col">
          <ul className="social-links">
            <li>
              <a href="">
                <InstagramIcon style={{ fontSize: "3rem" }} />
              </a>
            </li>
            <li>
              <a href="">
                <FacebookIcon style={{ fontSize: "3rem" }} />
              </a>
            </li>
            <li>
              <a href="">
                <YouTubeIcon style={{ fontSize: "3rem" }} />
              </a>
            </li>
            <li>
              <a href="">
                <TelegramIcon style={{ fontSize: "3rem" }} />
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-col">
          <p className="footer-heading"> Cвяжитесь с нами</p>
          <address className="contacts">
            <p className="address">г. Бишкек Табышалиева 29</p>
            <p>
              <a className="footer-link" href="tel:415-201-6370">
                +996500500500
              </a>
              <a className="footer-link" href="mailto:hello@omnifood.com">
                expresskg.com
              </a>
            </p>
            <p className="copyright">2023 &copy; Все права защищены </p>
          </address>
        </div>
        <nav className="nav-col">
          <p className="footer-heading">Аккаунт</p>
          <ul className="footer-nav">
            <li>
              {" "}
              <a className="footer-link" href="#">
                Зарегестрироваться
              </a>{" "}
            </li>
            <li>
              {" "}
              <a className="footer-link" href="#">
                Войти
              </a>{" "}
            </li>
            <li>
              {" "}
              <a className="footer-link" href="#">
                iOS app
              </a>{" "}
            </li>
            <li>
              {" "}
              <a className="footer-link" href="#">
                Android app
              </a>{" "}
            </li>
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Компания</p>
          <ul className="footer-nav">
            <li>
              {" "}
              <a className="footer-link" href="#">
                О компании
              </a>{" "}
            </li>
            <li>
              {" "}
              <a className="footer-link" href="#">
                Для бизнесса
              </a>{" "}
            </li>
            <li>
              {" "}
              <a className="footer-link" href="#">
                Наши партнеры
              </a>{" "}
            </li>
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Ресурсы</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                FAQ
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Конфиденциальность и <br /> условия
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
