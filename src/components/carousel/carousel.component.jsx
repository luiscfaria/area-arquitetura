import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,      
      autoplaySpeed: 2500,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              style={{ aspectRatio: 16 / 9, width: "100%", objectFit: "cover" }}
              src={
                "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80"
              }
            />
          </div>
          <div>
            <img
              style={{ aspectRatio: 16 / 9, width: "100%", objectFit: "cover" }}
              src={
                "https://images.unsplash.com/photo-1618219740975-d40978bb7378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80"
              }
            />
          </div>
          <div>
            <img
              style={{ aspectRatio: 16 / 9, width: "100%", objectFit: "cover" }}
              src={
                "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              }
            />
          </div>
        </Slider>
      </div>
    );
  }
}
