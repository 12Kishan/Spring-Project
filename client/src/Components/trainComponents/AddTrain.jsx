import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import Navbar from '../Navbar';

export default function AddTrain() {
    const [Train, setTrain] = useState({
        trainName: "",
        trainNumber: "",
        fromLocation: "",
        toLocation:"",
        ticketamount:0,
        trainDate:"",
        trainTime:"",
        totalSeats:0,
        totalBookedSeats:0,
    });

    const { trainName,
    trainNumber,
    fromLocation,
    toLocation,
    trainDate,
    ticketamount,
    trainTime,totalSeats } = Train;

    const handleInputChange = (e) => {
        setTrain({
            ...Train,
            [e.target.name]: e.target.value
        });
    };

    async function saveTrain  (e) {
        try{
        e.preventDefault();
        const Response =await axios.post("http://localhost:8080/api/train", Train);
        if(Response.status == 201)
        {
            toast.success("Train Added SucessFully");
            setTrain({trainName: "",
            trainNumber: "",
            fromLocation: "",
            toLocation:"",
            ticketamount:0,
            trainDate:"",
            trainTime:"",
            totalSeats:0,
            totalBookedSeats:0});
        }
        else{
            toast.error("Somthing Went wrong!");
        }
    }
    catch(err)
    {
        toast.error("somthing went wrong");
    }
    }

    return (
        <>
        <Navbar/>
        <div className="container p-10 mx-20">
            <h2 className="text-3xl font-bold mb-5"></h2>
            <form onSubmit={saveTrain}>
                <div className="mb-5">
                    <label htmlFor="trainName" className="block text-lg font-semibold mb-2">Train Name</label>
                    <input
                        type="text"
                        name="trainName"
                        id="trainName"
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                        value={trainName}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="trainNumber" className="block text-lg font-semibold mb-2">Train Number</label>
                    <input
                        type="number"
                        name="trainNumber"
                        id="trainNumber"
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                        value={trainNumber}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>


                <div className="mb-5">
                    <label htmlFor="fromLocation" className="block text-lg font-semibold mb-2">fromLocation</label>
                    <input
                        type="text"
                        name="fromLocation"
                        id="fromLocation"
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                        value={fromLocation}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="toLocation" className="block text-lg font-semibold mb-2">toLocation</label>
                    <input
                        type="text"
                        name="toLocation"
                        id="toLocation"
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                        value={toLocation}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="totalSeats" className="block text-lg font-semibold mb-2">Total Seats</label>
                    <input
                        type="number"
                        name="totalSeats"
                        id="totalSeats"
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                        value={totalSeats}
                        onChange={(e) => setTrain({ ...Train, totalSeats: e.target.value })}
                        
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="ticketamount" className="block text-lg font-semibold mb-2">Ticket Price</label>
                    <input
                        type="number"
                        name="ticketamount"
                        id="ticketamount"
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                        value={ticketamount}
                        onChange={(e) => setTrain({ ...Train, ticketamount: e.target.value })}
                        
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="trainDate" className="block text-lg font-semibold mb-2">date</label>
                    <input
                        type="date"
                        name="trainDate"
                        id="trainDate"
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                        value={trainDate}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>


                <div className="mb-5">
                    <label htmlFor="trainTime" className="block text-lg font-semibold mb-2">time</label>
                    <input
                        type="time"
                        name="trainTime"
                        id="trainTime"
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                        value={trainTime}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="flex space-x-4">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md"
                    >

                        Save
                    </button>
                    {/* </Link> */}
                    <Link
                        to={"/ShowTrain"}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md"
                    >
                        Back
                    </Link>
                </div>
            </form>
        </div>
        <Toaster/>
        </>
    );
}
