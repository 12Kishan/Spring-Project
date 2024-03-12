import { useState, useEffect } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { ReactSession } from 'react-client-session';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";


export default function BookTicket() {
  const [show, setshow] = useState(false);
  const [selectedtrain, setselectedtrain] = useState(null);
  const [trains, setTrains] = useState([]);
  const [totalamount ,settotalamount] = useState(0);
  ReactSession.setStoreType("sessionStorage");
  useEffect(() => {
    loadtrains();
  }, []);
  const navigate = useNavigate();

  const loadtrains = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/train/all");
      setTrains(response.data);
    } catch (error) {
      toast.error("Failed to load trains");
    }
  };

  const handlebooking = async (trainId) => {
    if(localStorage.getItem("userId") == null)
    {
      await toast.error("you need to login to book ticket");
      
      navigate("/login")
    }
    setshow(true);
    const train = trains.find(train => train.trainId === trainId);
    setselectedtrain(train);
    loadtrains();

  };

  const handlecancle= () => {
    setshow(false);
  
  };


  const handleAmount = (tickets , amount) =>{
      
    let price = tickets*amount;
    settotalamount(price);
  }

  const handlesave = async (totalamount) => {

    if(totalamount == 0)
    {
      toast.error("you need to book minumun one ticket")
    }
    else
    {
    const noOfTickets = totalamount / selectedtrain.ticketamount;
    const data = localStorage.getItem("userId");

    // Display a confirmation dialog
    const confirmBooking = confirm("Are you sure you want to book " + noOfTickets + " tickets with a total price of " + totalamount + "?");

    // If user clicks OK
    if (confirmBooking) {
        try {
            let flag = true;
            for (let i = 0; i < noOfTickets; i++) {
                const response = await axios.post(`http://localhost:8080/api/user/book/${data}/${selectedtrain.trainId}/book`);
                if (response.status !== 201) {
                    flag = false;
                }
            }
            if (flag) {
                toast.success("Tickets booked successfully");
                setshow(false);
                settotalamount(0);
            } else {
                toast.error("Not all tickets were booked");
            }
        } catch (err) {
            console.log("Error:", err);
            toast.error("Something went wrong. Please try again later.");
        }
    } else {
        // If user clicks Cancel
        toast.info("Booking cancelled");
    }
  }
};


const formatDate = (dateString) => {
  // Create a new Date object from the input date string
  const date = new Date(dateString);

  // Extract day, month, and year from the date object
  const day = date.getDate().toString().padStart(2, '0'); // Pad single-digit days with leading zero
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();

  // Construct the formatted date string in the desired format
  return `${day}-${month}-${year}`;
}

const [searchTerm, setSearchTerm] = useState("");
  const filteredTrains = trains.filter((train) => {
    const { trainName, trainNumber, fromLocation, toLocation } = train;
    const searchString = trainName + trainNumber + fromLocation + toLocation;
    return searchString.toLowerCase().includes(searchTerm.toLowerCase());
  });


  return (
    <>
    <Navbar/>
      {!show ? (
        <>
          <div className="container mx-auto p-8">
            <h1 className="text-3xl font-semibold mb-8">Book Ticket</h1>
            <input
          type="text"
          placeholder="Search trains..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-400 px-4 py-2 mb-4"
        />
            <table className="w-full table-auto border-collapse shadow bg-white">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-400 px-4 py-2">ID</th>
                  <th className="border border-gray-400 px-4 py-2">
                    Train Name
                  </th>
                  <th className="border border-gray-400 px-4 py-2">
                    Train Number
                  </th>
                  <th className="border border-gray-400 px-4 py-2">From</th>
                  <th className="border border-gray-400 px-4 py-2">To</th>
                  <th className="border border-gray-400 px-4 py-2">Date</th>
                  <th className="border border-gray-400 px-4 py-2">Time</th>
                  <th className="border border-gray-400 px-4 py-2">
                    Available tickets
                  </th>
                  <th className="border border-gray-400 px-4 py-2">Book</th>
                </tr>
              </thead>
              <tbody className="text-center">

              {filteredTrains == "" ? <><div>No data Found</div></>:<>
              


                {filteredTrains.map((train, index) => (
                  <tr
                    key={train.trainId}
                    className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                    >
                    <td className="border border-gray-400 px-4 py-2">
                      {index + 1}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {train.trainName}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {train.trainNumber}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {train.fromLocation}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {train.toLocation}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {formatDate(train.trainDate)}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {train.trainTime}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {(train.totalSeats - train.totalBookedSeats)>0 ? (train.totalSeats - train.totalBookedSeats):0}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={()=>{handlebooking(train.trainId)}}
                        >
                        Book Ticket
                      </button>
                    </td>
                  </tr>
                ))}
                </>}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center h-full mt-20">
            <div className="border border-gray-300 rounded-lg p-5 min-w-min">



              <h2 className="text-xl font-bold mb-4">Ticket Summary</h2>


              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Username:
                </label>
                <span className="text-sm">{localStorage.getItem("name")}</span>
              </div>
              
              <div className="flex justify-between">
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Train Name:
                </label>
                <span className="text-sm">{selectedtrain.trainName}</span>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Train No:
                </label>
                <span className="text-sm">{selectedtrain.trainNumber}</span>
              </div>
              </div>


              <div className="flex justify-between">
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Train Date :
                </label>
                <span className="text-sm">{selectedtrain.trainDate}</span>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Train Time :
                </label>
                <span className="text-sm">{selectedtrain.trainTime}</span>
              </div>
              </div>

              


              <div className="flex justify-between mr-3">
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1 ">
                  Number of Tickets:
                </label>
                <input
                  type="number"
                  required
                  min={1}
                  className="w-20 px-2 py-1 border border-gray-300 rounded"
                  defaultValue="0"
                  onChange={(e)=>{handleAmount(e.target.value ,selectedtrain.ticketamount)}}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1 ml-3 ">
                  Total Amount:
                </label>
                <span className="text-sm ml-3">{totalamount}</span>
              </div>
              </div>
              <div className="flex justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={()=>{handlesave(totalamount)}}
                >
                  OK
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handlecancle}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <Toaster />
    </>
  );
}
