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
    {image : Almar, pdf: ""},
    {image : Vidalac, pdf: "https://drive.google.com/file/d/1sQmR8TPhQuEbpH-qxrYNZ11L9Sh7VRVg/view?usp=drive_link"},
    {image : Siglo, pdf: "https://drive.google.com/file/d/115V4xc0MSkF6xcAdQfWUw_uMmoOhMI9m/view?usp=drive_link"},
    {image : FraccionadoraSanJuan, pdf: ""},
    {image : Matilde, pdf: "https://drive.google.com/file/d/197dcCGyR_HwwMbOd64Hk9yvKQ65vFMev/view?usp=drive_link"},
    {image : Ferraris, pdf: ""},
    {image : Cardenal , pdf: "https://drive.google.com/file/d/1Uv7zXV0hMD_fDsxBvmAxDWWhBk7pwlJ9/view?usp=drive_link"},
    {image : MolinosCarmen, pdf: ""},
    {image : Deulrel , pdf: ""},
    {image : Tea, pdf: ""},
    {image : LaboratorioMemis, pdf: ""},
  ];
  return (
    <div className="w-full flex items-center flex-col">
      <Header currentPath={currentPath} />
      <div className="catalog-container flex w-max justify-center py-5 grid ">
        {cardData.map((data, index) => (
          <PdfCard key={index} imageUrl={data.image} pdfUrl ={data.pdf} />
        ))}
      </div>
    </div>
  );
};

export default Catalogs;
