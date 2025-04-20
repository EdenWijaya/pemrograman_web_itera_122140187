import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useBookContext } from "../Context/BookContext";
import { v4 as uuidv4 } from "uuid";

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
        setImage(reader.result); // base64
        setPreview(reader.result);
      };
      reader.readAsDataURL(file); // ini yang mengubah ke base64
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author) {
      setError("Judul dan Penulis wajib diisi.");
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

    // Reset form
    setTitle("");
    setAuthor("");
    setStatus("miliki");
    setImage(null);
    setPreview(null);
    setError("");

    if (onSubmitDone) onSubmitDone();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg bg-white shadow-md">
      <div>
        <label className="block mb-1 font-semibold">Judul Buku</label>
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Penulis</label>
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Catatan</label>
        <select className="w-full border p-2 rounded" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="miliki">Dimiliki</option>
          <option value="baca">Sedang Dibaca</option>
          <option value="beli">Ingin Dibeli</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 font-semibold">Sampul Buku</label>
        <input type="file" accept="image/*" className="w-full" onChange={handleImageChange} />
        {preview && <img src={preview} alt="Preview" className="mt-2 w-24 h-32 object-cover rounded" />}
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        {initialData ? "Update Buku" : "Tambah Buku"}
      </button>
    </form>
  );
};

BookForm.propTypes = {
  initialData: PropTypes.object,
  onSubmitDone: PropTypes.func,
};

export default BookForm;
