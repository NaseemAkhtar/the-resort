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
        console.log(room)
        if(!room){
            return <Hero>
                <Banner title="oops!" subtitle="No such room could be found">
                    <Link to="/rooms" className="btn-primary">Back to Rooms</Link>
                </Banner>
            </Hero>

        }

        const { name, description, capacity, size, price, pets, images, breakfast, extras} = room
        return <StyleHero img={images[0]}>
                <Banner title={`${name} room`}>
                    <Link to="/" className="btn-primary">Back to Room</Link>
                </Banner>
        </StyleHero >
    }
}
