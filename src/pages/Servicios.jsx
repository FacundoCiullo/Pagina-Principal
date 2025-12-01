import "../styles/servicios.css";
import { FaCode } from "react-icons/fa";

export default function Servicios() {
  return (
    <section className="servicios-page fade-in">
      <div className="container">

        <h1 className="servicios-title">Servicios Profesionales</h1>
        <p className="servicios-sub">
          Soluciones diseñadas para potenciar tu presencia digital.
        </p>

        <div className="servicios-grid ">

            <article className="card glass interactive service-card">
              <div className="card-icon" aria-hidden="true"><FaCode /></div>
              <h3>Landing Page</h3>
              <p>Página diseñada para convertir visitantes en clientes. Perfecta para captar leads y promociones.</p>
              <h6>ARS $170.000</h6>
              <h5>ARS $110.000</h5>
              <p>Diseño responsive</p>
              <p>WhatsApp integrado</p>
              <p>Google Maps</p>
              <p>Entrega en 7 días</p>
              <span className="card-cta">Ver más →</span>
              <div className="card-glow" />
            </article>

            <article className="card glass interactive">
              <div className="card-icon" aria-hidden="true">⚙️</div>
              <h3>Soporte & Escalado</h3>
              <p>Mantenimiento, monitorización y optimizaciones continuas.</p>
              <span className="card-cta">Ver más →</span>
              <div className="card-glow" />
            </article>

            <article className="card glass interactive">
              <div className="card-icon" aria-hidden="true">⚙️</div>
              <h3>Soporte & Escalado</h3>
              <p>Mantenimiento, monitorización y optimizaciones continuas.</p>
              <span className="card-cta">Ver más →</span>
              <div className="card-glow" />
            </article>

            <article className="card glass interactive">
              <div className="card-icon" aria-hidden="true">⚙️</div>
              <h3>Soporte & Escalado</h3>
              <p>Mantenimiento, monitorización y optimizaciones continuas.</p>
              <span className="card-cta">Ver más →</span>
              <div className="card-glow" />
            </article>

            <article className="card glass interactive">
              <div className="card-icon" aria-hidden="true">⚙️</div>
              <h3>Soporte & Escalado</h3>
              <p>Mantenimiento, monitorización y optimizaciones continuas.</p>
              <span className="card-cta">Ver más →</span>
              <div className="card-glow" />
            </article>

            <article className="card glass interactive">
              <div className="card-icon" aria-hidden="true">⚙️</div>
              <h3>Soporte & Escalado</h3>
              <p>Mantenimiento, monitorización y optimizaciones continuas.</p>
              <span className="card-cta">Ver más →</span>
              <div className="card-glow" />
            </article>

        </div>
      </div>
    </section>
  );
}
