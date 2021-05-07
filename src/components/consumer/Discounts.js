import React from "react";
import muna from "../../assets/mockupmobile.png";
import DownloadModal from "./DownloadModal";

const Discounts = () => {
  return (
    <div className="discounts">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-12  discounts-left">
            <div className="discounts-about-left-box">
              <h1>Get discounts with your data</h1>
              <p>
                On our app you get the best deals in exchange for your data.
                Find the best offers, share your data like an email address, and
                get the discount. Also, when you want you can stop sharing -
                anytime.
              </p>

              <div className="discount-btn-div container">
                <button data-toggle="modal" data-target="#downloadModal">
                  Download
                </button>
              </div>
              <DownloadModal />
            </div>
          </div>
          <div className="col-md-7 col-sm-12 discount-img-box">
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

export default Discounts;
