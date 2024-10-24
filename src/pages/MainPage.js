import React from 'react';
import BookShelf from '../components/BookShelf';
import { useNavigate } from 'react-router-dom';

function MainPage({ books, onShelfChange }) {
  const shelves = [
    { title: 'Currently Reading', shelf: 'currentlyReading' },
    { title: 'Want to Read', shelf: 'wantToRead' },
    { title: 'Read', shelf: 'read' }
  ];

  const navigate = useNavigate();

  return (
    <div className="main-page">

      <div className="search-button-container">
        <button onClick={() => navigate('/SearchPage')}>Search for Books</button>
      </div>

        {shelves.map((shelf) => (
          <BookShelf
            key={shelf.shelf}
            title={shelf.title}
            books={books.filter((book) => book.shelf === shelf.shelf)}
            onShelfChange={onShelfChange}
        />
        ))}
    </div>
  );
}

export default MainPage;
