import React from "react";
import "./ModalRastreo.css";

const ModalRastreo = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <iframe
          src="/rastreador_cliente-gh-pages/index.html"
          title="Rastreo de Paquetes"
          frameBorder="0"
          className="modal-iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default ModalRastreo;
