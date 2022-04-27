import React, { Component} from "react";

import './about-page.styles.css'

import Header from "../../components/header/header.component";
import AboutOffice from "../../components/about-office/about.office.component";
import AboutProfile1 from "../../components/about-profile1/about.profile1.component";
import AboutProfile2 from "../../components/about-profile2/about.profile2.component";
import Footer from "../../components/footer/footer.component";


class AboutPage extends Component {

    render() {

        return(
            <div className="about-page">
                <Header/>
                <AboutOffice/>
                <div className="profiles">
                    <AboutProfile1/>
                    <AboutProfile2/>
                </div>
                <Footer/>

            </div>
        )

    }

}

export default AboutPage;