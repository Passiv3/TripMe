import React from 'react';
import Mapbox from '../components/Mapbox';
import './MainPage.css';


export default function MainPage (){
    return (
        <div className="page">
            <h2>TripMe!</h2>
            <Mapbox />
        </div>
    );
};
