import React from 'react';
import { Link} from "react-router-dom"
import "./NotFound.css"
const NotFound = () => {
  return (
    <div style={{height:"100vh"}} className='flex items-center justify-center flex-col'>
      <h1 className='notfound-404 '>404</h1>
      <h2 className='notfound-page'>Page Not Found</h2>
      <div className='notfound-link flex items-center justify-center'>
        <Link to="/" style={{paddingRight: "10px", textDecoration: "none", color: "black"}}> Ir al inicio</Link>
        <i class="bi bi-arrow-right"></i>
      </div>
    </div>
  )
}

export default NotFound