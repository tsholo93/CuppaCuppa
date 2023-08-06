import Masthead from "../../Common/Masthead";
import phoneCupImg640 from "./assets/phone-cup640.jpg";
import phoneCupImg1920 from "./assets/phone-cup1920.jpg";
import playstoreImg from "./assets/play-store.png";
import applestoreImg from "./assets/apple-store.png";
import "../../Common/styles/common.css";
import "./DownloadBanner.css";

const downloadBannerData = {
  masthead: {
    tagline: "Mobile application",
    heading: "Download our Application"
  },
  mainText: "Choose CuppaCuppa for an unparalleled coffee journey that transcends the ordinary. We invite you to join us and discover the difference that passion, craftsmanship, and exceptional coffee can make in your daily ritual of indulgence.",
  image: {
    size640: phoneCupImg640,
    size1920: phoneCupImg1920,
    alt: "cellphone placed next to cup of coffee"
  }
};

function DownloadBanner() {
  return (
    <section
      className="cuppa-download"
      style={{
        background: "#0a0c0e",
        color: "#F2F2F2"
      }}
    >
      <article className="banner-content cuppa-page-pad">
        <Masthead
          headingX2={downloadBannerData.masthead.heading}
          tagline={downloadBannerData.masthead.tagline}
        />
        <p className="paragraph">
          {downloadBannerData.mainText}
        </p>
        <Buttons/>
      </article>
      <figure className="banner-image">
        <picture className="banner-image">
          <source media="(max-width: 767px)" srcSet={downloadBannerData.image.size640} />
          <source media="(min-width: 768px)" srcSet={downloadBannerData.image.size1920} />
          <img src={downloadBannerData.image.size1920} alt={downloadBannerData.image.alt} />
        </picture>
      </figure>
    </section>
  )
}

function Buttons() {
  return (
    <div className="cuppa-links">
      <a
        href="#0"
        className="cuppa-button cuppa-button-cream market-btn"
      >
        <div className="market-img">
          <img src={applestoreImg}/>
        </div>
        <div>
          <span className="market-button-subtitle">Download on the</span>
          <span className="market-button-title">App Store</span>
        </div>
      </a>

      <a
        href="#0"
        className="cuppa-button cuppa-button-cream market-btn"
      >
        <div className="market-img">
          <img src={playstoreImg}/>
        </div>
        <div>
          <span className="market-button-subtitle">Get it on</span>
          <span className="market-button-title">Google Play</span>
        </div>
      </a>
    </div>
  )
}

function Button({ children }) {
  return (
    <div className="cta-button">
      <a href="#0">{children}</a>
    </div>
  )
}


export default DownloadBanner
