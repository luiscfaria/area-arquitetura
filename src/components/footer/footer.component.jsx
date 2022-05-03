import React, { Component} from "react";
import { Link } from "react-router-dom";

import './footer.styles.css'

class Footer extends Component {

    render(){
        return (
            <div className="footer">
                <div className="footer-container">
                    <div className="social-media">
                        Siga-nos no Instagram
                            <a
                                className="anchor-tag"
                                href="https://www.instagram.com/area_aae/"
                                >
                                    <i className="fa-brands fa-instagram"></i>                                    
                            </a>
                        
                        <div>
                            |
                        </div>

                        <div className="whatsapp-button">
                            Fale conosco no whatsapp
                            <i className="fa-brands fa-whatsapp"></i>
                        </div>

                    </div>

                    <div className="address">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        tincidunt convallis sem.
                    </div>                   
                    

                </div>

            </div>
        )
    }
}

export default Footer;