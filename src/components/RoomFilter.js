import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'

const getUnique  = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({room}) {
    const context = useContext(RoomContext)
    const {handleCange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = context
    let types = getUnique(room, 'type')
    types = ['all', ...types]

    let people = getUnique(room, 'capacity')
    
    return (
        <section className="filter-container">
            <Title title="Search Rooms" />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleCange}>
                        {types.map((item, index) => {
                            return <option value={item} key={index}>{item}</option>
                        })}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleCange}>
                        {people.map((item, index) => {
                            return <option value={item} key={index}>{item}</option>
                        })}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="price">room Price ${price}</label>
                    <input type="range" name="price" id="price"
                    min={minPrice} max={maxPrice} value={price} onChange={handleCange} className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleCange} className="size-input" />
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleCange} className="size-input" />
                    </div>
                </div>
                
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleCange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>

                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleCange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>

            </form>
        </section>
    )
}
