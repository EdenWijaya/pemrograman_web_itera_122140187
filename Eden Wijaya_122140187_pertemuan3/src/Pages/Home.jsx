import React, { useState } from "react";
import BookForm from "../Components/BookForm";
import BookFilter from "../Components/BookFilter";
import { useBookContext } from "../Context/BookContext";

const Home = () => {
  const { books } = useBookContext();
  const [filter, setFilter] = useState("semua");

  const filteredBooks = filter === "semua" ? books : books.filter((b) => b.status === filter);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📚 Manajemen Buku</h1>

      <BookForm />
      {/* <BookFilter onFilter={setFilter} /> */}
    </div>
  );
};

export default Home;
