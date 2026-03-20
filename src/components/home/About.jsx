import useReveal from "../../hooks/useReveal";
import "../../styles/about.css";

export default function About() {

  const { ref, visible } = useReveal(0.2);

  return (
    <section
      ref={ref}
      className={`about-section ${visible ? "visible" : ""}`}
      id="about"
      aria-labelledby="about-title"
    >

      <div className="about-bar">

        <div className="about-intro reveal-item">
          <h2 id="about-title">En CodeFox Lab nos enfocamos en</h2>
          <p>Desarrollo moderno, rápido y escalable para tu negocio.</p>
        </div>

        <div className="about-cards">

          <div className="about-card reveal-item">
            <h3>Performance</h3>
            <p>Webs optimizadas para velocidad y SEO.</p>
          </div>

          <div className="about-card reveal-item">
            <h3>Diseño</h3>
            <p>Interfaces modernas enfocadas en UX.</p>
          </div>

          <div className="about-card reveal-item">
            <h3>Soporte</h3>
            <p>Mantenimiento y mejoras continuas.</p>
          </div>

        </div>

      </div>

    </section>
  );
}