import React, { useEffect } from "react";
import "./Orders.css";

const OrdersPage = () => {
  return (
    <>
      <div className="courses-container">
        <h1 className="orders">Ваши заказы</h1>
        <div className="course">
          <div className="course-preview">
            <h6>Course</h6>
            <h2>JavaScript Fundamentals</h2>
            <a href="#">
              View all chapters <i className="fas fa-chevron-right"></i>
            </a>
          </div>
          <div className="course-info">
            <div className="progress-container">
              <div className="progress"></div>
              <span className="progress-text">6/9 Challenges</span>
            </div>
            <h6>Chapter 4</h6>
            <h2>Callbacks & Closures</h2>
            <button className="btn-1">Continue</button>
          </div>
        </div>
      </div>

      <div className="social-panel-container">
        <div className="social-panel">
          <p>
            Created with <i className="fa fa-heart"></i> by
            <a target="_blank" href="https://florin-pop.com">
              Florin Pop
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default OrdersPage;
