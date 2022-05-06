import React, {Component} from 'react'

import './project.styles.css'

class Project extends Component {



    render() {
        const {title, image, description} = this.props;

        return (
            <div className='project'>
                <div className='line'></div>
                <div className='box'>
                    <img
                        className='project-image'
                        src={image} alt='project-img'
                        />
                    <div className='project-info'>
                        <h3 className='project-title'>{title}</h3>
                        <p className='project-description'>{description}</p>
                    </div>
                </div>


            </div>
        )
    }

}

export default Project;