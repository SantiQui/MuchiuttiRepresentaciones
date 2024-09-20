import React from "react";
import Header from "../../components/Header/Header";
import "./Operation.css"
import operatoriaFoto1 from "../../assets/operation1.jpg"
import operatoriaFoto2 from "../../assets/operation2.jpg"

const Operation = ({ currentPath }) => {
  return (
    <div className="w-full">
      <Header currentPath={currentPath} />
      <div className="flex w-full operation-container-1 ">
        <div className="flex flex-col w-max p-3">
          <h1 style={{fontSize: "250%", fontWeight:"bolder"}}>Representante</h1>
          <p >
          La operatoria como representante comercial implica varias funciones y responsabilidades, 
          principalmente orientadas a la venta, negociación y representación de una empresa ofreciendo 
          la comercialización de sus productos bajo la modalidad <em className="fw-bold">directo de fábrica</em>. Este trabajo requiere de habilidades 
          de comunicación, organización y capacidad para trabajar dentro y fuera de nuestras oficinas y 
          los principales aspectos a destacar son:
          </p>
          <h2 style={{ fontWeight:"bold"}}>Reconocimiento de Clientes</h2>
          <ul>
            <li>
        	    <strong>Identificación de potenciales clientes:</strong> Investigamos y exploramos nuevas oportunidades de negocio, 
              ya sea visitando físicamente a los clientes y mediante el uso de herramientas online.
            </li>
            <li>
            <strong>Contactar con clientes actuales y potenciales:</strong> Nos aseguramos de mantener la relación con los clientes habituales y captar nuevos.
            </li>
          </ul>
          <h2 style={{ fontWeight:"bold"}}>Demostración de Productos</h2>
          <ul>
            <li>
             <strong>Presentación de productos:</strong> Realizamos demostraciones o exposiciones sobre los productos que ofrece 
             su empresa, explicando los beneficios y características de cada uno.
            </li>
            <li>
             <strong>Conocimiento del producto:</strong> Informamos sobre el catálogo de productos, explicando detalles técnicos y resolviendo dudas.
            </li>
          </ul>
          <h2 style={{ fontWeight:"bold"}}>Negociación y Venta</h2>
          <ul>
            <li>
             <strong>Negociación de condiciones:</strong> nos encargamos de negociar precios, condiciones de pago, plazos de entrega, entre otros detalles.
            </li>
            <li>
              <strong>Cierre de ventas:</strong> Concretamos ventas efectivas mediante estrategias convincentes, garantizando un beneficio para ambas partes.
            </li>
          </ul>
          <h2 style={{ fontWeight:"bold"}}>Toma de Pedidos</h2>

          <ul>
            <li>
            <strong>Recepción y gestión de pedidos:</strong> Después de una negociación exitosa, registramos los pedidos de los clientes, los cuales se envían al departamento de ventas o logística de cada empresa.
            </li>
            <li>
            <strong>Seguimiento del pedido:</strong> Atendemos que el pedido llegue en tiempo y forma, manteniendo la comunicación con el cliente hasta la entrega.
            </li>          
          </ul>
        </div>
        <img src={operatoriaFoto1} alt="" className="operation-img"/>
      </div>
      <div className="flex w-full operation-container-2">
        <div className="p-3 flex flex-col w-max">
          <h2 style={{ fontWeight:"bold"}}>Atención Postventa</h2>
          <ul>
            <li>
              <strong>Resolución de problemas:</strong> Si surge algún inconveniente después de la venta, como defectos en los productos o 
              problemas de entrega, actuaremos como intermediario entre la empresa y el cliente para solucionarlo.
            </li>
            <li>
              <strong>Fidelización de clientes:</strong>Seguimiento postventa generando relaciones más duraderas y ampliando la red de clientes que abra nuevas oportunidades de mercado.
            </li>
          </ul>
          <h2 style={{ fontWeight:"bold"}}>Reporte y Administración</h2>
          <ul>
            <li>
             <strong>Reportes de actividad:</strong> Informamos a la empresa mediante reportes periódicos de sus actividades, 
             incluyendo ventas realizadas, pedidos tomados, visitas efectuadas, etc.
            </li>
            <li>
             <strong>Gestión de rutas y agenda:</strong> Organización de itinerario de visitas para maximizar el tiempo y cubrir más clientes en la zona asignada.
            </li>
          </ul>
          <h2 style={{ fontWeight:"bold"}}>Conocimiento del Mercado</h2>
          <ul>
            <li>
             <strong>Investigación del mercado:</strong> Estamos al tanto de las tendencias del mercado, los movimientos de la competencia y las necesidades cambiantes de los clientes.
            </li>
            <li>
             <strong>Adaptación a cambios:</strong> Nos ajustamos a estrategias de venta o presentación de productos según las necesidades del mercado.
            </li>
          </ul>
          <h2 style={{ fontWeight:"bold"}}>Cumplimiento de Objetivos</h2>
          <ul>
            <li>
             <strong>Base de clientes:</strong> Mantener y ampliar la red de clientes ante las oportunidades del mercado.
            </li>
          </ul>
        </div>
        <img src={operatoriaFoto2} alt="" className="operation-img"/>
      </div>
    </div>
  );
};

export default Operation;
