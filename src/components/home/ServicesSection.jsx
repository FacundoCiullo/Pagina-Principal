import { useState,useEffect } from "react";
import services from "../../data/services.json";
import "../../styles/ServicesSection.css";
import { FaRocket,FaShoppingCart,FaServer,FaTools,FaTachometerAlt,FaPaintBrush,FaUtensils,FaBuilding,FaPalette } from "react-icons/fa";

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
};

export default function ServicesSection(){

  const [selectedService,setSelectedService]=useState(null);

  const closeModal=()=>{
    setSelectedService(null);
  };

  useEffect(()=>{
    const handleKey=(e)=>{
      if(e.key==="Escape")closeModal();
    };
    window.addEventListener("keydown",handleKey);
    return()=>window.removeEventListener("keydown",handleKey);
  },[]);

  useEffect(()=>{
    if(selectedService){
      window.history.pushState({modal:true},"");
    }
    const handlePopState=()=>{
      closeModal();
    };
    window.addEventListener("popstate",handlePopState);
    return()=>window.removeEventListener("popstate",handlePopState);
  },[selectedService]);

  const ModalIcon=selectedService?iconMap[selectedService.icon]:null;

  return(
    <section className="services-section" id="servicios">

      <div className="container">

        <h2 className="section-title">Servicios</h2>

        <div className="services-grid">
          {services.map((service)=>{
            const Icon=iconMap[service.icon];
            return(
            <div key={service.id} className="service-card">

              {Icon && <Icon className="service-icon" />}

              <h3>{service.title}</h3>



              <p className="price">{service.price}</p>

              <p className="service-description">
                {service.description}
              </p>


              <button
                className="service-btn"
                onClick={()=>setSelectedService(service)}
              >
                Consultar
              </button>

            </div>
            );
          })}
        </div>

      </div>

      {selectedService&&(
        <div
          className="service-modal-overlay"
          onClick={closeModal}
        >

          <div
            className="service-modal"
            onClick={(e)=>e.stopPropagation()}
          >

            <button
              type="button"
              className="modal-close"
              onClick={closeModal}
            >
              ✕
            </button>

            <div className="modal-content">

              {ModalIcon&&<ModalIcon className="service-icon"/>}

              <h3>{selectedService.title}</h3>

              <p className="modal-price">
                {selectedService.price}
              </p>

              <p className="modal-description">
                {selectedService.description}
              </p>

              <ul className="modal-features">
                {selectedService.features.map((feature,index)=>(
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <div className="modal-actions">

                <a
                  href="#contacto"
                  className="btn-budget"
                  onClick={closeModal}
                >
                  Solicitar presupuesto
                </a>

              </div>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}