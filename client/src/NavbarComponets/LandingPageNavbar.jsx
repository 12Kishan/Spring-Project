import { Link } from "react-router-dom";
import Navbar1 from "./navbar"

export default function Navbar() {

  const data = localStorage.getItem("userId");

  return (
    <>
    {
        data == null ? (<>
        <header>
      <div className="flex justify-between items-center p-3 bg-blue-500 text-black">
        <h1 className="text-3xl font-bold">Railway Ticket Booking</h1>
        <div className="flex justify-between space-x-10 text-xl">
            <Link to="/BookTicket" className="p-3">
                Book Train 
            </Link>
            <Link to="/home" className="p-3">
                Home
            </Link>
          <Link to="/about" className="p-3">
            About Us
          </Link>
        <Link to="/login" className="p-3">
            Login/Register
          </Link>
          
        </div>
      </div>
    </header>
        </>):(<>
        <Navbar1/>
        </>)
    }
    
    </>
  );
}
