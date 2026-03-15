import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./styles/widgets.css";

export default function ScrollTopWidget() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const toggleVisible = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);

    return () => window.removeEventListener("scroll", toggleVisible);

  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      className={`scrolltop-widget ${visible ? "show" : ""}`}
      onClick={scrollTop}
    >
      <FaArrowUp />
    </button>
  );
}