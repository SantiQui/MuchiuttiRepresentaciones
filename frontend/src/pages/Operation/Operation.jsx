import React from "react";
import Header from "../../components/Header/Header";
import "./Operation.css";
import operatoriaFoto1 from "../../assets/tipocallcenter.png";
import operationMovile from "../../assets/operation1.webp";
import operatoriaFoto2 from "../../assets/operation2.webp";

const Section = ({ title, items }) => (
  <div className="flex flex-col text-start w-full">
    <h2 className="fw-bold">{title}</h2>
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <strong>{item.subtitle}:</strong> {item.content}
        </li>
      ))}
    </ul>
  </div>
);

const Operation = ({ currentPath }) => {
  const sectionData1 = [
    {
      title: "Reconocimiento de Clientes",
      items: [
        {
          subtitle: "Identificación de potenciales clientes",
          content:
            "Investigamos y exploramos nuevas oportunidades de negocio, ya sea visitando físicamente a los clientes y mediante el uso de herramientas online.",
        },
        {
          subtitle: "Contactar con clientes actuales y potenciales",
          content: "Nos aseguramos de mantener la relación con los clientes habituales y captar nuevos.",
        },
      ],
    },
    {
      title: "Demostración de Productos",
      items: [
        {
          subtitle: "Presentación de productos",
          content:
            "Realizamos demostraciones o exposiciones sobre los productos que ofrece su empresa, explicando los beneficios y características de cada uno.",
        },
        {
          subtitle: "Conocimiento del producto",
          content: "Informamos sobre el catálogo de productos, explicando detalles técnicos y resolviendo dudas.",
        },
      ],
    },
    {
      title: "Negociación y Venta",
      items: [
        {
          subtitle: "Negociación de condiciones",
          content: "Nos encargamos de negociar precios, condiciones de pago, plazos de entrega, entre otros detalles.",
        },
        {
          subtitle: "Cierre de ventas",
          content:
            "Concretamos ventas efectivas mediante estrategias convincentes, garantizando un beneficio para ambas partes.",
        },
      ],
    },
    {
      title: "Toma de Pedidos",
      items: [
        {
          subtitle: "Recepción y gestión de pedidos",
          content:
            "Después de una negociación exitosa, registramos los pedidos de los clientes, los cuales se envían al departamento de ventas o logística de cada empresa.",
        },
        {
          subtitle: "Seguimiento del pedido",
          content:
            "Atendemos que el pedido llegue en tiempo y forma, manteniendo la comunicación con el cliente hasta la entrega.",
        },
      ],
    },
  ];

  const sectionData2 = [
    {
      title: "Atención Postventa",
      items: [
        {
          subtitle: "Resolución de problemas",
          content:
            "Si surge algún inconveniente después de la venta, como defectos en los productos o problemas de entrega, actuaremos como intermediario entre la empresa y el cliente para solucionarlo.",
        },
        {
          subtitle: "Fidelización de clientes",
          content:
            "Seguimiento postventa generando relaciones más duraderas y ampliando la red de clientes que abra nuevas oportunidades de mercado.",
        },
      ],
    },
    {
      title: "Reporte y Administración",
      items: [
        {
          subtitle: "Reportes de actividad",
          content:
            "Informamos a la empresa mediante reportes periódicos de sus actividades, incluyendo ventas realizadas, pedidos tomados, visitas efectuadas, etc.",
        },
        {
          subtitle: "Gestión de rutas y agenda",
          content:
            "Organización de itinerario de visitas para maximizar el tiempo y cubrir más clientes en la zona asignada.",
        },
      ],
    },
    {
      title: "Conocimiento del Mercado",
      items: [
        {
          subtitle: "Investigación del mercado",
          content:
            "Estamos al tanto de las tendencias del mercado, los movimientos de la competencia y las necesidades cambiantes de los clientes.",
        },
        {
          subtitle: "Adaptación a cambios",
          content:
            "Nos ajustamos a estrategias de venta o presentación de productos según las necesidades del mercado.",
        },
      ],
    },
    {
      title: "Cumplimiento de Objetivos",
      items: [
        {
          subtitle: "Base de clientes",
          content: "Mantener y ampliar la red de clientes ante las oportunidades del mercado.",
        },
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <Header currentPath={currentPath} />
      <div className="flex w-max operation-container-1">
        <div className="flex flex-col w-max py-5">
          <div className="first-text-operation">
            <h1 className="fw-bold">Representante</h1>
            <p>
              La operatoria como representante comercial implica varias funciones y responsabilidades, principalmente
              orientadas a la venta, negociación y representación de una empresa ofreciendo la comercialización de sus
              productos bajo la modalidad <em className="fw-bold">directo de fábrica</em>. Este trabajo requiere de
              habilidades de comunicación, organización y capacidad para trabajar dentro y fuera de nuestras oficinas y
              los principales aspectos a destacar son:
            </p>
            {sectionData1.map((section, index) => (
              <Section key={index} title={section.title} items={section.items} />
            ))}
          </div>
        </div>
        <img src={operatoriaFoto1} alt="operation-img" className="operation-img1-desktop py-5 " />
       
      </div>
      <img src={operatoriaFoto1} alt="operation-img" className="operation-img1-movile " />
      <img src={operationMovile} className="operation-movile"/>
      <div className="flex w-full operation-container-2 items-center py-5">
        <div className="flex flex-col w-max items-center second-text-operation">
          {sectionData2.map((section, index) => (
            <Section key={index} title={section.title} items={section.items} />
          ))}
        </div>
        <img src={operatoriaFoto2} alt="" className="operation-img2-desktop pt-5" />
      </div>
      <img src={operatoriaFoto2} alt="" className="operation-img2-movile" />
    </div>
  );
};

export default Operation;
