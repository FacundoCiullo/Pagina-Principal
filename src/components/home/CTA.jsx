import "../../styles/cta.css";

export default function CTA() {
  return (
    <section className="cta-section" id="cta">

      <div className="cta-container">

        <h2 className="section-title">
          ¿Tenés un proyecto en mente?
        </h2>

        <p>
          En CodeFoxLab creamos soluciones web modernas para
          negocios que quieren crecer en internet.
        </p>

        <button
          type="button"
          className="cta-button"
          aria-label="Solicitar presupuesto para un proyecto web"
        >
          Solicitar presupuesto
        </button>

      </div>

    </section>
  );
}