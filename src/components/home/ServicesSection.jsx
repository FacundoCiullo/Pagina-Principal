import services from "../../data/services.json";
import "../../styles/ServicesSection.css";

export default function ServicesSection() {
  return (
    <section className="services-section" id="servicios">
      <div className="container">
        <h2 className="section-title">Servicios</h2>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <h3>{service.title}</h3>
              <p className="price">{service.price}</p>

              <ul>
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <button className="service-btn">Consultar</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}