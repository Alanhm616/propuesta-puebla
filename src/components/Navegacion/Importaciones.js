import React, { useState } from "react";

import ImportacionesModal from "./ImportacionesModal";

import { FaFile } from "react-icons/fa";
import "./CSS/Importaciones.css";

import img1 from "../../assets/import1.jpg";
import img2 from "../../assets/import2.jpg";
import img3 from "../../assets/import3.jpg";

const Importaciones = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cards = [
    {
      title: "Puebla Express",
      subtitle: "ONLINE IMPORTACIONES",
      text: "¿Deseas comprar ONLINE en USA y recibir en TODO México? ¡PUEDES IMPORTAR DESDE UN SOBRE HASTA MUEBLES!",
      button: {
        text: "Ver Instructivo",
        link: "modal",
      },
      image: img1,
    },
    {
      title: "Puebla Express",
      subtitle: "Sucursal Panorama en California",
      text: "SOLO TIENES QUE ENVIAR TU PEDIDO A NUESTRA SUCURSAL PANORAMA EN CALIFORNIA. Documentaremos y emitiremos tu recibo con tu Folio y Número de Rastreo.",
      button: {
        text: "Contáctanos",
        link: "https://m.me/pueblaexpresschatcenter",
      },
      image: img2,
    },
    {
      title: "Puebla Express",
      subtitle: "Servicio Económico y Confiable",
      text: "ENTREGAMOS TUS PRODUCTOS EN LA PUERTA DE TU CASA. Servicio Económico y Confiable.",
      button: {
        text: "Ver Video",
        link: "https://www.facebook.com/watch/?v=388173319377642",
      },
      image: img3,
    },
  ];

  const nextCard = () => setCurrentIndex((prev) => (prev + 1) % cards.length);
  const prevCard = () =>
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);

  const handleButtonClick = (link) => {
    if (link === "modal") {
      setIsModalOpen(true);
    } else {
      window.open(link, "_blank", "noopener noreferrer");
    }
  };

  return (
    <div className="importaciones-container">
      <h1 className="importaciones-title">
        ONLINE <span className="importaciones-highlight">IMPORTACIONES</span>
        <span className="importaciones-subtitle">a TODO México</span>
      </h1>

      <div className="carousel-container">
        <button className="arrow-button arrow-left" onClick={prevCard}>
          ❮
        </button>

        <div className="carousel-wrapper">
          {cards.map((card, index) => {
            let className = "card";
            if (index === currentIndex) className += " card-current";
            else if (index === (currentIndex - 1 + cards.length) % cards.length)
              className += " card-prev";
            else if (index === (currentIndex + 1) % cards.length)
              className += " card-next";
            else className += " card-hidden";

            return (
              <div key={index} className={className}>
                <div className="card-text">
                  <h2>{card.title}</h2>
                  <h3>{card.subtitle}</h3>
                  <p>{card.text}</p>

                  <button
                    className="card-button"
                    onClick={() => handleButtonClick(card.button.link)}
                  >
                    {card.button.text === "Ver Instructivo" ? (
                      <>
                        <FaFile style={{ marginRight: "8px" }} />
                        {card.button.text}
                      </>
                    ) : (
                      card.button.text
                    )}
                  </button>
                </div>
                <img src={card.image} alt={card.title} className="card-image" />
              </div>
            );
          })}
        </div>

        <button className="arrow-button arrow-right" onClick={nextCard}>
          ❯
        </button>
      </div>

      <div className="indicators">
        {cards.map((_, index) => (
          <span
            key={index}
            className={`indicator-dot ${
              index === currentIndex ? "active" : ""
            }`}
          ></span>
        ))}
      </div>

      <ImportacionesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Importaciones;
