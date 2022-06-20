import { useContext } from 'react';
import { PlacesContext } from '../context';
import { MapContext } from '../context/map/MapContext';

export const BtnMyLocation = () => {
  
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const onClick = () => {
    if ( !isMapReady ) throw new Error('Map is not ready');
    if ( !userLocation ) throw new Error('User location is not ready');

    map?.flyTo({
      center: userLocation,
      zoom: 14
    });
  }

  return (
    <button 
      className='btn btn-primary'
      onClick={onClick}
      style={{
        position: 'fixed',
        right: '20px',
        top: '20px',
        zIndex: '999',
      }}
    >
      Mi Ubicación
    </button>
  );
}
