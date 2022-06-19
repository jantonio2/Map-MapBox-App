import React from 'react'
import ReactDOM from 'react-dom/client'
import { MapsApp } from './MapsApp';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYW50b25pb3JvY2hhdmVkaWEiLCJhIjoiY2w0bHY2a2RmMGxzZjNsbXY0ZnY2ZXI3YyJ9.3UdVSbNq9dHpS9kCBm2Sxw';

if ( !navigator.geolocation ) {
  alert('Geolocation is not supported by your browser');
  throw new Error('Geolocation is not supported by your browser');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
)
