import React from 'react';

function HospitalDetails({ hospital }) {
  return (
    <div className="hospital-details">
      <h2>{hospital.name}</h2>
      <p>{hospital.address}</p>
      <p>Latitude: {hospital.latitude}</p>
      <p>Longitude: {hospital.longitude}</p>
     {/*  <p>Specialties: {hospital.specialties.join(', ')}</p> */}
    </div>
  );
}

export default HospitalDetails;
