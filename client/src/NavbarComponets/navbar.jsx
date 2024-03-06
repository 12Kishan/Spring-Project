import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Navbar() {
  const data = localStorage.getItem("isadmin");

  const handleSignout = () => {
    localStorage.clear();
  };

  return (
    <header>
      <div className="flex justify-between items-center p-3 bg-blue-500 text-black">
        <h1 className="text-3xl font-bold">Railway Ticket Booking</h1>
        <div className="flex justify-between space-x-10 text-xl">
          {data == "true" ? (
            <>
              <Link to="/Addtrain" className="p-4">
                Add Train
              </Link>
              <Link to="/ShowTrain" className="p-4">
                View Trains
              </Link>
              <Link to="/booking" className="p-3">
                Show Booking
              </Link>
            </>
          ) : (
            <>
              <Link to="/BookTicket" className="p-4">
                Book Ticket
              </Link>
              <Link to="/MyBookings" className="p-4">
                My Bookings
              </Link>
            </>
          )}

          <Link to="/" className="p-4" onClick={handleSignout}>
            Sign Out
          </Link>
        </div>
      </div>
    </header>
  );
}
