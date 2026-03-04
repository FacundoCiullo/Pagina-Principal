export default function ProjectsSection() {
  const projects = [
    {
      title: "Menú Digital",
      description: "Aplicación web para restaurantes con gestión dinámica.",
    },
    {
      title: "Landing Startup",
      description: "Página moderna para captación de clientes tech.",
    },
    {
      title: "E-commerce Demo",
      description: "Tienda online optimizada para conversión.",
    },
  ];

  return (
    <section className="section alt">
      <div className="container">
        <h2 className="section-title">Proyectos</h2>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="glass project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}