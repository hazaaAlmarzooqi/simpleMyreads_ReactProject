import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  //Import useNavigate for navigation
import Book from '../components/Book';  //Import the Book component

function SearchBooks({ books, onShelfChange }) {
  const [query, setQuery] = useState('');  //State to store the search query

  const navigate = useNavigate();

  //Filter books based on the search query (search by title or author)
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase()) ||
    book.author.toLowerCase().includes(query.toLowerCase())
  );

  return (
    
    <div className="search-page">

      <div className="button-container">
        <button className="back-button" onClick={() => navigate('/')}>
          Back to Main Page
        </button>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search books by title or author"
        value={query}
        onChange={(e) => setQuery(e.target.value)}  //Update query state
        className="search-input"
      />

      {/* Display filtered books */}
      <div className="books-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Book key={book.id} book={book} onShelfChange={onShelfChange} />
          ))
        ) : (
          <p>No books found</p>  //Display message if no books match the query
        )}
      </div>
    </div>
  );
}

export default SearchBooks;
