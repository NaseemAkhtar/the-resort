import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: 'Free Cocktails',
                info: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form'
            },
            {
                icon: <FaHiking/>,
                title: 'Endless Hiking',
                info: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form'
            },
            {
                icon: <FaShuttleVan/>,
                title: 'Free Shuttle',
                info: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form'
            },
            {
                icon: <FaBeer/>,
                title: 'Strongest Beer',
                info: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
