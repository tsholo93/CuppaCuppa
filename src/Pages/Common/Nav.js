import { useState, useEffect } from "react";
import menuIcon from "./assets/menu-icon.png";
import closeIcon from "./assets/close-icon.png";
import "./Nav.css";

export default function Nav() {
  const [isActive, setIsActive] = useState(false);

  let screenWidth = Math.max(
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
  );

  useEffect(() => {
    function handleResize() {
      screenWidth = Math.max(
        document.body.offsetWidth,
        document.documentElement.offsetWidth
      );

       if(screenWidth > 768) {
         setIsActive(false);
       }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)
  }, [])

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
  let openImage = menuIcon;
  let closeImage = closeIcon;
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
      <li className="reservation-button"><a href="#0" className="cuppa-button cuppa-button-cream">Book taster</a></li>
    </ul>
  )

}


