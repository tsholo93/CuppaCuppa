import "./Footer.css";

export default function Footer() {
  return (
    <footer className="cuppa-page-footer cuppa-page-pad">
      <div className="container">
        <section className="about-content">
          <h2 className="brand-name">CuppaCuppa</h2>
          <p>
            Step into our coffee house, a haven where the aroma of freshly brewed beans invites you to indulge in moments of pure coffee bliss. Immerse yourself in our warm and inviting atmosphere, where expertly crafted beverages and friendly smiles await you.
          </p>
          <p className="slogan">Experience the perfect cup.</p>
        </section>

      <div className="contact-content">
          <section className="contact-address">
            <h2>Visit</h2>
            <div>
              <p>CuppaCuppa.</p>
              <p>27 Unkwown, Ste100.</p>
              <p>Capital, Ra.RSA 92618</p>
            </div>
          </section>

          <section className="contact-engage">
            <h2>Contact</h2>
            <div>
              <p><span>Call:</span> +123-456-7589</p>
              <p><span>Write:</span> writeus@cuppacuppa.com</p>
            </div>
          </section>
        </div>

        <section className="social-content">
          <h2>Follow</h2>
          <ul>
            <li><a href="#0" className="link">Facebook</a></li>
            <li><a href="#0" className="link">Instagram</a></li>
            <li><a href="#0" className="link">Twitter</a></li>
            <li><a href="#0" className="link">Youtube</a></li>
          </ul>
        </section>

        <section className="legal-content">
          <h2>Legal</h2>
          <ul>
            <li><a href="#0">Terms</a></li>
            <li><a href="#0">Privacy</a></li>
          </ul>
        </section>
      </div>
      <p className="copy-right-content">
        <small>&copy; CuppaCuppa 2023 | All rights reserved |
        Images from <a href="https://www.unsplash.com" target="_blank">Unsplash</a> & <a href="https://icons8.com/" target="_blank">Icons8</a></small>
      </p>
    </footer>
  )
}
