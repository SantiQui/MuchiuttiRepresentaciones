import React from "react";
import Header from "../../components/Header/Header";
import Card from 'react-bootstrap/Card';
import Almar from "../../assets/logos/almar.jpeg"
import Cardenal from "../../assets/logos/cardenal.jpeg"
import Deulrel from "../../assets/logos/deulrel.png"
import Ferraris from "../../assets/logos/ferraris.jpeg"
import FraccionadoraSanJuan from "../../assets/logos/fraccionadora-san-juan.jpeg"
import LaboratorioMemis from "../../assets/logos/laboratorio-memis.jpeg"
import Matilde from "../../assets/logos/matilde.jpeg"
import MolinosCarmen from "../../assets/logos/molinos-carmen.jpeg"
import Siglo from "../../assets/logos/siglo.jpeg"
import Tea from "../../assets/logos/tea.jpeg"
import Vidalac from "../../assets/logos/vidalac.jpeg"
import "./Catalogs.css"
import PdfCard from "../../components/PdfCard/PdfCard";
const Catalogs = ({ currentPath, imageUrl }) => {
  const cardData = [
     Almar,
     Cardenal,
     Deulrel,
     Ferraris,
     FraccionadoraSanJuan,
     LaboratorioMemis,
     Matilde,
     MolinosCarmen,
     Siglo,
     Tea,
     Vidalac,
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
