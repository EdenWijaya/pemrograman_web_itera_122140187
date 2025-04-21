import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useBookContext } from "../Context/BookContext";
import { v4 as uuidv4 } from "uuid";
import { BookOpenIcon } from "@heroicons/react/24/solid";

const BookForm = ({ initialData = null, onSubmitDone }) => {
  const { addBook, updateBook } = useBookContext();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("miliki");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setAuthor(initialData.author);
      setStatus(initialData.status);
      setImage(initialData.image || null);
      setPreview(initialData.image || null);
    }
  }, [initialData]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) {
      setError("Data wajib diisi.");
      return;
    }

    const bookData = {
      id: initialData?.id || uuidv4(),
      title,
      author,
      status,
      image,
    };

    if (initialData) {
      updateBook(bookData);
    } else {
      addBook(bookData);
    }

    setTitle("");
    setAuthor("");
    setStatus("miliki");
    setImage(null);
    setPreview(null);
    setError("");

    if (onSubmitDone) onSubmitDone();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-xl space-y-5 mt-10">
      <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
        <BookOpenIcon className="w-6 h-6 text-blue-500" />
        <h2>{initialData ? "Edit Buku" : "Manajemen Buku"}</h2>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Judul Buku</label>
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Penulis</label>
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Catatan</label>
        <select
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={status}
          onChange={(e) => setStatus(e.target.valu)}
        >
          <option value="miliki">Dimiliki</option>
          <option value="baca">Sedang Dibaca</option>
          <option value="beli">Ingin Dibeli</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Sampul Buku</label>
        <input
          type="file"
          accept="image/*"
          className="w-full text-sm text-gray-500 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
          onChange={handleImageChange}
        />
        {preview && (
          <img src={preview} alt="Preview" className="mt-3 w-24 h-32 object-cover rounded-lg shadow border" />
        )}
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        {initialData ? "Update Buku" : "Tambah Buku"}
      </button>
    </form>
  );
};

//penambahan PropTypes
BookForm.propTypes = {
  initialData: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    status: PropTypes.string,
    image: PropTypes.string,
  }),
  onSubmitDone: PropTypes.func,
};

export default BookForm;
