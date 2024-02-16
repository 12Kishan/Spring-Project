import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast} from 'react-hot-toast';
import './../index.css';
import {Toaster} from 'react-hot-toast'

export default function AddBook() {
  const [book, setbook] = useState([]);
  

  useEffect(() => {
    loadbook();
  }, []);

  const loadbook = async () => {
    const result = await axios.get("http://localhost:8080/api/book/all");

    if (result.status === 200) {
      setbook(result.data);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`q ${id}`);
      toast.success("Book deleted successfully");
      loadbook();
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
    <Toaster/>
    <div className="m-16 p-20">
      <table className="w-full table-auto border-collapse shadow">
        <thead>
          <tr className="text-center bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">ID</th>
            <th className="border border-gray-400 px-4 py-2">Book Name</th>
            <th className="border border-gray-400 px-4 py-2">Auther Name</th>
            <th className="border border-gray-400 px-4 py-2">Total book</th>
            <th className="border border-gray-400 px-4 py-2">Remaining Books</th>
            <th colSpan="2" className="border border-gray-400 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {book.map((book1, index) => (
            <tr key={book1.bookId} className="bg-white">
              <th scope="row" className="border border-gray-400 px-4 py-2">
                {index + 1}
              </th>
              {/* <td className="border border-gray-400 px-4 py-2">{book1.bookId}</td> */}
              <td className="border border-gray-400 px-4 py-2">{book1.bookName}</td>
              <td className="border border-gray-400 px-4 py-2">{book1.bookAuthor}</td>
              <td className="border border-gray-400 px-4 py-2">{book1.totalBooks}</td>
              <td className="border border-gray-400 px-4 py-2">{book1.noOfIssueBook}</td>
              <td className="border border-gray-400 px-4 py-2">
                <Link
                  to={`/edit-book/${book1.bookId}`}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                >
                  Edit
                </Link>
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(book1.bookId)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}