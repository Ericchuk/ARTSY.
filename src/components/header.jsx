import hamburger from "./img/Vector.png";
import search from "./img/Vector (1).png";
import cart from "./img/Vector (2).png";
import note from "./img/Vector (7).png";
import ellipse from "./img/Ellipse 3.png";
import "./cssfiles/header.css";
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function openNav() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (window.innerWidth > 699) {
      setIsOpen(true);
    }
  }, [isOpen]);

  return (
    <header>
      <article className="hamburger-container">
        <img
          src={hamburger}
          altarticle="hamburger"
          onClick={openNav}
          className="cursor hamburger"
          alt="menu"
        />
        <h2>ARTSY.</h2>
      </article>
      <nav>
        {isOpen ? <Navbar setIsOpen={setIsOpen} isOpen={isOpen} /> : ""}
      </nav>
      <aside>
        <img src={search} alt="search-icon" className="cursor" />
        <div className="ellipse-container cursor">
          <Link to="cart">
            <img src={cart} alt="ellipse" />
            <img src={ellipse} alt="cart" className="ellipse" />
          </Link>
        </div>
        {window.innerWidth > 699 ? (
          <img
            src={note}
            alt="notification-icon"
            className="cursor note-bell"
          />
        ) : (
          ""
        )}
      </aside>
    </header>
  );
}
