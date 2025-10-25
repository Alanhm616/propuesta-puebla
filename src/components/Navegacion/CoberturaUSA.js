import React from "react";
import "./CSS/CoberturaUSA.css";
import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const blockVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const EMBED_URLS = {
  "LOS ANGELES, CA.":
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d826.6029452518239!2d-118.2611409!3d34.0333068!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75abd94985d%3A0x582c573baad9ffed!2sPuebla-Express%20Los%20Angeles%2C%20CA.!5e0!3m2!1ses-419!2smx!4v1761011869878!5m2!1ses-419!2smx",
  "LAS VEGAS, NV.":
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.3811863818455!2d-115.0992067!3d36.18161029999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c5a594b6d8cd%3A0x2d9522af06b69d8!2sPuebla-Express%20Las%20Vegas%2C%20NV.!5e0!3m2!1ses-419!2smx!4v1761011891070!5m2!1ses-419!2smx",
  "PANORAMA CITY, CA.":
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3298.889407992912!2d-118.4510715!3d34.2258421!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c291b0477afd4b%3A0xa6f55cde6e731643!2sPuebla-Express%20Panorama%2C%20Ca.!5e0!3m2!1ses-419!2smx!4v1761011903081!5m2!1ses-419!2smx",
  "SANTA ANA, CA.":
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d829.4863719622415!2d-117.8677381!3d33.7362257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd91a42a8cf15%3A0xcd25f12a1ffef19a!2sPuebla%20Express!5e0!3m2!1ses-419!2smx!4v1761011928082!5m2!1ses-419!2smx",
};

// Función para generar los links de contacto (con mensaje pre-llenado)
const getContactLinks = (phone) => {
  const message = encodeURIComponent(
    "Hola, me gustaría preguntar sobre sus servicios de envío."
  );
  const cleanPhone = phone.replace(/\s/g, "").replace("+", "");

  return {
    telLink: `tel:${cleanPhone.replace(/\s/g, "").replace("+", "")}`,
    whatsappLink: `https://wa.me/${cleanPhone
      .replace(/\s/g, "")
      .replace("+", "")}?text=${message}`,
  };
};

const sucursalesData = {
  detalladas: [
    {
      city: "LOS ANGELES, CA.",
      phone: "+1 213 433 8846",
      address: "1500 S. Los Angeles St. Locales 1 y 2\nLos Angeles, CA 90015",
      horario: [
        "HORARIO DE VERANO:",
        "Miércoles, Jueves, Viernes y Sábados: 9 am a 5 pm",
        "Domingo: 10 am a 4 pm",
        "Lunes y Martes: Cerrado",
      ],
      mapEmbedUrl: EMBED_URLS["LOS ANGELES, CA."],
      multiPhone: false,
    },
    {
      city: "LAS VEGAS, NV.",
      phone: "+1 702 472 1503",
      phone2: "+1 702 410 3996",
      address:
        "TOWNE SQUARE Shopping Mall\n935 North Pecos Road\nLas Vegas, NV 89101",
      horario: [
        "HORARIOS:",
        "Lunes: Cerrado",
        "Martes a Domingos: 10 am a 6 pm",
      ],
      mapEmbedUrl: EMBED_URLS["LAS VEGAS, NV."],
      multiPhone: true,
    },
    {
      city: "PANORAMA CITY, CA.",
      phone: "+1 818 714 3038",
      address:
        "PLAZA DEL VALLE\n14431 Chase St. Unit E\nPanorama City, CA. 91402",
      horario: [
        "HORARIOS:",
        "Lunes y Martes: Cerrado",
        "Miércoles a Domingo: 10 am a 6 pm",
      ],
      mapEmbedUrl: EMBED_URLS["PANORAMA CITY, CA."],
      multiPhone: false,
    },
    {
      city: "SANTA ANA, CA.",
      phone: "+1 949 520 4113",
      phone2: "+1 714 543 4356",
      address: "924 S. Main St.\nSanta Ana, CA. 92701",
      horario: ["HORARIOS:", "Martes a Domingos: 10:30 am a 5:30 pm"],
      mapEmbedUrl: EMBED_URLS["SANTA ANA, CA."],
      multiPhone: true,
    },
  ],

  centros: [
    {
      state: "Estado de CALIFORNIA",
      centers: [
        { city: "CORONA, CA.", phone: "+1 951 254 5339" },
        { city: "ESTE de LOS ANGELES, CA.", phone: "+1 323 839 2415" },
        { city: "OCEANSIDE, CA.", phone: "+1 619 551 3364" },
        { city: "TAFT, CA.", phone: "+1 661 293 3494" },
        { city: "RIVERSIDE, CA.", phone: "+1 714 910 8748" },
        { city: "SANTA PAULA, CA.", phone: "+1 805 794 7390" },
        { city: "OXNARD, CA.", phone: "+1 323 842 1297" },
        { city: "SANTA MARIA, CA", phone: "+1 323 842 1297" },
        { city: "WATSONVILLE, CA", phone: "+1 323 842 1297" },
      ],
    },
    {
      state: "Estado de WASHINGTON",
      centers: [{ city: "OTHELLO, WA.", phone: "+1 509 913 2423" }],
    },
  ],
};

const SucursalDetalle = ({ sucursal }) => {
  const { telLink, whatsappLink } = getContactLinks(sucursal.phone);
  const hasMultiplePhones = sucursal.multiPhone && sucursal.phone2;
  const phone2Links = hasMultiplePhones ? getContactLinks(sucursal.phone2) : {};

  const formatAddress = (address) =>
    address.split("\n").map((line, i) => <p key={i}>{line}</p>);

  return (
    <motion.div
      className="sucursal-grid-wrapper"
      variants={blockVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="sucursal-grid">
        <div className="sucursal-map-column">
          <h2 className="city-name">{sucursal.city}</h2>

          <a href={telLink} className="sucursal-phone">
            Tel. {sucursal.phone}
          </a>
          {hasMultiplePhones && (
            <a href={phone2Links.telLink} className="sucursal-phone extra">
              Tel. {sucursal.phone2}
            </a>
          )}

          <div className="map-container">
            <iframe
              src={sucursal.mapEmbedUrl}
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Ubicación de ${sucursal.city}`}
              className="map-iframe-embed"
            ></iframe>
          </div>
        </div>

        <div className="sucursal-info-column">
          {/* Dirección */}
          <div className="address-block">{formatAddress(sucursal.address)}</div>

          <div className="horario-block">
            {sucursal.horario.map((line, hIndex) => (
              <p
                key={hIndex}
                className={
                  line.includes("Cerrado") || line.includes("HORARIO")
                    ? "day-highlight"
                    : ""
                }
              >
                {line}
              </p>
            ))}
          </div>

          <div className="contact-actions">
            <a href={telLink} className="btn-call">
              <FaPhone /> Llamar
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
            >
              <FaWhatsapp /> Whatsapp
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CentroEnvio = ({ data }) => {
  const { telLink, whatsappLink } = getContactLinks(data.phone);

  return (
    <motion.div
      className="centro-card"
      variants={blockVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <h3 className="centro-city">{data.city}</h3>
      <div className="centro-actions">
        <div className="centro-buttons">
          <a href={telLink} className="btn-centro-call">
            Llamar
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="btn-centro-whatsapp"
          >
            Whatsapp
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const CoberturaUSA = () => {
  return (
    <div className="cobertura-page">
      <section className="cobertura-hero">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8 } }}
          >
            COBERTURA USA
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8, delay: 0.2 } }}
          >
            SUCURSALES Puebla-Express
          </motion.h1>
        </div>
      </section>

      <section className="sucursales-detalladas">
        <div className="container sucursales-list">
          {sucursalesData.detalladas.map((sucursal, index) => (
            <SucursalDetalle key={index} sucursal={sucursal} />
          ))}
        </div>
      </section>

      {sucursalesData.centros.map((estado, index) => (
        <section key={index} className="centros-envio-seccion">
          <div
            className={`centros-envio-header ${
              estado.state.includes("CALIFORNIA")
                ? "bg-california"
                : estado.state.includes("WASHINGTON")
                ? "bg-washington"
                : ""
            }`}
          >
            <div className="container">
              <p>Centros de Envío</p>
              <h2>{estado.state}</h2>
            </div>
          </div>

          <div className="container centros-grid">
            {estado.centers.map((centro, cIndex) => (
              <CentroEnvio key={cIndex} data={centro} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default CoberturaUSA;
