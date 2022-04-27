import React, { Component } from "react";

import "./about.office.styles.css";

class AboutOffice extends Component {
  render() {
    

    return (
      <div className="about-office">
        <img
          className="office-img"
          src={require("./area xx.jpg")}
          alt="office"
        />

        <div className="text">
          <h2 className="title">Nosso escritório</h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            tincidunt convallis sem, a condimentum nisi egestas ac. Aliquam
            dapibus mollis turpis, at malesuada nisl hendrerit et. Sed varius
            laoreet turpis, sed imperdiet urna sagittis at. Ut vulputate est sit
            amet fermentum sollicitudin.
             
          </p>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            tincidunt convallis sem, a condimentum nisi egestas ac. Aliquam
            dapibus mollis turpis, at malesuada nisl hendrerit et. Sed varius
            laoreet turpis, sed imperdiet urna sagittis at. Ut vulputate est sit
            amet fermentum sollicitudin. Phasellus non egestas felis.
            Suspendisse potenti. Nunc tincidunt sed magna a ullamcorper. Duis
            euismod est ac enim ullamcorper, id lacinia eros dictum. In at
            pharetra ligula. Praesent fringilla dui at consequat condimentum. In
            cursus nunc et ligula vestibulum, vitae tempus eros ultrices. Fusce
            a viverra purus. Ut ut congue dui, sit amet iaculis nibh. Morbi vel
            pretium nisl. Phasellus et dignissim eros. Aliquam non metus eget
            lectus interdum venenatis. Suspendisse sagittis velit eu efficitur
            vestibulum. Aliquam congue massa at pharetra ornare. Quisque
            elementum massa nec orci tristique pulvinar id at mi. Mauris at eros
            et enim finibus tincidunt et eu diam. Mauris arcu lacus, semper sed
            ligula ac, vestibulum sodales metus. 
          </p>
        </div>
      </div>
    );
  }
}

export default AboutOffice;
