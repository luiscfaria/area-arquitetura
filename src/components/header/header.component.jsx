import React, { Component} from "react";
import { Link } from "react-router-dom";

import './header.styles.css'


class Header extends Component {

    

    render() {

        const openInstagramInNewTab = () => {
            const newWindow = window.open("https://www.instagram.com/area_aae/", '_blank', 'noopener,noreferrer');
            if (newWindow) newWindow.opener = null;
          };
                

        return (
            <div className="header">

                <div className="container">
                        <div className="logo">                            
                            <img className='logo-img' src={require('./AREA-6.png')} alt="logo"/>
                        </div>

                        <div className="header-menu">
                            
                            <div className="menu-button"> <Link to={'/'} className="link"> Início </Link> </div>

                            <div className="menu-button"> <Link to={'/about'} className="link"> Sobre Nós </Link> </div>

                            <div className="menu-button"> <Link to={'/projetos'} className="link"> Projetos </Link> </div>

                            <div className="menu-button"> <Link to={'/servicos'} className="link"> Serviços </Link> </div>

                            <div className="menu-button"> <Link to={'/depoimentos'} className="link"> Depoimentos </Link> </div>

                            <div className="menu-button"> <Link to={'/contato'} className="link"> Contato </Link> </div>                                                     

                            <div className="social-media-icons">                                
                                <i onClick={() => openInstagramInNewTab()} className="fa-brands fa-instagram"></i>
                            </div>

                        </div>

                        
                </div>                

            </div>
        )

    }
}

export default Header;