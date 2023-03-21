import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ center, zoom }) => {
  return (
    <MapContainer center={center} zoom={zoom} className="w-full h-full map">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={center}>
        <Popup>
          <span className='text-honey'>Honey</span>Hut <br/> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
