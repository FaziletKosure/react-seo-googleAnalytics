import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/munaiologo.svg";

//  REACT FONTAWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MobileNav from "./MobileNav";

const Navbar = ({ isTabletOrMobile }) => {
  if (isTabletOrMobile) {
    return <MobileNav />;
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top container">
      <Link className="navbar-brand" offset={-110} to="/">
        <img className="logo" loading="lazy" src={logo} alt="logo" srcSet="" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon
          icon={faBars}
          style={{ color: "#000", fontSize: "24px" }}
        />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link
              to="/"
              className="nav-a"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              Consumer
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/company" className="nav-a" href="#">
              Company
            </Link>
          </li>

          <li className="nav-item">
            <Link to="about" className="nav-a">
              About
            </Link>
          </li>
          <li className="nav-item active">
            <Link
              to="/log-in"
              className="nav-a  log-in"
              href="#"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              Log in
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
