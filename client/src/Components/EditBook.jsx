import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function EditBook() {
  const { id } = useParams();

  const [Book, setBook] = useState({
    bookId: null,
    bookName: "",
    bookAuthor: "",
    totalBooks: null,
  });

  const { bookName, bookAuthor, totalBooks } = Book;

  useEffect(() => {
    loadBook();
  }, []);

  const loadBook = async () => {
    const result = await axios.get(`http://localhost:8080/api/book/${id}`);
    setBook(result.data);
  };

  const handleInputChange = (e) => {
    setBook({
      ...Book,
      [e.target.name]: e.target.value,
    });
  };

  const updateBook = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8080/api/book`, Book);
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl mb-8">Edit Book</h2>
      <form onSubmit={(e) => updateBook(e)}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="bookName"
          >
            Book Name
          </label>
          <input
            className="form-input w-full border-2 border-gray-200 rounded-md py-2 px-4"
            type="text"
            name="bookName"
            id="bookName"
            required
            value={bookName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="bookAuthor"
          >
            Author Name
          </label>
          <input
            className="form-input w-full border-2 border-gray-200 rounded-md py-2 px-4"
            type="text"
            name="bookAuthor"
            id="bookAuthor"
            required
            value={bookAuthor}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="totalBooks"
          >
            Total Books
          </label>
          <input
            className="form-input w-full border-2 border-gray-200 rounded-md py-2 px-4"
            type="number"
            name="totalBooks"
            id="totalBooks"
            required
            value={totalBooks}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="flex space-x-4">
          <Link
            to={"/Showbook"}
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
          >
            Save
          </Link>
          <Link
            to={"/Showbook"}
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
