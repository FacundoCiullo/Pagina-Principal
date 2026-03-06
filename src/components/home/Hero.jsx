import "../../styles/hero.css";
import heroBg from "../../assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroBg})`
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-shape"></div>

      <div className="hero-container">

        <div className="hero-left">

          <h1>
            Desarrollamos{" "}
            <span className="hero-highlight">
              experiencias
            </span>{" "}
            digitales
          </h1>

          <p>
            Diseño personalizado, código limpio, alto rendimiento y enfoque
            en conversión. Desarrollo soluciones que impulsan tu marca y
            atraen más clientes.
          </p>

          <div className="hero-buttons">
            <a href="#servicios" className="btn-primary">
              Servicios
            </a>

            <a href="#contacto" className="btn-secondary">
              Hablemos
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span>+25</span>
              <p>Proyectos</p>
            </div>

            <div className="stat">
              <span>98%</span>
              <p>Satisfacción</p>
            </div>

            <div className="stat">
              <span>+5</span>
              <p>Experiencia</p>
            </div>
          </div>

        </div>

        <div className="hero-card">
          <h3>Proyecto destacado</h3>

          <p className="hero-card-desc">
            Landing + eCommerce — Performance y crecimiento en ventas.
          </p>

          <div className="hero-tech">
            HTML · CSS · SEO · JavaScript · React
          </div>
        </div>

      </div>
    </section>
  );
}