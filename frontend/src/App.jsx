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
import { useLocation } from "react-router-dom";
import IconWppSticky from "./components/IconWppSticky/IconWppSticky";

function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div style={{ width: "100vw" }}>
      <Nav currentPath={currentPath} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact currentPath={currentPath} />} />
        <Route path="/catalogos" element={<Catalogs currentPath={currentPath} />} />
        <Route path="/empresa" element={<Company currentPath={currentPath} />} />
        <Route path="/operatoria" element={<Operation currentPath={currentPath} />} />
        <Route path="/cobertura" element={<Coverage currentPath={currentPath} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <IconWppSticky />
      <Footer />
    </div>
  );
}

export default App;
