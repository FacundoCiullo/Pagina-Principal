import "../../styles/hero.css";
import HeroImage from "../../assets/iconfox.png"; // cambia por tu imagen

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <h1>
          Creamos <span>experiencias digitales</span> que convierten.
        </h1>

        <p>
          Desarrollo web moderno, diseño estratégico y soluciones
          personalizadas para marcas que quieren destacar.
        </p>

        <div className="hero-buttons">
          <a href="#servicios" className="btn-primary">
            Ver servicios
          </a>

          <a href="#portfolio" className="btn-secondary">
            Ver proyectos
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={HeroImage} alt="Hero visual" />
      </div>
    </section>
  );
}