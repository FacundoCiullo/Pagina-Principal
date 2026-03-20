import useReveal from "../../hooks/useReveal";
import "../../styles/techstack.css";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs , FaFireAlt } from "react-icons/fa";

export default function TechStack() {

  const { ref, visible } = useReveal(0.2);

  return (
    <section
      ref={ref}
      className={`tech-section ${visible ? "visible" : ""}`}
    >

      <div className="tech-container">

        <div className="tech-header reveal-item">
          <h2 className="section-title">
            Tecnologías que utilizamos
          </h2>
          <p>
            Utilizamos herramientas modernas para construir
            sitios rápidos, escalables y preparados para el futuro.
          </p>
        </div>

        <div className="tech-grid">

          <div className="tech-card reveal-item">
            <FaReact className="tech-icon" aria-hidden="true"/>
            <h3>React</h3>
          </div>

          <div className="tech-card reveal-item">
            <FaNodeJs className="tech-icon" aria-hidden="true"/>
            <h3>Node.js</h3>
          </div>

          <div className="tech-card reveal-item">
            <FaJs className="tech-icon" aria-hidden="true"/>
            <h3>JavaScript</h3>
          </div>

          <div className="tech-card reveal-item">
            <FaHtml5 className="tech-icon" aria-hidden="true"/>
            <h3>HTML5</h3>
          </div>

          <div className="tech-card reveal-item">
            <FaCss3Alt className="tech-icon" aria-hidden="true"/>
            <h3>CSS3</h3>
          </div>

          <div className="tech-card reveal-item">
            <FaFireAlt className="tech-icon" aria-hidden="true"/>
            <h3>Firebase</h3>
          </div>
          
        </div>

      </div>
    </section>
  );
}