import "../../styles/whyus.css";
import { FaBolt, FaPalette, FaTools, FaChartLine } from "react-icons/fa";

export default function WhyUs() {
  return (
    <section className="why-section">

      <div className="why-container">

        <div className="why-header">
          <h2 className="section-title">
            Por qué elegir CodeFoxLab
          </h2>
          <p>
            Nuestro objetivo es crear soluciones digitales que
            realmente aporten valor a tu negocio.
          </p>
        </div>

        <div className="why-grid">

          <div className="why-card">
            <FaBolt className="why-icon" aria-hidden="true" />
            <h3>Alto rendimiento</h3>
            <p>Sitios optimizados para velocidad y experiencia de usuario.</p>
          </div>

          <div className="why-card">
            <FaPalette className="why-icon" aria-hidden="true" />
            <h3>Diseño moderno</h3>
            <p>Interfaces limpias, profesionales y pensadas para convertir.</p>
          </div>

          <div className="why-card">
            <FaTools className="why-icon" aria-hidden="true" />
            <h3>Soporte continuo</h3>
            <p>Mantenimiento y mejoras para que tu web siga creciendo.</p>
          </div>

          <div className="why-card">
            <FaChartLine className="why-icon" aria-hidden="true" />
            <h3>Escalabilidad</h3>
            <p>Desarrollos preparados para crecer junto con tu negocio.</p>
          </div>

        </div>

      </div>

    </section>
  );
}