import { Link } from "react-router-dom";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../styles/header.css";

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <header>
      <div className="navbar-container">
        <div className="logo">TU LOGO</div>

        {/* NAV DESKTOP */}
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/proyectos">Proyectos</Link></li>
          <li><a href="#sobremi">Sobre Mí</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>

        {/* HAMBURGUESA MOBILE */}
        <div className="menu-toggle" onClick={() => setShow(true)}>
          ☰
        </div>

        {/* OFFCANVAS MOBILE */}
        <Offcanvas
          show={show}
          onHide={() => setShow(false)}
          placement="top"
          className="offcanvas-custom"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menú</Offcanvas.Title>
          </Offcanvas.Header>

        <Offcanvas.Body>
            <Link to="/" onClick={() => setShow(false)}>Inicio</Link>
            <Link to="/servicios" onClick={() => setShow(false)}>Servicios</Link>
            <a href="#porfolio" onClick={() => setShow(false)}>Porfolio</a>
            <a href="#sobremi" onClick={() => setShow(false)}>Sobre Mí</a>
            <a href="#contacto" onClick={() => setShow(false)}>Contacto</a>
        </Offcanvas.Body>
      </Offcanvas>
      </div>
    </header>
  );
}