import React from "react";
import "./CSS/TerminosEnvio.css";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

const blockVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const TerminosEnvio = () => {
  return (
    <div className="terminos-page">
      <section className="terminos-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Términos y Condiciones de Envío
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.p>
        </div>
      </section>

      <section className="terminos-content">
        <div className="container">
          <motion.div
            className="terminos-block"
            variants={blockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2>Definiciones</h2>
            <p>
              En esta Guía (Folio), "nosotros", "nuestro" y "Puebla Express" se
              refieren a Puexpress Inc., sus sucursales y sus respectivos
              empleados. "Usted", "su" y "suyo" se refieren al remitente, sus
              empleados, mandantes y agentes.
            </p>
            <p>
              "Paquete" significa cualquier recipiente o sobre que nosotros
              aceptemos para ser entregado, incluyendo cualquier artículo de
              este tipo ofrecido por usted al utilizar nuestros sistemas
              automatizados o Guías. "Embarque" significa todos los paquetes
              presentados a nosotros y aceptados por nosotros bajo una Guía o
              Folio. Aceptación de Los Términos al entregarnos su embarque usted
              acepta, independientemente de si firma o no en el anverso de esta
              Guía o Folio, para usted y como agente para y en nombre de
              cualquier otra persona que tenga un interés en este embarque,
              todos los términos de esta Guía NO NEGOCIABLE, y como sea
              pertinente, los términos de cualquier acuerdo de servicios de
              transporte celebrado entre Puebla Express y usted que rige este
              embarque, cualquier tarifa publicada aplicable, nuestra Guía de
              Servicios actual y nuestras Condiciones Estándar de Transporte,
              copias de las cuales están a su disposición al ser solicitadas. En
              caso de un conflicto entre esta Guía y cualquier documento antes
              mencionado, regirán, respectivamente, en orden de prioridad el
              acuerdo de servicios de transporte, la tarifa, la Guía de
              Servicios y las Condiciones Estándar de Transporte. Ninguna
              persona está autorizada a alterar o modificar los términos de
              nuestro acuerdo. Esta Guía será válida para nosotros en el momento
              de aceptar el embarque; nuestro nombre impreso en esta Guía será
              suficiente para constituir nuestra firma.
            </p>
          </motion.div>

          <motion.div
            className="terminos-block"
            variants={blockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2>Tus obligaciones</h2>
            <p>
              Usted garantiza que cada artículo del embarque está descrito
              correctamente en esta Guía, y que es aceptable para ser
              transportado por nosotros, y que el embarque está correctamente
              marcado, clasificado, etiquetado y consignado (incluyendo el
              código postal) de acuerdo a las leyes, normas y reglamentos del
              comercio internacional; asimismo usted garantiza que cada artículo
              se encuentra empaquetado para asegurar un transporte seguro con un
              cuidado razonable en su manipulación.
            </p>
          </motion.div>

          <motion.div
            className="terminos-block"
            variants={blockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2>Artículos no aceptables para el transporte</h2>
            <p>
              No aceptamos el transporte de dinero (incluyendo pero no
              limitándose a monedas o instrumentos negociables equivalentes a
              dinero tales como acciones y bonos endosados).
            </p>
            <p>
              No aceptamos el transporte de armas, ni parte de ellas, EXCLUIMOS
              TODA RESPONSABILIDAD DE EMBARQUES DE TALES ARTÍCULOS ACEPTADOS POR
              ERROR. Nos reservamos el derecho de rechazar paquetes en base a
              estas limitaciones o por razones de seguridad.
            </p>
            <p>
              En lo que respecta a cualquier disposición contenida o referida en
              esta Guía que pudiera ser contraria a cualquier tratado
              internacional, ley, reglamento gubernamental, orden o
              requerimiento que fueran aplicables, tal disposición permanecerá
              vigente como parte de nuestro acuerdo mientras no sea anulada por
              dichas decisiones gubernamentales. La invalidez o incapacidad de
              hacer cumplir alguna disposición no afectará ninguna otra parte de
              esta Guía.
            </p>
            <p>
              A menos que se indique lo contrario, la sucursal Puebla Express en
              donde el remitente documenta su envío, es el lugar de ejecución y
              el lugar de partida, y la dirección del destinatario enumerada en
              la cara de esta Guía es el lugar de destino.
            </p>
          </motion.div>

          <motion.div
            className="terminos-block"
            variants={blockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2>Seguro (aseguranza) para su Envío</h2>
            <h3>Prima del Seguro</h3>
            <p>
              Determine el monto que desea asegurar: el costo es de $7 US dlls
              por cada $100 US dlls de Valor Declarado, hasta por un Valor
              Declarado máximo de $300 US dlls.
            </p>
            <p>
              El Valor Declarado por usted al momento de adquirir el Seguro
              Puexpress, representa la responsabilidad máxima de Puebla Express
              en relación con el Envío y no será superior al Valor Declarado. El
              Remitente asume el riesgo de pérdida y daños por encima del Valor
              declarado para el transporte. El Valor Declarado Máximo para
              transporte está limitado, y se fija en $300 dólares por envío o
              por cliente. No somos responsables por artículos no declarados o
              prohibidos.
            </p>
            <p>
              Si usted envía más de un paquete usando una sola Guía, el valor
              declarado para el transporte de cada paquete estará determinado
              dividiendo el valor total declarado para el transporte por el
              número de paquetes en el embarque.
            </p>

            <h3>Deducible</h3>
            <p>
              El deducible aplica en caso de Pérdida Total por asalto, robo con
              o sin violencia: 40% sobre el valor declarado del folio o envío
              por cliente.
            </p>

            <h3>Exclusiones del Seguro Puexpress</h3>
            <p>
              Se refiere a aquellos acontecimientos excluidos de la cobertura
              del Seguro Puexpress:
            </p>
            <ul>
              <li>Acontecimientos de la Naturaleza</li>
              <li>Confiscación por parte de las autoridades.</li>
              <li>Funcionamiento de los electrónicos.</li>
              <li>Casos fuera del control de Puebla-Express.</li>
              <li>Acto de mala fe por parte del cliente.</li>
            </ul>
            <p>
              Queda excluido de la cobertura del Seguro Puexpress: dinero en
              todas sus formas, artículos perecederos, mercancía pirata, autos,
              motos, cuatrimotos, artículos frágiles, televisiones que no viajen
              en su empaque original de fábrica.
            </p>
          </motion.div>

          <motion.div
            className="terminos-block"
            variants={blockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2>Responsabilidades que no asumimos</h2>
            <p>
              Sujeto a las condiciones de contrato contenidas en esta guía, o en
              nuestras condiciones estándar de transporte, en ningún caso,
              seremos responsables por ningún daño, sea éste directo,
              incidental, especial o emergente, que exceda el valor declarado
              para el transporte (o lo equivalente en moneda nacional), sea que
              hayamos tenido o no el conocimiento de que existiera la
              posibilidad de incurrir en tales daños, incluyendo pero no
              limitándose a la pérdida de ingresos o ganancias.
            </p>
            <p>
              No seremos responsables por sus actos u omisiones, incluyendo pero
              no limitándose a una declaración incorrecta del cargamento,
              embalaje, cierre, marcado o consignación incorrectos o
              insuficientes del embarque, ni por los actos u omisiones del
              destinatario ni de ninguna otra persona que tenga un interés en el
              embarque. Además, no seremos responsables si usted o el
              destinatario violan alguno de los términos de nuestro acuerdo. No
              seremos responsables por pérdida, daños, demora, entrega
              incompleta, entrega errónea, falta de entrega, información errónea
              o falta de ofrecer información con respecto a embarques de dinero
              en efectivo, divisas ni de otros artículos prohibidos.
            </p>
            <p>
              No seremos responsables por pérdida, daños, demora, entrega
              incompleta, entrega errónea, falta de entrega, información errónea
              o falta de ofrecer información con respecto a su embarque causados
              por eventos que no podemos controlar, incluyendo pero no
              limitándose a casos de fuerza mayor y fortuitos, peligros
              terrestres, condiciones climáticas, demoras mecánicas, actos de
              enemigos públicos, guerra, huelgas, conmociones civiles, o actos u
              omisiones de autoridades públicas (incluyendo los funcionarios
              aduaneros y de salud) con autoridad real o aparente.
            </p>
          </motion.div>

          <motion.div
            className="terminos-block final-block"
            variants={blockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2>Disposiciones Finales</h2>
            <p>
              Derecho a inspección: Su embarque podrá, a opción nuestra o a
              pedido de las autoridades gubernamentales, ser abierto e
              inspeccionado por nosotros o por tales autoridades en cualquier
              momento.
            </p>
            <p>
              Sin garantías: No otorgamos ningún tipo de garantía, expresa ni
              implícita.
            </p>
            <p className="legal-links">
              Sus datos personales serán tratados de conformidad con lo que
              establece el aviso de privacidad publicado en{" "}
              <Link
                to="/aviso-de-privacidad"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aviso de Privacidad
              </Link>
              .
            </p>
            <p className="legal-links">
              Consulte la lista de artículos prohibidos en{" "}
              <Link
                to="/articulos-prohibidos"
                target="_blank"
                rel="noopener noreferrer"
              >
                Artículos Prohibidos
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TerminosEnvio;
