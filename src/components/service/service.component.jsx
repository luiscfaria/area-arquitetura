import React, {Component} from 'react'

import './service.styles.css'

class Service extends Component {



    render() {
        const {title, image, description} = this.props;

        return (
            <div className='service'>
                <div className='line'></div>
                <div className='box'>
                    <img
                        className='service-image'
                        src={image} alt='service-img'
                        />
                    <div className='service-info'>
                        <h3 className='service-title'>{title}</h3>
                        <p className='service-description'>{description}</p>
                    </div>
                </div>


            </div>
        )
    }

}

export default Service;