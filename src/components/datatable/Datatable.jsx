import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";

const Datatable = ({ onApprove }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleApproveClick = (id) => {
    // Implement your approve logic here, you can also make a POST request to update the backend
    // Once approved, call the onApprove function to send the approved row back to the parent component
    const approvedRow = data.find((row) => row.id === id);
    onApprove(approvedRow);
  };

  // ... rest of your code




    const handleDenyClick =  (id) => {
      // Make a DELETE request to your backend API to delete the row with the given id
      console.log(id);
      axios
        .delete(`http://localhost:3000/users/${id}`)
        .then((response) => {
          // Handle successful deletion on the frontend if needed
          console.log("Row deleted successfully");
        })
        .catch((error) => {
          console.error("Error deleting row:", error);
        });
    };
    
  

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="viewButton" onClick={() => handleApproveClick(params.row.id)}>
              Approve
            </div>
            <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>
              Deny
            </div>
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
        Add Appointment
        <Link to="/users/new" className="link">
          Add Patient
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

export default Datatable;
