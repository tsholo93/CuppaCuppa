import "./DownloadBanner.css";
import "../../../Masthead.css"

/*
redish #592E2E
white #F0F0F2
black #0a0c0e
grey #3B3C40
*/

function DownloadBanner() {
  return (
    <section
      className="cuppa-download"
      style={{
        background: "#0a0c0e",
        color: "#F0F0F2"
      }}
    >
      <article className="banner-content">
        <header className="cuppa-masthead">
          <p className="cuppa-tagline">Mobile application</p>
          <h2 className="cuppa-heading">Download our Application</h2>
        </header>
        <p className="paragraph">
          Choose CuppaCuppa for an unparalleled coffee journey that transcends the ordinary. We invite you to join us and discover the difference that passion, craftsmanship, and exceptional coffee can make in your daily ritual of indulgence.
        </p>
        <Buttons/>
      </article>
      <figure className="banner-image">
        <img src="/phone-cup.jpg" alt="" />
      </figure>
    </section>
  )
}

function Buttons() {
  return (
    <div className="cuppa-links">
      <a
        href="#0"
        className="cuppa-button"
      >App Store</a>
      <a
        href="#0"
        className="cuppa-button"
      >Play Market</a>
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
