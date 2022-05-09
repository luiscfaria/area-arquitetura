import React, { Component} from "react";

import Header from "../../components/header/header.component";

import Footer from "../../components/footer/footer.component";

import './contact-page.styles.css'

class ContactPage extends Component {

    render() {

        return (
            <div>
                <Header/>
                <div className="contact-page">
                        <h3 className="contact-title">Fale com a gente:</h3>
                    <div className="contact-box">
                        <div className="form">
                            <div className="dados">
                                <div className="field">
                                    <i className="fa-solid fa-user"></i>
                                    <input className="input" type="text" placeholder="Nome"></input>
                                </div>
                                <div className="field">
                                    <i className="fa-solid fa-phone"></i>
                                    <input className="input" type="text" placeholder="Telefone"></input>
                                </div>
                                <div className="field">
                                    <i className="fa-solid fa-envelope"></i>
                                    <input className="input" type="email" placeholder="e-mail"></input>
                                </div>
                            </div>
                            <div className="field message">
                                    <i className="fa-solid fa-message"></i>
                                    <textarea className="text-area" type="text" placeholder="Mensagem"></textarea>
                            </div>
                            <button className="button">ENVIAR</button>                                                 
                            

                        </div>
                    </div>



                </div>
                
                <Footer/>
                

            </div>
        )

    }
}

export default ContactPage;