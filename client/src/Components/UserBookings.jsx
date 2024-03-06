import {useEffect,useState} from 'react';
import axios from 'axios';
import {toast,Toaster} from "react-hot-toast";

export default function UserBookings() {

    const [userbooking, setUserbooking] = useState([]);
  
    useEffect(() => {
        loadtrains();
      }, []);

      const username = localStorage.getItem("name");
      const userid = localStorage.getItem("userId");
    
      const loadtrains = async () => {

        try {
          const response = await axios.get(`http://localhost:8080/api/ticket/all`);
          setUserbooking(response.data);
        } catch (error) {
          toast.error("Failed to load tickets");
        }
      };

      const handleCancle = async(ticketid) =>{
        try {
          const response = await axios.post(`http://localhost:8080/api/ticket/update/${ticketid}`);
          setUserbooking(response.data);
          loadtrains();
        } catch (error) {
          toast.error("Somthing wrong to Cancle ticket");
        }
      }
  
  
    return (
        <>
        <div className="container mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-8">{username} Booking</h1>
        <table className="w-full table-auto border-collapse shadow bg-white">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">ID</th>
              <th className="border border-gray-400 px-4 py-2">Train Name</th>
              <th className="border border-gray-400 px-4 py-2">Train Number</th>
              <th className="border border-gray-400 px-4 py-2">Ticket Id</th>
              <th className="border border-gray-400 px-4 py-2">Status</th>
              <th className="border border-gray-400 px-4 py-2">Activity</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {userbooking.map((ticket, index) => (

              userid == ticket.user.userId ?(
                <>
                <tr key={ticket.ticketNo} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-400 px-4 py-2">{ticket.train.trainName}</td>
                <td className="border border-gray-400 px-4 py-2">{ticket.train.trainNumber}</td>
                <td className="border border-gray-400 px-4 py-2">{ticket.ticketNo}</td>
                <td className="border border-gray-400 px-4 py-2">{ticket.status}</td>
                <td className="border border-gray-400 px-4 py-2">
                  {ticket.status == "CANCELED" ? "CENCELED": <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={()=>{handleCancle(ticket.id)}}
                  >
                    Cancel
                  </button>} 
                    
                
                    </td>
                
              </tr>
              </>) : (<></>)
))}
          </tbody>
        </table>
        
      </div>
      <Toaster />
    </>
  
  )
}
