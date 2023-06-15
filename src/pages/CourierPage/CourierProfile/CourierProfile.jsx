import React, { useState } from "react";
import ProfileForm from "../../ProfilePage/ProfileForm";
import "./CourierProfile.css";
import { Link } from "react-router-dom";
import CourierNavbar from "../CourierNavbar";

const CourierProfile = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <CourierNavbar />
      <div className="container">
        <div className="profile-header">
          <div className="profile-img">
            <img
              src="https://cdn.rapzilla.com/wp-content/uploads/2018/08/23125300/IMG_20180831_105934-e1535729457992.jpg"
              width="200"
              alt="Profile Image"
            />
          </div>
          <div className="profile-nav-info">
            <h3 className="user-name">Bright Code</h3>
            <div className="address">
              <p id="state" className="state">
                New York,
              </p>
              <span id="country" className="country">
                USA.
              </span>
            </div>
          </div>
        </div>

        <div className="main-bd">
          <div className="left-side">
            <div className="profile-side">
              <h1>Ваш профиль</h1>
              <ul className="profile-list">
                <li className="list-item">Имя :</li>
                <li className="list-item">Фамилия :</li>
                <li className="list-item">Почта :</li>
                <li className="list-item">Номер телефона :</li>
                <li className="list-item">Пасспорт :</li>
                <li className="list-item">Тех пасспорт :</li>
              </ul>
            </div>
          </div>
          <div className="right-side">
            <div className="nav">
              <ul>
                <li
                  onClick={handleOpen}
                  className={open ? "user-post active" : "user-post"}
                >
                  Информация
                </li>
              </ul>
            </div>
            {open && <ProfileForm />}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourierProfile;
