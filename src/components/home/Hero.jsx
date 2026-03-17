import { useEffect, useRef, useState } from "react";
import "../../styles/hero.css";

export default function Hero() {

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        // 🔥 ahora entra Y sale
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();

  }, []);

  return (
    <section
      ref={sectionRef}
      className={`hero ${visible ? "visible" : ""}`}
    >

      <div className="hero-overlay"></div>
      <div className="hero-shape"></div>

      <div className="hero-container">

        <div className="hero-left reveal-item">

          <h1>
            Desarrollamos{" "}
            <span className="hero-highlight">
              experiencias
            </span>{" "}
            digitales
            rápidas, modernas y pensadas para tu negocio
          </h1>

          <p>
            Diseño profesional, optimización para celulares
            y velocidad pensada para convertir visitas en ventas.
            Desarrollo soluciones que impulsan tu marca y
            atraen más clientes.
            Ideal para negocios, emprendedores y startups.
          </p>

          <div className="hero-buttons">
            <a href="#servicios" className="btn-primary">
              Servicios
            </a>

            <a href="#contacto" className="btn-secondary">
              Solicitar presupuesto
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span>+20</span>
              <p>Proyectos</p>
            </div>

            <div className="stat">
              <span>100%</span>
              <p>responsive</p>
            </div>

            <div className="stat">
              <span>+3</span>
              <p>Años de Experiencia</p>
            </div>
          </div>

        </div>

        <div className="hero-card reveal-item">

          <h3>Proyecto destacado</h3>

          <p className="hero-card-desc">
            Landing + eCommerce — Performance + Crecimiento en ventas.
          </p>

          <div className="tech-stack">
            <span>React -</span>
            <span> Vite -</span>
            <span> Node -</span>
            <span> Netlify -</span>
            <span> Vercel</span>
          </div>

        </div>

      </div>
    </section>
  );
}