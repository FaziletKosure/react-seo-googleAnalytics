import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  useHistory,
} from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Consumer from "./secreens/Consumer";
import Company from "./secreens/Company";
import About from "./secreens/About";
import Policy from "./secreens/Policy";
import PolicyMobile from "./secreens/PolicyMobile";
import SitemapMobile from "./secreens/SitemapMobile";

import usePageTracking from "./usePageTracking";

function App() {
  // usePageTracking();
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    const gtag = window.gtag;

    if (location.pathname === window.location.pathname) {
      return;
    }

    if (history.action === "PUSH" && typeof gtag === "function") {
      gtag("config", "UA-169196341-1", {
        page_location: window.location.href,
        page_path: location.pathname,
      });
    }
  }, [location, history]);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1025px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  if (isTabletOrMobile) {
    return (
      <Router>
        <div id="container">
          <div id="main-content">
            <Switch>
              <Route
                path="/(about|company|)/"
                render={() => (
                  <>
                    <Navbar isTabletOrMobile={isTabletOrMobile} />
                    <Consumer />

                    <Company />
                    <a
                      href="#"
                      aria-label="up-angle"
                      rel="noreferrer"
                      // className="pill"
                    >
                      <i className="fas fa-angle-double-up up-angle"></i>
                    </a>
                    <About />
                    <Footer />
                  </>
                )}
              />
              {isTablet ? (
                <Route
                  path="/policy"
                  exact
                  render={() => <Policy isTabletOrMobile={isTabletOrMobile} />}
                />
              ) : (
                <Route path="/policy" exact component={PolicyMobile} />
              )}
              <Route path="/sitemap" exact render={() => <SitemapMobile />} />
              <Route path="/terms" exact render={() => <SitemapMobile />} />
              <Route path="/log-in" exact render={() => <SitemapMobile />} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
  return (
    <Router>
      <div id="container">
        <Navbar isTabletOrMobile={isTabletOrMobile} />
        <div id="main-content">
          <Switch>
            <Route path="/" exact component={Consumer} />
            <Route path="/company" exact component={Company} />
            <Route path="/About" exact component={About} />
            <Route path="/policy" exact component={Policy} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
