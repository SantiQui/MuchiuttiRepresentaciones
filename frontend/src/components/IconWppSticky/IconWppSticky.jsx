import React from "react";
import iconwpp from "../../assets/iconwpp.webp";

const IconWppSticky = () => {
  return (
    <a
      href="https://wa.me/5493426115556"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "1.5rem",
        left: "0.5rem",
        zIndex: "99",
      }}
    >
      <img style={{ width: "6.5rem" }} src={iconwpp} />
    </a>
  );
};

export default IconWppSticky;
