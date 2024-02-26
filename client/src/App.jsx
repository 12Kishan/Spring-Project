/* eslint-disable no-unused-vars */
import AddTrain from "./Components/AddTrain";
import EditTrain from "./Components/EditTrain";
import ShowTrain from "./Components/ShowTrain";
import Login from "./Components/Login";
import './index.css';
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Navbar from "./Components/navbar";
import AboutMe from "./Components/Aboutas";


function App() {
  return (
    <>
     
        <Navbar role={true}/>
        <Routes>
          <Route path="/ShowTrain" element={<ShowTrain/>} />
          <Route path="/AddTrain" element={<AddTrain/>} />
          <Route path="/EditTrain/:id" element={<EditTrain/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<AboutMe/>}/>
        </Routes>
    
    </>
  );
}

export default App;
