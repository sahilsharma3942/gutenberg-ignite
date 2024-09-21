import { BrowserRouter, Route, Routes } from "react-router-dom";
import GenrePage from "./pages/GenrePage/GenrePage";
import ListPage from "./pages/ListPage/ListPage";
import { useState, useEffect } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWidth);

    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  // Determine if it's a mobile view based on window width
  const isMobile = windowWidth < 670;

  return (
    <BrowserRouter>
      <Routes>
        {/* Pass isMobile prop to both GenrePage and ListPage */}
        <Route path="/" element={<GenrePage isMobile={isMobile} />} />  
        <Route path="/:genre" element={<ListPage isMobile={isMobile} />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
