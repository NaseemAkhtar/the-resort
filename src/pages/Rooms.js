import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import RoomContainer from '../components/RoomsContainer'

const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="Our Room">
                    <Link to="/" className="btn-primary">Home</Link>
                </Banner>
                
            </Hero>

            <RoomContainer/>
        </>
    )
}

export default Rooms
