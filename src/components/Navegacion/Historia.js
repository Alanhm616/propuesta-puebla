import React from "react";

import "./CSS/Historia.css";

const Historia = () => {
  return (
    <div className="history-page">
      <section className="history-hero">
        <div className="container">
          <h1>NUESTRA HISTORIA</h1>
          <p>
            Desde 2003, conectamos a México y Estados Unidos con soluciones de
            envío rápidas y confiables.
          </p>
        </div>
      </section>

      <section className="history-content">
        <div className="container">
          <div className="history-block">
            <h2>Nacimiento y Visión (2003)</h2>
            <p>
              Nuestra empresa nace en Tulcingo de Valle, Puebla, en el año 2003
              bajo el nombre de **DIAMANTE EXPRESS** importando y exportando
              paquetería al sur de Los Angeles, California.
            </p>
          </div>

          <div className="history-block">
            <h2>Expansión en América del Norte</h2>
            <p>
              En 2005 cambiamos nuestro nombre a **PUEBLA EXPRESS**, aludiendo
              orgullosamente a nuestro lugar de origen.
            </p>
            <p>
              Actualmente contamos en USA con Sucursales y Centros de Envío a lo
              largo del Estado de California, Estado de Washington y en Las
              Vegas Nevada.
            </p>
          </div>

          <div className="history-block">
            <h2>La Promesa de Puebla Express</h2>
            <p>
              Diariamente nos esforzamos en mejorar para brindar a nuestros
              clientes lo mejor de nosotros.
            </p>
            <p>**¡Gracias por ser parte de nuestra historia!**</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Historia;
