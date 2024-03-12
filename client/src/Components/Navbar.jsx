import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
export default function Navbar() {
  const [data, setdata] = useState(null);
  const [isadmin,setisadmin] = useState(false);
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  const handleSignout = () => {

    localStorage.clear();
    
  };

  useEffect(() => {
    setdata(localStorage.getItem("userId"));
    setisadmin(localStorage.getItem("isadmin"));
  }, []);
  return (
    <>
      {data == null ? (
        <>
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
        </>
      ) : (
        <>
          <header>
            <div className="flex justify-between items-center p-3 bg-blue-500 text-black">
              <h1 className="text-3xl font-bold">Railway Ticket Booking</h1>
              <div className="flex justify-between space-x-10 text-xl">
                {isadmin == "true" ? (
                  <>
                    <Link to="/home" className="p-3">
                      Home
                    </Link>
                    <Link to="/about" className="p-3">
                      About Us
                    </Link>
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
                    <Link to="/home" className="p-3">
                      Home
                    </Link>
                    <Link to="/about" className="p-3">
                      About Us
                    </Link>
                    <Link to="/BookTicket" className="p-4">
                      Book Ticket
                    </Link>
                    <Link to="/MyBookings" className="p-4">
                      My Bookings
                    </Link>
                  </>
                )}

                <Link to="/home" className="p-4" onClick={
                  
                  handleSignout}>
                  Sign Out
                </Link>
              </div>
            </div>
          </header>
        </>
      )}
    </>
  );
}
