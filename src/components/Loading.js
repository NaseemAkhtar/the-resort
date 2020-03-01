import React from 'react';
import loader from '../images/gif/loading-arrow.gif'

export default function Loading() {
    return (
        <div className="loading">
            <h3>Loading Rooms</h3>
            <img src={loader}alt=""/>
        </div>
    );
}