import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 21,
      product: "Jegan A",
      customer: "Dr.Akash",
      date: "9:30 AM",
      status: "Normal",
    },
    {
      id: 22,
      product: "Jai Hemanth",
      customer: "Dr.Akash",
      date: "10:05 AM",
      status: "Emergency",
    },
    {
      id: 23,
      product: "Harshini",
      customer: "Dr.Dhanu Sri",
      date: "10:50 AM",
      status: "Normal",
    },
    {
      id: 24,
      product: "Karunya k",
      customer: "Dr.Gowrisubha",
      date: "11:16 AM",
      status: "Normal",
    },
    {
      id: 25,
      product: "Tamilselvi",
      customer: "Dr.KGS",
      date: "12:30 AM",
      status: "Normal",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Token ID</TableCell>
            <TableCell className="tableCell">Patient Name</TableCell>
            <TableCell className="tableCell">Docter Name</TableCell>
            <TableCell className="tableCell">Timing</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
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

export default List;
