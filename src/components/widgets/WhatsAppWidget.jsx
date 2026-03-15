import { FaWhatsapp } from "react-icons/fa";
import "./styles/widgets.css";

export default function WhatsAppWidget() {

  const phone = "5491123456789"; // tu numero

  return (
    <a
      href={`https://wa.me/${phone}`}
      className="whatsapp-widget"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
}