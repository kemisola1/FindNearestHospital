import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map({ hospitals }) {
  const center = [37.7749, -122.4194];
  const zoom = 13;

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {hospitals.map((hospital) => (
        <Marker
          key={hospital.id}
          position={[hospital.latitude, hospital.longitude]}
        >
          <Popup>
            <div>
              <h2>{hospital.name}</h2>
              <p>{hospital.address}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
