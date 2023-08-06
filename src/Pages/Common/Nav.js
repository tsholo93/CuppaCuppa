import { useState } from "react";
import "./Nav.css";

export default function Nav() {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="cuppa-page-nav">
      <Toggler
        toggle={isActive}
        onToggle={() => setIsActive(!isActive)}
      />
      <MenuList
        isOpen={isActive}
      />
    </nav>
  )
}


function Toggler({ toggle, onToggle }) {
  let openImage = "/menu-icon.png";
  let closeImage = "/close-menu.png";
  let toggleImage = (toggle) ? closeImage : openImage;

  return (
    <button className="menu-toggler" onClick={onToggle}>
        <img src={toggleImage}/>
    </button>
  )
}

function MenuList({ isOpen }) {
  let openNav = isOpen ? 'open' : '';

  return (
    <ul className={`menu-list ${openNav}`}>
      <li><a href="#0" className="link">Home</a></li>
      <li><a href="#0" className="link">About</a></li>
      <li><a href="#0" className="link">Menu</a></li>
      <li><a href="#0" className="link">Order</a></li>
      <li><a href="#0" className="link">Blog</a></li>
      <li><a href="#0" className="link">Contact</a></li>
      <li><a href="#0" className="reservation-btn">Book taster</a></li>
    </ul>
  )

}


