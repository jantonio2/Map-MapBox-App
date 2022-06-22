import { useContext, useEffect, useReducer } from 'react';
import { Map, Marker, Popup } from 'mapbox-gl';
import { MapContext } from './MapContext';
import { mapRedducer } from './mapReducer';
import { PlacesContext } from '../places/PlacesContext';

export interface MapState {
  isMapReady: boolean;
  map?: Map;
  markers: Marker[];
}

const INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined,
  markers: []
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MapProvider = ({ children }: Props) => {
  
  const [state, dispatch] = useReducer(mapRedducer, INITIAL_STATE);
  const { places } = useContext(PlacesContext);

  useEffect(() => {
    
    state.markers.forEach( marker => marker.remove() );
    const newMarkers: Marker[] = [];
    
    for (const place of places) {
      const [ lng, lat ] = place.center;
      const popup = new Popup()
        .setHTML(`
          <h6>${ place.text_es }</h6>
          <P>${ place.place_name_es }</P>
        `);
      
      const newMarker = new Marker()
        .setPopup(popup)
        .setLngLat([ lng, lat ])
        .addTo( state.map! );

      newMarkers.push( newMarker );
    }

    //todo: limpiar polyline

    dispatch({ type: 'setMarkers', payload: newMarkers });

  }, [places]);
  

  const setMap = (map: Map) => {
    
    const myLocationPopUP = new Popup()
      .setHTML(`
        <h4>Aquí estoy</h4>
        <h4>En algún lugar del mundo</h4>
      `);

    new Marker({
      color: '#61DAFB'
    })
      .setLngLat( map.getCenter() )
      .setPopup(myLocationPopUP)
      .addTo(map);

    dispatch({
      type: 'setMap',
      payload: map,
    });
  }

  const getRouteBetweenPoints = async(start: [number, number], end: [number, number]) => {

  }

  return (
    <MapContext.Provider value={{
      ...state,

      // Methods
      setMap,
      getRouteBetweenPoints
    }}>
      { children }
    </MapContext.Provider>
  );
}
