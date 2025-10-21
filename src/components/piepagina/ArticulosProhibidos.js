import React from "react";
import "./ArticulosProhibidos.css";

const ArticulosProhibidos = () => {
  const articulos = [
    "Comestibles perecederos y alimentos y bebidas que requieran refrigeración u otro tipo de control ambiental: APLICA PARA ENVÍOS USA A MÉXICO únicamente.",
    "Cadáveres humanos, órganos o partes del cuerpo, restos humanos cremados o exhumados.",
    "Animales vivos de cualquier tipo.",
    "Cadáveres de animales, insectos y mascotas, esto incluye sus pieles.",
    "Armas de fuego, explosivos, armamento y sus partes.",
    "Los artículos que se asemejen a una bomba, granada de mano u otro dispositivo, no importando sean imitaciones tipo juguetes.",
    "Cualquier arma de fuego o de otro tipo fabricada con una máquina de impresión tridimensional.",
    "Máquinas de impresión tridimensional que funcionan para fabricar armas de fuego.",
    "Obras de arte.",
    "Plantas y material vegetal, lo que incluye flores cortadas.",
    "Dinero (monedas, efectivo, papel moneda e instrumentos negociables equivalentes a efectivo).",
    "Material pornográfico y/u obsceno.",
    "Desechos peligrosos y desechos médicos.",
    "Envíos que puedan provocar daños o retrasos en equipos, al personal y al resto de la carga.",
    "Envíos que requieran que Puebla-Express obtenga alguna licencia o permiso especial para el transporte, la importación o la exportación.",
    "Bienes falsificados o imitaciones que no cuenten con la aprobación del propietario de la marca registrada.",
    "Marihuana: incluye la marihuana destinada a uso recreativo o medicinal y el cannabidiol derivado de la marihuana (\"CBD\"); cualquier producto conteniendo tetrahidrocannabinol (\"THC\") y los cannabinoides sintéticos.",
    "Materiales químicamente inestables, empaques que estén mojados, que goteen o despidan cualquier tipo de olor.",
    "Productos de la fauna y la flora silvestres que requieren autorización de exportación.",
    "Envíos a direcciones Postales."
  ];

  return (
    <div className="articulos-container">
      <div className="articulos-content">
        <h1>Artículos prohibidos para envío</h1>
        <ol>
          {articulos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>

        <p className="articulos-aviso">
          Cabe mencionar que <strong>Puebla Express</strong> no es responsable de la demora, la pérdida o el daño de un envío de cualquier artículo prohibido.
          El remitente acuerda indemnizar a <strong>Puebla Express</strong> por todos los costos, honorarios y gastos en los que ésta incurra como resultado de la
          violación por parte del remitente de cualquier ley o reglamento local, estatal o federal, o de la entrega de cualquier artículo cuyo envío esté prohibido.
        </p>
      </div>
    </div>
  );
};

export default ArticulosProhibidos;
