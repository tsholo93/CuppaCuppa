import Nav from "./Nav";
import "./PageHeader.css";

export default function PageHeader() {
  return (
    <header className="cuppa-page-header">
      <div className="brand-logo">
        <a href="#0">
          <img src="/logo-coffee.png" width="60" />
          <span>CuppaCuppa</span>
        </a>
      </div>
      <Nav/>
    </header>
  )
}
