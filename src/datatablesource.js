export const userColumns = [
  { field: "id", headerName: "Token No", width: 70 },
  {
    field: "user",
    headerName: "Patient Name",
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
    headerName: "Mobile No",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
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
    username: "Jegan A",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Normal",
    email: "8136469109",
    age: 36,
  },
  {
    id: 2,
    username: "Jai Krishna R",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6573829161",
    status: "Emergency",
    age: 42,
  },
  {
    id: 3,
    username: "Ajees S",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7677342301",
    status: "Normal",
    age: 45,
  },
  {
    id: 4,
    username: "Harry potter",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8838822782",
    status: "Normal",
    age: 16,
  },
  {
    id: 5,
    username: "Karunya K",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8334128701",
    status: "Normal",
    age: 22,
  },
  {
    id: 6,
    username: "Manikandan R",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "9942372190",
    status: "Emergency",
    age: 15,
  },
  {
    id: 7,
    username: "Abikumar S",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "9942860390",
    status: "Normal",
    age: 44,
  },
  {
    id: 8,
    username: "Aravind P",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "9648792280",
    status: "Normal",
    age: 36,
  },
  {
    id: 9,
    username: "Rolex",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8683822181",
    status: "Emergency",
    age: 65,
  },
  {
    id: 10,
    username: "Allen J",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8248790072",
    status: "Normal",
    age: 65,
  },
];
