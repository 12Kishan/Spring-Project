import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AddBook() {
    const [student, setStudent] = useState({
        bookName: "",
        bookAuthor: "",
        totalBooks: null,
    });

    const { bookName, bookAuthor, totalBooks } = student;

    const handleInputChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value,
        });
    };

    const saveStudent = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/book", student);
    };

    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-3xl font-bold mb-5">Add Book</h2>
            <form onSubmit={(e) => saveStudent(e)}>
                <div className="mb-5">
                    <label htmlFor="bookName" className="block text-lg font-semibold mb-2">Book Name</label>
                    <input
                        type="text"
                        name="bookName"
                        id="bookName"
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                        value={bookName}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="bookAuthor" className="block text-lg font-semibold mb-2">Author Name</label>
                    <input
                        type="text"
                        name="bookAuthor"
                        id="bookAuthor"
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                        value={bookAuthor}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="totalBooks" className="block text-lg font-semibold mb-2">Total Books</label>
                    <input
                        type="number"
                        name="totalBooks"
                        id="totalBooks"
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                        value={totalBooks}
                        onChange={(e) => setStudent({ ...student, totalBooks: e.target.value })}
                    />
                </div>
                <div className="flex justify-between">
                    <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600">Save</button>
                    <Link to={"/view-students"} className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600">Cancel</Link>
                </div>
            </form>
        </div>
    );
}
