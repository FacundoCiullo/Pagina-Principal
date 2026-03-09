import "../../styles/process.css";
import { FaSearch, FaDraftingCompass, FaCode, FaRocket } from "react-icons/fa";

export default function Process() {
  return (
    <section className="process-section">

      <div className="process-container">

        <div className="process-header">
          <h2>Cómo trabajamos</h2>
          <p>
            Nuestro proceso está pensado para transformar una idea
            en una experiencia web moderna y funcional.
          </p>
        </div>

        <div className="process-grid">

          <div className="process-card">
            <FaSearch className="process-icon"/>
            <h3>Análisis</h3>
            <p>
              Entendemos tu negocio, tus objetivos y las necesidades
              de tu proyecto.
            </p>
          </div>

          <div className="process-card">
            <FaDraftingCompass className="process-icon"/>
            <h3>Diseño</h3>
            <p>
              Creamos la estructura y el diseño de la web
              priorizando experiencia de usuario.
            </p>
          </div>

          <div className="process-card">
            <FaCode className="process-icon"/>
            <h3>Desarrollo</h3>
            <p>
              Construimos el sitio con tecnologías modernas
              optimizando rendimiento y escalabilidad.
            </p>
          </div>

          <div className="process-card">
            <FaRocket className="process-icon"/>
            <h3>Lanzamiento</h3>
            <p>
              Publicamos el proyecto y ofrecemos soporte
              para su crecimiento y mantenimiento.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}