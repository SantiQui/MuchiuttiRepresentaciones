import React from "react";
import Header from "../../components/Header/Header";
import imgCobertura from "../../assets/coberturalitoral.png";
import route from "../../assets/cobertura.webp";
import "./Coverage.css";

const Coverage = ({ currentPath }) => {
  return (
    <div style={{ backgroundColor: " #f0efeb" }} className="flex jusitfy-center flex-col items-center">
      <Header currentPath={currentPath} />
      <div className="w-max pt-5 pb-2 coverage-desktop">
        <div className="pt-4">
          <h1 className="fw-bold">Zona de Cobertura</h1>
          <p>
            Nuestra cobertura se basa en las provincias de <b>Santa Fe y Entre Ríos</b>, atendiendo de forma
            independiente las principales ciudades y localidades de ambas regiones.
          </p>
        </div>
      </div>
      <img className="img-cobertura mb-5" src={imgCobertura} />
      <img className="img-cobertura2" src={route} />
    </div>
  );
};

export default Coverage;
