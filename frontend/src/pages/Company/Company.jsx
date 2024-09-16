import React from "react";
import Header from "../../components/Header/Header";
import "./Company.css";
import FotoPersona from "../../assets/persona-empresa.jpg"

const Company = ({ currentPath }) => {
  return (
    <div className="flex items-center flex-col ">
      <Header currentPath={currentPath} />
      <div className="bg-color-muchiutti py-5 flex justify-center w-full">
          <p className="company-somos w-max flex text-center ">
            Somos representantes y distribuidores de productos de consumo masivo. Trabajamos con todos los segmentos del
            mercado: mayoristas y minoristas. Prestamos servicios de logística a empresas nacionales y multinacionales con
            entregas en punto de venta.
          </p>
        </div>

      <div className="company-container flex items-center ">
      <div className="flex w-max flex-col"> 
        <div className="flex py-5 flex-col company-historia ">
          <h2 className=" w-full ">Nuestra historia</h2>
          <p className=" w-full ">
            ALCO nace en 1979, como una empresa familiar, con el objetivo de representar y distribuir productos de consumo
            masivo. Desde ese momento, comenzamos a ofrecer al mercado un servicio integral como representantes, con
            depósito de mercadería, facturación y entrega desde el mismo local.
          </p>
          <p className=" w-full ">
            Desde 2009 expandimos nuestra actividad a la ciudad de Rosario, con la apertura de una sucursal operando
            independientemente de la casa central.
          </p>
          <p className=" w-full">
            A través de los años no sólo nos dedicamos a vender marcas lideres; también logramos que las empresas tengan
            una sucursal virtual al menor costo posible.
          </p>
          <p className=" w-full ">
            Sabemos que ofrecemos el mejor sistema de crecimiento para cualquier empresa: contamos con una infraestructura
            acorde y en constante crecimiento, y brindamos el mejor servicio de venta y logística en la región.
          </p>
          <p className=" w-full">
            Nos adaptamos en forma inmediata a las demandas del mercado y a las necesidades de cada firma, asegurando el
            mayor crecimiento posible en cada segmento. Es por eso, que las mejores compañías nacionales e internacionales
            nos eligen.
          </p>
        </div>
      </div>
      <img src={FotoPersona} alt="" className="company-foto"/>
      </div>
    </div>
  );
};

export default Company;
