import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Form as RBForm, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = () => {
  const validationSchema = Yup.object({
    fullName: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, "El nombre solo debe contener letras y espacios")
      .required("Este campo es obligatorio"),
    reason: Yup.string().required("Por favor, selecciona un motivo"),
    email: Yup.string().email("Email inválido").required("Este campo es obligatorio"),
    phone: Yup.string()
      .matches(/^\d{1,12}$/, "El teléfono debe contener solo números y no más de 12 caracteres")
      .required("Este campo es obligatorio"),
    message: Yup.string()
      .max(500, "El mensaje no debe sobrepasar los 500 caracteres")
      .required("Este campo es obligatorio"),
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    emailjs
      .send("service_cpzweqn", "template_y9ql4bl", values, "UUeH-7dFWC_0DwtZK")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        resetForm();
        alert("Mensaje enviado exitosamente");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Hubo un error, por favor intenta de nuevo.");
      })
      .finally(() => setSubmitting(false));
  };

  // const handleSubmit = (values, { resetForm, setSubmitting }) => {
  //   emailjs
  //     .send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, values, import.meta.env.VITE_USER_ID)
  //     .then((response) => {
  //       console.log("SUCCESS!", response.status, response.text);
  //       resetForm();
  //       alert("Mensaje enviado exitosamente");
  //     })
  //     .catch((error) => {
  //       console.error("FAILED...", error);
  //       alert("Hubo un error, por favor intenta de nuevo.");
  //     })
  //     .finally(() => setSubmitting(false));
  // };

  return (
    <div className="pb-5 w-full">
      <Formik
        initialValues={{ fullName: "", reason: "", email: "", phone: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        className="w-full"
      >
        {({ isSubmitting }) => (
          <RBForm as={Form} className="contact-form" style={{ backgroundColor: "#eaeaea", borderRadius: "5px" }}>
            <div className="w-full flex justify-between">
              <RBForm.Group controlId="fullName">
                <RBForm.Label className="fs-6">Nombre y Apellido*</RBForm.Label>
                <Field name="fullName" type="text" placeholder="Nombre y Apellido" className="form-control" />
                <ErrorMessage name="fullName" component="div" className="text-danger" />
              </RBForm.Group>

              <RBForm.Group controlId="reason">
                <RBForm.Label>Motivo*</RBForm.Label>
                <Field name="reason" as="select" className="form-control">
                  <option value="">Por favor, elige una opción</option>
                  <option value="compras">Compras</option>
                  <option value="asesor-comercial">Contacto asesor comercial</option>
                  <option value="reclamos">Reclamos</option>
                  <option value="quiero-socio">Quiero ser un socio estratégico</option>
                  <option value="otro">Otro</option>
                </Field>
                <ErrorMessage name="reason" component="div" className="text-danger" />
              </RBForm.Group>
            </div>
            <div className="w-full flex justify-between">
              <RBForm.Group controlId="email">
                <RBForm.Label>Email*</RBForm.Label>
                <Field name="email" type="email" placeholder="Email" className="form-control" />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </RBForm.Group>

              <RBForm.Group controlId="phone">
                <RBForm.Label>Teléfono*</RBForm.Label>
                <Field name="phone" type="text" placeholder="Teléfono" className="form-control" />
                <ErrorMessage name="phone" component="div" className="text-danger" />
              </RBForm.Group>
            </div>
            <RBForm.Group controlId="message">
              <RBForm.Label>Mensaje*</RBForm.Label>
              <Field name="message" as="textarea" rows={3} placeholder="Escribe tu mensaje" className="form-control" />
              <ErrorMessage name="message" component="div" className="text-danger" />
            </RBForm.Group>

            <Button variant="danger" type="submit" disabled={isSubmitting} className="btn-submit mt-3 w-full">
              Enviar mensaje
            </Button>
          </RBForm>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
