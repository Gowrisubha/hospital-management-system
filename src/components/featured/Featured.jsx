import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Patient Visit by Department (Weekly)</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart" >
          <CircularProgressbar styles={buildStyles({pathColor:'#f9688d',textColor:'#534859'})} value={70} text={"70%"} strokeWidth={5} />
        </div>
        <div className="k">
        <p className="title">Cardiology</p>
        <p className="amount" style={{marginLeft:'5px'}}> 40%</p>
        </div>
        <div className="k">
        <p className="title">General Medicine</p>
        <p className="amount" style={{marginLeft:'5px'}}> 20%</p>
        </div>
        <div className="k">
        <p className="title">Dermatology</p>
        <p className="amount" style={{marginLeft:'5px'}}> 10%</p>
        </div>
        
        <p className="desc">
          Previous Details. Last Info may not be included.
        </p>
        
      </div>
    </div>
  );
};

export default Featured;
