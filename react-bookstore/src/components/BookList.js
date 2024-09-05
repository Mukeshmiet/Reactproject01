import React, { useEffect, useState } from "react";
import axios from "axios";

function BookList() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: "", author: "" });
  const [editBook, setEditBook] = useState(null);
  const [updateDetails, setUpdateDetails] = useState({ title: "", author: "" });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    axios
      .get("http://localhost:8080/api/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the books!", error);
      });
  };

  const handleCreateBook = () => {
    axios
      .post("http://localhost:8080/api/books", newBook)
      .then(() => {
        setNewBook({ title: "", author: "" });
        fetchBooks();
      })
      .catch((error) => {
        console.error("There was an error creating the book!", error);
      });
  };

  const handleUpdateBook = (id) => {
    axios
      .put(`http://localhost:8080/api/books/${id}`, updateDetails)
      .then(() => {
        setEditBook(null);
        setUpdateDetails({ title: "", author: "" });
        fetchBooks();
      })
      .catch((error) => {
        console.error("There was an error updating the book!", error);
      });
  };

  const handleDeleteBook = (id) => {
    axios
      .delete(`http://localhost:8080/api/books/${id}`)
      .then(() => {
        fetchBooks();
      })
      .catch((error) => {
        console.error("There was an error deleting the book!", error);
      });
  };

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
            <button onClick={() => setEditBook(book)}>Edit</button>
            <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h3>Add New Book</h3>
      <input
        type="text"
        placeholder="Title"
        value={newBook.title}
        onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Author"
        value={newBook.author}
        onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
      />
      <button onClick={handleCreateBook}>Add Book</button>

      {editBook && (
        <div>
          <h3>Edit Book</h3>
          <input
            type="text"
            placeholder="Title"
            value={updateDetails.title}
            onChange={(e) => setUpdateDetails({ ...updateDetails, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Author"
            value={updateDetails.author}
            onChange={(e) => setUpdateDetails({ ...updateDetails, author: e.target.value })}
          />
          <button onClick={() => handleUpdateBook(editBook.id)}>Update Book</button>
        </div>
      )}
    </div>
  );
}

export default BookList;
