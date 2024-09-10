import React from "react";
import Header from "../../components/Header/Header";
import ContactForm from "../../components/ContactForm/ContactForm";
import contactlogo from "../../assets/img_contacto.webp";
import "./Contact.css";

const Contact = ({ currentPath }) => {
  return (
    <div style={{ backgroundColor: " #fefae0 " }} className="w-full flex flex-col items-center">
      <Header currentPath={currentPath} />
      <h1 className="pt-5 fw-bold">Contáctenos</h1>
      <div className="contact-movile flex flex-col items-center">
        <ContactForm />
        <img className="img-contacto" src={contactlogo} />
      </div>
    </div>
  );
};

export default Contact;
