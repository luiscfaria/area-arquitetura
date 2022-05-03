import React, { Component} from "react";

import './projects-page.styles.css'

import Header from "../../components/header/header.component";
import Project from "../../components/project/project.component";
import Footer from "../../components/footer/footer.component";


class ProjectsPage extends Component {

    constructor() {
        super()

        this.state = {
            arquitetonico: [
                {
                    title: "Projeto X",
                    imageUrl: "https://images.unsplash.com/photo-1633109870201-318921e3f992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel bibendum leo. Quisque posuere bibendum ex. Maecenas iaculis neque euismod quam sollicitudin sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas nibh enim, egestas id finibus vel, scelerisque id elit. Donec placerat quis risus ut rutrum. Aliquam purus justo, mattis quis commodo vitae, efficitur at eros. Aliquam quis euismod nibh."
                },
                {
                    title: "Projeto Y",
                    imageUrl: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel bibendum leo. Quisque posuere bibendum ex. Maecenas iaculis neque euismod quam sollicitudin sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas nibh enim, egestas id finibus vel, scelerisque id elit. Donec placerat quis risus ut rutrum. Aliquam purus justo, mattis quis commodo vitae, efficitur at eros. Aliquam quis euismod nibh."
                },
                {
                    title: "Projeto Z",
                    imageUrl: "https://images.unsplash.com/photo-1618221312573-404f9a52798d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel bibendum leo. Quisque posuere bibendum ex. Maecenas iaculis neque euismod quam sollicitudin sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas nibh enim, egestas id finibus vel, scelerisque id elit. Donec placerat quis risus ut rutrum. Aliquam purus justo, mattis quis commodo vitae, efficitur at eros. Aliquam quis euismod nibh."
                }


            ]
        }


    }

    render() {

        return(
            <div className="about-page">
                <Header/>
                <h1 className="project-page-title">Projetos</h1>
                <div className="projects">

                {this.state.arquitetonico.map(project => (
                    <Project 
                    title={project.title}
                    image={project.imageUrl}
                    description={project.description}  
                    /> 
                    ))}
                    
                </div>

                
                
                <Footer/>

            </div>
        )

    }

}

export default ProjectsPage;