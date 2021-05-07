import React from "react";
import muna from "../../assets/illust.svg";

const AboutPanel1 = () => {
  return (
    <div className="discounts">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-12 py-5 discounts-left mobile-left">
            <div className="discounts-about-left-box">
              <h4>Our mission</h4>
              <h1>Feminist Data broker</h1>
              <div className="discount-btn-div container">
                <button>Our charter</button>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-sm-12 custom-panel1-img mobile-left">
            <img
              className="discount-img"
              loading="lazy"
              src={muna}
              alt="muna.io"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPanel1;
