import React, { useEffect } from "react";
import Discounts from "../components/consumer/Discounts";
// import Benefits from "../components/consumer/Benefits";
// import DataConsumer from "../components/consumer/DataConsumer";
import { Helmet } from "react-helmet";

const Consumer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="consumer">
      <Helmet>
        {/* <!-- HTML Meta Tags --> */}
        <title>Privacy App | Personal Data Marketplace | Muna.io</title>
        <meta
          name="description"
          content="Muna.io is a privacy app, where you get the best offers and discounts by sharing your personal data. You also get to control when you stop sharing it. On Muna.io, you get great offers, convenience, and privacy! 
          "
        />
        <link rel="canonical" href="/" />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta
          itemprop="name"
          content=" Privacy App | Personal Data Marketplace | Muna.io"
        />
        <meta
          itemprop="description"
          content="Muna.io is a privacy app, where you get the best offers and discounts by sharing your personal data. You also get to control when you stop sharing it. On Muna.io, you get great offers, convenience, and privacy! 
          "
        />
        <meta
          itemprop="image"
          content="http://static.wixstatic.com/media/66c2f5_d216e103469a4625b69b570d3c6b6da3~mv2.png/v1/fill/w_1206,h_902,al_c/66c2f5_d216e103469a4625b69b570d3c6b6da3~mv2.png"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://www.muna.io" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Privacy App | Personal Data Marketplace | Muna.io"
        />
        <meta
          property="og:description"
          content=" Muna.io is a privacy app, where you get the best offers and discounts by sharing your personal data. You also get to control when you stop sharing it. On Muna.io, you get great offers, convenience, and privacy! 
          "
        />
        <meta
          property="og:image"
          content="http://static.wixstatic.com/media/66c2f5_d216e103469a4625b69b570d3c6b6da3~mv2.png/v1/fill/w_1206,h_902,al_c/66c2f5_d216e103469a4625b69b570d3c6b6da3~mv2.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Privacy App | Personal Data Marketplace | Muna.io"
        />
        <meta
          name="twitter:description"
          content=" Muna.io is a privacy app, where you get the best offers and discounts by sharing your personal data. You also get to control when you stop sharing it. On Muna.io, you get great offers, convenience, and privacy! 
          "
        />
        <meta
          name="twitter:image"
          content="http://static.wixstatic.com/media/66c2f5_d216e103469a4625b69b570d3c6b6da3~mv2.png/v1/fill/w_1206,h_902,al_c/66c2f5_d216e103469a4625b69b570d3c6b6da3~mv2.png"
        />
      </Helmet>
      <Discounts />
      {/* <Benefits />
      <DataConsumer /> */}
    </div>
  );
};

export default Consumer;
