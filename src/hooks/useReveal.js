import { useEffect, useRef, useState } from "react";

export default function useReveal(threshold = 0.2) {

  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true); // 👈 solo activa, nunca desactiva
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();

  }, [threshold]);

  return { ref, visible };

}