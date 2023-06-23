import React from 'react';
import { SearchBox } from '@mapbox/search-js-react';
import token from '../accessToken';

const accessToken = token;

export function MapSearchBox(props) {
    const [value, setValue] = React.useState('');

    return (
      <form>
        <SearchBox accessToken={token}/>
      </form>
    );
  }