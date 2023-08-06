import Nav from "./Nav";
import "./PageHeader.css";

export default function PageHeader() {
  return (
    <header className="cuppa-page-header">
      <div className="brand-logo">
        <a href="#0">CuppaCuppa</a>
      </div>
      <Nav/>
    </header>
  )
}
