import services from "../../data/services.json"
import "../../styles/ServicesSection.css"

import {FaRocket,FaShoppingCart,FaServer,FaTools,FaTachometerAlt,FaPaintBrush,FaUtensils,FaBuilding,FaPalette} from "react-icons/fa"

const iconMap={
rocket:FaRocket,
cart:FaShoppingCart,
system:FaServer,
maintenance:FaTools,
speed:FaTachometerAlt,
design:FaPaintBrush,
restaurant:FaUtensils,
building:FaBuilding,
branding:FaPalette
}

export default function ServicesSection(){
return(
<section className="services-section" id="servicios">
<div className="container">
<h2 className="section-title">Servicios</h2>

<div className="services-grid">
{services.map(service=>{
const Icon=iconMap[service.icon]

return(
<div key={service.id} className="service-card">

{Icon && <Icon className="service-icon"/>}

<h3>{service.title}</h3>
<p className="price">{service.price}</p>

<ul>
{service.features.map((feature,index)=>(
<li key={index}>{feature}</li>
))}
</ul>

<button className="service-btn">Consultar</button>

</div>
)
})}
</div>

</div>
</section>
)
}