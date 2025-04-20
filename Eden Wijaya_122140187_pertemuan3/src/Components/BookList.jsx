import { useBookContext } from "../Context/BookContext";

const BookList = () => {
  const { books } = useBookContext();

  if (books.length === 0) {
    return <p className="mt-4 text-gray-500">Belum ada buku 😢</p>;
  }

  return (
    <div className="space-y-4">
      {books.map((book) => (
        <div key={book.id} className="border rounded p-4 shadow flex gap-4 items-start">
          {book.image && <img src={book.image} alt={book.title} className="w-20 h-28 object-cover rounded" />}

          <div>
            <h3 className="text-lg font-semibold">{book.title}</h3>
            <p className="text-gray-600">Penulis: {book.author}</p>
            <p className="text-sm italic text-blue-700">Catatan: {book.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
