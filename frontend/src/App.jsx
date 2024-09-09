import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/NavBar/NavBar";
import Catalogs from "./pages/Catalogs/Catalogs";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Operation from "./pages/Operation/Operation";
import Company from "./pages/Company/Company";
import Coverage from "./pages/Coverage/Coverage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div style={{ width: "100vw" }}>
      <Nav />
      {/* <Container className="containerElement"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/catalogos" element={<Catalogs />} />
          <Route path="/empresa" element={<Company />} />
          <Route path="/operatoria" element={<Operation />} />
          <Route path="/cobertura" element={<Coverage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      {/* </Container> */}
      <Footer />
    </div>
  );
}

export default App;
