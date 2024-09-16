import React from "react";
import "./MVR.css";

const Section = ({ iconClass, title, description }) => (
  <div>
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
        "Seguir consolidando la empresa en el mercado en busca de fortalecer y expandir nuestra presencia y cobertura en la mayor cantidad de zonas posibles.",
    },
    // {
    //   iconClass: "bi bi-eye-fill",
    //   title: "Visión",
    //   description:
    //     "Buscamos expandir nuestra cartera de clientes y representaciones comerciales, brindando un servicio eficiente y adaptado a las condiciones del mercado para aprovechar nuevas oportunidades de negocio.",
    // },
    {
      iconClass: "bi bi-people-fill",
      title: "Responsabilidad social",
      description:
        "Nos sustentamos en el profesionalismo, la atención resolutiva, la confianza y la honestidad absoluta que nos han caracterizado a lo largo de estos años, y que continuaremos preservando siempre.",
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
