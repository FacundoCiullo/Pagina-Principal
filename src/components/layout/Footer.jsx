import "./styles/footer.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">

        <div className="footer-brand">
          <h3 className="footer-logo">
            <span className="logo-code">Code</span>
            <span className="logo-fox">Fox </span>
            <span className="logo-code">Lab</span>
          </h3>
          <p className="footer-tagline">
            Soluciones digitales modernas y escalables.
          </p>
        </div>

        <div className="social-links">

          <a
            href="https://wa.me/5491136968683"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
          >
            <FaWhatsapp aria-hidden="true"/>
          </a>

          <a
            href="https://instagram.com/coderfoxlab"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver Instagram"
          >
            <FaInstagram aria-hidden="true"/>
          </a>

          <a
            href="mailto:codefoxsolutions@gmail.com"
            aria-label="Enviar correo electrónico"
          >
            <MdMailOutline aria-hidden="true"/>
          </a>

        </div>

        <div className="footer-copy">
          <p>© {year} CodeFox Lab</p>
          <p>Todos los derechos reservados</p>
        </div>

      </div>
    </footer>
  );
}