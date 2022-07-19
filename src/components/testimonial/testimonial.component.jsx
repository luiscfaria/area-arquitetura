import React from "react";

const Testimonial = ({ nome, empresa, texto }) => {
  return (
    <div
      style={{
        backgroundColor: "#dbcfc9",
        width: "95%",
        height: "200px",
        margin: '0.5rem 0',
        padding: "0.8rem 0.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: '2px',
        fontFamily: 'Josefin sans',
        fontWeight: '500',
        boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)'
      }}
    >
      <div>
        <i class="fa-solid fa-quote-left" style={{color: 'var(--primary-dark-color)', fontSize: '2.5rem'}}></i>
        <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
          {texto}
        </p>
      </div>
      <div>
        <span>{nome}</span> | <span>{empresa}</span>
      </div>
    </div>
  );
};

export default Testimonial;
