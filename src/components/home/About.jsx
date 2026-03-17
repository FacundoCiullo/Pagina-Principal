import { useEffect, useRef, useState } from "react";
import "../../styles/about.css";

export default function About() {

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        // 🔥 cambio clave: ahora entra Y sale
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
      className={`about-section ${visible ? "visible" : ""}`}
      id="about"
    >

      <div className="about-bar">

        <div className="about-intro reveal-item">
          <h3>En CodeFox Lab enfocamos en el</h3>
          <p>Desarrollo moderno, rápido y escalable para tu negocio.</p>
        </div>

        <div className="about-cards">

          <div className="about-card reveal-item">
            <h4>Performance</h4>
            <p>Webs optimizadas para velocidad y SEO.</p>
          </div>

          <div className="about-card reveal-item">
            <h4>Diseño</h4>
            <p>Interfaces modernas enfocadas en UX.</p>
          </div>

          <div className="about-card reveal-item">
            <h4>Soporte</h4>
            <p>Mantenimiento y mejoras continuas.</p>
          </div>

        </div>

      </div>

    </section>
  );
}