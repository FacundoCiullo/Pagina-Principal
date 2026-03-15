import { useEffect, useRef } from "react";
import "../../styles/hero.css";

export default function Hero() {

  const videoRef = useRef(null);

useEffect(() => {

  const handleScroll = () => {

    const video = videoRef.current;
    if (!video || !video.duration) return;

    const rect = video.parentElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const progress = Math.min(
      Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
      1
    );

    video.currentTime = video.duration * progress;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => window.removeEventListener("scroll", handleScroll);

}, []);

  return (
    <section className="hero">

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
                  {/* VIDEO */}


        <div className="hero-card">

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