export default function CTASection() {
  return (
    <section className="section">
      <div className="container glass" style={{ padding: "4rem", textAlign: "center" }}>
        <h2 style={{ marginBottom: "1rem" }}>
          ¿Listo para llevar tu proyecto al siguiente nivel?
        </h2>
        <p style={{ marginBottom: "2rem", color: "rgba(255,255,255,0.7)" }}>
          Construyamos algo que destaque.
        </p>
        <a href="#contacto" className="btn primary">
          Contactar ahora
        </a>
      </div>
    </section>
  );
}