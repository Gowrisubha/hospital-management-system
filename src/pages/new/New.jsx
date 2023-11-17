import "./new.scss";
import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { Link, useNavigate } from 'react-router-dom';

const New = ({ inputs, title }) => {
  const DEFAULT_IMAGE_URL = "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [formValues, setFormValues] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleAdd = async () => {
    try {
      const data = {
        ...formValues,
        image:DEFAULT_IMAGE_URL
      };
  
      await axios.post("http://localhost:3000/appointment", data);
  
      
      if (title === "Add New Appointment") {
        navigate('/doctors', { replace: true });
      } else {
        navigate('/users', { replace: true });
      }
      
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };
  return (
    <div className="new">
      {title !== "Add New Appointment" && <Sidebar />}
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input name={input.name} type={input.type} placeholder={input.placeholder} onChange={handleInputChange}/>
                </div>
              ))}
             <Link to={'/doctors'}><button onClick={handleAdd}>Add</button></Link> 
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;