import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Customers from "../components/company/Customers";
// import CompanyBenefits from "../components/company/CompanyBenefits";
// import CompanyChange from "../components/company/CompanyChange";

const Company = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="company">
      <Helmet>
        <title>
          Ethical Data Exchange | Personal Data Marketplace | Muna.io
        </title>
        <meta
          name="description"
          content=" Muna.io is a two-sided marketplace, where companies place offers on the Muna.io privacy app and ask for personal data in exchange for discount offers or cash rewards. 
          "
        />
        <link rel="canonical" href="https://Muna.io/Muna-for-company" />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta
          itemprop="name"
          content="Ethical Data Exchange | Personal Data Marketplace | Muna.io"
        />
        <meta
          itemprop="description"
          content=" Muna.io is a two-sided marketplace, where companies place offers on the Muna.io privacy app and ask for personal data in exchange for discount offers or cash rewards. 
          "
        />
        <meta
          itemprop="image"
          content="http://static.wixstatic.com/media/66c2f5_d216e103469a4625b69b570d3c6b6da3~mv2.png/v1/fill/w_1206,h_902,al_c/66c2f5_d216e103469a4625b69b570d3c6b6da3~mv2.png"
        />
      </Helmet>
      <Customers />
      {/* <CompanyBenefits />
      <CompanyChange /> */}
    </div>
  );
};

export default Company;
