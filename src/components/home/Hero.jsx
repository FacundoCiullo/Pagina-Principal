import useReveal from "../../hooks/useReveal";
import "../../styles/hero.css";

export default function Hero() {

  const { ref, visible } = useReveal(0.1);

  return (
    <section
      ref={ref}
      className={`hero ${visible ? "visible" : ""}`}
      aria-labelledby="hero-title"
      id="inicio"
    >

      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="hero-shape" aria-hidden="true"></div>

      <div className="hero-container">

        <div className="hero-left reveal-item">

          <h1 id="hero-title">
            Desarrollamos{" "}
            <span className="hero-highlight">
              experiencias
            </span>{" "}
            digitales rápidas, modernas y pensadas para tu negocio
          </h1>

          <p>
            Diseño profesional, optimización para celulares
            y velocidad pensada para convertir visitas en ventas.
            Desarrollo soluciones que impulsan tu marca y
            atraen más clientes.
            Ideal para negocios, emprendedores y startups.
          </p>

          <div className="hero-buttons">
            <a 
              href="#servicios" 
              className="btn-primary"
              aria-label="Ver servicios disponibles"
            >
              Servicios
            </a>

            <a 
              href="#contacto" 
              className="btn-secondary"
              aria-label="Solicitar presupuesto"
            >
              Solicitar presupuesto
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span aria-hidden="true">+20</span>
              <p>Proyectos realizados</p>
            </div>

            <div className="stat">
              <span aria-hidden="true">100%</span>
              <p>Diseño responsive</p>
            </div>

            <div className="stat">
              <span aria-hidden="true">+3</span>
              <p>Años de experiencia</p>
            </div>
          </div>

        </div>

        <div className="hero-card reveal-item" aria-labelledby="proyecto-destacado">

          <h2 id="proyecto-destacado">Proyecto destacado</h2>

          <p className="hero-card-desc">
            Landing + eCommerce — Performance + Crecimiento en ventas.
          </p>

          <div className="tech-stack" aria-label="Tecnologías utilizadas">
            <span>React</span>
            <span>CSS</span>
            <span>Firebase</span>
            <span>Node.js</span>
          </div>

        </div>

      </div>
    </section>
  );
}