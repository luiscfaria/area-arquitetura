import React, { Component } from "react";

import Header from "../../components/header/header.component";

import Footer from "../../components/footer/footer.component";

import Testimonial from "../../components/testimonial/testimonial.component";

import "./testimonials-page.styles.css";

const testimonials = [
  {
    nome: "Rodrigo",
    empresa: "O Andarilho",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque totam quis quod iste ducimus voluptatibus dolor vero, rem ratione consequuntur laudantium veritatis, earum quibusdam sequi aut reiciendis temporibus soluta distinctio?",
  },
  {
    nome: "Rodrigo",
    empresa: "O Andarilho",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque totam quis quod iste ducimus voluptatibus dolor vero, rem ratione consequuntur laudantium veritatis, earum quibusdam sequi aut reiciendis temporibus soluta distinctio?",
  },
  {
    nome: "Rodrigo",
    empresa: "O Andarilho",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque totam quis quod iste ducimus voluptatibus dolor vero, rem ratione consequuntur laudantium veritatis, earum quibusdam sequi aut reiciendis temporibus soluta distinctio?",
  },
  {
    nome: "Rodrigo",
    empresa: "O Andarilho",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque totam quis quod iste ducimus voluptatibus dolor vero, rem ratione consequuntur laudantium veritatis, earum quibusdam sequi aut reiciendis temporibus soluta distinctio?",
  },
  {
    nome: "Rodrigo",
    empresa: "O Andarilho",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque totam quis quod iste ducimus voluptatibus dolor vero, rem ratione consequuntur laudantium veritatis, earum quibusdam sequi aut reiciendis temporibus soluta distinctio?",
  },
  {
    nome: "Rodrigo",
    empresa: "O Andarilho",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque totam quis quod iste ducimus voluptatibus dolor vero, rem ratione consequuntur laudantium veritatis, earum quibusdam sequi aut reiciendis temporibus soluta distinctio?",
  },
];

class TestimonialsPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="clients">
          <h1 className="clients-page-title">O que dizem sobre nós</h1>
          <div className="testimonials">
            {testimonials.map((el) => (
              <Testimonial nome={el.nome} empresa={el.empresa} texto={el.texto}/>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default TestimonialsPage;
