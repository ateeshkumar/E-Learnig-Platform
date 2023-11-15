import React from 'react'
import AdSense from "react-adsense";
import GoogleAdsense from "react-adsense-google";
const Ads = () => {
  return (
    <>
      <AdSense.Google
        client="ca-pub-2362928845053762"
        slot="4263734597"
        style={{ display: "block" }}
        layout="in-article"
        format="fluid"
      />
    </>
  );
}

export default Ads
