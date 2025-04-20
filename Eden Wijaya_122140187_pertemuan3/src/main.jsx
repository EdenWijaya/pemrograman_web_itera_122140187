import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookProvider } from "./Context/BookContext";
import Home from "./Pages/Home";
import Stats from "./Pages/Stats";

function Main() {
  return (
    <BookProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Stats" element={<Stats />} />
        </Routes>
      </BrowserRouter>
    </BookProvider>
  );
}

export default Main;
