import React from "react";
import BookForm from "../Components/BookForm";
import BookList from "../Components/BookList";

const Home = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📚 Manajemen Buku</h1>

      {/* Form Tambah Buku */}
      <BookForm />

      {/* List Buku */}
      <div className="mt-8">
        <BookList />
      </div>
    </div>
  );
};

export default Home;
