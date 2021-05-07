import React from "react";
import { Link } from "react-router-dom";

import apple from "../assets/apple-app-store.svg";
import playstore from "../assets/google-play-store.svg";
import FooterModal from "./FooterModal";
import DownloadModal from "./consumer/DownloadModal";

const Footer = () => {
  return (
    <footer className="navbar-light bg-light ">
      <div className="container">
        <div className="row container">
          <div className="col-md-3 footer-box">
            {/*  MEdia */}
            <ul className="list-inline ">
              <li className="list-inline-item">
                <a
                  aria-label="facebook"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/MunaDataTravel/"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  aria-label="twitter"
                  target="_blank"
                  rel="noreferrer"
                  href=" https://twitter.com/MunaDatamarket"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>

              <li className="list-inline-item">
                <a
                  aria-label="medium"
                  target="_blank"
                  rel="noreferrer"
                  href="https://sannatoro.medium.com/"
                >
                  <i className="fab fa-medium-m"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  aria-label="linkedin"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/munaapp/"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>

              <li className="list-inline-item">
                <a
                  aria-label="instagram"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/muna.io/"
                >
                  <i className="fab fa-instagram-square"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  aria-label="youtube"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/channel/UCZz-MOjIoYOOOYpiNNLEJPw"
                >
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
            <div className="Copyright-box">
              <p className="copyright quick-links">
                &copy; Copyright {new Date().getFullYear()} Muna.io
              </p>
            </div>
          </div>

          <div className="col-md-5 footer-box footer-middle py-5 ">
            <div className="container">
              <p>
                <span>
                  Contact:
                  <a
                    aria-label="envelope"
                    target="_blank"
                    rel="noreferrer"
                    href="tel:+32 479 36 32 79"
                  >
                    <i class="fas fa-phone-square"></i> +32 479 36 32 79
                  </a>
                </span>

                <span>
                  <a
                    aria-label="envelope"
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:denny@muna.io"
                  >
                    <i class="fas fa-envelope"></i> denny@muna.io
                  </a>
                </span>
              </p>
            </div>
            <ul className="list-inline quick-links">
              <li className="list-inline-item">
                <Link
                  className="policy-footer"
                  to="policy"
                  offset={150}
                  rel="noopener"
                >
                  Privacy
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  aria-label="terms"
                  // target="_blank"
                  rel="noreferrer"
                  to="terms"
                >
                  Terms
                </Link>
              </li>

              <li className="list-inline-item">
                <Link
                  aria-label="instagram"
                  // target="_blank"
                  rel="noreferrer"
                  to="sitemap"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 footer-box footer-box-img  ">
            <ul className="list-inline">
              <li className="list-inline-item">
                <img
                  data-toggle="modal"
                  data-target="#downloadModal"
                  src={apple}
                  alt="apple-store"
                />

                <DownloadModal />
              </li>
              <li className="list-inline-item">
                <img
                  data-toggle="modal"
                  data-target="#downloadModal"
                  src={playstore}
                  alt="goole-play-store"
                />
                <DownloadModal />
              </li>
            </ul>

            <div className=" footer-btn">
              <button data-toggle="modal" data-target="#footerModal">
                Sign up for Newsletter
              </button>
            </div>
          </div>
          <FooterModal />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
