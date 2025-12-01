import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import "../styles/home.css";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section id="inicio" className="hero">
        <div className="container hero-grid">

          {/* LEFT */}
          <div className="hero-left">
            <h1 className="hero-title">Desarrollo Web & Productos Digitales</h1>
            <p className="hero-lead">
              Diseño minimalista, código optimizado y productos listos para escalar.
              Construyo experiencias que convierten y duran.
            </p>

            <div className="hero-actions">
              <Link to="/portfolio" className="btn primary">Ver Portfolio</Link>
              <a href="#contacto" className="btn outline">Hablemos</a>
            </div>

            <ul className="hero-stats">
              <li><strong>+50</strong><span>Proyectos</span></li>
              <li><strong>98%</strong><span>Satisfacción</span></li>
              <li><strong>5+</strong><span>Años</span></li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="hero-right">
            <div className="hero-card glass">
              <div className="hero-card-inner">
                <h4>Proyecto destacado</h4>
                <p>Landing + eCommerce — Performance x2, crecimiento en ventas.</p>
                <div className="tagline">React · Next.js · Tailwind · SEO</div>
              </div>
              <div className="card-deco" />
            </div>

            <div className="hero-decor glow-large" aria-hidden="true" />
          </div>

        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="section">
        <div className="container">
          <h2 className="section-title">Servicios</h2>

          <div className="cards-grid">
            <article className="card glass interactive">
              <div className="card-icon" aria-hidden="true"><FaCode /></div>
              <h3>Desarrollo Web</h3>
              <p>Webs rápidas, accesibles y optimizadas para SEO y conversión.</p>
              <span className="card-cta">Ver más →</span>
              <div className="card-glow" />
            </article>

            <article className="card glass interactive">
              <div className="card-icon" aria-hidden="true">🛒</div>
              <h3>Ecommerce</h3>
              <p>Tiendas escalables con métricas reales y funnel optimizado.</p>
              <span className="card-cta">Ver más →</span>
              <div className="card-glow" />
            </article>

            <article className="card glass interactive">
              <div className="card-icon" aria-hidden="true">📱</div>
              <h3>Apps Mobile</h3>
              <p>Apps iOS/Android con React Native — rendimiento y UX nativo.</p>
              <span className="card-cta">Ver más →</span>
              <div className="card-glow" />
            </article>

            <article className="card glass interactive">
              <div className="card-icon" aria-hidden="true">⚙️</div>
              <h3>Soporte</h3>
              <p>Mantenimiento, monitorización y optimizaciones continuas.</p>
              <span className="card-cta">Ver más →</span>
              <div className="card-glow" />
            </article>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="section alt">
        <div className="container">
          <h2 className="section-title">Portfolio</h2>

          <div className="portfolio-grid">
            <div className="portfolio-item glass hover-tilt">
              <div className="pi-media" />
              <div className="pi-body">
                <h4>Landing + E-commerce</h4>
                <p>Optimización de tasa de conversión y performance.</p>
              </div>
              <div className="pi-overlay"><span>Ver caso</span></div>
            </div>

            <div className="portfolio-item glass hover-tilt">
              <div className="pi-media" />
              <div className="pi-body">
                <h4>App Mobile</h4>
                <p>Arquitectura limpia y despliegue CI/CD.</p>
              </div>
              <div className="pi-overlay"><span>Ver caso</span></div>
            </div>

            <div className="portfolio-item glass hover-tilt">
              <div className="pi-media" />
              <div className="pi-body">
                <h4>Branding + Site</h4>
                <p>Identidad visual y web corporativa.</p>
              </div>
              <div className="pi-overlay"><span>Ver caso</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobremi" className="section">
        <div className="container">
          <h2 className="section-title">Sobre Mí</h2>

          <div className="about-grid">
            <div className="about-text">
              <p>
                Soy desarrollador fullstack con foco en producto. Trabajo con equipos y
                emprendedores para lanzar soluciones limpias, medibles y sostenibles.
              </p>
              <ul className="skill-list">
                <li>React / Next.js</li>
                <li>Node.js / APIs</li>
                <li>Performance & SEO técnico</li>
              </ul>
            </div>

            <div className="about-card glass">
              <h4>¿Hablamos de tu proyecto?</h4>
              <p>Si querés, puedo preparar una propuesta técnica y un prototipo rápido.</p>
              <a href="#contacto" className="btn small">Solicitar propuesta</a>
              <div className="card-deco small" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section alt">
        <div className="container">
          <h2 className="section-title">Contacto</h2>

          <form className="contact-form glass" action="#" method="post" noValidate>
            <div className="row">
              <input type="text" name="nombre" placeholder="Nombre" required />
              <input type="email" name="email" placeholder="Email" required />
            </div>

            <textarea name="mensaje" rows="6" placeholder="Contame del proyecto..." required />

            <div className="form-actions">
              <button className="btn primary" type="submit">Enviar mensaje</button>
              <button className="btn outline" type="button">Agendar call</button>
            </div>
          </form>
        </div>
      </section>

    </main>
  );
}
