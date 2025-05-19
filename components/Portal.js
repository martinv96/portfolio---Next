import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Portal({ children }) {
  const [portalContainer, setPortalContainer] = useState(null);

  useEffect(() => {
    // Crée un div qui va contenir le portail
    const div = document.createElement("div");
    div.setAttribute("id", "portal-photo");
    div.style.position = "fixed";  // fixe pour que la photo puisse être placée
    div.style.top = "0";
    div.style.left = "0";
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.pointerEvents = "none"; // pour ne pas bloquer la souris
    div.style.zIndex = "20"; // au-dessus du canvas zIndex=10

    document.body.appendChild(div);
    setPortalContainer(div);

    // Nettoyage au démontage
    return () => {
      document.body.removeChild(div);
    };
  }, []);

  if (!portalContainer) return null;

  return createPortal(children, portalContainer);
}
