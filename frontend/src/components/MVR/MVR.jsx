import React from "react";
import "./MVR.css";

const MVR = () => {
  return (
    <>
      <div className="content-mvr w-max">
        <div >
          <i class="bi bi-bullseye size-home-icons " />
          <h3 class="text-uppercase cstm-sec-color fw-bold fs-6">Misión</h3>
          <p>Lograr la mayor distribución numérica y cobertura de calidad.</p>
        </div>
        <div >
          <i class="bi bi-eye-fill size-home-icons" />
          <h3 class="text-uppercase cstm-sec-color fw-bold fs-6">Visión</h3>
          <p>
            Ser una empresa líder en distribución en nuestra zona de influencia, con capacidad de ingresar a nuevos
            negocios, respetando a nuestros clientes proveedores y empleados.
          </p>
        </div>
        <div >
          <i class="bi bi-people-fill size-home-icons" />
          <h3 class="text-uppercase cstm-sec-color fw-bold fs-6">Responsabilidad social</h3>
          <p>Acompañamos a instituciones de nuestra comunidad, apadrinando su funcionamiento y actividades .</p>
        </div>
      </div>
    </>
  );
};

export default MVR;
