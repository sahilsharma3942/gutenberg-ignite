// ListPage component for displaying a list of books based on the selected genre
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Hook to access URL parameters
import usefetch from "../../customHooks/useFetch"; // Custom hook to fetch books
import useInfiniteScroll from "../../customHooks/useInfiniteScroll"; // Custom hook for infinite scrolling
import { debounce } from "lodash"; // Utility for debouncing input
import ListHeader from "../../components/ListHeader/ListHeader"; // Header component for the list page
import BookList from "../../components/BookList/BookList"; // Component for displaying the list of books
import Loader from "../../components/Loader/Loader"; // Loader component for loading state
import "./ListPage.css"; // Styles for ListPage

const ListPage = () => {                
  const { genre } = useParams(); // Extract the genre from URL parameters
  const [page, setPage] = useState(1); // State to track the current page for pagination
  const [inputSearch, setInputSearch] = useState(""); // State for input search value
  const [search, setSearch] = useState(""); // State for search term used in API request
  
  // Fetch books based on genre, current page, and search term
  const { books, loading, lastPage, setLastPage, setBooks } = usefetch(
    genre,
    page,
    search
  );

  // Hook for infinite scroll; detects when to load more books
  const lastBookElementRef = useInfiniteScroll(loading, lastPage, setPage);

  // Debounced function to handle search input changes
  const debouncedSearch = debounce(() => {
    setLastPage(false); // Reset last page state when searching
    setBooks([]); // Clear the current book list
    setPage(1); // Reset to the first page
    setSearch(inputSearch); // Update the search term
  }, 300); // Debounce delay of 300ms

  // Effect to call the debounced search function when inputSearch changes
  useEffect(() => {
    debouncedSearch();
    return () => {
      debouncedSearch.cancel(); // Cleanup on component unmount
    };
  }, [debouncedSearch,inputSearch]);

  return (
    <div className="list-page-container"> {/* Container for the list page */}
      <ListHeader
        genre={genre} // Pass genre to the ListHeader
        inputSearch={inputSearch} // Pass current search input
        setInputSearch={setInputSearch} // Function to update search input
      />
      <BookList books={books} lastBookElementRef={lastBookElementRef} /> {/* Render the list of books */}
      <Loader loading={loading} /> {/* Show loader when loading books */}
    </div>
  );
};

export default ListPage;