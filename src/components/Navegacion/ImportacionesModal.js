import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import "./CSS/ImportacionesModal.css";

const modalVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const ImportacionesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-button" onClick={onClose}>
              <FaTimes />
            </button>

            <h2 className="modal-title">Instrucciones de Importación Online</h2>

            <div className="modal-body">
              <div className="modal-hero-text">
                <h3 className="hero-section-title">COMPRAS ONLINE</h3>
                <p className="hero-section-subtitle">
                  ¿Deseas comprar ONLINE en USA y... recibir en TODO México?
                </p>
                <p>
                  A continuación, se detalla el proceso de 8 pasos para recibir
                  tu mercancía:
                </p>
              </div>

              <h4 className="step-phase-title">INSTRUCCIONES:</h4>

              {/* PASO 1: Realiza tu pedido */}
              <div className="step-block">
                <span className="step-number">1</span>
                <p>
                  <strong>Realiza tu pedido en la tienda Online de USA.</strong>
                </p>
              </div>

              {/* PASO 2: Dirección de Envío */}
              <div className="step-block">
                <span className="step-number">2</span>
                <p>
                  <strong>Incluye la siguiente Dirección de Envío:</strong>
                  <br />
                  PLAZA DEL VALLE
                  <br />
                  14431 Chase St. UNIT E
                  <br />
                  Panorama City, CA. 91402
                  <br />
                  Tel.+1 818 714 3038
                </p>
              </div>

              {/* PASO 3: Recepción y Notificación */}
              <div className="step-block">
                <span className="step-number">3</span>
                <p>
                  <strong>
                    Recibiremos todos tus pedidos en nuestra Sucursal PANORAMA
                  </strong>{" "}
                  y te notificaremos con fotos y videos.
                </p>
              </div>

              <h4 className="step-phase-title received-title">
                UNA VEZ RECIBIDO TU PEDIDO COMPLETO:
              </h4>

              {/* PASO 4: Empacado */}
              <div className="step-block">
                <span className="step-number">4</span>
                <p>
                  <strong>Empacaremos TUS CAJAS recibidas</strong>, procurando
                  queden todas juntas.
                </p>
              </div>

              {/* PASO 5: Pesaje y Recibo */}
              <div className="step-block">
                <span className="step-number">5</span>
                <p>
                  <strong>PESAREMOS Y EMITIREMOS RECIBO</strong> con número de
                  RASTREO.
                </p>
              </div>

              {/* PASO 6: Envío a México */}
              <div className="step-block">
                <span className="step-number">6</span>
                <p>
                  <strong>TU PEDIDO ESTÁ LISTO Y SERÁ ENVIADO A MÉXICO.</strong>
                </p>
              </div>

              {/* PASO 7: Depósito Bancario */}
              <div className="step-block">
                <span className="step-number">7</span>
                <p>
                  <strong>
                    DEPOSITA EL IMPORTE DE TU RECIBO A UNA CUENTA BANCARIA.
                  </strong>
                </p>
              </div>

              {/* PASO 8: Recepción en Casa */}
              <div className="step-block">
                <span className="step-number">8</span>
                <p>
                  <strong>¡RECIBE EN LA PUERTA DE TU CASA!</strong>
                </p>
              </div>

              <p className="final-note">
                ¡Gracias por confiar en Puebla Express para tus importaciones!
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImportacionesModal;
