import "./datatables.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../report/datatablesrc";
import { Link } from "react-router-dom";
import { useState } from "react";
import pdf from "../report/report.pdf";

const Data = () => {
  const [data, setData] = useState(userRows);


  const actionColumn = [
    {
      field: "action",
      headerName: "Report PDF",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            
              <div className="viewButton"><a href={pdf}>Download</a></div>
            
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
        
      <div className="datatableTitle">
        Report Analysis
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default Data;
