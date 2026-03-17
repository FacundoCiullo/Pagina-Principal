import { BiSolidCaretUpCircle , BiSolidCaretDownCircle  } from "react-icons/bi";
import { useState, useEffect, useRef } from "react";
import "./styles/navbar.css";
import logo from "../../assets/logo.png";

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const menuRef = useRef(null);
  const lastScroll = useRef(0);

  /* SCROLL NAVBAR */

  useEffect(() => {

    const handleScroll = () => {

      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 20);

      if (currentScroll > lastScroll.current && currentScroll > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScroll.current = currentScroll;

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  /* CERRAR AL HACER CLICK FUERA */

  useEffect(() => {

    const handleClickOutside = (event) => {

      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }

    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);

  /* BOTON ATRAS DEL CELULAR */

  useEffect(() => {

    if (open) {
      window.history.pushState({ menu: true }, "");
    }

    const handlePopState = () => {
      setOpen(false);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };

  }, [open]);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}>
        <div className="navbar-container">

          <a href="/" className="logo">
            <img src={logo} alt="Logo" />
            <span className="logo-code">Code</span>
            <span className="logo-fox">Fox</span>
            <span className="logo-code">Lab</span>
          </a>

          <ul className="nav-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#about">Quienes somos</a></li>
            <li><a href="#process">Como trabajamos</a></li>
            <li><a href="#portfolio">Proyectos</a></li>
            <li><a href="#cta">Contacto</a></li>
          </ul>

          <div
            className="menu-toggle"
            onClick={() => setOpen(!open)}
          >
            {open ? < BiSolidCaretUpCircle /> : < BiSolidCaretDownCircle />}
          </div>

        </div>
      </header>

      <div
        ref={menuRef}
        className={`mobile-menu ${open ? "open" : ""} ${hidden ? "hidden" : ""}`}
      >
        <a href="#inicio" onClick={() => setOpen(false)}>Inicio</a>
        <a href="#servicios" onClick={() => setOpen(false)}>Servicios</a>
        <a href="#about" onClick={() => setOpen(false)}>Quienes somos</a>
        <a href="#process" onClick={() => setOpen(false)}>Como trabajamos</a>
        <a href="#portfolio" onClick={() => setOpen(false)}>Proyectos</a>
        <a href="#cta" onClick={() => setOpen(false)}>Contacto</a>
      </div>
    </>
  );

}