import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookProvider } from "./Context/BookContext";
import Home from "./Pages/Home";
// import Stats from "./Pages/Stats";
import "./index.css";
import React from "react";

function Main() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <BookProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/stats" element={<Stats />} /> */}
          </Routes>
        </BookProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default Main;
