import React from "react";
import catalogos from "../../assets/headers/catalogos.webp";
import cobertura from "../../assets/headers/cobertura.webp";
import contacto from "../../assets/headers/contacto.webp";
import empresa from "../../assets/headers/empresa.webp";
import operatoria from "../../assets/headers/operatoria.webp";
import "./Header.css";

const Header = ({ currentPath }) => {
  const backgroundImages = {
    "/catalogos": catalogos,
    "/cobertura": cobertura,
    "/contacto": contacto,
    "/empresa": empresa,
    "/operatoria": operatoria, 
  };

  const backgroundImage = backgroundImages[currentPath] || "";
  const formatPath = (path) => {
    if (!path) return "";
    const formattedPath = path.replace("/", "");
    return formattedPath.charAt(0).toUpperCase() + formattedPath.slice(1);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className="background-header w-full flex justify-center items-center"
    >
      <div className="header-content w-full w-max">
        <h1 className="fw-semibold">{formatPath(currentPath)}</h1>
        <div className="flex gap-2">
          <p>Inicio</p> / <strong>{formatPath(currentPath)}</strong>
        </div>
      </div>
    </div>
  );
};

export default Header;
