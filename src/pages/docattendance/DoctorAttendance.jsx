import "./doctorattendance.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const DoctorList = () => {
  const rows = [
    {
      id: 4661645,
     
      customer: "Dr.Akash",
      date: "9:30 AM",
      status: "Available",
    },
    {
      id: 9786275,
      customer: "Dr.Hariharan",
      date: "10:05 AM",
      status: "Available",
    },
    {
      id: 8665526,
      
      customer: "Dr.Subha",
      date: "10:50 AM",
      status: "Available",
    },
    {
      id: 5599699,
      
      customer: "Dr.Kumaravel",
      date: "-",
      status: "Unavailable",
    },
    {
      id: 12313468,

      customer: "Dr.Kalai",
      date: "-",
      status: "Unavailable",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Doctor ID</TableCell>
           
            <TableCell className="tableCell">Docter Name</TableCell>
            <TableCell className="tableCell">In time</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
               <TableCell className="tableCell">
                <div className="cellWrapper">
                  
                  {row.customer}
                </div>
               </TableCell> 
              <TableCell className="tableCell">{row.date}</TableCell>
              {/* <TableCell className="tableCell">{row.date}</TableCell> */}
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DoctorList;