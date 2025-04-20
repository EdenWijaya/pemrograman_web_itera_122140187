import React, { useState } from "react";
import BookForm from "../Components/BookForm";
import { useBookContext } from "../Context/BookContext";
import iconBuku from "../assets/icon_buku.png";

const Home = () => {
  const { books } = useBookContext();
  const [filter] = useState("semua");

  const filteredBooks = filter === "semua" ? books : books.filter((b) => b.status === filter);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-6 flex items-center space-x-2">
        <img src={iconBuku} alt="Icon Buku" className="w-10 h-10" />
        <span>Manajemen Buku</span>
      </h2>

      <BookForm />
    </div>
  );
};

export default Home;
