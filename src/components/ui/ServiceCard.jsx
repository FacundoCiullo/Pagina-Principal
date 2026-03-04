import { LuMoveRight } from "react-icons/lu";
import { FaRocket, FaBuilding, FaShoppingCart, FaBriefcase, FaMailBulk } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const iconMap = {
  rocket: <FaRocket />,
  building: <FaBuilding />,
  cart: <FaShoppingCart />,
  briefcase: <FaBriefcase />,
  menu: <GiForkKnifeSpoon />,
  mail: <FaMailBulk />
};

export default function ServiceCard({ service }) {
  return (
    <article className="card glass interactive service-card">
      <i className="cta-card-icon">{iconMap[service.icon]}</i>

      <h3>{service.title}</h3>

      <p className="servicios-sub">{service.description}</p>

      {service.oldPrice && (
        <h5 className="precio-viejo">{service.oldPrice}</h5>
      )}

      <h3 className="precio-nuevo">{service.price}</h3>

      {service.features.map((item, index) => (
        <p key={index}>
          <LuMoveRight className="icon-chek" /> {item}
        </p>
      ))}

      <Link to="/contacto">
        <Button className="btn-cta-service" variant="outline-light" size="lg">
          Contratar
        </Button>
      </Link>
    </article>
  );
}