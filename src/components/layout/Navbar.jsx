import { BiMenuAltRight, BiX } from "react-icons/bi";
import { useState, useEffect } from "react";
import "./styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">

          <a href="/" className="logo">
            <span className="logo-code">Coder</span>
            <span className="logo-fox">Fox </span>
            <span className="logo-code">Lab</span>
          </a>

          <ul className="nav-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#portfolio">Proyectos</a></li>
            <li><a href="#sobre-mi">Sobre mí</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>

          <div
            className="menu-toggle"
            onClick={() => setOpen(!open)}
          >
            {open ? <BiX /> : <BiMenuAltRight />}
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <a href="#inicio" onClick={() => setOpen(false)}>Inicio</a>
        <a href="#servicios" onClick={() => setOpen(false)}>Servicios</a>
        <a href="#portfolio" onClick={() => setOpen(false)}>Proyectos</a>
        <a href="#sobre-mi" onClick={() => setOpen(false)}>Sobre mí</a>
        <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
      </div>
    </>
  );
}