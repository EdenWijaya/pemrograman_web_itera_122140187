import React, { useState } from "react";
import BookForm from "../Components/BookForm";
import { useBookContext } from "../Context/BookContext";
// import iconBuku from "../assets/icon_buku.png";

const Home = () => {
  const { books } = useBookContext();
  const [filter] = useState("semua");

  const filteredBooks = filter === "semua" ? books : books.filter((b) => b.status === filter);

  return <BookForm />;
};

export default Home;
