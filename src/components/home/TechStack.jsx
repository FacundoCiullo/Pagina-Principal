import "../../styles/techstack.css";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

export default function TechStack() {
  return (
    <section className="tech-section">

      <div className="tech-container">

        <div className="tech-header">
          <h2>Tecnologías que utilizamos</h2>
          <p>
            Utilizamos herramientas modernas para construir
            sitios rápidos, escalables y preparados para el futuro.
          </p>
        </div>

        <div className="tech-grid">

          <div className="tech-card">
            <FaReact className="tech-icon"/>
            <h3>React</h3>
          </div>

          <div className="tech-card">
            <FaNodeJs className="tech-icon"/>
            <h3>Node.js</h3>
          </div>

          <div className="tech-card">
            <FaJs className="tech-icon"/>
            <h3>JavaScript</h3>
          </div>

          <div className="tech-card">
            <FaHtml5 className="tech-icon"/>
            <h3>HTML5</h3>
          </div>

          <div className="tech-card">
            <FaCss3Alt className="tech-icon"/>
            <h3>CSS3</h3>
          </div>

          <div className="tech-card">
            <FaCss3Alt className="tech-icon"/>
            <h3>CSS3</h3>
          </div>

        </div>

      </div>

    </section>
  );
}