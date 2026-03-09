import "../../styles/value-proposition.css";
import { FaMobileAlt, FaBolt, FaShoppingCart, FaChartLine } from "react-icons/fa";

export default function ValueProposition() {
  return (
    <section className="value-section">

      <div className="value-container">

        <div className="value-header">
          <h2>¿Qué podemos hacer por tu negocio?</h2>
          <p>
            Creamos soluciones digitales pensadas para mejorar tu presencia online,
            atraer más clientes y hacer crecer tu negocio.
          </p>
        </div>

        <div className="value-grid">

          <div className="value-box box-wide">
            <FaMobileAlt className="value-icon"/>
            <h3>Diseño Responsive</h3>
            <p>
              Sitios web que funcionan perfectamente en celulares,
              tablets y computadoras.
            </p>
          </div>

          <div className="value-box">
            <FaBolt className="value-icon"/>
            <h3>Velocidad Optimizada</h3>
            <p>
              Páginas rápidas y optimizadas para mejorar la experiencia
              del usuario y el posicionamiento en buscadores.
            </p>
          </div>

          <div className="value-box">
            <FaShoppingCart className="value-icon"/>
            <h3>Ventas Online</h3>
            <p>
              Desarrollo de tiendas online y sistemas para vender
              productos o servicios en internet.
            </p>
          </div>

          <div className="value-box box-large">
            <FaChartLine className="value-icon"/>
            <h3>Crecimiento Digital</h3>
            <p>
              Estrategias digitales enfocadas en atraer clientes
              y mejorar la presencia online de tu negocio.
            </p>
          </div>

          <div className="value-box">
            <FaChartLine className="value-icon"/>
            <h3>Escalabilidad</h3>
            <p>
              Sistemas preparados para crecer junto con tu negocio
              y soportar mayor tráfico y usuarios.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}