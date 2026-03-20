import { BiSolidXCircle , BiSolidCaretDownCircle } from "react-icons/bi";
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

      if (!open) {
        if (currentScroll > lastScroll.current && currentScroll > 80) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      } else {
        setHidden(false);
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, [open]); // 👈 FIX

  /* CLICK FUERA */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* BACK BUTTON */
  useEffect(() => {
    if (open) {
      window.history.pushState({ menu: true }, "");
    }

    const handlePopState = () => setOpen(false);

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [open]);

  return (
    <>
      <header
        className={`navbar ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}
        role="navigation"
        aria-label="Menú principal"
      >
        <div className="navbar-container">

          <a href="/" className="logo" aria-label="Ir al inicio">
            <img src={logo} alt="Logo CodeFoxLab" />
            <span className="logo-code">Code</span>
            <span className="logo-fox">Fox</span>
            <span className="logo-code">Lab</span>
          </a>

          <ul className="nav-links">
            <li><a href="inicio">Inicio</a></li>
            <li><a href="#propuesta">Propuesta</a></li>
            <li><a href="#servicios">Servicios Lab</a></li>
            <li><a href="#about">Quiénes somos</a></li>
            <li><a href="#process">Cómo trabajamos</a></li>
            <li><a href="#cta" className="bt-cta">Contacto</a></li>
          </ul>

          <button
            className="menu-toggle"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <BiSolidXCircle  /> : <BiSolidCaretDownCircle />}
          </button>

        </div>
      </header>

      <div
        className={`menu-overlay ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      />

      <div
        ref={menuRef}
        className={`mobile-menu ${open ? "open" : ""}`}
      >
        <a href="#inicio" onClick={() => setOpen(false)}>Inicio</a>
        <a href="#propuesta" onClick={() => setOpen(false)}>Propuesta</a>
        <a href="#servicios" onClick={() => setOpen(false)}>Servicios Lab</a>
        <a href="#about" onClick={() => setOpen(false)}>Quiénes somos</a>
        <a href="#process" onClick={() => setOpen(false)}>Cómo trabajamos</a>
        <a href="#cta" className="bt-cta" onClick={() => setOpen(false)}>Contacto</a>
      </div>
    </>
  );
}