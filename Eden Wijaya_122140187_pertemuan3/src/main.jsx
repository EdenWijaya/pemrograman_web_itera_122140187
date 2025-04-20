import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import List from "./Pages/List";
import Layout from "./Pages/Layout";
import { BookProvider } from "./Context/BookContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BookProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/list" element={<List />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BookProvider>
  </React.StrictMode>
);
