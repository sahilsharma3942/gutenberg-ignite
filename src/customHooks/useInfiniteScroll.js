// useInfiniteScroll.js
import { useRef } from 'react';

// Custom hook to implement infinite scrolling
const useInfiniteScroll = (loading, lastPage, setPage) => {
  const observer = useRef(); // Create a reference for the observer

  // Ref callback for the last book element in the list
  const lastBookElementRef = (node) => {
    if (loading || lastPage) return; // Do not observe if loading or on last page
    if (observer.current) observer.current.disconnect(); // Disconnect previous observer
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { // Check if the last element is in view
        setPage((prevPage) => prevPage + 1); // Load the next page
      }
    });
    if (node) observer.current.observe(node); // Start observing the node
  };

  return lastBookElementRef; // Return the ref callback
};

export default useInfiniteScroll;