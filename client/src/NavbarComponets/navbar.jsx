
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Navbar() {

  const data = localStorage.getItem("isAdmin");


  return (
    <header>
      <div className="flex justify-between items-center p-3 bg-blue-500 text-black">
        <h1 className="text-3xl font-bold">Railway Ticket Booking</h1>
        <div className="flex justify-between space-x-10 text-xl">
          {data.isAdmin == true && (
            <>
              <Link to="/Addtrain" className="p-4">
                Add Train
              </Link>
              <Link to="/ShowTrain" className="p-4">
                View Trains
              </Link>
              <link to="/customerbooking" className="p-3">
                Show Booking
              </link>
            </>
          )}
          {data.isAdmin == false && (
            <>
              <Link to="/BookTicket" className="p-4">
                Book Ticket
              </Link>
              <Link to="/MyBookings/id" className="p-4">
                My Bookings
              </Link>
            </>
          )}
          
           <Link to="/home" className="p-4">
            Sign Out
          </Link>
          
        </div>
      </div>
    </header>
  );
}
