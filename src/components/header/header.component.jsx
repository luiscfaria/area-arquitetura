import React, { Component} from "react";
import { Link } from "react-router-dom";

import './header.styles.css'


class Header extends Component {

    render() {

        return (
            <div className="header">

                <div className="container">
                        <div className="logo">                            
                            <img className='logo-img' src={require('./AREA-7.png')} />
                        </div>

                        <div className="header-menu">
                            <div className="menu-button">Inicio</div>
                            <div className="menu-button">Sobre Nós</div>
                            <div className="menu-button">Projetos</div>
                            <div className="menu-button">Serviços</div>
                            <div className="menu-button">Clientes</div>
                            <div className="menu-button">Contato</div>

                            <div className="social-media-icons">
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                        </div>

                        
                </div>                

            </div>
        )

    }
}

export default Header;