import { useState, useEffect } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

export default function BookTicket() {
  const [show, setshow] = useState(false);
  const [selectedtrain, setselectedtrain] = useState(null);
  const [trains, setTrains] = useState([]);
  const [totalamount ,settotalamount] = useState(0);

  useEffect(() => {
    loadtrains();
  }, []);

  const loadtrains = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/train/all");
      setTrains(response.data);
    } catch (error) {
      toast.error("Failed to load trains");
    }
  };

  const handlebooking = (trainId) => {
    setshow(true);
    const train = trains.find(train => train.trainId === trainId);
    setselectedtrain(train);
    console.log(selectedtrain);
  };

  const handlecancle= () => {
    setshow(false);
    console.log(show);
  };


  const handleAmount = (tickets , amount) =>{
      
    let price = tickets*amount;
    settotalamount(price);
  }

 const handlesave =async (totalamount) => {

  const noOfTickets = totalamount / selectedtrain.ticketamount;
  alert("are you conform to book "+noOfTickets+" tickets with price of " + totalamount)
  const data = localStorage.getItem("userId");

  let flag = true;

  try{

    for(let i=0;i<noOfTickets;i++)
    {
    const responce = await axios.post(`http://localhost:8080/api/user/book/${data}/${selectedtrain.trainId}/book`)
    if(responce.status == 201)
    flag = false;
    }

    if(flag)
    {
      toast.error("all tickets are not booked")
    }
    else{
      toast.success("Ticket Booked successfully")
      setshow(false);
      settotalamount(0);

    }
  }
  catch(err)
  {
    console.log("this error",err);
    toast.error("some this went wrong so check you status and accordingly try again")
  }



 };

  return (
    <>
      {!show ? (
        <>
          <div className="container mx-auto p-8">
            <h1 className="text-3xl font-semibold mb-8">Manage Trains</h1>
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
                  <th className="border border-gray-400 px-4 py-2">
                    Available tickets
                  </th>
                  <th className="border border-gray-400 px-4 py-2">Book</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {trains.map((train, index) => (
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
                <span className="text-sm">John Doe</span>
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
                  Date :
                </label>
                <span className="text-sm">{selectedtrain.trainDate}</span>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Time :
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
