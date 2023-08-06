import Nav from "./Nav";
import img from "./assets/logo-coffee.png";
import "./PageHeader.css";

export default function PageHeader() {
  return (
    <header className="cuppa-page-header">
      <div className="brand-logo">
        <a href="#0">
          <img src={img} width="60" />
          <span>CuppaCuppa</span>
        </a>
      </div>
      <Nav/>
    </header>
  )
}
