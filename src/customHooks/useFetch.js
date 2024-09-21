// useFetch.js
import { useState, useEffect } from 'react';
import axios from 'axios'; // Axios for making HTTP requests

// Custom hook to fetch books based on genre, page, and optional search term
const useFetch = (genre, page, search) => {
  const [books, setBooks] = useState([]); // State for the list of fetched books
  const [loading, setLoading] = useState(false); // State to indicate loading status
  const [lastPage, setLastPage] = useState(false); // State to determine if there are more pages

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true); // Set loading state to true
      try {
        const response = await axios.get(
          `/.netlify/functions/proxy?topic=${genre}&search=${search}&page=${page}`
        );        
        const { results, next } = response?.data; // Destructure results and next page info
        // console.log(page, response.data); // Log current page and response data
        if (!next) setLastPage(true); // If no next page, set lastPage to true
        setBooks((prev) => [...prev, ...results]); // Append new results to the existing list of books
      } catch (error) {
        console.error(error); // Log any errors during fetching
      } finally {
        setLoading(false); // Reset loading state
      }
    };
    fetchBooks(); // Call the fetchBooks function
  }, [genre, page, search]); // Dependencies for effect

  return { books, loading, lastPage, setLastPage, setBooks }; // Return the fetched data and states
};

export default useFetch;