import React from 'react';
import { SearchBox } from '@mapbox/search-js-react';
import token from '../accessToken';

const accessToken = token;

export function MapSearchBox(props) {
  // Wrapper function to update value of state in parent
    const handleChange = (newVal) =>{
      props.setValWrapper(newVal);
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