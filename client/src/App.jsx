/* eslint-disable no-unused-vars */
import AddTrain from "./Components/trainComponents/AddTrain";
import EditTrain from "./Components/trainComponents/EditTrain";
import ShowTrain from "./Components/trainComponents/ShowTrain";
import Login from "./Components/Login";
import './index.css';
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import AboutMe from "./Components/Aboutas";
import UserBooking from "./Components/trainComponents/CustomerBooking";
import BookTicket from "./Components/BookTicket";
import UserselfBooking from "./Components/UserBookTickets";
import Home from "./Components/Home";
import { useState,useEffect } from "react";
import { ReactSession } from 'react-client-session';

function App() {

  return (
    <>
     
        
       
        <Routes>
          <Route path="/ShowTrain" element={<ShowTrain/>} />
          <Route path="/AddTrain" element={<AddTrain/>} />
          <Route path="/EditTrain/:id" element={<EditTrain/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<AboutMe/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/booking" element={<UserBooking/>}/>
          <Route path="/BookTicket" element={<BookTicket/>}/>
          <Route path="//MyBookings" element={<UserselfBooking/>}/>
          <Route path="/" element={<Home/>}/>
          
        </Routes>
    
    </>
  );
  
}

export default App;
