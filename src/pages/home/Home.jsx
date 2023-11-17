import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
        </div>
        <Chart title="Average Patient Visit (Monthly)" aspect={4 / 1} />
        <div className="listContainer">
          <button style={{color:'white',backgroundColor:'black',borderRadius:'6px',padding:'4px',margin:'4px'}}>View All</button>
          <div className="listTitle">Upcoming Appointments</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
