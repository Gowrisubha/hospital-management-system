import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";

const DatatablePatientSide = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Make a GET request to fetch data from your backend API
    axios.get("http://localhost:3000/users") // Replace with your API endpoint
      .then((response) => {
        // Assuming the response data is an array of objects
        setData(response.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false on error
      });
  }, []);

  const handleApproveClick = (id) => {
    // Implement your approve logic here, you can also make a POST request to update the backend
  };

  const handleDenyClick = (id) => {
    // Implement your deny logic here, you can also make a POST request to update the backend
  };

  const handleDelete = (id) => {
    // Implement your delete logic here, you can also make a DELETE request to update the backend
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 500,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="viewButton" onClick={() => handleApproveClick(params.row.id)}>
              Wait
            </div>
            <Link to="/appointment"><div className="deleteButton" onClick={() => handleDenyClick(params.row.id)}>
              Reschedule
            </div></Link>
            <Link to="/doctors"><div className="deleteButton" onClick={() => handleDenyClick(params.row.id)}>
              Search for a different hospital
            </div></Link>
          </div>
        );
      },
    },
  ];

  const timeSlotColumn = [
    {
      field: "timeSlot", // Replace with the actual field name from your data
      headerName: "Time Slot",
      width: 150,
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        List Of Patients
        <Link to="/appointment" className="link">
          Add Appointment
        </Link>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <DataGrid
          className="datagrid"
          rows={data}
          columns={[...userColumns, ...timeSlotColumn, ...actionColumn]}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      )}
    </div>
  );
};

export default DatatablePatientSide;
