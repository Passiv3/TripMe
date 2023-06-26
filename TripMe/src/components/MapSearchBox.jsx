import React from 'react';
import { SearchBox } from '@mapbox/search-js-react';
import token from '../accessToken';

const accessToken = token;

export function MapSearchBox(props) {
    const handleChange = (e) =>{
      props.setValWrapper();
    };

    return (
      <form>
        <SearchBox
          accessToken={token} 
          value = {props.value}
          map={props.map}
          onChange = {handleChange}
          
          />
      </form>
    );
  }