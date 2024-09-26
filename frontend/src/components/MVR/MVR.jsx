import React from "react";
import "./MVR.css";

const Section = ({ iconClass, title, description }) => (
  <div className="w-full">
    <i className={`${iconClass} size-home-icons`} />
    <h3 className="text-uppercase cstm-sec-color fw-bold fs-6">{title}</h3>
    <p style={{ fontSize: "0.9rem" }}>{description}</p>
  </div>
);

const MVR = () => {
  const sections = [
    {
      iconClass: "bi bi-bullseye",
      title: "Objetivo",
      description:
        "Seguir afianzando la empresa en el mercado en busca de fortalecer y expandir nuestra presencia y cobertura.",
    },
    {
      iconClass: "bi bi-eye-fill",
      title: "Visión",
      description:
        "Consolidarse como empresa lider en representaciones comerciales, aumentando el numero de marcas ofrecidas ampliando nuestra capacidad operativa.",
    },
    {
      iconClass: "bi bi-award",
      title: "Valores",
      description:
        "Nos sustentamos en el profesionalismo, la atención resolutiva, la confianza y la honestidad absoluta que nos han caracterizado a lo largo de estos años.",
    },
  ];

  return (
    <div className="content-mvr w-max">
      {sections.map((section, index) => (
        <Section key={index} iconClass={section.iconClass} title={section.title} description={section.description} />
      ))}
    </div>
  );
};

export default MVR;
