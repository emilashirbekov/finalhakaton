import React from "react";
import "./Partners.css";
import optima from "../../assets/images/Logotip_OPTIMA-BANK.jpg";
import gis2 from "../../assets/images/2GIS_logo.png";
import kicb from "../../assets/images/202005_w750_h_r.png";
import usaid from "../../assets/images/usaid.jpeg";
import kanal7 from "../../assets/images/iarfx 7 dxyyy gowv.jpg";
import rsk from "../../assets/images/rsk.jpg";

const Partners = () => {
  return (
    <section className="section-featured">
      <div className="container">
        <h2 className="heading-featured-in">Наши партнеры</h2>
        <div className="logos">
          <img src={optima} alt="Techcrunch logo" />
          <img src={gis2} alt="Techcrunch logo" />
          <img src={kicb} alt="Techcrunch logo" />
          <img src={usaid} alt="Techcrunch logo" />
          <img src={kanal7} alt="Techcrunch logo" />
          <img src={rsk} alt="Techcrunch logo" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
