// src/components/Patient.js
import React, { useState } from "react";
// import "../styles/PatientList.css";
const Patient = ({ patient, onDelete, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [editedPatient, setEditedPatient] = useState(patient);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleUpdateClick = () => {
    onUpdate(editedPatient);
    setEditing(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedPatient((prevPatient) => ({
      ...prevPatient,
      [name]: value
    }));
  };

  return (
    <tr>
      <td>
        {editing ? (
          <input
            type="text"
            name="name"
            value={editedPatient.name}
            onChange={handleInputChange}
          />
        ) : (
          patient.name
        )}
      </td>
      <td>
        {editing ? (
          <input
            type="number"
            name="age"
            value={editedPatient.age}
            onChange={handleInputChange}
          />
        ) : (
          patient.age
        )}
      </td>
      <td>
        {editing ? (
          <input
            type="text"
            name="roomNo"
            value={editedPatient.roomNo}
            onChange={handleInputChange}
          />
        ) : (
          patient.roomNo
        )}
      </td>
      <td>
        {editing ? (
          <input
            type="text"
            name="appointmentTime"
            value={editedPatient.appointmentTime}
            onChange={handleInputChange}
          />
        ) : (
          patient.appointmentTime
        )}
      </td>
      <td>
        {editing ? (
          <input
            type="text"
            name="disease"
            value={editedPatient.disease}
            onChange={handleInputChange}
          />
        ) : (
          patient.disease
        )}
      </td>
      <td style={{ textAlign: "center" }}>
        {editing ? (
          <button className="btn" onClick={handleUpdateClick}>Update</button>
        ) : (
          <div>
            <button className="btn" onClick={handleEditClick}>Edit</button>
            <button className="btn" onClick={() => onDelete(patient)}>Delete</button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default Patient;
