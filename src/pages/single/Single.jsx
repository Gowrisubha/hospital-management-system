import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  const handleClick=()=>{
    alert("You've successfully booked the appointment, wait for the confirmation from Doctor!")
  }
  return (
    <div className="single">
      {/* <Sidebar /> */}
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Dr.Meera</h1>
                <div className="detailItem">
                  <span className="itemKey">Specialty:</span>
                  <span className="itemValue">General Medicine</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Experience:</span>
                  <span className="itemValue">20 Years</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Qualification:</span>
                  <span className="itemValue">
                  MD, DNB
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Designation:</span>
                  <span className="itemValue">Professor/ Sr. Consultant</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Designation:</span>
                  <span className="itemValue">Professor/ Sr. Consultant</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Hospital Address:</span>
                  <span className="itemValue">Peelamedu, Coimbatore - 641 004
Tamil Nadu, INDIA.</span>
                </div>
                <button onClick={handleClick}>Confirm appointment</button>
              </div>
            </div>
          </div>
          
          {/* <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div> */}
        </div>
        {/* <div className="bottom">
        <h1 className="title">Upcoming Appointment Details</h1>
          <List/>
        </div> */}
      </div>
    </div>
  );
};

export default Single;
