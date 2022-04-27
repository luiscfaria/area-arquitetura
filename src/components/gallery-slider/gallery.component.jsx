import React, { Component} from "react";

import './gallery.styles.css'

class Gallery extends Component {

    constructor () {
        super()

        this.nextImage = this.nextImage.bind(this);
        this.prevImage = this.prevImage.bind(this);

        this.state = {
            slideIndex: 0,
            gallery: [
                {imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80"},
                {imageUrl: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80"},
                {imageUrl: "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"}

            ]
        }

    }

    nextImage() {
        if (this.state.slideIndex !== this.state.gallery.length - 1) {
          this.setState({ slideIndex: this.state.slideIndex + 1 });
        } else if (this.state.slideIndex === this.state.gallery.length - 1) {
          this.setState({ slideIndex: 0 });
        }
      }
    
      prevImage() {
        if (this.state.slideIndex !== 0) {
          this.setState({ slideIndex: this.state.slideIndex - 1 });
        } else if (this.state.slideIndex === 0) {
          this.setState({ slideIndex: this.state.gallery.length - 1 });
        }
      }

    render() {
        return (
            <div className="gallery">
                <div className="slide">
                    <img
                    className='gallery-img active-anim'
                    src={this.state.gallery[this.state.slideIndex].imageUrl} />

                    <div className="slide-arrows">
                            <i
                            className="fa-solid fa-angle-left fa-2x"
                            id="arrow2"
                              onClick={this.prevImage}
                            ></i>
                            <i
                            className="fa-solid fa-angle-right fa-2x"
                            id="arrow2"
                              onClick={this.nextImage}
                            ></i>
                    </div>

                </div>
                

            </div>
        )
    }


}

export default Gallery;