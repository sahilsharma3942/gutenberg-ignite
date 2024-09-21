// ListPage component for displaying a list of books based on the selected genre
import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Hook to access URL parameters
import usefetch from "../../customHooks/useFetch"; // Custom hook to fetch books
import useInfiniteScroll from "../../customHooks/useInfiniteScroll"; // Custom hook for infinite scrolling
import ListHeader from "../../components/ListHeader/ListHeader"; // Header component for the list page
import BookList from "../../components/BookList/BookList"; // Component for displaying the list of books
import Loader from "../../components/Loader/Loader"; // Loader component for loading state
import "./ListPage.css"; // Styles for ListPage

const ListPage = ({ isMobile }) => {
  const { genre } = useParams(); // Extract the genre from URL parameters
  const [page, setPage] = useState(1); // State to track the current page for pagination
  const [inputSearch, setInputSearch] = useState(""); // State for input search value
  const [search, setSearch] = useState(""); // State for search term used in API request
  const [timeoutId, setTimeoutId] = useState(null); // State for the timeout ID
  // Fetch books based on genre, current page, and search term
  const { books, loading, lastPage, setLastPage, setBooks } = usefetch(
    genre,
    page,
    search
  );

  // Hook for infinite scroll; detects when to load more books
  const lastBookElementRef = useInfiniteScroll(loading, lastPage, setPage);

  const debouncedHandleSearch = (value) => {
    setInputSearch(value);
    // Clear existing timeout if any
    if (timeoutId) clearTimeout(timeoutId);

    // Set a new timeout
    const newTimeoutId = setTimeout(() => {
      setLastPage(false); // Reset last page status
      setBooks([]); // Clear books on new search
      setPage(1); // Reset page to 1 on new search
      setSearch(value); // Update search term state
    }, 300); // 300 ms delay

    setTimeoutId(newTimeoutId); // Store the new timeout ID
  };

  return (
    <div
      className={
        isMobile ? "mobile-list-page-container" : "list-page-container"
      }
    >
      {" "}
      {/* Container for the list page */}
      <ListHeader
        genre={genre} // Pass genre to the ListHeader
        inputSearch={inputSearch} // Pass current search input
        setInputSearch={setInputSearch} // Function to update search input
        debouncedHandleSearch={debouncedHandleSearch}
        isMobile={isMobile}
      />
      <BookList
        books={books}
        lastBookElementRef={lastBookElementRef}
        isMobile={isMobile}
      />
      <Loader loading={loading} isMobile={isMobile} />
    </div>
  );
};

export default ListPage;
