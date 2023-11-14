import React from 'react'
import AdSense from "react-adsense";
import GoogleAdsense from "react-adsense-google";
const Ads = () => {
  return (
    <>
      <GoogleAdsense
        adClient="ca-pub-2362928845053762"
        adSlot="4263734597"
        style={{ display: "block", "text-align": "center" }}
        adLayout="in-article"
        adFormat="fluid"
        fullWidthResponsive="true"
      />
    </>
  );
}

export default Ads
