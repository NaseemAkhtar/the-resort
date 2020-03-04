import React, { Component } from 'react'
//import items from './data'
import Client from './Contentfull'

/*Client.getEntries({
    content_type: 'theResort'
})
.then((response) => console.log(response.items))
.catch(console.error)*/


//theResort
const RoomContext = React.createContext()
export default class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    }

    getData = async () => {
        try{
            let response = await Client.getEntries({
                content_type: 'theResort',
                //order: '-sys.createdAt' //order by name
                //order: '-fields.price' //reverse order with (-) sign
                order: 'fields.price'
            });

            let rooms = this.formatData(response.items);
            let featuredRooms = rooms.filter(room => room.featured === true);
            let maxPrice = Math.max(...rooms.map(item => item.price))
            let maxSize = Math.max(...rooms.map(item => item.size))
            this.setState({
                rooms,
                featuredRooms,
                sortedRooms : rooms,
                loading : false,
                price: maxPrice,
                maxPrice,
                maxSize
            })

        } catch(err) {
            console.log(err)
        }
    }

    componentDidMount(){
        this.getData()
    }

    formatData(items){
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)
            let room = {id, ...item.fields, images}
            return room
        })
        return tempItems    
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms]
        const room = tempRooms.find(room => room.slug === slug)
        return room
    }

    handleCange = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value    
        const name = event.target.name
        this.setState({
            [name] : value
        }, this.filterRooms)
    }

    filterRooms = () => {
        let {rooms, type, capacity, price, minSize, maxSize, breakfast, pets} = this.state
        let tempRooms = [...rooms]
        //string convert into number
        capacity = parseInt(capacity)
        price = parseInt(price)
        
        //sort by type
        if(type !== 'all'){
            tempRooms = tempRooms.filter(room => room.type === type)
        }

        //sort by capacity
        if(capacity !==  1){
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }
        
        //sort by price
        tempRooms = tempRooms.filter(room => room.price <= price)

        //sort by size
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)

        //sort by breakfast
        if(breakfast){
            tempRooms = tempRooms.filter(room => room.breakfast === true)
        }

        //sort by pets
        if(pets){
            tempRooms = tempRooms.filter(room => room.pets === true)
        }

        this.setState({
            sortedRooms: tempRooms
        })
        
    }

    render() {
        return (
            <RoomContext.Provider value={{
                ...this.state,
                getRoom: this.getRoom,
                handleCange: this.handleCange
            }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return (
            <RoomConsumer>
                {value => <Component {...props} context={value} />}
            </RoomConsumer>
        )
    }
}

export { RoomProvider, RoomConsumer, RoomContext }