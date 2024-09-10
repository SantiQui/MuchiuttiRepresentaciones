import React from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { pages } from "../../utils/navbarlinks";
import "./NavBar.css";
import logo from "../../assets/logo.png";

const CustomNavbar = ({ currentPath }) => {
  return (
    <div className="fixed-top" style={{ backgroundColor: "#FEFAE0" }}>
      <div className="flex info-navbar bg-color-muchiutti">
        <div className="navbar-container w-full flex justify-between">
          <div className="fs-8">REPRESENTACIONES COMERCIALES</div>
          <div className="fs-8 ds-none">Líneas rotativas 0342 1234 4567 info@muchhiutti.com.ar</div>
        </div>
      </div>
      <Navbar expand="lg" className="shadow-sm">
        <Container className="navbar-container">
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" style={{ height: "50px" }} />
          </Navbar.Brand>

          <Navbar.Toggle className="navbar-toogle" aria-controls="offcanvasNavbar" />

          <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Muchiutti Representaciones</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="me-auto ">
                {pages.map((page) => (
                  <Nav.Link
                    key={page.name}
                    href={page.path}
                    style={{
                      color: currentPath === page.path ? "#000" : "#666666",
                      fontWeight: currentPath === page.path ? "bold" : "normal",
                    }}
                  >
                    {page.name}
                  </Nav.Link>
                ))}
              </Nav>
              <Nav className="navbar-social ">
                <Nav.Link href="https://facebook.com" target="_blank" className="text-muted">
                  <i className="bi bi-facebook"></i>
                </Nav.Link>
                <Nav.Link href="https://instagram.com" target="_blank" className="text-muted">
                  <i className="bi bi-instagram"></i>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
