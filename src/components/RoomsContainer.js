import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { withRoomConsumer } from '../context'
import Loading from './Loading'

function RoomsContainer({context}){
    const {loading, sortedRooms, rooms} = context
    //console.log(sortedRooms)
    if(loading){
        return <Loading/>
    }
    return(
        <>
            <RoomFilter room={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    )
}

export default withRoomConsumer(RoomsContainer)

// import React from 'react'
// import RoomFilter from './RoomFilter'
// import RoomList from './RoomList'
// import { Link } from 'react-router-dom'
// import {RoomConsumer } from '../context'
// import Loading from './Loading'

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {value => {
//                 const {loading, sortedRooms, rooms} = value
//                 if(loading){
//                     return <Loading/>
//                 }
//                 return(
//                     <div>
//                         Hello from room Rooms Container
//                         <RoomFilter room={rooms} />
//                         <RoomList room={sortedRooms} />
//                     </div>
//                 )
//             }}
//         </RoomConsumer>
//     )
// }
