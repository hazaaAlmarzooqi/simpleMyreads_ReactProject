import React from 'react';

function Book({ book, onShelfChange }) {
  return (
    <div className="book">
      <img src={book.image} alt={book.title} />
      <div className="book-title">{book.title}</div>
      <div className="book-author">{book.author}</div>
      <div>
        <select
          value={book.shelf}
          onChange={(e) => onShelfChange(book, e.target.value)}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
        </select>
      </div>
    </div>
  );
}

export default Book;
