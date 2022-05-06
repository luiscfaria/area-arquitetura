import React, { Component} from "react";

import Header from "../../components/header/header.component";
import Service from "../../components/service/service.component";
import Footer from "../../components/footer/footer.component";

import './services-page.styles.css'

class ServicesPage extends Component {

    constructor() {
        super()

        this.state = {
            services: [
                {
                    title: "Consultoria",
                    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel bibendum leo. Quisque posuere bibendum ex. Maecenas iaculis neque euismod quam sollicitudin sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas nibh enim, egestas id finibus vel, scelerisque id elit. Donec placerat quis risus ut rutrum. Aliquam purus justo, mattis quis commodo vitae, efficitur at eros. Aliquam quis euismod nibh."
                },
                {
                    title: "Projeto Interior",
                    imageUrl: "https://images.unsplash.com/photo-1606744824163-985d376605aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel bibendum leo. Quisque posuere bibendum ex. Maecenas iaculis neque euismod quam sollicitudin sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas nibh enim, egestas id finibus vel, scelerisque id elit. Donec placerat quis risus ut rutrum. Aliquam purus justo, mattis quis commodo vitae, efficitur at eros. Aliquam quis euismod nibh."
                },
                {
                    title: "Projeto Arquitetônico",
                    imageUrl: "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel bibendum leo. Quisque posuere bibendum ex. Maecenas iaculis neque euismod quam sollicitudin sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas nibh enim, egestas id finibus vel, scelerisque id elit. Donec placerat quis risus ut rutrum. Aliquam purus justo, mattis quis commodo vitae, efficitur at eros. Aliquam quis euismod nibh."
                },
                {
                    title: "Projeto Estrutural",
                    imageUrl: "https://images.unsplash.com/photo-1580982330720-bd5e0fed108b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel bibendum leo. Quisque posuere bibendum ex. Maecenas iaculis neque euismod quam sollicitudin sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas nibh enim, egestas id finibus vel, scelerisque id elit. Donec placerat quis risus ut rutrum. Aliquam purus justo, mattis quis commodo vitae, efficitur at eros. Aliquam quis euismod nibh."
                },
                {
                    title: "Projeto Hidrossanitário",
                    imageUrl: "https://i0.wp.com/rossot.com.br/wp-content/uploads/2020/08/projeto-hidro-3-1-1080x860.jpg",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel bibendum leo. Quisque posuere bibendum ex. Maecenas iaculis neque euismod quam sollicitudin sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas nibh enim, egestas id finibus vel, scelerisque id elit. Donec placerat quis risus ut rutrum. Aliquam purus justo, mattis quis commodo vitae, efficitur at eros. Aliquam quis euismod nibh."
                },
                {
                    title: "Projeto Elétrico",
                    imageUrl: "https://www.weg.net/tomadas/blog/wp-content/uploads/2020/01/erros-do-projeto-eletrico-1.jpg",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel bibendum leo. Quisque posuere bibendum ex. Maecenas iaculis neque euismod quam sollicitudin sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas nibh enim, egestas id finibus vel, scelerisque id elit. Donec placerat quis risus ut rutrum. Aliquam purus justo, mattis quis commodo vitae, efficitur at eros. Aliquam quis euismod nibh."
                },
                {
                    title: "Laudo Técnico",
                    imageUrl: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel bibendum leo. Quisque posuere bibendum ex. Maecenas iaculis neque euismod quam sollicitudin sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas nibh enim, egestas id finibus vel, scelerisque id elit. Donec placerat quis risus ut rutrum. Aliquam purus justo, mattis quis commodo vitae, efficitur at eros. Aliquam quis euismod nibh."
                },
                {
                    title: "Planilha Orçamentária  e Cronograma Físico-Financeiro",
                    imageUrl: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel bibendum leo. Quisque posuere bibendum ex. Maecenas iaculis neque euismod quam sollicitudin sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas nibh enim, egestas id finibus vel, scelerisque id elit. Donec placerat quis risus ut rutrum. Aliquam purus justo, mattis quis commodo vitae, efficitur at eros. Aliquam quis euismod nibh."
                },
                {
                    title: "Gerenciamento de Obra",
                    imageUrl: "https://images.unsplash.com/photo-1584438902484-75bdf1796031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel bibendum leo. Quisque posuere bibendum ex. Maecenas iaculis neque euismod quam sollicitudin sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas nibh enim, egestas id finibus vel, scelerisque id elit. Donec placerat quis risus ut rutrum. Aliquam purus justo, mattis quis commodo vitae, efficitur at eros. Aliquam quis euismod nibh."
                }


            ]
        }


    }

    render() {

        return (
            <div>
                <Header/>
                <h1 className="service-page-title">Serviços</h1>
                <div className="services">

                {this.state.services.map(service => (
                    <Service 
                    title={service.title}
                    image={service.imageUrl}
                    description={service.description}  
                    /> 
                    ))}
                    
                </div>
                
                <Footer/>
                

            </div>
        )

    }
}

export default ServicesPage;