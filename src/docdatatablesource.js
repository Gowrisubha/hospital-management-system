export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Doctor Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Specialty",
    width: 230,
  },
  {
    field: "hospital",
    headerName: "Hospital",
    width: 230,
  },

  {
    field: "age",
    headerName: "Experience",
    width: 100,
  },
  {
    field: "location",
    headerName: "Location",
    width: 230,
  },
  {
    field: "status",
    headerName: "Availability",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Dr.Meera",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "General Medicine",
    age: 20,
    location:"Coimbatore",
    hospital:"PSG Hospitals"
  },
  {
    id: 2,
    username: "Dr.Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "General Medicine",
    status: "active",
    age: 15,
    location:"Coimbatore",
    hospital:"Apollo Hospital"
  },
  {
    id: 3,
    username: "Dr.Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "General Medicine",
    status: "active",
    age: 13,
    location:"Coimbatore",
    hospital:"KG Hospitals"
  },
  {
    id: 4,
    username: "Dr.Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "General Medicine",
    status: "active",
    age: 16,
    location:"Coimbatore",
    hospital:"Sri Ramakrishna Hospitals"
  },
  {
    id: 5,
    username: "Dr.Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "General Medicine",
    status: "active",
    age: 9,
    location:"Coimbatore",
    hospital:"KMCH Hospitals"
  },
  {
    id: 6,
    username: "Dr.Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "General Medicine",
    status: "active",
    age: 6,
    location:"Coimbatore",
    hospital:"Surya Hospital"
  },
  {
    id: 7,
    username: "Dr.Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "General Medicine",
    status: "active",
    age: 5,
    location:"Coimbatore",
    hospital:"St. Mary's Hospital"
  },
  {
    id: 8,
    username: "Dr.Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "General Medicine",
    status: "active",
    age: 1,
    location:"Coimbatore",
    hospital:"Priya Hospital"
  },
  {
    id: 9,
    username: "Dr.Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "General Medicine",
    status: "active",
    age: 1,
    location:"Coimbatore",
    hospital: "Sree Lavanya Hospital"
  },
  {
    id: 10,
    username: "Dr.Rosie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "General Medicine",
    status: "active",
    age: 1,
    location:"Coimbatore",
    hospital: "Senthil Hospital"
  },
];
