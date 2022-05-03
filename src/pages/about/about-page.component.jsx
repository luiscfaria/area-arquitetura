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
                    <div className="featured">
                        <div className="featured-title">
                            Destaques
                        </div>

                        <div className="featured-text">                    
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus risus quis ultricies pretium. Vestibulum eu commodo est. Pellentesque quis orci sapien. Mauris eu scelerisque nisl. Phasellus vehicula tincidunt arcu ac semper. Ut vel efficitur ante, et luctus nulla. Curabitur imperdiet hendrerit dignissim. Curabitur egestas turpis eu ante tempus, sit amet hendrerit elit efficitur. Morbi imperdiet molestie porta. Donec tincidunt, eros sed consequat placerat, tortor eros iaculis velit, vel ornare velit eros sit amet sapien. Phasellus accumsan nisi nec neque dignissim, id suscipit tellus ornare.
                            <br/>
                            <br/>
                            Duis odio orci, iaculis non magna a, ultrices fermentum est. Duis magna arcu, egestas eget lectus pretium, sodales sollicitudin arcu. Vestibulum auctor, lacus id mollis convallis, arcu lorem elementum lacus, eget dapibus magna libero vitae diam. Maecenas condimentum eget tellus vitae bibendum. Nulla faucibus vulputate magna, pulvinar luctus odio ultricies sed. Ut dapibus risus nec mi fermentum scelerisque. Integer id consectetur diam, ut lacinia diam. Cras arcu lacus, posuere nec urna sit amet, placerat semper nunc. Praesent venenatis nulla metus, quis vulputate urna ullamcorper suscipit.
                            <br/>
                            <br/>
                            Curabitur pharetra tellus eu erat varius, id dapibus neque pulvinar. Vestibulum malesuada velit et quam sagittis, nec aliquam nibh ullamcorper. Nulla facilisi. Sed quis consectetur orci, nec scelerisque felis. Aliquam in ultricies turpis. Aenean non lacus massa. Nam nec urna augue. Duis pellentesque id lacus in laoreet. Ut tempus iaculis enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras convallis arcu eu tortor tempus, ac euismod felis semper. Phasellus at dui ligula.
                        </div>

                    </div>
                </div>
                <Footer/>

            </div>
        )

    }

}

export default AboutPage;