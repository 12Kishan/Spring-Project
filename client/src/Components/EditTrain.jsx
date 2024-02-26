import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function EditBook() {
  const { id } = useParams();

  const [Train, setTrain] = useState({
    trainName: "",
    trainNumber: "",
    fromLocation: "",
    toLocation:"",
    
    trainDate:"",
    trainTime:"",
    totalSeats:0,
  });

  const { trainName,
    trainNumber,
    fromLocation,
    toLocation,
    trainDate,
    trainTime,totalSeats } = Train;


  useEffect(() => {
    loadBook();
  }, []);

  const loadBook = async () => {
    const result = await axios.get(`http://localhost:8080/api/train/${id}`);
    setTrain(result.data);
  };

  const handleInputChange = (e) => {
    setTrain({
      ...Train,
      [e.target.name]: e.target.value,
    });
  };

  console.log(Train);
  const updateBook = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8080/api/train`, Train);
    console.log("train updated");
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl mb-8">Edit Book</h2>
      <form onSubmit={updateBook}>
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
            to={"/ShowTrain"}
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
          >
            Save
          </button>
          <Link
            to={"/ShowTrain"}
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
