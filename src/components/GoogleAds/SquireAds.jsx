import React,{useEffect} from 'react'
const SquireAds =()=> {
     const adCode = `
    <!-- Paste your AdSense ad code here -->
    <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-2362928845053762"
        data-ad-slot="8202979608"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
  `;
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: adCode }} />
    </>
  );
}

export default SquireAds
