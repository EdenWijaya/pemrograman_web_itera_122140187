import { useState } from "react";
import { useBookContext } from "../Context/BookContext";
import BookFilter from "../Components/BookFilter";

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
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateBook(editForm);
    setEditingId(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Daftar Buku</h1>
      <BookFilter onFilter={setFilter} />

      <div className="space-y-4 mt-4">
        {filteredBooks.length === 0 ? (
          <p className="text-gray-500">Belum ada buku</p>
        ) : (
          filteredBooks.map((book) => (
            <div key={book.id} className="bg-white p-4 rounded shadow relative">
              {book.image && <img src={book.image} alt={book.title} className="w-20 h-28 object-cover rounded mb-2" />}

              {editingId === book.id ? (
                <form onSubmit={handleEditSubmit} className="space-y-2">
                  <input
                    name="title"
                    value={editForm.title}
                    onChange={handleEditChange}
                    className="w-full p-2 border rounded"
                    placeholder="Judul Buku"
                  />
                  <input
                    name="author"
                    value={editForm.author}
                    onChange={handleEditChange}
                    className="w-full p-2 border rounded"
                    placeholder="Penulis"
                  />
                  <select
                    name="status"
                    value={editForm.status}
                    onChange={handleEditChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="miliki">Dimiliki</option>
                    <option value="baca">Sedang Dibaca</option>
                    <option value="beli">Ingin Dibeli</option>
                  </select>

                  <div className="flex justify-end gap-2">
                    <button type="button" onClick={() => setEditingId(null)} className="text-gray-500">
                      Batal
                    </button>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
                      Simpan
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <h3 className="text-lg font-semibold">{book.title}</h3>
                  <p className="text-sm text-gray-600">Penulis: {book.author}</p>
                  <span className="text-xs font-bold italic">Catatan: {book.status}</span>
                  <div className="absolute top-2 right-2 space-x-2">
                    <button onClick={() => handleEditClick(book)} className="text-sm text-blue-500 hover:underline">
                      Edit
                    </button>
                    <button onClick={() => deleteBook(book.id)} className="text-sm text-red-500 hover:underline">
                      Hapus
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default List;
