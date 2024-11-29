import React from 'react';
import { Card } from 'react-bootstrap';
import "./PdfCard.css"

const PdfCard = ({ imageUrl, pdfUrl}) => {
  return (
    <Card className="catalog-card">
      <Card.Img  className="card-img"src={imageUrl} />
      <a href={pdfUrl} className='text-center' style={{backgroundColor:"gray", textDecoration: "none", color: "white"}}>
      <Card.Footer className="card-text" >
        <i class="bi bi-file-earmark-pdf px-1"/> DESCARGAR PDF
      </Card.Footer>
      </a>
    </Card>
  );
};

export default PdfCard;