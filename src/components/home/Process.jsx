import useReveal from "../../hooks/useReveal";
import "../../styles/process.css";
import { FaSearch, FaDraftingCompass, FaCode, FaRocket } from "react-icons/fa";

export default function Process() {

  const { ref, visible } = useReveal(0.2);

  return (
    <section
      ref={ref}
      className={`process-section ${visible ? "visible" : ""}`}
      id="process"
      aria-labelledby="process-title"
    >

      <div className="process-container">

        <div className="process-header reveal-item">
          <h2 id="process-title" className="section-title">Cómo trabajamos</h2>
          <p>
            Nuestro proceso está pensado para transformar una idea
            en una experiencia web moderna y funcional.
          </p>
        </div>

        <div className="process-grid">

          <div className="process-card reveal-item" role="article">
            <FaSearch className="process-icon" aria-hidden="true"/>
            <h3>Análisis</h3>
            <p>Entendemos tu negocio, objetivos y necesidades.</p>
          </div>

          <div className="process-card reveal-item" role="article">
            <FaDraftingCompass className="process-icon" aria-hidden="true"/>
            <h3>Diseño</h3>
            <p>Creamos estructura y experiencia de usuario.</p>
          </div>

          <div className="process-card reveal-item" role="article">
            <FaCode className="process-icon" aria-hidden="true"/>
            <h3>Desarrollo</h3>
            <p>Construimos con tecnologías modernas y optimizadas.</p>
          </div>

          <div className="process-card reveal-item" role="article">
            <FaRocket className="process-icon" aria-hidden="true"/>
            <h3>Lanzamiento</h3>
            <p>Publicamos y acompañamos el crecimiento.</p>
          </div>

        </div>

      </div>

    </section>
  );
}