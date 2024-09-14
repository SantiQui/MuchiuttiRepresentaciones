import React from 'react'
import "./Footer.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer-style p-5 ">
      <Row className="footer-div ">
        <Col xs={12} lg={6} className="footer-logo">
        <a href="/"><img src={logo} alt="Logo" className="footer-img"/></a>
          
        </Col>
        <Col xs={12} lg={6} className="footer-contacto">
          <h4 className="footer-title">CASA CENTRAL</h4>
          <p className="footer-items">
            <i className="bi bi-geo-alt-fill footer-icons"></i>
            <a href="" className="footer-links">Santa Fe</a>
          </p>
          <p className="footer-items">
            <i className="bi bi-telephone-fill footer-icons"></i>
            <a href="" className="footer-links">342-6115556</a>
          </p>
          <p className="footer-items">
            <i className="bi bi-telephone-fill footer-icons"></i>
            <a href="" className="footer-links">342-4773703</a>
          </p>
          <p className="footer-items">
            <i className="bi bi-envelope footer-icons"></i>
            <a href="" className="footer-links">hmuchiutti_rep@hotmail.com</a>
          </p>
        </Col>
      </Row>
      <div>
        <hr className="hr-style" />
        <p className="footer-copyright text-center">
          Copyright 2024 © Muchiutti Representaciones S.A. | Todos los derechos reservados
        </p>
      </div>   
    </div>
  )
}

export default Footer