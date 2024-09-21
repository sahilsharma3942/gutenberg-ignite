import { BrowserRouter, Route, Routes } from "react-router-dom";
import GenrePage from "./pages/GenrePage/GenrePage";
import ListPage from "./pages/ListPage/ListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GenrePage/>} />  
        <Route path="/:genre" element={<ListPage/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
