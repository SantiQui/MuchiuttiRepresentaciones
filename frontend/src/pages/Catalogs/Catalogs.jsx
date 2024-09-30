import React from "react";
import Header from "../../components/Header/Header";
import Card from "react-bootstrap/Card";
import Almar from "../../assets/logos/almar.webp";
import Cardenal from "../../assets/logos/cardenal.webp";
import Deulrel from "../../assets/logos/deulrel.webp";
import Ferraris from "../../assets/logos/ferraris.webp";
import FraccionadoraSanJuan from "../../assets/logos/fraccionadora-san-juan.webp";
import LaboratorioMemis from "../../assets/logos/laboratorio-memis.webp";
import Matilde from "../../assets/logos/matilde.webp";
import MolinosCarmen from "../../assets/logos/molinos-carmen.webp";
import Siglo from "../../assets/logos/siglo.webp";
import Tea from "../../assets/logos/tea.webp";
import Vidalac from "../../assets/logos/vidalac.webp";
import "./Catalogs.css";
import PdfCard from "../../components/PdfCard/PdfCard";
const Catalogs = ({ currentPath, imageUrl }) => {
  const cardData = [
    Almar,
    Vidalac,
    Siglo,
    FraccionadoraSanJuan,
    Matilde,
    Ferraris,
    Cardenal,
    MolinosCarmen,
    Deulrel,
    Tea,
    LaboratorioMemis,
  ];
  return (
    <div className="w-full flex items-center flex-col">
      <Header currentPath={currentPath} />
      <div className="catalog-container flex w-max justify-center py-5 grid ">
        {cardData.map((data, index) => (
          <PdfCard key={index} imageUrl={data} />
        ))}
      </div>
    </div>
  );
};

export default Catalogs;
