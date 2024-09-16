import React from "react";
import Header from "../../components/Header/Header";
import Card from 'react-bootstrap/Card';
import Almar from "../../assets/logos/almar.jpeg"
import Cardenal from "../../assets/logos/cardenal.jpeg"
import Deulrel from "../../assets/logos/deulrel.jpeg"
import Ferraris from "../../assets/logos/ferraris.jpeg"
import FraccionadoraSanJuan from "../../assets/logos/fraccionadora-san-juan.jpeg"
import LaboratorioMemis from "../../assets/logos/laboratorio-memis.jpeg"
import Matilde from "../../assets/logos/matilde.jpeg"
import MolinosCarmen from "../../assets/logos/molinos-carmen.jpeg"
import Siglo from "../../assets/logos/siglo.jpeg"
import Tea from "../../assets/logos/tea.jpeg"
import Vidalac from "../../assets/logos/vidalac.jpeg"
import "./Catalogs.css"
const Catalogs = ({ currentPath }) => {
  return (
    <div className="w-full flex items-center flex-col">
      <Header currentPath={currentPath} />
      <div className="catalog-container flex w-max justify-center py-5 grid ">
        <Card className="catalog-card">
          <Card.Img variant="top" src={Almar} className="card-img" />
              <Card.Footer className="card-text" >
                <i class="bi bi-file-earmark-pdf">DESCARGAR PDF</i>
              </Card.Footer>
        </Card>
        <Card className="catalog-card">
          <Card.Img variant="top" src={Cardenal} />
              <Card.Footer className="card-text" >
                <i class="bi bi-file-earmark-pdf">DESCARGAR PDF</i>
              </Card.Footer>
        </Card>
        <Card className="catalog-card">
          <Card.Img variant="top" src={Deulrel} />
              <Card.Footer className="card-text" >
                <i class="bi bi-file-earmark-pdf">DESCARGAR PDF</i>
              </Card.Footer>
        </Card>
        <Card className="catalog-card">
          <Card.Img variant="top" src={Ferraris} />
              <Card.Footer className="card-text" >
                <i class="bi bi-file-earmark-pdf">DESCARGAR PDF</i>
              </Card.Footer>
        </Card>
      <Card className="catalog-card">
          <Card.Img variant="top" src={FraccionadoraSanJuan} />
              <Card.Footer className="card-text" >
                <i class="bi bi-file-earmark-pdf">DESCARGAR PDF</i>
              </Card.Footer>
      </Card>
      <Card className="catalog-card">
          <Card.Img variant="top" src={LaboratorioMemis} />
              <Card.Footer className="card-text" >
                <i class="bi bi-file-earmark-pdf">DESCARGAR PDF</i>
              </Card.Footer>
      </Card>
      <Card className="catalog-card">
          <Card.Img variant="top" src={Matilde} />
              <Card.Footer className="card-text" >
                <i class="bi bi-file-earmark-pdf">DESCARGAR PDF</i>
              </Card.Footer>
        </Card>
      <Card className="catalog-card">
          <Card.Img variant="top" src={MolinosCarmen} />
              <Card.Footer className="card-text" >
                <i class="bi bi-file-earmark-pdf">DESCARGAR PDF</i>
              </Card.Footer>
      </Card>
      <Card className="catalog-card">
          <Card.Img variant="top" src={Siglo} />
              <Card.Footer className="card-text" >
                <i class="bi bi-file-earmark-pdf">DESCARGAR PDF</i>
              </Card.Footer>
        </Card>
        <Card className="catalog-card">
          <Card.Img variant="top" src={Tea} />
              <Card.Footer className="card-text" >
                <i class="bi bi-file-earmark-pdf">DESCARGAR PDF</i>
              </Card.Footer>
        </Card>
        <Card className="catalog-card">
          <Card.Img variant="top" src={Vidalac} />
              <Card.Footer className="card-text" >
                <i class="bi bi-file-earmark-pdf">DESCARGAR PDF</i>
              </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default Catalogs;
