import React, { useState, useEffect } from 'react';
import './App.css';
import Map from './components/Map';
import HospitalList from './components/HospitalList';
import HospitalDetails from './components/HospitalDetails';
import hospitalData from './hospitalData.json';

function App() {
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    setHospitals(hospitalData);
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not available in this browser.');
    }
  };

  const filteredHospitals = hospitals.filter((hospital) =>
    hospital.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleHospitalClick = (hospital) => {
    setSelectedHospital(hospital);
  };

  return (
    <div className="App">
      <h1>Find Nearby Hospital</h1>
      <input
        type="text"
        placeholder="Search hospitals..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Map
        hospitals={filteredHospitals}
        userLocation={userLocation}
        onHospitalClick={handleHospitalClick}
      />
       <HospitalList
        hospitals={filteredHospitals}
        onHospitalClick={handleHospitalClick}
  /> 
      {selectedHospital && <HospitalDetails hospital={selectedHospital} />}
    </div>
  );
}

export default App;
