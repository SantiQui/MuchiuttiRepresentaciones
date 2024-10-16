import React from "react";
import Header from "../../components/Header/Header";
import imgCobertura from "../../assets/coberturalitoral.png";
import route from "../../assets/cobertura.webp";
import "./Coverage.css";

const Coverage = ({ currentPath }) => {
  return (
    <div style={{ backgroundColor: " #f0efeb" }} className="flex jusitfy-center flex-col items-center">
      <Header currentPath={currentPath} />
      <div className="w-max py-5 coverage-desktop">
        <div className="py-4">
          <h1 className="fw-bold">Zona de Distribuición</h1>
          <p>
            Nuestra cobertura se basa en las provincias de Santa Fe y Entre Ríos, atendiendo de forma independiente las
            principales ciudades y localidades de ambas regiones.
          </p>
          <div>
            <h3 className="fw-bold pb-2">Santa Fe:</h3>
            <ul>
              <li>+ de 135 Localidades</li>
              <li>+ de 6.200 Puntos de Venta</li>
            </ul>
          </div>
          <div>
            <h3 className="fw-bold pb-2">Entre Ríos:</h3>
            <ul>
              <li>+ de 70 Localidades</li>
              <li>+ de 3.400 Puntos de Venta</li>
            </ul>
          </div>
        </div>
        <img className="img-cobertura" src={imgCobertura} />
      </div>
      <img className="img-cobertura2" src={route} />
    </div>
  );
};

export default Coverage;
