import React from "react";
import muna from "../../assets/mockupdesktop.png";
import RequestDemo from "./RequestDemo";

const Customers = () => {
  return (
    <div className="discounts">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-12  discounts-left mobile-left customers-left">
            <div className="discounts-about-left-box">
              <h1>Fair, ethical and transparent data exchange</h1>
              <p>
                Muna.io is a two-sided marketplace, where companies place offers
                on the Muna.io privacy app and ask for personal data in exchange
                for discount offers or cash rewards.
              </p>

              <div className="discount-btn-div container company">
                <button data-toggle="modal" data-target="#myModal">
                  Request a demo
                </button>
              </div>
              <RequestDemo />
            </div>
          </div>
          <div className="col-md-7 col-sm-12 discount-img-box">
            <img
              className="discount-img"
              loading="lazy"
              src={muna}
              alt="muna"
              srcSet=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
