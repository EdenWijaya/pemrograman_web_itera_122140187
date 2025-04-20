import { useState } from "react";
import { useBookContext } from "../Context/BookContext";
import BookFilter from "../Components/BookFilter";

const List = () => {
  const { books } = useBookContext();
  const [filter, setFilter] = useState("semua");

  const filtered = filter === "semua" ? books : books.filter((b) => b.status === filter);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Daftar Buku</h1>
      <BookFilter onFilter={setFilter} />
      <div className="space-y-4 mt-4">
        {filtered.length === 0 ? (
          <p className="text-gray-500">Belum ada buku.</p>
        ) : (
          filtered.map((book) => (
            <div key={book.id} className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-sm text-gray-600">Penulis: {book.author}</p>
              <span className="text-xs text-blue-700 italic">Status: {book.status}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default List;
