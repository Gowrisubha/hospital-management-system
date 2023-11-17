import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import DocList from './pages/doclist/DocList';
import Single from './pages/single/Single';
import New from './pages/new/New';
import Lists from './pages/report/patientreport';
import { productInputs, userInputs } from './formSource';
import './style/dark.scss';
import PatientHome from './components/PatientHome/PatientHome';
import Datatable from './components/datatable/Datatable';
import Cam from './pages/Camera/Cam';
import DoctorList from './pages/docattendance/DoctorAttendance';
import ChatBot from './components/chatbot/ChatBot';

export default function Routees() {
  
  return (
    <div>
 <BrowserRouter>
  <Routes>
    {/* Default route to Login */}
    <Route exact path="/" element={<Login />} />
    <Route exact path="/logout" element={<Login />} />
    {/* Home route */}
    <Route exact path="/nursehome" element={<Home />} />
    <Route exact path="/patienthome" element={<PatientHome />} />
    {/* Users routes */}
    <Route exact path="/users"  element={<List />} />
    <Route exact path="/docattendance"  element={<DoctorList />} />
    <Route exact path="/doctors"  element={<DocList />} />
    <Route exact path="/report" element={<Lists/>}/>
    <Route exact path="/camera" element={<Cam/>}/>
    <Route exact path="/chat" element={<ChatBot/>}/>
    <Route exact path="/appointment" element={<New inputs={userInputs} title="Add New Appointment" />}/>
    <Route exact path="/users/:userId" element={<Single />} />
    <Route exact path="/users/new" element={<New inputs={userInputs} title="Add New User" />} />

    {/* Products routes */}
    <Route exact path="/products" element={<List />} />
    <Route exact path="/products/:productId" element={<Single />} />
    <Route exact path="/products/new" element={<New inputs={productInputs} title="Add New Product" />} />
  </Routes>
</BrowserRouter>

    </div>
  )
}
