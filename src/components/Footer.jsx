import "../styles/app.css";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Marca */}
        <div>
          <h3
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              marginBottom: "0.5rem",
            }}
          >
            CiulloDev
          </h3>

          <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>
            Desarrollo Web Profesional
          </p>
        </div>

        {/* Redes */}
        <div className="social-links">
          <a
            href="https://wa.me/5492664223867"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp/>
          </a>

          <a
            href="https://instagram.com/sageedev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram/>
          </a>

          <a
            href="mailto:sageedevelopment@gmail.com"
            aria-label="Email"
          >
            <MdMailOutline/>
          </a>
        </div>

        {/* Derechos */}
        <div>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "0.9rem",
              marginBottom: "0.5rem",
            }}
          >
            © 2022 CiulloDev
          </p>

          <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>
            | Todos los derechos reservados
          </p>
        </div>

      </div>
    </footer>
  );
}
