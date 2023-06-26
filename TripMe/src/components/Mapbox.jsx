import React, {useRef, useEffect, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import token from '../accessToken';
import { MapSearchBox } from './MapSearchBox';
import './Mapbox.css';

mapboxgl.accessToken = token;

export default function Mapbox(){
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-121.89);
    const [lat, setLat] = useState(37.33);
    const [zoom, setZoom] = useState(11);
    const [value, setValue] = useState('');


    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [lng, lat],
                zoom: zoom
            });
        });

    const changeMapValue = (newValue)=>{
        setValue(newValue);
    }
    
    return (
            <div>
                <MapSearchBox map={map.current} setValWrapper = {changeMapValue}></MapSearchBox>
                <div ref={mapContainer} className="map-container" />
            </div>
    );
};
