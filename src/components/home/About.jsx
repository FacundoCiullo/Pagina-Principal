import "../../styles/about.css";

export default function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-bar">

        <div className="about-intro">
          <h3>En CodeFox Lab enfocamos en el</h3>
          <p>Desarrollo moderno, rápido y escalable para tu negocio.</p>
        </div>

        <div className="about-cards">

          <div className="about-card">
            <h4>Performance</h4>
            <p>Webs optimizadas para velocidad y SEO.</p>
          </div>

          <div className="about-card">
            <h4>Diseño</h4>
            <p>Interfaces modernas enfocadas en UX.</p>
          </div>

          <div className="about-card">
            <h4>Soporte</h4>
            <p>Mantenimiento y mejoras continuas.</p>
          </div>

        </div>

      </div>

    </section>
  );
}