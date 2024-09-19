import React from "react";
import Header from "../../components/Header/Header";
import "./Operation.css"
import operatoriaFoto1 from "../../assets/operation1.jpg"
import operatoriaFoto2 from "../../assets/operation2.jpg"

const Operation = ({ currentPath }) => {
  return (
    <div className="w-full">
      <Header currentPath={currentPath} />
      <div className="flex operation-container-1 ">
        <div className="flex flex-col w-max p-3">
          <h2 className="operation-title">Administración y deposito.</h2>
          <p >
          En la ciudad de Santa Fe, contamos con 5000 m2 de depósito 
          equipado con un sistema de almacenamiento en racks y autoelevadores, 
          1000 m2 de playa de descarga de camiones y 400 m2 de oficinas administrativas.
          </p>
          <div className="flex operation-container-icons text-center">
            <div>
            <i class="operation-icon bi bi-dropbox"></i>
            <p className="operation-number">5.000 M²</p>
            <p>de depósito</p>
            </div>
            <div>
              <i class="operation-icon bi bi-truck"></i>
              <p className="operation-number">1.000 M²</p>
              <p>playa de descarga</p>
            </div>
            <div>
              <i class="operation-icon bi bi-pencil-fill"></i>
              <p className="operation-number">400 M²</p>
              <p>de oficinas</p>
            </div>
          </div>
        </div>
        <img src={operatoriaFoto1} alt="" className="operation-img"/>
      </div>
      <div className="flex w-full operation-container-2">
        <div className="p-3">
          <h3 className="operation-subtitle">Logística</h3>
          <p>Su empresa podrá tener un Centro de Distribución Virtual (CDV) con almacenamiento de mercaderías en racks y autoelevadores, 
            sin costo fijo, para entrega Boca por Boca, Hipermercados Nacionales, Supermercados Regionales, 
            Supermercados Mayoristas Nacionales y Regionales de nuestra zona de cobertura.
            </p>
          <h3  className="operation-subtitle">Representante – Distribuidor Exclusivo</h3>
          <p>Realizamos la gestión comercial de administración, ventas, 
            entrega y cobranza con las siguientes modalidades:
          </p>
          <ul>
            <li>Facturación propia</li>
            <li>Facturación por cuenta y orden de terceros</li>
            <li>Directo de fábrica</li>
          </ul>
        </div>
        <img src={operatoriaFoto2} alt="" className="operation-img"/>
      </div>
    </div>
  );
};

export default Operation;
