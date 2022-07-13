import React, { Component} from "react";

import Header from "../../components/header/header.component";

import Footer from "../../components/footer/footer.component";

import './testimonials-page.styles.css'

class TestimonialsPage extends Component {

    render() {

        return (
            <div>
                <Header/>
                <div className="clients">
                    <h1 className="clients-page-title">O que dizem sobre nós</h1>
                    <img
                    className="clients-logos"
                    src="https://c-suiteresources.com/wp-content/uploads/2015/10/client-logos-1024x437.jpg"
                    alt="client-logo"
                    />
                </div>
                
                <Footer/>
                

            </div>
        )

    }
}

export default TestimonialsPage;