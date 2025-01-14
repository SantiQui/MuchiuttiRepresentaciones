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
const Catalogs = ({ currentPath}) => {

  const cardData = [
    {image : Almar, pdfUrl: ""},
    {image : Vidalac, pdfUrl: "https://drive.google.com/file/d/1sF78CfozjYMDYwMPDagQ4Dz2No9jXEC8/view?usp=sharing"},
    {image : Siglo, pdfUrl: "https://drive.google.com/file/d/1mFIp00eKD4j6hjJlzOAhGz0Q2idckUCK/view?usp=sharing"},
    {image : FraccionadoraSanJuan, pdfUrl: "https://drive.google.com/file/d/1mc5bl5sDmyCRObFon6xNbyfo6QuNO3Wj/view?usp=sharing"},
    {image : Matilde, pdfUrl: "https://drive.google.com/file/d/1SvqpMJsCutWbubc0Ad9FGc8OoBAhx6F9/view?usp=drive_link"},
    {image : Ferraris, pdfUrl: "https://drive.google.com/file/d/1CzE1037M4uhTJmh11E7NrOq0xkEmq5OK/view?usp=drive_link"},
    {image : Cardenal , pdfUrl: "https://drive.google.com/file/d/1aExMcjombZ2Kq1KfpeJh9JtmlafpGCgV/view?usp=sharing"},
    {image : MolinosCarmen, pdfUrl: "https://drive.google.com/file/d/1ujfKPGZCO-szZmAW4d4GKveb9Gtp0Uzb/view?usp=sharing"},
    {image : Deulrel , pdfUrl: ""},
    {image : Tea, pdfUrl: "https://drive.google.com/file/d/1XcVVw5vOjcePtbF3B9WYXSW5lBS0xdF_/view?usp=sharing"},
    {image : LaboratorioMemis, pdfUrl: "https://drive.google.com/file/d/1Md4ld_rljSqdz5VzyWRPS0eZHSUtnzbK/view?usp=sharing"},
  ];
  return (
    <div className="w-full flex items-center flex-col">
      <Header currentPath={currentPath} />
      <div className="catalog-container flex w-max justify-center py-5 grid ">
        {cardData.map((data, index) => (
          <PdfCard key={index} imageUrl={data.image} pdfUrl ={data.pdfUrl} />
        ))}
      </div>
    </div>
  );
};

export default Catalogs;
