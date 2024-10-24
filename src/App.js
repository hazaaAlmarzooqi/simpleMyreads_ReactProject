import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change Switch to Routes
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import './App.css';

import TheGreatGatsbyCover from './booksimg/TheGreatGatsby.jpg';
import ToKillaMockingbirdCover from './booksimg/ToKillaMockingbird.jpg';
import the1984Cover from './booksimg/1984book.jpg';
import ThePythonBookCover from './booksimg/ThePythonBook.jpg';
import IntroductionToJavaProgramming from './booksimg/IntroductionToJavaProgramming.jpg';

function App() {
  const defaultBooks = [
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      image: TheGreatGatsbyCover,
      shelf: 'currentlyReading',
    },
    {
      id: '2',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      image: ToKillaMockingbirdCover,
      shelf: 'wantToRead',
    },
    {
      id: '3',
      title: '1984',
      author: 'George Orwell',
      image: the1984Cover,
      shelf: 'read',
    },
    {
      id: '4',
      title: 'The Python Book',
      author: 'Imagine Publishing',
      image: ThePythonBookCover,
      shelf: 'read',
    },
    {
      id: '5',
      title: 'Introduction To Java Programming',
      author: 'K. Somasundaram',
      image: IntroductionToJavaProgramming,
      shelf: 'read',
    }
  ];

  // Load books from localStorage if available, otherwise use default books
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem('books');
    return savedBooks ? JSON.parse(savedBooks) : defaultBooks;
  });

  // Save the updated books to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const handleShelfChange = (book, newShelf) => {
    setBooks((prevBooks) =>
      prevBooks.map((b) => (b.id === book.id ? { ...b, shelf: newShelf } : b))
    );
  };

  return (
    <Router>
      <div className="app">
        <Routes> {/* Change Switch to Routes */}
          <Route path="/" element={<MainPage books={books} onShelfChange={handleShelfChange} />} />
          <Route path="/SearchPage" element={<SearchPage books={books} onShelfChange={handleShelfChange} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
