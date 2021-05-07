import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import AboutPanel1 from "../components/about/AboutPanel1";
// import AboutPanel2 from "../components/about/AboutPanel2";
// import AboutPanel3 from "../components/about/AboutPanel3";
// import AboutPanel4 from "../components/about/AboutPanel4";
// import AboutCharter from "../components/AboutCharter";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="about">
      <Helmet>
        <title>About us | Personal Data Marketplace | Muna</title>
        <meta
          name="description"
          content="At Muna.io we are accountable for the personal data we handle throughout our ecosystem. We vouch to protect and uphold the trust relationship between the company and its customers."
        />
        <link rel="canonical" href="https://Muna.io/About-Muna" />
        {/* <!-- Google / Search Engine Tags --> */}
        <meta
          itemprop="name"
          content="About us | Personal Data Marketplace | Muna"
        />
        <meta
          itemprop="description"
          content="At Muna.io we are accountable for the personal data we handle throughout our ecosystem. We vouch to protect and uphold the trust relationship between the company and its customers."
        />
        <meta
          itemprop="image"
          content="http://static.wixstatic.com/media/66c2f5_d216e103469a4625b69b570d3c6b6da3~mv2.png/v1/fill/w_1206,h_902,al_c/66c2f5_d216e103469a4625b69b570d3c6b6da3~mv2.png"
        />
      </Helmet>
      <AboutPanel1 />
      {/* <AboutPanel2 />
      <AboutCharter /> 
      <AboutPanel3 />
      <AboutPanel4 /> */}
    </div>
  );
};

export default About;
