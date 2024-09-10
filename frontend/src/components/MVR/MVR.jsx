import React from "react";
import "./MVR.css";

const MVR = () => {
  return (
    <>
      <div className="content-mvr w-max">
        <div>
          <i class="bi bi-bullseye size-home-icons " />
          <h3 class="text-uppercase cstm-sec-color fw-bold fs-6">objetivo</h3>
          <p>
            Seguir consolidando la empresa en el mercado en busca de fortalecer y expandir nuestra presencia y cobertura
            en la mayor cantidad de zonas posibles.
          </p>
        </div>
        <div>
          <i class="bi bi-eye-fill size-home-icons" />
          <h3 class="text-uppercase cstm-sec-color fw-bold fs-6">Visión</h3>
          <p>
            Buscamos expandir nuestra cartera de clientes y representaciones comerciales, brindando un servicio
            eficiente y adaptado a las condiciones del mercado para aprovechar nuevas oportunidades de negocio.
          </p>
        </div>
        <div>
          <i class="bi bi-people-fill size-home-icons" />
          <h3 class="text-uppercase cstm-sec-color fw-bold fs-6">Responsabilidad social</h3>
          <p>
            Nos sustentamos en el profesionalismo, la atención resolutiva, la confianza y la honestidad absoluta que nos
            han caracterizado a lo largo de estos años, y que continuaremos preservando siempre.
          </p>
        </div>
      </div>
    </>
  );
};

export default MVR;
