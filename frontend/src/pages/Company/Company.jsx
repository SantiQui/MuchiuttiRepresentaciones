import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import "./Company.css";
import FotoPersona from "../../assets/foto-persona.webp";

const Company = ({ currentPath }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex items-center flex-col ">
      <Header currentPath={currentPath} />
      <div className="bg-color-muchiutti py-5 flex justify-center w-full">
        <p className="company-somos w-max flex text-center ">
          Somos responsables de representar a importantes empresas ofreciendo productos de consumo masivo. Brindamos un
          servicio de atención y asesoramiento personalizado para la concreción de negocios a clientes especiales como
          mayoristas, distribuidores y supermercados.
        </p>
      </div>

      <div className="company-container flex items-center ">
        <div className="flex w-max flex-col">
          <div className="flex py-5 flex-col company-historia ">
            <h1 className="fw-bold">Nuestra historia</h1>
            <p className=" w-full ">
              Esta empresa familiar comienza con la actividad personal de Horacio Muchiutti dada su experiencia anterior
              como representante comercial en compañías nacionales como por ejemplo: Bagley S.A, Terrabusi S.A, Vazquez
              y Cia, entre otras. Siendo viajante directo de las mismas y ofreciendo productos de consumo masivo al
              mercado.
            </p>
            <p className=" w-full ">
              A partir del año 1988 comienzo con este sistema de representaciones, cubriendo zonas de centro-norte de la
              Provincia de Santa Fe y toda la provincia de Entre Ríos, desarrollando siempre el mismo sistema de venta
              directa de fábrica a clientes especiales como mayoristas, distribuidores y supermercados. Brindándoles un
              servicio de atención y asesoramiento personalizado para la concreción de negocios, adaptándonos en este
              recorrido a las nuevas tecnologías de comunicación combinando la presencia personal junto con la digital.
            </p>
            <p className=" w-full">
              Continuando con ésta dinámica, seguimos hasta el día de hoy agregando y renovando todo tipo de
              representadas de excelentes compañías dentro de las líneas comestibles, bebidas y bazar principalmente.
              Ofreciendo el mejor sistema de crecimiento para cualquier empresa.
            </p>
            <p className=" w-full ">
              En los últimos años, para garantizar una atención más integral a nuestros clientes incorporamos más
              personal a éste gran equipo de trabajo y asesoramiento contable-legal, respaldado con estudios acordes y
              reconocidos en busca de continuar mejorando nuestros servicios.
            </p>
            <p className=" w-full">
              Poseemos una cartera de clientes depurada y seleccionada de la cual contamos con las mejores referencias,
              consolidada a lo largo de más de 30 años.
            </p>
            <p className=" w-full">
              Actualmente trabajamos con más de 10 representadas directas que están distribuidas en zonas acordadas de
              forma estratégica. Con la posibilidad de agregar empresas y zonas aledañas de acuerdo a lo solicitado u
              ofrecido.
            </p>
          </div>
        </div>
        <img src={FotoPersona} alt="persona-saludando" className="company-foto" />
      </div>
    </div>
  );
};

export default Company;
