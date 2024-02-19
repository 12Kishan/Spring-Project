import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export default function AddBook() {
    const [Book, setBook] = useState({
        bookName: "",
        bookAuthor: "",
        totalBooks: null,
    });

    const { bookName, bookAuthor, totalBooks } = Book;

    const handleInputChange = (e) => {
        setBook({
            ...Book,
            [e.target.name]: e.target.value,
        });
    };

    const saveBook = async (e) => {
        
        e.preventDefault();
        const Response =await axios.post("http://localhost:8080/api/book", Book);
        if(Response == 200)
        {
            toast.success("Book Added SucessFully");
        }
        else{
            toast.error("Somthing Went wrong!");
        }
    };

    return (
        <>
        <div className="container mx-auto p-10">
            <h2 className="text-3xl font-bold mb-5">Add Book</h2>
            <form onSubmit={(e) => saveBook(e)}>
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
                        onChange={(e) => setBook({ ...Book, totalBooks: e.target.value })}
                    />
                </div>
                <div className="flex space-x-4">
                    <Link
            
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md"
                    >
                        Save
                    </Link>
                    <Link
                        to={"/Showbook"}
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
