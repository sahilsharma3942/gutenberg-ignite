// BookList.js
import React from "react";
import "./BookList.css"; // Import the CSS file

// Component to display a list of books
const BookList = ({ books, lastBookElementRef }) => {
  // Function to handle click on a book
  const handleBookClick = (book) => {
    const { formats } = book; // Get formats of the book
    const viewableFormats = [
      formats["text/html"],
      formats["application/pdf"],
      formats["text/plain"],
    ]; // Array of formats that can be viewed
    const availableFormat = viewableFormats.find((format) => format !== undefined); // Check for available format
    if (availableFormat) {
      window.open(availableFormat, "_blank"); // Open the book in a new tab
    } else {
      alert("No viewable version available."); // Alert if no format is available
    }
  };

  return (
    <div className="book-container"> {/* Container for book cards */}
      {books.map((book, index) => (
        <div
          ref={index === books.length - 1 ? lastBookElementRef : null} // Attach ref to the last book card for infinite scroll
          className="book-card" // Style for individual book card
          key={index} // Unique key for each card
          onClick={() => handleBookClick(book)} // Click handler for opening the book
        >
          <img
            className="book-cover" // Cover image for the book
            src={book.formats["image/jpeg"]} // Source for the book cover image
            alt={book.title} // Alt text for accessibility
          />
          <h3 className="book-name">{book.title}</h3> {/* Display book title */}
          <p className="book-author">
            {book.authors.map((author) => author.name).join(", ")} {/* Display authors' names */}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BookList;