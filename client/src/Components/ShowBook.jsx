import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export default function AddBook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/book/all");
      setBooks(response.data);
    } catch (error) {
      toast.error("Failed to load books");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/book/${id}`);
      toast.success("Book deleted successfully");
      loadBooks();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data);
      } else {
        toast.error("Delete Failed: All books have not been returned by the student");
      }
    }
  };

  return (
    <>
      
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-8">Manage Books</h1>
        <table className="w-full table-auto border-collapse shadow bg-white">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">ID</th>
              <th className="border border-gray-400 px-4 py-2">Book Name</th>
              <th className="border border-gray-400 px-4 py-2">Author Name</th>
              <th className="border border-gray-400 px-4 py-2">Total Books</th>
              <th className="border border-gray-400 px-4 py-2">Remaining Books</th>
              <th colSpan="2" className="border border-gray-400 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {books.map((book, index) => (
              <tr key={book.bookId} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-400 px-4 py-2">{book.bookName}</td>
                <td className="border border-gray-400 px-4 py-2">{book.bookAuthor}</td>
                <td className="border border-gray-400 px-4 py-2">{book.totalBooks}</td>
                <td className="border border-gray-400 px-4 py-2">{book.totalBooks - book.noOfIssueBook}</td>
                <td className="border border-gray-400 px-4 py-2">
                  <Link
                    to={`/EditBook/${book.bookId}`}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Edit
                  </Link>
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDelete(book.bookId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link
          to={"/Addbook"}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md mt-4 inline-block"
        >
          Add New Book
        </Link>
      </div>
      <Toaster />
    </>
  );
}
