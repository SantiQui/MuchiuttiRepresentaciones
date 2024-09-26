import React from "react";
import Header from "../../components/Header/Header";
import ContactForm from "../../components/ContactForm/ContactForm";
import contactlogo from "../../assets/img_contacto.webp";
import "./Contact.css";

const Contact = ({ currentPath }) => {
  return (
    <div style={{ backgroundColor: " #f0efeb" }} className="w-full flex flex-col items-center">
      <Header currentPath={currentPath} />
      <div className="pt-5 w-full w-max">
        <h1 className="py-5 fw-bold text-center">Contáctenos</h1>
        <div className="contact-movile flex items-center">
          <img className="img-contacto" src={contactlogo} />
          <div className="contact-separator" />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
