import React from 'react';

function HospitalList({ hospitals, onHospitalClick }) {
  return (
    <div className="hospital-list">
      <h2>Hospitals</h2>
      <ul>
        {hospitals.map((hospital) => (
          <li key={hospital.id} onClick={() => onHospitalClick(hospital)}>
            <strong>{hospital.name}</strong>
           {/* <p>{hospital.address}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HospitalList;
