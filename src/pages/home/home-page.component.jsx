import React, { Component} from "react";

import Header from "../../components/header/header.component";
import Gallery from "../../components/gallery-slider/gallery.component";
import Footer from "../../components/footer/footer.component";
import SimpleSlider from "../../components/carousel/carousel.component";



class HomePage extends Component {

    render() {

        return (
            <div>
                <Header/>
                {/* <Gallery/> */}
                <SimpleSlider/>
                <Footer/>
                

            </div>
        )

    }
}

export default HomePage;