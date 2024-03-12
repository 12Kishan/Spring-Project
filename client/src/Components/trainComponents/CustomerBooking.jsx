import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import Navbar from '../Navbar';

export default function CustomerBooking() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        loadtrains();
      }, []);
    
      const loadtrains = async () => {
        try {
          const response = await axios.get("http://localhost:8080/api/ticket/all");
          setUser(response.data);
        } catch (error) {
          toast.error("Failed to load tickets");
        }
      };


  return (



    <>
      <Navbar/>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-8">Booking</h1>
        <table className="w-full table-auto border-collapse shadow bg-white">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">ID</th>
              <th className="border border-gray-400 px-4 py-2">Customer Name</th>
              <th className="border border-gray-400 px-4 py-2">Train Name</th>
              <th className="border border-gray-400 px-4 py-2">Ticket Id</th>
              <th className="border border-gray-400 px-4 py-2">ticket price</th>
              <th className="border border-gray-400 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {user.map((ticket, index) => (
              <tr key={ticket.ticketNo} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-400 px-4 py-2">{ticket.user.userName}</td>
                <td className="border border-gray-400 px-4 py-2">{ticket.train.trainName}</td>
                <td className="border border-gray-400 px-4 py-2">{ticket.ticketNo}</td>
                <td className="border border-gray-400 px-4 py-2">{ticket.train.ticketamount}</td>
                <td className="border border-gray-400 px-4 py-2">{ticket.status}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
      <Toaster />
    </>
  
  
    )
}
