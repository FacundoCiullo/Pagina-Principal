import { useEffect, useRef, useState } from "react";
import "../../styles/value-proposition.css";
import { FaMobileAlt, FaBolt, FaShoppingCart, FaChartLine } from "react-icons/fa";

export default function ValueProposition() {

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const bgBackRef = useRef(null);
  const bgMidRef = useRef(null);

  /* reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* 🔥 PARALLAX MULTICAPA */
  useEffect(() => {

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const offset = rect.top;

      if (bgBackRef.current) {
        bgBackRef.current.style.transform = `translateY(${offset * 0.15}px)`;
      }

      if (bgMidRef.current) {
        bgMidRef.current.style.transform = `translateY(${offset * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const values = [
    {
      icon: FaMobileAlt,
      title: "Diseño Responsive",
      text: "Sitios web que funcionan perfectamente en celulares, tablets y computadoras."
    },
    {
      icon: FaBolt,
      title: "Velocidad Optimizada",
      text: "Páginas rápidas y optimizadas para mejorar la experiencia del usuario y el posicionamiento en buscadores."
    },
    {
      icon: FaShoppingCart,
      title: "Plataformas de Venta",
      text: "Desarrollo de tiendas online y sistemas para vender productos o servicios en internet."
    },
    {
      icon: FaChartLine,
      title: "Crecimiento Digital",
      text: "Estrategias digitales enfocadas en atraer clientes y mejorar la presencia online de tu negocio."
    }
  ];

  return (
    <section
      ref={sectionRef}
      className={`value-section ${visible ? "visible" : ""}`}
    >

      {/* 🔥 CAPA FONDO (más lenta) */}
      <div className="parallax-bg-back" ref={bgBackRef}></div>

      {/* 🔥 CAPA MEDIA */}
      <div className="parallax-bg-mid" ref={bgMidRef}></div>

      <div className="value-container">

        <div className="value-header reveal-item">
          <h2>¿Qué podemos hacer por tu negocio?</h2>
          <p>
            Creamos soluciones digitales pensadas para mejorar tu presencia online,
            atraer más clientes y hacer crecer tu negocio.
          </p>
        </div>

        <div className="value-row">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="value-card reveal-item" key={index}>
                <Icon className="value-icon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}