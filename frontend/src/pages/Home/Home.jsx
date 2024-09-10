import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import MVR from "../../components/MVR/MVR";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="background-transporte">
        <h2 className="background-slogan">Tu aliado en la ruta hacia el crecimiento</h2>
        <div className="desktop-mvr w-full">
          <MVR />
        </div>
      </div>
      <div className="w-full position-relative movile-mvr items-center">
        <MVR />
      </div>
      <div className="w-max flex flex-col items-center py-5">
        <p class="text-center">
          Desde hace más de 40 años, somos una empresa familiar dedicada a la representación y distribución de productos
          de consumo masivo en Santa Fe y Entre Ríos. Combinamos atención personalizada con herramientas digitales,
          representando marcas líderes y brindando soluciones estratégicas a mayoristas, distribuidores y supermercados.
        </p>
        <Button style={{ border: "none" }} className="my-4 bg-color-muchiutti">
          <Link to="/empresa" className="cta-muchiutti fw-bold">
            Conocer más sobre Muchiutti Representaciones <i class="bi bi-caret-right-fill"></i>
          </Link>
        </Button>
      </div>
      <div className="red-transparent-truck flex items-center justify-content-center">
        <Row className="flex flex-col row-background-red justify-content-center text-center gap-3 w-max">
          <Col className="w-full flex flex-col items-center ">
            <i className="bi bi-hourglass-split size-experience-icons" />
            <p className="fw-bold fs-3 ">
              +20 AÑOS <br />
              <small className="fw-semibold fs-6">de trayectoria</small>
            </p>
          </Col>
          <Col className="w-full flex flex-col items-center ">
            <i className="bi bi-briefcase-fill size-experience-icons" />
            <p className="fw-bold fs-3 line-h-experience">
              MARCAS LÍDERES
              <br />
              <small className="fw-semibold fs-6">confían en nosotros</small>
            </p>
          </Col>
          <Col className="w-full flex flex-col items-center ">
            <i className="bi bi-truck size-experience-icons" />
            <p className="fw-bold fs-3 line-h-experience">
              TRANSPORTE
              <br />
              <small className="fw-semibold fs-6">propio y de terceros</small>
            </p>
          </Col>
        </Row>
      </div>
      <h1>SLIDER SANTI</h1>
    </div>
  );
};

export default Home;
