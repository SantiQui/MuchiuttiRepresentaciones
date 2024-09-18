import React from 'react';
import { Card } from 'react-bootstrap';
import "./PdfCard.css"

const PdfCard = ({ imageUrl}) => {
  return (
    <Card className="catalog-card">
      <Card.Img variant="top" src={imageUrl} />
      <Card.Footer className="card-text">
        <a href="" className='card-link'><i class="bi bi-file-earmark-pdf">DESCARGAR PDF</i></a>
        
      </Card.Footer>
    </Card>
  );
};

export default PdfCard;