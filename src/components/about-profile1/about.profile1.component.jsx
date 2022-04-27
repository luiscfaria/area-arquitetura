import React, { Component } from "react";

import "./about.profile1.styles.css";

class AboutProfile1 extends Component {
  render() {
    

    return (
      <div className="about-profile1">
        <img
          className="profile1-img"
          src={require("./area gabi.jpg")}
          alt="office"
        />

        <div className="text1">
          <h2 className="title1">Gabriela Samartini</h2>
          <p className="paragraph1">
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

export default AboutProfile1;
