import React from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { pages } from "../../utils/navbarlinks";
import "./NavBar.css";
import logo from "../../assets/logo.webp";

const CustomNavbar = ({ currentPath }) => {
  return (
    <div className="fixed-top" style={{ backgroundColor: "#FEFAE0" }}>
      <div className="flex info-navbar bg-color-muchiutti">
        <div className="navbar-container w-full h-full flex justify-between">
          <div style={{ fontSize: "0.8rem" }}>REPRESENTACIONES COMERCIALES</div>
          <div style={{ fontSize: "0.8rem" }} className=" ds-none">
            Líneas rotativas 0342 1234 4567 info@muchhiutti.com.ar
          </div>
        </div>
      </div>
      <Navbar expand="lg" className="shadow-sm h-full p-0">
        <Container className="w-max h-full p-0">
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" style={{ height: "55px", padding: "0.5rem 0" }} />
          </Navbar.Brand>

          <Navbar.Toggle className="navbar-toogle" aria-controls="offcanvasNavbar" />

          <Navbar.Offcanvas
            className="flex"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Muchiutti Representaciones</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="h-full p-0">
              <Nav className="me-auto flex custom-justify items-center">
                {pages.map((page) => (
                  <Nav.Link
                    className="flex justify-center items-center w-full"
                    key={page.name}
                    href={page.path}
                    style={{
                      height: "65px",
                      fontSize: ".8em",
                      color: currentPath === page.path ? "#000" : "#666666",
                      backgroundColor: currentPath === page.path ? "#ccd5ae " : "",
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
