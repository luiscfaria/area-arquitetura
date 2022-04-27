import React, { Component } from "react";

import "./about.profile2.styles.css";

class AboutProfile2 extends Component {
  render() {
    

    return (
      <div className="about-profile2">
        <img
          className="profile2-img"
          src={require("./area daniela.jpg")}
          alt="office"
        />

        <div className="text2">
          <h2 className="title2">Daniela Chequer</h2>
          <p className="paragraph2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            tincidunt convallis sem, a condimentum nisi egestas ac. Aliquam
            dapibus mollis turpis, at malesuada nisl hendrerit et. Sed varius
            laoreet turpis, sed imperdiet urna sagittis at. Ut vulputate est sit
            amet fermentum sollicitudin.             
          </p>          
        </div>
      </div>
    );
  }
}

export default AboutProfile2;
