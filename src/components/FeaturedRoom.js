import React, { Component } from 'react'
import Title from './Title'
import {RoomContext} from '../context'

export default class FeaturedRoom extends Component {
    static contextType = RoomContext
    render() {
        const value = this.context
        console.log(value)
        return (
            <div>
                <Title title="Featured Room" />
                {value}
            </div>
        )
    }
}
