import { useContext, useState } from 'react'
import { MapContext, PlacesContext } from '../context'
import { LoadingPlaces } from './LoadingPlaces';
import { Feature } from '../interfaces/places';

export const SearchResults = () => {

  const { places, isLoadingPlaces } = useContext(PlacesContext);
  const { map } = useContext(MapContext); 
  const [activeId, setActiveId] = useState('');

  const onPlaceClicked = ( place: Feature ) => {
    setActiveId( place.id );
    const [ lng, lat ] = place.center;
    map?.flyTo({
      center: [ lng, lat ],
      zoom: 14
    });
  }

  if (isLoadingPlaces) {
    return <LoadingPlaces />;
  }

  if (places.length === 0) {
    return <></>;
  }

  return (
    <ul className='list-group mt-3'>

      {
        places.map( place => (
          <li 
            className={`list-group-item list-group-item-action pointer ${ (activeId === place.id) ? 'active' : '' }`}
            key={place.id}
            onClick={ () => onPlaceClicked(place) }
          >
            <h6>{ place.text_es }</h6>
            <p
              // className='text-muted'
              style={{
                fontSize: '12px'
              }}
            >
             { place.place_name }
            </p>
            <button className={`btn btn-sm ${ activeId === place.id ? 'btn-outline-light' : 'btn-outline-primary' }`}>
              Direcciones
            </button>
          </li>
        ) )
      }

    </ul>
  )
}
