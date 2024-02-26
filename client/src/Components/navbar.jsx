
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Navbar({role}) {

  const data = localStorage.getItem;


  return (
    <header>
      <div className="flex justify-between items-center p-3 bg-blue-500 text-black">
        <h1 className="text-3xl font-bold">Railway Ticket Booking</h1>
        <div className="flex justify-between space-x-10 text-xl">
          {role == true && (
            <>
              <Link to="/Addtrain" className="p-4">
                Add Train
              </Link>
              <Link to="/ShowTrain" className="p-4">
                View Trains
              </Link>
            </>
          )}
          {role == true && (
            <>
              <Link to="/BookTicket" className="p-4">
                Book Ticket
              </Link>
              <Link to="/MyBookings/id" className="p-4">
                My Bookings
              </Link>
            </>
          )}
          
          <Link to="/about" className="p-4">
            About Us
          </Link>
          {data.admin == null && (<><Link to="/login" className="p-4">
            Login/Register
          </Link></>)}
          
        </div>
      </div>
    </header>
  );
}
