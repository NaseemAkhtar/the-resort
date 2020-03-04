import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import StyleHero from '../components/StyledHero'


export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext

    //componentDidMount(){}
    render() {
        const {getRoom} = this.context
        const room = getRoom(this.state.slug)
        if(!room){
            return <Hero>
                <Banner title="oops!" subtitle="No such room could be found">
                    <Link to="/rooms" className="btn-primary">Back to Rooms</Link>
                </Banner>
            </Hero>

        }

        const { name, description, capacity, size, price, pets, images, breakfast, extras} = room

        const [banner, ...imgTiles] = images
        return(
        <>
            <StyleHero img={banner || this.state.defaultBcg}>
                <Banner title={`${name} room`}>
                    <Link to="/" className="btn-primary">Back to Room</Link>
                </Banner>
            </StyleHero >

            <section className="single-room">
                <div className="single-room-images">
                    {imgTiles.map((image, index) => {
                        return <img key={index} src={image} alt={name} />
                    })}
                </div>

                <div className="single-room-info">
                    <article className="desc">
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>

                    <article className="info">
                        <h3>Info</h3>
                        <h6>Price: ${price}</h6>
                        <h6>Size: {size} SQFT</h6>
                        <h6>Max Capacity: {
                            capacity > 1 ? `${capacity} people` : `${capacity} person`
                         }</h6>
                        <h6>{pets ? 'Pets allowed' : 'No pets allowed'}</h6>
                        <h6>{breakfast && "Free breakfast included"}</h6>
                    </article>
                </div>
            </section>

            <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {extras.map((item, index) => {
                        return <li key={index}>- {item}</li>
                    })}
                </ul>
            </section>

        </>
        )
    }
}
