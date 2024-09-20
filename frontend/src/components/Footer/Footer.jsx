import React from "react";
import "./Footer.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.webp";
const Footer = () => {
  return (
    <div className="footer-style py-5 w-full flex items-center">
      <Row className="footer-div w-max flex justify-center">
        <Col xs={12} lg={6} className="footer-contacto flex items-center footer-div w-full ">
          <a href="/">
            <img src={logo} alt="Logo" className="footer-img" />
          </a>
          <ul className="company-lista ">
            <li>
              <h4 className="footer-title">CASA CENTRAL</h4>
            </li>
            <li>
              <i className="bi bi-geo-alt-fill footer-icons"></i>
              <a href="" className="footer-links footer-direccion">
                Santa Fe
              </a>
            </li>
            <li>
              <i className="bi bi-telephone-fill footer-icons"></i>
              <a href="https://api.whatsapp.com/send?phone=5493426115556" className="footer-links">342-6115556</a>
            </li>
            <li>
            <i className="bi bi-telephone-fill footer-icons"></i>
            <a href="https://api.whatsapp.com/send?phone=5493424773703" className="footer-links">342-4773703</a>
            </li>
            <li>
            <i className="bi bi-envelope footer-icons"></i>
            <a href="mailto:muchiuttirepresentaciones@gmail.com" className="footer-links">muchiuttirepresentaciones@gmail.com</a>
            </li>
          </ul>
        </Col>
      </Row>
      <div className="w-full">
        <hr className="hr-style" />
        <p className="footer-copyright text-center py-3" style={{fontSize: "80%"}}>
          Copyright 2024 © <strong> Muchiutti Representaciones</strong> | Todos los derechos reservados
        </p>
      </div>
    </div>
  );
};

export default Footer;
