import { useState } from "react";
import { useBookContext } from "../Context/BookContext";
import BookFilter from "../Components/BookFilter";
import Stats from "./Stats";

const statusLabels = {
  miliki: "Dimiliki",
  baca: "Sedang Dibaca",
  beli: "Ingin Dibeli",
};

const List = () => {
  const { books, deleteBook, updateBook } = useBookContext();
  const [filter, setFilter] = useState("semua");
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const filteredBooks = filter === "semua" ? books : books.filter((b) => b.status === filter);

  const handleEditClick = (book) => {
    setEditingId(book.id);
    setEditForm(book);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateBook(editForm);
    setEditingId(null);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Stats />
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Daftar Buku</h1>
      <BookFilter onFilter={setFilter} />

      {filteredBooks.length === 0 ? (
        <p className="text-gray-500 mt-4">Belum ada buku</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition-all flex flex-col items-center text-center"
            >
              {book.image ? (
                <img src={book.image} alt={book.title} className="w-28 h-40 object-cover rounded mb-3" />
              ) : (
                <div className="w-28 h-40 bg-gray-200 rounded flex items-center justify-center text-sm text-gray-400 mb-3">
                  Tidak ada gambar
                </div>
              )}

              {editingId === book.id ? (
                <form onSubmit={handleEditSubmit} className="w-full space-y-2 text-sm">
                  <input
                    name="title"
                    value={editForm.title}
                    onChange={handleEditChange}
                    className="w-full p-2 border rounded-lg"
                    placeholder="Judul Buku"
                  />
                  <input
                    name="author"
                    value={editForm.author}
                    onChange={handleEditChange}
                    className="w-full p-2 border rounded-lg"
                    placeholder="Penulis"
                  />
                  <select
                    name="status"
                    value={editForm.status}
                    onChange={handleEditChange}
                    className="w-full p-2 border rounded-lg"
                  >
                    <option value="miliki">Dimiliki</option>
                    <option value="baca">Sedang Dibaca</option>
                    <option value="beli">Ingin Dibeli</option>
                  </select>
                  <div className="flex justify-center gap-3 pt-1">
                    <button type="button" onClick={() => setEditingId(null)} className="text-gray-500 hover:underline">
                      Batal
                    </button>
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full">
                      Simpan
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <h3 className="text-lg font-semibold">{book.title}</h3>
                  <p className="text-sm text-gray-600">Penulis: {book.author}</p>
                  <p className="text-xs italic font-medium mt-1">
                    Catatan: {statusLabels[book.status] || "Tidak diketahui"}
                  </p>
                  <div className="flex gap-4 mt-3 text-sm">
                    <button onClick={() => handleEditClick(book)} className="text-blue-600 hover:underline">
                      Edit
                    </button>
                    <button onClick={() => deleteBook(book.id)} className="text-red-600 hover:underline">
                      Hapus
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
