/* eslint-disable no-unused-vars */
import AddTrain from "./Components/AddTrain";
import EditTrain from "./Components/EditTrain";
import ShowTrain from "./Components/ShowTrain";
import Login from "./Components/Login";
import './index.css';
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Navbar from "./NavbarComponets/LandingPageNavbar";
import AboutMe from "./Components/Aboutas";
import Dashboard from "./Components/Dashboard";
import UserBooking from "./Components/CustomerBooking";
import BookTicket from "./Components/BookTicket";
import UserselfBooking from "./Components/UserBookings";

function App() {
  return (
    <>
     
        <Navbar/>
        <Routes>
          <Route path="/ShowTrain" element={<ShowTrain/>} />
          <Route path="/AddTrain" element={<AddTrain/>} />
          <Route path="/EditTrain/:id" element={<EditTrain/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<AboutMe/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/booking" element={<UserBooking/>}/>
          <Route path="/BookTicket" element={<BookTicket/>}/>
          <Route path="//MyBookings" element={<UserselfBooking/>}/>
        </Routes>
    
    </>
  );
}

export default App;
