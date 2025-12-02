import "../styles/servicios.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { LuMoveRight } from "react-icons/lu";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaRocket } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaShoppingCart  } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";


export default function Servicios() {
  return (
    <section className="servicios-page fade-in">
      <div className="container">

        <h1 className="servicios-title ">SERVICIOS</h1>
        <h4 className="servicios-sub">
          Soluciones web profesionales adaptadas a tus necesidades
        </h4>

        <div className="servicios-grid">

          {/* ------------------ LANDING PAGE ------------------ */}
          <article className="card glass interactive service-card">
            <i className="cta-card-icon" style={{ fontSize: "2.5rem" }}>
              <FaRocket />
            </i>

            <h3>Landing Page</h3>

            <p className="servicios-sub">
              Página única diseñada para captar clientes. Ideal para cualquier negocio que necesite presencia web rápida y efectiva.
            </p>

            <h5 className="precio-viejo">ARS $180.000</h5>
            <h3 className="precio-nuevo">ARS $130.000</h3>

            {[
              "Diseño 100% personalizado",
              "Para celular, tablet, desktop",
              "Presentación del negocio",
              "Áreas de práctica destacadas",
              "Formulario de contacto",
              "Google Maps + WhatsApp",
              "Hosting + dominio .com por 1 año",
              "Mantenimiento GRATIS por 1 mes",
              "Entrega en 10 días hábiles",
            ].map((item, index) => (
              <p key={index}>
                <LuMoveRight className="icon-chek" /> {item}
              </p>
            ))}
            <Link to="/contacto">
              <Button 
                className="btn-cta-service"
                variant="outline-light" 
                size="lg" >
                  Contratar
              </Button>
            </Link>
          </article>

          {/* ------------------ WEB INSTITUCIONAL ------------------ */}
          <article className="card glass interactive service-card">
            <i className="cta-card-icon" style={{ fontSize: "2.5rem" }}>
              <FaBuilding />
            </i>

            <h3>Web Institucional</h3>

            <span className="servicios-sub">
              Presencia web con múltiples secciones. Perfecta para empresas o negocios que buscan proyectar profesionalismo.
            </span>

            <h5 className="precio-viejo">ARS $280.000</h5>
            <h3 className="precio-nuevo">ARS $190.000</h3>

            {[
              "Hasta 6 páginas completas",
              "Áreas de práctica detalladas",
              "Blog / Publicaciones (opcional)",
              "Valores corporativos",
              "Google Maps + WhatsApp",
              "Hosting + Dominio .com por 1 año",
              "Mantenimiento GRATIS 1 mes",
              "5 Emails corporativos incluidos",
              "Entrega en 10 días hábiles",
            ].map((item, index) => (
              <p key={index}>
                <LuMoveRight className="icon-chek" /> {item}
              </p>
            ))}
            <Link to="/contacto">
              <Button 
                className="btn-cta-service"
                variant="outline-light" 
                size="lg" >
                  Contratar
              </Button>
            </Link>
          </article>

          {/* ------------------ E-COMMERCE ------------------ */}
          <article className="card glass interactive service-card">
            <i className="cta-card-icon" style={{ fontSize: "2.5rem" }}>
              <FaShoppingCart  />
            </i>

            <h3>E-commerce</h3>

            <span className="servicios-sub">
              Presencia web completa con múltiples secciones. Perfecta para cualquier empresa o negocio que busca proyectar seriedad y profesionalismo.
            </span>

            <h3 className="precio-nuevo">ARS $510.000</h3>

            {[
              "Productos ilimitados",
              "Panel de administración",
              "Opción de loguin",
              "Medios de pago integrados",
              "Google Maps + WhatsApp",
              "Carrito de compras",
              "Gestión de stock",
              "Mantenimiento GRATIS 1 mes",
              "Entrega en 14 días hábiles",
            ].map((item, index) => (
              <p key={index}>
                <LuMoveRight className="icon-chek" /> {item}
              </p>
            ))}
            <Link to="/contacto">
              <Button 
                className="btn-cta-service"
                variant="outline-light" 
                size="lg" >
                  Contratar
              </Button>
            </Link>
          </article>

          {/* ------------------ PORTFOLIO PROFESIONAL ------------------ */}
          <article className="card glass interactive service-card">
            <i className="cta-card-icon" style={{ fontSize: "2.5rem" }}>
              <FaBriefcase  />
            </i>

            <h3>Portfolio Profesional</h3>

            <span className="servicios-sub">
              Página única diseñada para captar clientes. Ideal para cualquier negocio que necesite presencia web rápida y efectiva.
            </span>

            <h3 className="precio-nuevo">ARS $180.000</h3>

            {[
              "Hasta 4 páginas completas",
              "Áreas de práctica detalladas",
              "Blog / Publicaciones (opcional)",
              "Valores corporativos",
              "Google Maps + WhatsApp",
              "Hosting + Dominio .com por 1 año",
              "Mantenimiento GRATIS 1 mes",
              "5 Emails corporativos incluidos",
              "Entrega en 10 días hábiles",
            ].map((item, index) => (
              <p key={index}>
                <LuMoveRight className="icon-chek" /> {item}
              </p>
            ))}
            <Link to="/contacto">
              <Button 
                className="btn-cta-service"
                variant="outline-light" 
                size="lg" >
                  Contratar
              </Button>
            </Link>
          </article>


          {/* ------------------ MENÚ DIGITAL ------------------ */}
          <article className="card glass interactive service-card">
            <i className="cta-card-icon" style={{ fontSize: "2.5rem" }}>
              <GiForkKnifeSpoon />
            </i>

            <h3>Menú Digital</h3>

            <span className="servicios-sub">
              Carta digital profesional para restaurantes. Tus clientes pueden ver el menú desde su celular escaneando un código QR.
            </span>

            <h3 className="precio-nuevo">ARS $80.000</h3>

            {[
              "Categorías de platos",
              "Fotos de alta calidad",
              "Precios y descripciones",
              "Código QR incluido",
              "Fácil actualización",      
              "Diseño adaptable (mobile-first)",
              "Panel para editar el menú cuando quieras",
              "Soporte técnico por 30 días",
              "Entrega en 10 días hábiles",
            ].map((item, index) => (
              <p key={index}>
                <LuMoveRight className="icon-chek" /> {item}
              </p>
            ))}
            <Link to="/contacto">
              <Button 
                className="btn-cta-service"
                variant="outline-light" 
                size="lg" >
                  Contratar
              </Button>
            </Link>
          </article>


          {/* ------------------ INVITACIONES DIGITALES ------------------ */}
          <article className="card glass interactive service-card">
            <i className="cta-card-icon" style={{ fontSize: "2.5rem" }}>
              <FaMailBulk />
            </i>

            <h3>Invitaciones Digitales</h3>

            <span className="servicios-sub">
              Página única diseñada para captar clientes. Ideal para cualquier negocio que necesite presencia web rápida y efectiva.
            </span>

            <h3 className="precio-nuevo">ARS $110.000</h3>

            {[
              "Diseño personalizado según el evento",
              "Animaciones suaves y modernas",
              "Fotos y galería opcional",
              "Cuenta regresiva al evento",
              "Mapa interactivo + WhatsApp",
              "Formulario de confirmación (RSVP)",
              "Código QR para compartir fácilmente",
              "Versión para celular, tablet y desktop",
              "Entrega en 10 días hábiles"
            ].map((item, index) => (
              <p key={index}>
                <LuMoveRight className="icon-chek" /> {item}
              </p>
            ))}
            <Link to="/contacto">
              <Button 
                className="btn-cta-service"
                variant="outline-light" 
                size="lg" >
                  Contratar
              </Button>
            </Link>
          </article>

          </div>
      </div>
    </section>
  );
}
